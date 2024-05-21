const router = require('express').Router();
const Student = require('../models/StudentForm');
const path = require('path');

let message = '';

// get route
router.get('/', (req, res) => {
    console.log(message)
    res.render(path.join(__dirname, '../views/form'), { message });
})

// Post route
router.post('/', async (req, res) => {
    try{
        if(req.body !== null ){
            // Destruct the req.body object for the form data
            const { firstName, lastName, course, entryScheme, intake, sponsorship, gender, dateOfBirth, residence } = req.body;

            // Check if the student is registered already
            const student = await Student.findOne(
                {firstName, lastName}
            )

            if(!student){
                const newStudent = new Student({
                    firstName, lastName, course, entryScheme, intake, sponsorship, gender, dateOfBirth, residence
                });

                // Save new student to database
                await newStudent.save();
            }else{
                res.json({message: 'stundent already registered..'})
            }
        }else{
            res.json({message: 'empty request error'});
        }
    }catch (err) {
        res.json({message: err});
    }
    message = 'Form has been submitted successfully';
    res.redirect('/');
})

module.exports = router;
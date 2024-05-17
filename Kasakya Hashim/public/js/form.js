function validateForm() {
const form = document.getElementById('studentForm');
const firstname = form.firstname.value.trim();
const lastname = form.lastname.value.trim();
const course = form.course.value;
const entryScheme = form.entryScheme.value;
const intake = form.intake.value;
const sponsorship = form.sponsorship.value;
const gender = form.gender.value;
const dob = new Date(form.dob.value);
const residence = form.residence.value.trim();
const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

// Validate First Name
if (firstname === "" || firstname.length < 3 || firstname.length > 50 || !isNaN(firstname)) {
alert("First Name must be between 3 and 50 characters and cannot contain numbers.");
return false;
}

// Validate Last Name
if (lastname === "" || lastname.length < 3 || lastname.length > 50 || !isNaN(lastname)) {
alert("Last Name must be between 3 and 50 characters and cannot contain numbers.");
return false;
}

// Validate Course
if (course === "") {
alert("Please select a Course.");
return false;
}

// Validate Entry Scheme
if (entryScheme === "") {
alert("Please select an Entry Scheme.");
return false;
}

// Validate Intake
if (intake === "") {
alert("Please select an Intake.");
return false;
}

// Validate Sponsorship
if (sponsorship === "") {
alert("Please select a Sponsorship.");
return false;
}

// Validate Gender
if (gender !== "Male" && gender !== "Female") {
alert("Please select a valid Gender.");
return false;
}

// Validate Date of Birth
if (isNaN(dob.getTime())) {
alert("Please enter a valid Date of Birth.");
return false;
}
if (dob >= today) {
alert("Date of Birth cannot be today or in the future.");
return false;
}
if (dob > eighteenYearsAgo) {
alert("You must be at least 18 years old.");
return false;
}

// Validate Residence
if (residence === "" || residence.length < 2 || residence.length > 255) {
alert("Residence must be between 2 and 255 characters.");
return false;
}

// Additional validation can be added here

return true;
}
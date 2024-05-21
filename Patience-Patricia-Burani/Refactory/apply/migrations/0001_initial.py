# Generated by Django 5.0.6 on 2024-05-17 09:16

import apply.models
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=50, null=True, validators=[django.core.validators.MinLengthValidator(3), apply.models.validate_letters])),
                ('last_name', models.CharField(blank=True, max_length=50, null=True, validators=[django.core.validators.MinLengthValidator(3), apply.models.validate_letters])),
                ('course', models.CharField(blank=True, choices=[('Certificate in Health Science', 'Cerficate in Health Science'), ('Certificate in Applied Technology', 'Cerficate in Applied Technology'), ('Bachelors of Information Technology', 'Bachelors in Information Technology'), ('Bachelors in Business Technology', 'Bachelors in Business Technology'), ('Master of Public Health', 'Master of Public Health')], max_length=80, null=True)),
                ('entry_scheme', models.CharField(blank=True, choices=[('A-Level certificate', 'A-Level certificate'), ('Adult/Mature Learning', 'Adult/Mature Learning'), ('Certificate', 'Certificate'), ('Diploma', 'Diploma'), ('Bachelors', 'Bachelors')], max_length=80, null=True)),
                ('intake', models.CharField(blank=True, choices=[('January Intake', 'January Intake'), ('May Intake', 'May Intake'), ('August Intake', 'August Intake')], max_length=80, null=True)),
                ('sponsorship', models.CharField(blank=True, choices=[('Private', 'Private'), ('Government', 'Government'), ('Bursary', 'Bursary')], max_length=80, null=True)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=6)),
                ('birth_date', models.DateField()),
                ('residence', models.CharField(blank=True, max_length=255, null=True, validators=[django.core.validators.MinLengthValidator(3), apply.models.validate_letters])),
            ],
        ),
    ]

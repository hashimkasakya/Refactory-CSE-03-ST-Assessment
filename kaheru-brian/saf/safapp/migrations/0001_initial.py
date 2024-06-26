# Generated by Django 5.0.4 on 2024-05-17 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student_application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('course', models.CharField(max_length=100)),
                ('entry_scheme', models.CharField(max_length=100)),
                ('intake', models.CharField(max_length=255)),
                ('sponsorship', models.CharField(max_length=50)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=15)),
                ('date_of_birth', models.DateField()),
                ('residence', models.CharField(max_length=100)),
            ],
        ),
    ]

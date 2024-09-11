# Generated by Django 5.1 on 2024-09-11 15:59

import apps.utils.validators
import cloudinary.models
import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('is_available', models.BooleanField(db_index=True, default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=15, validators=[apps.utils.validators.validate_phone])),
                ('notes', models.TextField()),
                ('references', cloudinary.models.CloudinaryField(blank=True, help_text='Upload images or references.', max_length=255)),
                ('estimated_budget', models.DecimalField(blank=True, decimal_places=2, help_text='Enter the estimated budget for the tattoo', max_digits=10, null=True)),
                ('tattoo_placement', models.CharField(choices=[('arm', 'Arm'), ('leg', 'Leg'), ('back', 'Back'), ('chest', 'Chest'), ('abdomen', 'Abdomen'), ('side', 'Side'), ('foot', 'Foot'), ('hand', 'Hand'), ('neck', 'Neck'), ('other', 'Other')], help_text='Specify the placement of the tattoo on your body', max_length=20)),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='pending', max_length=10)),
                ('is_first_time', models.BooleanField(default=False, help_text='Is this your first tattoo?')),
                ('is_work_in_progress', models.BooleanField(default=False, help_text='Indicate whether you have a work in progress tattoo')),
                ('artist_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='reservations', to='artists.artist')),
            ],
            options={
                'verbose_name': 'reservation',
                'verbose_name_plural': 'reservations',
                'ordering': ['pk'],
            },
        ),
    ]
from django import forms
from django.core.exceptions import ValidationError
import os

CLASS_CHOICES = [
    ('FY', 'First Year'),
    ('SY', 'Second Year'),
    ('TY', 'Third Year'),
]

def validate_mobile(value):
    if not value.isdigit() or len(value) != 10:
        raise ValidationError("Mobile number must be 10 digits.")

def validate_file_extension(value):
    ext = os.path.splitext(value.name)[1]
    if ext.lower() not in ['.pdf', '.docx']:
        raise ValidationError("Only PDF and DOCX files are allowed.")

def validate_file_size(value):
    if value.size > 2 * 1024 * 1024:
        raise ValidationError("File size must be under 2MB.")

class StudentForm(forms.Form):
    fname = forms.CharField(max_length=50)
    lname = forms.CharField(max_length=50)
    student_class = forms.ChoiceField(choices=CLASS_CHOICES)
    email = forms.EmailField()
    MobNo = forms.CharField(validators=[validate_mobile])
    address = forms.CharField(widget=forms.Textarea)
    resume_file = forms.FileField(
        validators=[validate_file_extension, validate_file_size]
    )
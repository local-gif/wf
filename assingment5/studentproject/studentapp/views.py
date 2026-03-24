from django.shortcuts import render

from django.shortcuts import render
from .forms import StudentForm
from django.conf import settings
from django.core.files.storage import FileSystemStorage

def student_form(request):
    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES)
        if form.is_valid():
            # Save file
            resume = request.FILES['resume_file']
            fs = FileSystemStorage()
            filename = fs.save(resume.name, resume)
            file_url = fs.url(filename)

            context = {
                'data': form.cleaned_data,
                'file_url': file_url
            }
            return render(request, 'display.html', context)
    else:
        form = StudentForm()

    return render(request, 'student_form.html', {'form': form})

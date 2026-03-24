from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def welcome_view(request):
    context = {
        'message': 'Hello, Welcome to School of Computer Science at NWC'
    }
    return render(request, 'school/welcome.html', context)
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


def login_view(request):
    message = ""

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        # Hardcoded credentials
        if username == "admin" and password == "1234":
            message = "Login Successful!"
        else:
            message = "Invalid Username or Password!"

    return render(request, "login.html", {"message": message})


def success_view(request):
    return render(request, 'success.html')


def logout_view(request):
    logout(request)
    return redirect('login')
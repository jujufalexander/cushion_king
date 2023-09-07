from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to the 'user' URL (or any other URL you want)
            return redirect('user')
        else:
            # Handle invalid credentials, e.g., display an error message
            error_message = 'Invalid credentials'
    else:
        error_message = None

    return render(request, 'registration/login.html', {'error_message': error_message})

def user(request):
    return render(request, 'user.html')
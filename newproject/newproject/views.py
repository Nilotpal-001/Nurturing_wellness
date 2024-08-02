from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from .middlewares import auth, guest

def index(request):
    return render(request, "index.html")

def article(request):
    return render(request, "article.html")


def tools(request):
    return render(request, "tools.html")



def tips(request):
    return render(request, "vitaltips.html")



def forum(request):
    return render(request, "forum.html")

def recipe(request):
    return render(request, "recipes.html")


def profile(request):
    return render(request, "profile.html",{'user': request.user})

@guest
def signup_view(request):
        if request.method=='POST':
            form = UserCreationForm(request.POST)
            if form.is_valid():
                user=form.save()
                login(request,user)
                return redirect('home')
        else:
            initial_d={'username':'','password1':'','password2':'','age':'','height':'','weight':''}
            form= UserCreationForm(initial=initial_d)
                        
        return render(request, 'register.html',{'form':form})
@guest
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        initial_data = {'username': '', 'password': ''}
        form = UserCreationForm(initial=initial_data)
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('home')
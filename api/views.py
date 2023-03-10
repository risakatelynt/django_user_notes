from .serializers import NoteSerializer
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from datetime import datetime
from django.views import View
# Create your views here.

def signup(request):
    context_dict = {}
    return render(request, 'signup.html', context=context_dict)

def login(request):
    context_dict = {}
    return render(request, 'login.html', context=context_dict)

def notes(request):
    context_dict = {}
    return render(request, 'notes.html', context=context_dict)



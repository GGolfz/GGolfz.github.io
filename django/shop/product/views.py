from django.shortcuts import render
from django.http import HttpResponse
from .models import Benz,BMW,Lambo
# Create your views here.
def Home(request):
    return render(request,'product/home.html')
def About(request):
    return render(request,'product/about.html')
def Benzz(request):
    benz =Benz.objects.all()
    context = {'benz':benz}
    return render(request,'product/benz.html',context)
def BMWz(request):
    bmw =BMW.objects.all()
    context = {'bmw':bmw}
    return render(request,'product/bmw.html',context)
def Lamboz(request):
    lam =Lambo.objects.all()
    context = {'lam':lam}
    return render(request,'product/lambo.html',context)
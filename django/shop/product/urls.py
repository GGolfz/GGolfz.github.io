from django.urls import path
from .views import Home, About,Benzz,BMWz,Lamboz
urlpatterns = [
    path('', Home,name='home-page'),
    path('about/',About,name='about-page'),
    path('benz/',Benzz,name='benz-page'),
    path('bmw/',BMWz,name='bmw-page'),
    path('lambo/',Lamboz,name='lambo-page')
]

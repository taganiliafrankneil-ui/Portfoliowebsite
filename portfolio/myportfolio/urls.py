from django.urls import path
from . import views

app_name = 'myportfolio'

urlpatterns = [
    path('', views.home, name='home'),
]
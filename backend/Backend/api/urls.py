from django import views
from django.urls import include, path
from rest_framework import routers  
from .views import PublicViewSet,signup_public, signup_staff, signup_officer, signin_public, signin_staff, signin_officer

from django.contrib import admin


#Defining Router
router=routers.DefaultRouter()
router.register(r'Public',PublicViewSet)

urlpatterns=[
    path('', include(router.urls)),
    path('signup/public/', signup_public, name='signup_public'),
    path('signup/staff/', signup_staff, name='signup_staff'),
    path('signup/officer/', signup_officer, name='signup_officer'),
    
     path('signin/public/', signin_public, name='signin_public'),
    path('signin/staff/', signin_staff, name='signin_staff'),
    path('signin/officer/', signin_officer, name='signin_officer'),
]
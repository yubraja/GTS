from django.urls import include, path
from rest_framework import routers  
from .views import PublicViewSet
from django.contrib import admin
from .views import signup

#Defining Router
router=routers.DefaultRouter()
router.register(r'Public',PublicViewSet)

urlpatterns=[
    path('', include(router.urls)),
     path('signup/', signup, name='signup'),
]
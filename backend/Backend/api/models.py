from django.db import models




# Create your models here.
# models.py


class Public(models.Model):
    citizenship_no= models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    address=models.CharField(max_length=100)
    citizenship_no= models.CharField(max_length=10, unique=True)

    def __str__(self):
       return self. name

from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MaxLengthValidator
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser,PermissionsMixin

# Custom User Manager 
class UserManager(BaseUserManager):
    def create_user(self, role,email,firstName,lastName,longitude,latitude,number,password=None, password2=None):
        """
        Creates and saves a User with the given email, name,  password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            lat = lat,
            long = long,
            citizenship_no=citizenship_no,
            role=role,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        """
        Creates and saves a superuser with the given email,name and password.
        """
        user = self.create_user(
            email,
            password=password,
            name=name,
            
          
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


#Create Custom User
class User(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=200)
    
    
    # citizenship_no = models.CharField(
    #     max_length=20,
    #     validators=[MaxLengthValidator(limit_value=20)]
    # )
    
    citizenship_no = models.CharField(max_length=10, default="")

    lat = models.FloatField(null=True, blank=True)
    long = models.FloatField(null=True, blank=True)
 
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    objects = UserManager()
    
        
    ROLES = (
        ('Citizen', 'Citizen'),
        ('Driver', 'Driver '),
        ('Admin', 'Admin '),
        
    )

    role = models.CharField(max_length=10, choices=ROLES, default='Citizen')
    approved = models.BooleanField(default=False)
# Driver approval status

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name","role"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    def save(self, *args, **kwargs):
# Ensure admin users are always approved if self.role 	'admin':
        self.approved = True
        super().save(*args, **kwargs)



class Event(models.Model):
    title = models.CharField(max_length=200)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
  
   

    def __str__(self):
        return self.title

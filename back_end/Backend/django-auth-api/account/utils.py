from django.core.mail import EmailMessage
from django.conf import settings
import os

class Util:
    @staticmethod
    def send_mail(data):
        email= EmailMessage(
            subject=data['email_subject'],
            body=data['body'],
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[data['to_email']]
        )
        email.send()
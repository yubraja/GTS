#sending a POST request to the correct endpoint (/signup/ ) 

from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PublicSerializer
from rest_framework.viewsets import ModelViewSet


from .models import Public

class PublicViewSet(ModelViewSet):
    queryset = Public.objects.all()
    serializer_class = PublicSerializer

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        # Extract form data from the request
        name = request.data.get('name')
        address = request.data.get('address')
        email = request.data.get('email')
        password = request.data.get('password')
        citizenship_no = request.data.get('citizenshipNo')

        # Create a new user object and save it to the database
        user = Public(name=name, address=address, email=email, password=password, citizenship_no=citizenship_no)
        user.save()

        # Return a JSON response indicating success
        return JsonResponse({'message': 'User created successfully'})
    else:
        return JsonResponse({'message': 'Invalid request'})

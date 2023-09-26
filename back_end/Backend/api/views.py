from rest_framework.parsers import JSONParser
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PublicSerializer
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.hashers import make_password
from rest_framework import status
from .models import Public

class PublicViewSet(ModelViewSet):
    queryset = Public.objects.all()
    serializer_class = PublicSerializer

@api_view(['GET', 'POST'])
def signup_public(request):
    if request.method == 'POST':
        serializer = PublicSerializer(data=request.data)
        if serializer.is_valid():
            password = make_password(serializer.validated_data['password'])
            serializer.save(password=password)
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        serializer = PublicSerializer(data=request.data)
        if serializer.is_valid():
            password = make_password(serializer.validated_data['password'])
            serializer.save(password=password)
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# staff Signup
@api_view(['GET', 'POST'])
def signup_staff(request):
    if request.method == 'POST':
        serializer = PublicSerializer(data=request.data)
        if serializer.is_valid():
            password = make_password(serializer.validated_data['password'])
            serializer.save(password=password)
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        serializer = PublicSerializer(data=request.data)
        if serializer.is_valid():
            password = make_password(serializer.validated_data['password'])
            serializer.save(password=password)
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# officer Signup
@api_view(['GET', 'POST'])
def signup_officer(request):
    if request.method == 'POST':
        serializer = PublicSerializer(data=request.data)
        if serializer.is_valid():
            password = make_password(serializer.validated_data['password'])
            serializer.save(password=password)
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        serializer = PublicSerializer(data=request.data)
        if serializer.is_valid():
            password = make_password(serializer.validated_data['password'])
            serializer.save(password=password)
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Signin Section

@api_view(['POST'])
def signin_public(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, email=email, password=password)
    if user is not None:
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# Staff signin
@api_view(['POST'])
def signin_staff(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, email=email, password=password)
    if user is not None:
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# officer Signin
@api_view(['POST'])
def signin_officer(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, email=email, password=password)
    if user is not None:
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

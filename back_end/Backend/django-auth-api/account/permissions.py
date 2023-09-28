from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        # Check if the user is an admin to allow event creation
        return request.user.is_authenticated and request.user.user_role == 'admin'

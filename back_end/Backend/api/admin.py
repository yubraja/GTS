
from django.contrib import admin
from .models import Public


class PublicAdmin(admin.ModelAdmin):
    list_display = ("name", "address", "email", "citizenship_no")

    def changelist_view(self, request, extra_context=None):
        # Your custom logic here
        # Access request, perform operations, modify context, etc.
        # Example: Retrieve all Public objects
        queryset = Public.objects.all()

        # Example: Filter objects based on some condition
        # queryset = queryset.filter(some_field=some_value)

        # Example: Modify the context with additional data
        extra_context = extra_context or {}
        extra_context['custom_data'] = 'Some custom data'

        # Call the parent changelist_view to render the default changelist page
        return super().changelist_view(request, extra_context=extra_context)


admin.site.register(Public, PublicAdmin)

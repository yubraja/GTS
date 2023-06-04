from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

operations = [
    migrations.CreateModel(
        name='api',
        fields=[
            ('citizenship_no', models.CharField(max_length=10, primary_key=True, unique=True)),
            ('name', models.CharField(max_length=100)),
            ('email', models.EmailField(max_length=100)),
            ('password', models.CharField(max_length=100)),
            ('address', models.CharField(max_length=100)),
        ],
    ),
]

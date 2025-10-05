from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def hello(request):
    return JsonResponse({"message": "Hola desde Django"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/hello/", hello),
]

from django.urls import path, include
from chatbotapp import views

urlpatterns = [
    path('home/', views.get_bot)
]
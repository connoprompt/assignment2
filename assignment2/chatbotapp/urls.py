from django.urls import path, include
from chatbotapp.views import ChatBot

urlpatterns = [
    path('chatbot/', ChatBot.as_view(), name='chatbot')
]
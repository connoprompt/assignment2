from django.shortcuts import render
from django.views import View
from django import forms
import json
import boto3
from pprint import pprint


class ChatForm(forms.Form):
    
    text_box = forms.CharField(widget=forms.Textarea(attrs={"rows": 5, "cols": 20}))
    


# Create your views here.
def home(request):
    return render(request, 'home.html')

def get_bot(request):
    
    template = 'chatbot.html'
    f = ChatForm()
    
    return render(request, template, {'form': f})



from django.shortcuts import render
from django.views import View
from django import forms
import json
import boto3
from pprint import pprint


class ChatForm(forms.Form):

    text_field = forms.CharField(label='', max_length=100)
    text_area = forms.CharField(widget=forms.Textarea(attrs={'rows': '2', 'cols': '20'}))
    


# Create your views here.
def home(request):
    return render(request, 'home.html')

class ChatBot(View):

    def get(self, request):
        
        template = 'chatbot.html'
        form = ChatForm()
    
        return render(request, template, {'form': form})

    def post(self, request):
        lex_client = boto3.client('lex-runtime')
        template = 'chatbot.html'
        response = ''

        if request.method == 'POST':
            
            form = ChatForm(request.POST)
            if form.is_valid():
                text = form.cleaned_data['text_field']
                response = lex_client.post_text(
                    botName='TravelBot',
                    botAlias='$LATEST',
                    userId='ef56a60fe85f0d59fbb82226e2f042c54f7c0e59ed4ebac602af6f8c6cda57f8',
                    inputText=text
                )
                if response['intentName'] == 'BookFlight':
                    
                    form.text_area.clean(response['message'])
                    form.text_field.clean()                    
                    
                    return render(request, template, {'form': form})
                pprint(response)
            
            


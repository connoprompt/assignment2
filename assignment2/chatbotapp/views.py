from django.shortcuts import render
from django.views import View
from django import forms
import boto3
from pprint import pprint


class ChatForm(forms.Form):

    text_area = forms.CharField(widget=forms.Textarea(
        attrs={'rows': '2', 'cols': '20'}), label='What would you like to do today?')


class ChatBot(View):

    def get(self, request):

        template = 'chatbot.html'
        posted_form = ChatForm()

        return render(request, template, {'form': posted_form})

    def post(self, request):
        lex_client = boto3.client('lex-runtime')
        template = 'chatbot.html'
        response = ''

        if request.method == 'POST':

            form = ChatForm(request.POST)
            if form.is_valid():
                text = form.cleaned_data['text_area']
                # Using the text from the form input gather the bots apporiate slots.
                response = lex_client.post_text(
                    botName='TravelBot',
                    botAlias='$LATEST',
                    userId='ef56a60fe85f0d59fbb82226e2f042c54f7c0e59ed4ebac602af6f8c6cda57f8',
                    inputText=text
                )

                # If API response returns a fulfilled dialog state, the form will restart and ask the user what they wish to do otheerwise, slot replies will continue until the conversation is fulfilled. 
                if response['dialogState'] == 'Fulfilled':
                    restart_form = ChatForm()

                    return render(request, template, {'form': restart_form})

                response_form = ChatForm()
                response_form['text_area'].label = response['message']

                return render(request, template, {'form': response_form})
            

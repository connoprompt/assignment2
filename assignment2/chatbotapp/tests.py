from django.test import TestCase

# Create your tests here.
from django.test import Client
from django.urls import reverse


def test_utterance():

    client = Client()

    response = client.post(reverse(viewname='chatbot'), data={'text_area': 'I want to book a flight.'})

    assert response.content['text'] == 'I want to book a flight.'

def test_flight_intent():

    client = Client()

    response = client.post(reverse(viewname='chatbot'), data={'text_area': 'I want to book a flight.'})

    assert response.content['message'] == 'Where are you departing from?'

def test_car_intent():

    client = Client()

    response = client.post(reverse(viewname='chatbot'), data={'text_area': 'I want to book a car.'})

    assert response.content['message'] == 'What is your first name?'

def test_hotel_intent():

    client = Client()

    response = client.post(reverse(viewname='chatbot'), data={'text_area': 'I want to book a hotel room.'})

    assert response.content['message'] == 'What is your first name?'

def test_fulfillment_restart():

    client = Client()

    response = client.post(reverse(viewname='chatbot'), data={'test_area': 'I want to book a flight.'})

    if response.content['message'] == 'Where are you departing from?':

        response = client.post(reverse(viewname='chatbot'), data={'text_area': 'Melbourne'})

        if response.content['message'] == 'What date?':

            response = client.post(reverse(viewname='chatbot'), data={'text_area': '26/04/2023'})

            if response.content['message'] == 'Where is your destination?':

                response = client.post(reverse(viewname='chatbot'), data={'text_area': 'Sydney'})

                if response.content['message'] == 'What date do you plan to return?':

                    response = client.post(reverse(viewname='chatbot'), data={'text_area': '01/05/2023'})

                    if response.content['message'] == 'Are you sure you wish to book this flight?':

                        response = client.post(reverse(viewname='chabot'), data={'text_area': 'Yes'})

                        assert response.content['dialogState'] == 'Fulfilled'


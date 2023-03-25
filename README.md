# assignment2
The working branch of my Django web server that hosts a chatbot app.


1. To run this code, download as a zipped folder. 

2. Extract the folder and open the folder in your preferred IDE. If asked to trust the folder, click trust. 

3. The modules below must be installed for this project to run, if any of these modules interfare with your current python environment please create a virtual environment with the projects root folder as the root. 

- Django
- pytest-django
- boto3

5. Once the modules are installed, in a terminal type 'python manage.py runserver', this will launch the django server. 

6. Once the server is runnning, you may open a browser and navigate to localhost:8000/chatbot

You will see a simple text box asking you what you want to do. 

The following are things the bot can respond to are, booking a flight, booking a car, and booking accomodomation. 

The utterances it recognizes are.

Car booking

I would like to rent a car.
I would like to book a car.
I want to book a car rental.
I want to book a car.

Flight booking

Could you please book me a flight?
Am I able to book a flight?
I want to book a flight
I would like to book a flight.

Accommodation booking

I want to book a hotel room.
I want to book a room.
I would like to book accommodation.
I would like to book a hotel room.

Once the bot goes through the required slots it will restart and ask you if you would like to do something else. 

7. After you are done, in your terminal press Ctrl - C to shutdown the django server. You can then exit the IDE or project. 

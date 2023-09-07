# Cushion Kings Auction Platform

Welcome to the Cushion Kings Auction Platform! This project demonstrates the integration of various key aspects, making it an ideal starting point for developers interested in building their own auction platforms. Here's what you can learn from this project:

## Key Aspects Highlighted

### User Authentication
- Users can log in with provided accounts, showcasing the integration of Django's authentication system.

### Database Integration
- PostgreSQL integration demonstrates the ability to work with a relational database, crucial for managing user data and auction-related information.

### Web3 Integration
- Connecting Metamask and simulating bids with Web3 demonstrates the potential for blockchain integration in an auction platform, allowing users to participate using cryptocurrency.

### Simplicity
- This simple project illustrates the core concepts of integrating blockchain technology into a real-world application.

## Getting Started

Follow these steps to use the application and test the database and Web3 integration:

1. Clone this repository to your local machine.

2. Replace the Django `SECRET_KEY` in your project's `settings.py` with your own secret key. If you don't have one, generate it using Django's built-in tools.

   ```python
   SECRET_KEY = "YOUR-SECRET-KEY-GOES-HERE"

Fill in your database information within your settings.py:

python

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'DATABASE-NAME',  # Replace with your actual database name
        'USER': 'USERNAME',      # Replace with your PostgreSQL username
        'PASSWORD': 'PASSWORD',  # Replace with your PostgreSQL password
        'HOST': 'localhost',     # Set the database host (usually 'localhost')
        'PORT': '5432',          # Set the database port (usually 5432)
    }
}

Run the Django development server using the following command:

bash

python manage.py runserver

Open your web browser and navigate to http://localhost:8000 to access the application.

Usage
Welcome to Cushion Kings

    Visit the Sign-Up tab at the top of the page.
    Use the provided credentials to log in.
    Test out our PostgreSQL database integration.

Web3 Integration

    Click "Let's bid!" to trigger Metamask connection.
    Connect your wallet and trigger the bid.
    Enjoy your item!

Enjoy the Tool

Feel free to explore the Cushion Kings Auction Platform, and don't hesitate to customize and build upon this project for your own auction platform. Happy coding!
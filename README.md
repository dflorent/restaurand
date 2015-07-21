Restaurand
==========

This is a personal application who generates a random list of restaurants simplify
choosing a place to go to eat with friends and co-workers.

@TODO
-----

- Secure credentials
- Use bower for underscore and handlebars

Prerequisites
-------------

- Python
- Virtualenv
- Heroku user account

Tools used
----------

- Python Flask
- Heroku
- Bower
- jQuery
- Handlebars
- Underscore

Start the app
-------------

```
source venv/bin/activate
foreman s -f Procfile.dev
```

You can view the application by navigating to http://127.0.0.1:5000/ in your
browser.

Dependencies
------------

Specify dependencies to Heroku with Pip.

```
pip freeze > requirements.txt
```

Installing dependencies with this following command.

``
pip install -r requirements.txt
```

Deploy to Heroku
----------------

``
git push heroku master
```

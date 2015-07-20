from flask import Flask
app = Flask(__name__)
app.config.from_pyfile('settings.py')

@app.route('/')
def index():
    return 'hi'

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])

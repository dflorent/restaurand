from flask import Flask, render_template, url_for
app = Flask(__name__)
app.config.from_pyfile('settings.py')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])

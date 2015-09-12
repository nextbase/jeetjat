from flask import render_template
from . import client


@client.route('/')
def index():
    return render_template('client/index.html')


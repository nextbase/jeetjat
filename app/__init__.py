from flask import Flask
from config import config


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    from .client import client as client_blueprint
    app.register_blueprint(client_blueprint)

    return app


"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    email=request.json.get("email", None)
    password=request.json.get("password", None)
    if email is None or password is None:
        return jsonify({"msg" : "password and email required"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"msg" : "this email is already taken"}), 400
    
    hashed_password=generate_password_hash(password)
    new_user=User(email=email, password=hashed_password, is_active=True)

    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"msg" : "user created succesfully"}), 201 

@api.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([event.serialize() for event in events]), 200
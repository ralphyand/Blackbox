"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    data = [user.serialize() for user in users]

    return jsonify(data), 200

@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    user = User(name=data.get('name'), lastname=data.get('lastname'), email=data.get('email'), password=data.get('password'))
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "usuario creado"}), 200

@api.route('/login', methods=['POST'])  # Creamos usuario 
def login():
    data = request.json
    print(data)

    user = User.query.filter_by(email=data['email'], password=data['password']).first() # Buscamos coincidencias en la base de datos
    if not user:
        return jsonify({"message": "Email o contraseña incorrectos"}), 401
    access_token = create_access_token(identity=user.id)  # Creamos token con id del usuario

    return jsonify({"token": access_token, "name": user.name}), 200

@api.route('/user', methods=['GET'])
@jwt_required() # Restringimos acceso a la API
def get_user():
    user_id = get_jwt_identity()
    print(f"El id del usuario logueado es: {user_id} ")
    user = User.query.get(user_id)   # Buscamos usuario en la BD
    return jsonify(user.serialize())
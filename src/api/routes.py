"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User ,Course, Teacher, Compras ,Temario, Video,Category
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)




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

@api.route('/course', methods=['GET'])
def get_cursos() :
        cursos = Course.query.all()
        data = []
        for course in cursos:
            data.append(course.serialize()) 
    
        return jsonify(data),200


@api.route('/course/<int:id>', methods=['GET'])
def course_detail(id) :
    course = Course.query.get(id)
    return jsonify(course.serialize()),200



   

@api.route('/user', methods=['GET'])
def get_users() :
        users = User.query.all()
        data = []
        for user in users:
            data.append(user.serialize())

        return jsonify(data),200


@api.route('/teacher', methods=['GET'])
def get_teachers() :
       teachers = Teacher.query.all()
       data = []
       for teacher in teachers:
           data.append(teacher.serialize())

       return jsonify(data),200



@api.route('/temario', methods=['GET'])
def get_temarios() :
        temarios = Temario.query.all()
        data = []
        for temario in temarios:
            data.append(temario.serialize())

        return jsonify(data),200


@api.route('/video', methods=['GET'])
def get_videos() :
        videos = Video.query.all()
        data = []
        for video in videos:
            data.append(video.serialize())

        return jsonify(data),200

@api.route('/category', methods=['GET'])
def get_categorias() :
        categorias = Category.query.all()
        data = []
        for category in categorias:
            data.append(category.serialize())

        return jsonify(data),200


@api.route('/compra', methods=['GET'])
def get_comprados() :
        comprados = Compras.query.all()
        data = []
        for compras in comprados:
            data.append(compras.serialize())

        return jsonify(data),200
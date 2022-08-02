"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User ,Course, Teacher, Compras ,Temario, Video,Category
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/course', methods=['GET'])
def get_cursos() :
        cursos = Course.query.all()
        data = []
        for course in cursos:
            data.append(course.serialize()) 
    
        return jsonify(data),200
   

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
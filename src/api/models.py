from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()
#tabla de usuarios 
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120),  nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    is_admin = db.Column(db.Boolean,default=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "is_admin": self.is_admin

        }
  
#tabla de cursos 
class Category(db.Model): 
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(120), unique=True, nullable=False) 
    

     def __repr__(self):
        return f'<Category {self.name}>'

     def serialize(self):
        return {
            "id": self.id,
            "name": self.name,  
        }

#tabla para definir cuantas compras se han realizado 

class Teacher(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False) 
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<Teacher {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,   
        }
class Temario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(250), nullable=False)


    def __repr__(self):
        return f'<Temario {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,   
        }


class Video(db.Model):   
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(250), nullable=False)
    temario_id = db.Column(db.Integer, db.ForeignKey('temario.id'),nullable=False)
    temario = db.relationship('Temario', backref='video', lazy=True,cascade = "all,delete")

    def __repr__(self):
        return f'<Video {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,   
        }


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(250), nullable=False)
    imagen = db.Column(db.String(250))
    time = db.Column(db.String(250))
    price = db.Column(db.Float)
    codigodepago_id = db.Column(db.String(120))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'),nullable=False)
    teacher = db.relationship('Teacher', backref='course', lazy=True,cascade = "all,delete")
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'),nullable=False)
    category = db.relationship('Category', backref='course', lazy=True,cascade = "all,delete")
    temario_id = db.Column(db.Integer, db.ForeignKey('temario.id'),nullable=False)
    temario = db.relationship('Temario', backref='course', lazy=True,cascade = "all,delete")
   
    def __repr__(self):
        return f'<Course {self.name}>'


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "imagen" : self.imagen,
            "time" : self.time,
            "description" : self.description,
            "price" : self.price,
            "teacher" : self.teacher.serialize()
        }





class Compras(db.Model):   
    id = db.Column(db.Integer, primary_key=True) 
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'),nullable=False)
    course = db.relationship('Course', backref='compras', lazy=True,cascade = "all,delete")
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    user = db.relationship('User', backref='compras', lazy=True,cascade = "all,delete")
    price = db.Column(db.Float)
    date = db.Column(db.DateTime,default=datetime.datetime.utcnow)
    

    def __repr__(self):
        return f'<Compras {self.id}>'

    
    def serialize(self):
        return {
            "id": self.id,
    
            "date" : self.date,
        }

from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import Date
from .order import Order
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  fname = db.Column(db.String(40), nullable = False)
  lname = db.Column(db.String(40))
  email = db.Column(db.String(40), nullable = False)
  cc_card_number = db.Column(db.Numeric)
  cc_expiration_date = db.Date
  address = db.Column(db.String(255))
  zip_code = db.Column(db.Integer)
  state = db.Column(db.String(15))
  hashed_password = db.Column(db.String(255), nullable = False)
  # Added columns to users table

  orders = db.relationship("Order", back_populates="users")
  # Added products to joins table with users

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "fname": self.fname,
      "lname": self.lname,
      "email": self.email,
      "cc_card_number": self.cc_card_number,
      "cc_expiration_date": self.cc_expiration_date,
      "address": self.address,
      "zip_code": self.zip_code,
      "state": self.state,
    }
  # added returns to the to_dict

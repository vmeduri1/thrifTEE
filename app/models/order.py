from .db import db

class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    status = db.Column(db.String(100))
    total = db.Column(db.Integer)
    # created orders table

    products = db.relationship("Product", back_populates="orders")
    users = db.relationship("User", back_populates="orders")

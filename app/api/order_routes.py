from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Order

user_routes = Blueprint('orders', __name__)


@order_routes.route('/', methods=['POST'])
def createOrder():
    return {"users": [user.to_dict() for user in users]}


# @order_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()

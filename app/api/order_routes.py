from app.api.products_routes import products
from flask import Blueprint, jsonify, request
import json
from flask_login import login_required, current_user
import os
from app.models import  db, Order, Product, User



order_routes = Blueprint('orders', __name__, url_prefix = '/api/orders')


@order_routes.route('/', methods=['POST'])
def create_order():
    data = request.get_json()
    print('+++++DATA orderapi', data)

    productObj= [p['id'] for p in data["products"]]
    print('_____productObj, productObj')
    products = Product.query.filter(Product.id.in_(productObj)).all()
    print('________products', products)
    totalCost = sum([p['regular_price'] for p in data['products']])
    print('_______totalcost', totalCost)
    # db.session.flush()

    order = Order(user_id=data['user_id'] ,product_id=1, total=totalCost)
    print('____________order', order)

    db.session.add(order)
    print('____________order', order)

    db.session.commit()
    print("+++++orderID", order.id)



    print('____________order', order)

    print('_________userID', order.user_id)
    print('____________productId', order.product_id)

    # for p in products:
    #     order.products.append(p)
    #     db.session.add(p)




    # return order.to_dict()
    return data





@order_routes.route("/")
def getOrders():
    userId = current_user.id
    orders=[]
    for order in current_user.orders:
        orders.append(Order.query.get(order.user_id).to_dict())
    return jsonify(orders)

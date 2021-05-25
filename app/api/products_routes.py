from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product, Category

product_routes = Blueprint('products', __name__, url_prefix = '/api/products')


@product_routes.route('/')
def products():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}


@product_routes.route('/<int:id>')
def product(id):
    product = Product.query.get(id)
    return product.to_dict()


# @product_routes.route('/categories/<int:id>')
@product_routes.route('/categories')
def categoryProducts():
    # products = Product.query.join(Category).get(id)
    categories = Category.query.all()
    # return {"products": [product.to_dict() for product in products]}
    return categories.to_dict()

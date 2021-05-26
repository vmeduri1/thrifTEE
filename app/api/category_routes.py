from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product, Category

category_routes = Blueprint('categories', __name__, url_prefix = '/api/categories')

#/api/categories/
@category_routes.route('')
def categories():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}


@category_routes.route('/<int:id>')
def category(id):
    category = Category.query.get(id)
    return category.to_dict()


# # @product_routes.route('/categories/<int:id>')
# @product_routes.route('/categories')
# def categoryProducts():
#     # products = Product.query.join(Category).get(id)
#     categories = Category.query.all()
#     # return {"products": [product.to_dict() for product in products]}
#     return categories.to_dict()

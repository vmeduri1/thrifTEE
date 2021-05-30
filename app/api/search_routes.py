from flask import Blueprint
from app.models import db, Product

search_routes = Blueprint('search', __name__, url_prefix='/api/search')


# to test out route use 5000


@search_routes.route('/<string:query>')
def get_results(query):
    results = Product.query.filter(
        Product.name.ilike(f"%{query}%")).all()

    return {product.id: product.to_dict() for product in results}

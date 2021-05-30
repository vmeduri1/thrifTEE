from flask import Blueprint
from app.models import db, Product

search_routes = Blueprint('search', __name__, url_prefix='/api/search')


@search_routes.route('/<string:query>')
def search(query):

    results = Post.query.filter(
        Post.title.ilike(f"%{query}%")
    ).all()

    return {post.id: post.to_dict() for post in results}

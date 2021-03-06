from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))

    products = db.relationship("Product", back_populates="categories")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "products": [products.to_dict() for products in self.products]
        }

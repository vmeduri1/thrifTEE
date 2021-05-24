from .db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.String(255))
    name = db.Column(db.String(255))
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    image_url = db.Column(db.String(255))
    description = db.Column(db.String(255))
    regular_price = db.Column(db.Numeric, nullable=False)
    #created products table

    orders = db.relationship("Order", back_populates="products")
    categories = db.relationship("Category", back_populates="products")

    def to_dict(self):
        return {
            "id": self.id,
            "sku": self.sku,
            "name": self.name,
            "categories": self.category_id,
            "image_url": self.image_url,
            "description": self.description,
            "regular_price": self.regular_price
        }

from .db import db


wishlistsTable = db.Table(
    "wishlists",
    db.Model.metadata,
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "product_id",
        db.Integer,
        db.ForeignKey("products.id"),
        primary_key=True
    )
)


class Wishlists(db.Model):
    __tablename__ = 'wish'

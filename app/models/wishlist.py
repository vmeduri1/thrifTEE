from .db import db


wishlists = db.Table(
    "wishlist",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "product_id",
        db.Column(
            db.Integer,
            db.ForeignKey("products.id"),
            primary_key=True
        )
    )
)

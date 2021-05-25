from app.models import db, wishlistsTable


def seed_wishlists():

    wishlist1 = wishlistsTable(
        product_id=3,
        # product_id=4,
        # product_id=8,
        user_id=1
    )

    db.session.add(wishlist1)

    wishlist2 = wishlistsTable(
        product_id=4,
        # product_id=9,
        user_id=1
    )

    db.session.add(wishlist2)

    wishlist3 = wishlistsTable(
        product_id=8,
        user_id=1
    )

    db.session.add(wishlist3)


db.session.commit()


def undo_wishlists():
    db.session.execute('TRUNCATE wishlistsTable RESTART IDENTITY CASCADE;')
    db.session.commit()

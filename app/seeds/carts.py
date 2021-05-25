from app.models import db, Order


def seed_carts():
    cart1 = Order(user_id=1, product_id=1)
    cart2 = Order(user_id=1, product_id=3)
    cart3 = Order(user_id=1, product_id=5)

    db.session.add(cart1)
    db.session.add(cart2)
    db.session.add(cart3)

    db.session.commit()


def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()
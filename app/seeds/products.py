from app.models import db, Product

def seed_products():

    product1 = Product('SS4MCOS', 'Striped socks', 4, 'https://cdnd.lystit.com/photos/2012/04/16/paul-smith-multi-striped-socks-product-1-3276627-727547536.jpeg', 'socks, woolen', 8.00)

    db.session.add(product1)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

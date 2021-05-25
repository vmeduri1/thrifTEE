from app.models import db, Product

def seed_products():

    product1 = Product(sku='SS4MCOS', name='Striped socks', category_id=4, image_url='https://cdnd.lystit.com/photos/2012/04/16/paul-smith-multi-striped-socks-product-1-3276627-727547536.jpeg', description='socks, woolen', regular_price=8.00)

    db.session.add(product1)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

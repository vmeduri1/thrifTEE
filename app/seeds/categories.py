from app.models import db, Category

def seed_categories():

    tops = Category(name="Tops")

    bottoms = Category(name="Bottoms")

    shoes = Category(name="Shoes")

    accessories = Category(name="Accessories")


    db.session.add(tops)
    db.session.add(bottoms)
    db.session.add(shoes)
    db.session.add(accessories)
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()

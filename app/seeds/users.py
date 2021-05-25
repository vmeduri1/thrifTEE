from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(fname="Demo", lname="Demos",
                email='demo@aa.io',
                hashed_password='password')

    db.session.add(demo)

    demo2 = User(fname="John", lname="Smith",
                 email='JohnSmith@gmail.com',
                 hashed_password='JohnSmith1')

    db.session.add(demo2)

    demo3 = User(fname="Jane", lname="Smith",
                 email='JaneSmith@yahoo.com',
                 hashed_password='Janesmith7')

    db.session.add(demo3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

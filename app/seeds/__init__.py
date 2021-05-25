from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .categories import seed_categories, undo_categories
# from .wishlists import seed_wishlists, undo_wishlists
# from .wishlists import wishlistsTable


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_categories()
    seed_users()
    seed_products()
    # seed_wishlists()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_categories()
    # undo_wishlists()

    # Add other undo functions here

# Welcome to thrifTEE!
[Prerequisites](#prerequisites) | [Technologies](#technologies) | [Key Features](#key-features) | [Future Implementations](#fguture) | [Contributors](#contributors)

### Live Link: [thrifTEE](https://thriftee.herokuapp.com/)
*thrifTEE* is an e-commerce application that rejects throwaway fashion culture and gives beautiful apparel a second lease of life! Inspired by [ThredUp](https://www.thredup.com/), [Everlane](https://www.everlane.com/), and [Sephora](https://www.sephora.com/), users can browser, sort, and buy some of their favorite trending finds without breaking the bank.

#### Home Page
![Gif of final homepage goes here]()

## Prerequisites
Before you begin, ensure that you have met the following requirements:
- Read our [Wiki](https://github.com/vmeduri1/thrifTEE/wiki)
- Check out our [mock up](https://xd.adobe.com/view/227c8a0f-a385-4390-9959-75f885379123-772f/)

## Technologies
#### Frontend
- JavaScript
- React / Redux
- [Chakra-UI](https://chakra-ui.com/)
- CSS
- Font Awesome
- Hosted on Heroku and Cloudinary

#### Backend
- Python
- Flask
- PostgreSQL database
- Alembic
- SQLAlchemy

## Key Features
- User authentication is handled using [Werkzeug's Security Helpers](https://werkzeug.palletsprojects.com/en/1.0.x/utils/#module-werkzeug.security) for password hashing.
- Grants access to features like buying thrifted items to authorized users only.
- Designed around a relational database schema, which allows users to browse, search, and buy items, as well as update their cart with dynamic data and rendering.
- Makes use of AJAX / API Routes to render elements such as updating and removing from the cart asynchronously.
- Includes csrf attack protection and performs front-end and back-end validation on forms.  

## Future Implementations
- Users can upload and sell their own items.
- Allowing users to save their favorite pieces via a wishlist. 

## Contributors
Huge shout out to those that contributed to this project:

- [@vmeduri1](https://github.com/vmeduri1) 🐲
- [@natoh19](https://github.com/natoh19) 👾
- [@Jc-008](https://github.com/Jc-008) 🐉
- [@B-Salinas](https://github.com/B-Salinas) 🌀
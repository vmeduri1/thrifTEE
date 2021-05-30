from app.models import db, Product


def seed_products():

    product1 = Product(
        sku='SS4MCOS',
        name='Striped socks',
        category_id=4,
        image_url='https://cdnd.lystit.com/photos/2012/04/16/paul-smith-multi-striped-socks-product-1-3276627-727547536.jpeg',
        description='Socks, woolen',
        regular_price=8.88
    )

    db.session.add(product1)

    product2 = Product(
        sku='NS4BKOS',
        name='Neon socks',
        category_id=4,
        image_url='https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/592140',
        description='Socks, cotton and fun!',
        regular_price=9.00
    )

    db.session.add(product2)

    product3 = Product(
        sku='PS4MCOS',
        name='Plaid socks',
        category_id=4,
        image_url='https://ae01.alicdn.com/kf/HTB1K.z2NFXXXXXJXXXXq6xXFXXXL/New-Autumn-Winter-Cotton-Dress-Socks-Mens-Crew-Socks-Business-Classic-Plaid-Socks-Fashion-Colorful-Leisure.jpg',
        description='Thick and stylish socks',
        regular_price=8.00
    )

    db.session.add(product3)

    product4 = Product(
        sku='WSG4BROS',
        name='Wayfair sunglasses',
        category_id=4,
        image_url='https://i.pinimg.com/originals/10/35/f4/1035f4ee12a0bb2aef446e0dd6422132.jpg',
        description='Wayfair brown sunglasses',
        regular_price=100.00
    )
    db.session.add(product4)

    product5 = Product(
        sku='ASG4TSOS',
        name='Aviator sunglasses',
        category_id=4,
        image_url='https://cdnc.lystit.com/photos/2012/05/09/persol-brown-plastic-aviator-sunglasses-product-2-3465708-409937962.jpeg',
        description='Aviator tortoise sunglasses',
        regular_price=75.00
    )
    db.session.add(product5)

    product6 = Product(
        sku='WHSG4WOS',
        name='White round sunglasses',
        category_id=4,
        image_url='https://www.topsunglasses.net/wp-content/uploads/2016/11/White-Round-Sunglasses-Pictures.jpg',
        description='White stylish round sunglasses with a flair',
        regular_price=35.00
    )
    db.session.add(product6)

    product7 = Product(
        sku='BB4BKOS',
        name='Black belt',
        category_id=4,
        image_url='https://www.thefashionisto.com/wp-content/uploads/2018/04/Salvatore-Ferragamo-2018-Mens-Switch-Belt-Style-001.jpg',
        description='Sleek black belt for any occasion',
        regular_price=35.00
    )
    db.session.add(product7)

    product8 = Product(
        sku='BRB4BROS',
        name='Brown Belt',
        category_id=4,
        image_url='https://i.etsystatic.com/5712391/r/il/1c329f/668497568/il_794xN.668497568_o38h.jpg',
        description='Simple rustic brown belt for any occasion',
        regular_price=20.00
    )
    db.session.add(product8)

    product9 = Product(
        sku='SSB4MCOS',
        name='Snake skin Belt',
        category_id=4,
        image_url='https://i.pinimg.com/originals/39/17/95/3917954d50ce0d7889dad4b9042e891d.jpg',
        description='Elegant and stylish snake skin belt for that chic look',
        regular_price=40.00
    )
    db.session.add(product9)

    product10 = Product(
        sku='BYB4YOS',
        name='Bright yellow Belt',
        category_id=4,
        image_url='https://i.pinimg.com/originals/d1/25/4d/d1254d703bb6f6a0c28f19f9fce5c620.jpg',
        description='Fashion forward with the utility looking style of a belt',
        regular_price=18.50
    )
    db.session.add(product10)

    product12 = Product(
        sku='TDS1MCS',
        name='Tye dye shirt',
        category_id=1,
        image_url='https://popsickvintage.com/wp-content/uploads/2019/12/hd-776-503x732.jpg',
        description='Funky and hip tie dye shirt',
        regular_price=35.00
    )
    db.session.add(product12)

    product13 = Product(
        sku='AWT1WS',
        name='Aaliyah white tank',
        category_id=1,
        image_url='https://i.pinimg.com/originals/86/79/ac/8679ac737a499982938fbcd3a5b1a5c5.jpg',
        description='Iconic Aaliyah tank top ',
        regular_price=40.00
    )
    db.session.add(product13)

    product51 = Product(
        sku='NC2B32',
        name='Navy Chinos',
        category_id=2,
        image_url='https://i.pinimg.com/originals/d7/78/3c/d7783cd18d05ec9aff5649b2f960024c.jpg',
        description='Clean and sleek navy chinos',
        regular_price=40.00
    )
    db.session.add(product51)

    product52 = Product(
        sku='RDJ2B30',
        name='Raw denim jeans',
        category_id=2,
        image_url='https://i.pinimg.com/originals/cd/06/00/cd0600470c153e36ef37680a63a846a2.jpg',
        description='Raw dark denim jeans for that classic raw denim look',
        regular_price=50.00
    )
    db.session.add(product52)

    product53 = Product(
        sku='CP2GRM',
        name='Cargo pants',
        category_id=2,
        image_url='https://ae01.alicdn.com/kf/HTB1iXc9X.vrK1RjSspcq6zzSXXaM/2019-Fashion-New-Men-s-Cargo-Pants-Cotton-Mens-Joggers-Hip-hop-Streetwear-Trousers-Army-Black.jpg',
        description='Green hip and stylish cargo pants',
        regular_price=30.00
    )
    db.session.add(product53)

    product54 = Product(
        sku='LWSJ2B34',
        name='Light washed skinny jeans',
        category_id=2,
        image_url='https://i.pinimg.com/originals/23/fc/68/23fc689539a450621c20ac03d1301a4e.jpg',
        description='Light wash skinny jeans for every day needs',
        regular_price=35.00
    )
    db.session.add(product54)

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    product81 = Product(
        sku='WS3B7',
        name='Slides',
        category_id=3,
        image_url='https://thefashiontag.com/wp-content/uploads/2015/05/slide-sandals-outfits-11.jpg',
        description='Women slides for all day comfort',
        regular_price=15.00
    )
    db.session.add(product81)

    product82 = Product(
        sku='RB3BK6',
        name='Rainboots',
        category_id=3,
        image_url='https://fasbest.com/wp-content/uploads/2017/04/Rain-Boots-Fashions-Style-26.jpg',
        description='Classy and sturdy rainboots for those wet days out',
        regular_price=75.00
    )
    db.session.add(product82)

    product83 = Product(
        sku='BF3BK4',
        name='Ballet flats',
        category_id=3,
        image_url='https://www.outfittrends.com/wp-content/uploads/2016/05/baleet-lace-up-17.jpg',
        description='Classic and stylish ballet flats',
        regular_price=25.00
    )
    db.session.add(product83)

    product84 = Product(
        sku='PH3PK6',
        name='Platform heels',
        category_id=3,
        image_url='http://ferbena.com/wp-content/uploads/2014/02/coral-velvet-platform-heels.jpg',
        description='Beautiful platform heels to show your style and height',
        regular_price=60.00
    )
    db.session.add(product84)

    product85 = Product(
        sku='WWS3BK6',
        name='Wedge sneakers',
        category_id=3,
        image_url='https://data.whicdn.com/images/71694355/original.jpg',
        description='Comfort of a sneaker with the wedge look',
        regular_price=50.00
    )
    db.session.add(product85)

    product86 = Product(
        sku='WB3B5',
        name='Booties',
        category_id=3,
        image_url='https://www.outfittrends.com/wp-content/uploads/2015/03/c01c9cf18936713dc904312a2b2e7630.jpg',
        description='The everyday booties for a walk around town',
        regular_price=45.00
    )
    db.session.add(product86)

    product87 = Product(
        name='White Socks',
        category_id=4,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622398191/Screen_Shot_2021-05-20_at_5.03.46_PM_ro6ybs.png',
        description="A pair of socks to wear",
        regular_price=10.00
    )
    db.session.add(product87)

    product88 = Product(
        name='Motorcycle Sweatshirt',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622398566/Screen_Shot_2021-05-20_at_5.05.26_PM_hcfmwu.png',
        description='Motorcycle Sweatshirt to ride in or wear on the track',
        regular_price=200.00
    )
    db.session.add(product88)

    product89 = Product(
        name='Pirates Bomber',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622398701/Screen_Shot_2021-05-20_at_5.07.19_PM_dok0c6.png',
        description='Pirates Bomber to wear on the go',
        regular_price=200.00
    )
    db.session.add(product89)

    product90 = Product(
        name='A$AP Rocky Jean Jacket',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622399726/Screen_Shot_2021-05-20_at_10.56.52_PM_bide8q.png',
        description="A$AP Rocky's Jean Jacket",
        regular_price=200.00
    )
    db.session.add(product90)

    product91 = Product(
        name='The Air Crew Tee',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400317/Screen_Shot_2021-05-30_at_1.43.27_PM_lnf8xu.png',
        description='Air crew tee to wear to the beach',
        regular_price=25.00
    )
    db.session.add(product91)

    product92 = Product(
        name='Blue Translucent Top',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400317/Screen_Shot_2021-05-30_at_1.43.01_PM_zomekh.png',
        description='Blue top to wear up and trendy, or down and casual',
        regular_price=130.00
    )
    db.session.add(product92)

    product93 = Product(
        name='I Feel Ghosts',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400316/Screen_Shot_2021-05-30_at_1.43.15_PM_mssrjm.png',
        description='Kids see ghosts sometimes',
        regular_price=240.00
    )
    db.session.add(product93)

    product94 = Product(
        name='James Dean Leather',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400317/Screen_Shot_2021-05-30_at_1.43.42_PM_jdquoy.png',
        description='James Dean classic leather',
        regular_price=180.00
    )
    db.session.add(product94)

    product95 = Product(
        name='Ralph Lauren Polo',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400316/Screen_Shot_2021-05-30_at_1.43.58_PM_wkz4zo.png',
        description='Blue ralph lauren polo',
        regular_price=30.00
    )
    db.session.add(product95)

    product96 = Product(
        name='LA Tee',
        category_id=1,
        image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400316/Screen_Shot_2021-05-30_at_1.44.11_PM_lxyyxa.png',
        description="An la tee that's classic",
        regular_price=25.00
    )
    db.session.add(product96)

    # product97 = Product(
    #     name=''
    # )

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

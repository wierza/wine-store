import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

function getProducts() {
    return [
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17280',
        title:'Pino Cellars Pinot Noir',
        origin: 'Oregon, US',
        color: 'red',
        vintage: 2020,
        varietal: 'Pinot Noir',
        alcohol: 13.5,
        content: 750,
        photo: 'wine1.jpg wine1(1).jpg',
        price: 16.99,
        description: 'The Oregon growing season ended with cool weather. This magnified the fruity aromatics in the grapes destined to become Pino Pinot Noir while keeping the alcohol at a moderate level. Ruby-red color and full of fruit flavor. An elegant wine with hints of strawberry, cherry and pomegranate. Finishes long on the palate, with silky tannins. Pair with grilled salmon, roasted chicken, pasta dishes, game birds and stews.',
                    
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17281',
        title:'Pino Cellars Pinot Gris',
        origin: 'Oregon, US',
        color: 'white',
        vintage: 2015,
        varietal: 'Pinot Gris',
        alcohol: 13.4,
        content: 750,
        photo: 'wine2.jpg wine2(1).jpg',
        price: 10.39,
        description: 'The flavors are juicy and ripe with apple, honeydew melon, and kiwi dominating. The finish is vibrant with crisp acidity lingering on the palate. White fish and shellfish, chicken, creamy pasta, and grilled or roasted vegetables.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17282',
        title: 'Trimbach Frederic Emile Riesling',
        origin: 'Alsace, France',
        color:'white',
        vintage: 2016,
        varietal: 'Riesling',
        alcohol: 13.2,
        content: 750,
        photo: 'wine3.jpg wine3(1).jpg',
        price: 99.99,
        description:'This wine reveals a great aromatic complexity. Citrus, white flowers, and flinty mineral notes. The mouthfeel is ample and rich, while remaining precise balanced by chiseled acidity. This vintage is characterized by its freshness with tension, finesse and minerality. Perfect with oysters, langoustines, lobster, grilled fish or fish in white butter sauce as well as roasted poultry, sweetbreads, dishes with chanterelle mushrooms, potato gratin and vegetables.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17283',
        title: 'Botromagno Primitivo',
        origin: 'Puglia, Italy',
        color: 'red',
        vintage: 2021,
        varietal: 'Primitivo',
        alcohol: 14,
        content: 750,
        photo:'wine4.jpg wine4(1).jpg',
        price: 16.99,
        description: 'Brilliant ruby-red in color, aromas of black cherries and baking spices complement undertones of tobacco and mint. On the palate, this substantial red is smooth and velvety with balanced acidity and a long, pleasant finish. Pair this wine with barbecue, demi-glaces, orange-glazed duck, and slow-braised beef.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17284',
        title: 'Tolaini Picconero Tenuta Montebello',
        origin: 'Tuscany, Italy',
        color: 'red',
        vintage: 2021,
        varietal: 'Merlot',
        alcohol: 14,
        content: 750,
        photo: 'wine5.jpg wine5(1).jpg',
        price: 144.99,
        description: 'Rich, concentrated and muscular, yet wonderfully balanced with big tannins and deep tiers of cherry, plums and wild berries, and nuances of spice, vanilla and licorice. A long flavorful aftertaste echoes with juicy fruit and mouthwatering tannins for minutes afterwards. Sensual and young, this wine promises a long life in the bottle.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17285',
        title:'Cote des Roses Rose',
        origin: 'Languedoc, France',
        color: 'Pink',
        vintage: 2022,
        varietal: 'Blend of Grenache, Syrah, Cinsault',
        alcohol: 13,
        content: 750,
        photo: 'wine6.jpg wine6(1).jpg',
        price: 18.99,
        description: 'The robe shows a soft, pale, brilliant pink with bluish tints developing over time towards more orangey nuances. The bouquet releases aromas of summer fruits, cassis and redcurrant Floral notes of rose along with hints of grapefruit complete the picture. On the palate the impression is fresh and full, with great aromatic persistence and balance The finish is fresh, offering notes of candy. This Languedoc is ideal as an aperitif or with shellfish and subtly spiced dishes.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17286',
        title: 'Antinori Castello della Sala Cervaro',
        origin: 'Umbria, Italy',
        color:'white',
        vintage: 2021,
        varietal: 'Chardonnay',
        alcohol: 12.5,
        content: 750,
        photo: 'wine7.jpg wine7(1).jpg',
        price: 89.99,
        description: 'Cervaro della Sala 2021 is a light straw yellow in color with light green highlights. The nose offers aromas of chamomile, white flower blossoms and flint. The palate is savory, lively, and fresh. A Mediterranean style wine with outstanding aging potential.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17287',
        title: 'Duckhorn Napa Valley Cabernet Sauvignon',
        origin: 'California, US',
        color: 'red',
        vintage: 2020,
        varietal: 'Cabernet Sauvignon',
        alcohol: 14.5,
        content: 375,
        photo: 'wine8.jpg wine8(1).jpg',
        price: 37.99,
        description: 'Crafted from mountain and valley-floor fruit, this voluptuous wine reveals aromas of spiced blackberry, blueberry cobbler, black currant, milk chocolate and licorice. On the palate, lively acidity adds poise and brightness to the blackberry and black raspberry flavors, with rich, chocolaty tannins and notions of black tea adding suppleness and sophistication to a long, luxurious finish.',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17288',
        title:'Masciarelli Montepulciano d-Abruzzo',
        origin: 'Abruzzo, Italy',
        color: 'red',
        vintage: 2021,
        varietal: 'Montepulciano',
        alcohol: 13.5,
        content: 750,
        photo:'wine9.jpg wine9(1).jpg',
        price: 12.99,
        description:'Rich and ripe dark cherry fruit, along with attractive spicy, smoky notes. Fleshy and full, with surprising depth and length. This wine is intended to be consumed in its youth and is a terrific complement to roasted meats, pastas and pizza – the ultimate trattoria wine.',
      },

    ]
}

function getUsers() {
    return [
      {
        id: 'f4c05e45-cd90-473c-bae2-959c977ca811',
        email: 'john.doe@example.com',
        role: Role.USER,
      },
    ];
}

function getPasswords() {
    return [
      {
        user: { connect: { id: 'f4c05e45-cd90-473c-bae2-959c977ca811' } },
        hashedPassword: 'TestTest',
      },
    ]
}

function getCarts() {
    return [
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
        user: { connect: { id: 'f4c05e45-cd90-473c-bae2-959c977ca811' } },
      },
    ]
}

function getCartItems() {
    return [
      {
        quantity: 1,
        cart: { connect: { id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267' } },
        product: { connect: { id: 'fd105551-0f0d-4a9f-bc41-c559c8a17280' } },
        
      },
    ]
  }

function getOrders() {
    return [
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
        date: new Date(),
        totalPrice: 16.99,
        customerName: 'John Doe',
        email: 'john.doe@example.com',
        address: '20 Cooper Square, New York, NY 10003',
        user: { connect: { id: 'f4c05e45-cd90-473c-bae2-959c977ca811' } },
      },
    ]
}
  
function getOrderItems() {
    return [
      {
        quantity: 1,
        price: 16.99,
        order: { connect: { id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264' } },
        product: { connect: { id: 'fd105551-0f0d-4a9f-bc41-c559c8a17280' } },
      },
    ]
}

async function seed() {
    await Promise.all(
      getProducts().map((product) => {
        return db.product.create({ data: product });
      }),
    );
    await Promise.all(
      getUsers().map((user) => {
        return db.user.create({ data: user });
      }),
    );

    await Promise.all(
        getPasswords().map((password) => {
          return db.password.create({ data: password });
        }),
      );
      await Promise.all(
        getCarts().map((cart) => {
          return db.cart.create({ data: cart });
        }),
      );
      await Promise.all(
        getCartItems().map((cartItem) => {
          return db.cartItem.create({ data: cartItem });
        }),
      );
      await Promise.all(
        getOrders().map((order) => {
          return db.order.create({ data: order });
        }),
      );
      await Promise.all(
        getOrderItems().map((orderItem) => {
          return db.orderItem.create({ data: orderItem });
        }),
      );
  }
  
  seed();
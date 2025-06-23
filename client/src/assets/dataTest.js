export const notifications = [
  {
    id: 1,
    message: "Your order has been shipped!",
    buttonName: "Track Order",
    link: "/orders/track"
  },
  {
    id: 2,
    message: "New discount available on your favorite items.",
    buttonName: "Shop Now",
    link: "/deals/today"
  },
  {
    id: 3,
    message: "Your subscription is about to expire.",
    buttonName: "Renew Now",
    link: "/account/renew"
  }
];

export const currencies = 
  [
  {
    "flag": "https://flagcdn.com/us.svg",
    "country": "United States",
    "symbol": "$",
    "currency": "US Dollar"
  },
  {
    "flag": "https://flagcdn.com/gb.svg",
    "country": "United Kingdom",
    "symbol": "£",
    "currency": "British Pound"
  },
  {
    "flag": "https://flagcdn.com/in.svg",
    "country": "India",
    "symbol": "₹",
    "currency": "Indian Rupee"
  },
  {
    "flag": "https://flagcdn.com/jp.svg",
    "country": "Japan",
    "symbol": "¥",
    "currency": "Japanese Yen"
  }
]

export  const pageHeadings = [
  {
    img: "https://img.freepik.com/free-photo/portrait-young-japanese-woman-with-jacket_23-2148870730.jpg?ga=GA1.1.423794361.1750559633&semt=ais_hybrid&w=740",
    h5: "Casual & Cool",
    h1: "Denim Vibes for Summer",
    button: "Shop Now",
    path: "/collections/denim"
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-pretty-woman-sunglasses-hat-blue-colorful-wall_231208-545.jpg?ga=GA1.1.423794361.1750559633&semt=ais_hybrid&w=740",
    h5: "Vibrant & Bold",
    h1: "Stand Out in Color",
    button: "Explore Styles",
    path: "/collections/colorful"
  },
  {
    img: "https://img.freepik.com/premium-photo/woman-wearing-white-shirt-that-says-she-is-posing-photo_444642-11126.jpg?ga=GA1.1.423794361.1750559633&semt=ais_hybrid&w=740",
    h5: "New Season Arrival",
    h1: "Step Into Summer 2025",
    button: "Shop the Collection",
    path: "/collections/summer"
  },

 
];


export const topCollections = [
  {
    name: "T-Shirts",
    image: "https://glozin-demo.myshopify.com/cdn/shop/files/collection_img_1.jpg?v=1716188179&width=360"
  },
  {
    name: "Jackets & Coats",
    image: "https://glozin-demo.myshopify.com/cdn/shop/files/collection_img_2.jpg?v=1716188179&width=360"
  },
  {
    name: "Jeans & Trousers",
    image: "https://glozin-demo.myshopify.com/cdn/shop/files/blazer.jpg?v=1719367400&width=360"
  },
  {
    name: "Dresses",
    image: "https://glozin-demo.myshopify.com/cdn/shop/files/img.jpg?v=1718595623&width=360"
  },
  {
    name: "Shorts",
    image: "https://glozin-demo.myshopify.com/cdn/shop/files/collection_img_5.jpg?v=1716188180&width=360"
  },
 
  {
    name:"Hoodies" , 
    image:"https://glozin-demo.myshopify.com/cdn/shop/files/collection_img_6.jpg?v=1716188179&width=330"
  }
];

export const customerReviews = [
  {
    customerName: "Sarah Ahmed",
    imageOfProfile: "https://glozin-demo.myshopify.com/cdn/shop/files/tes_home2_1.jpg?v=1716188180&width=240",
    isVerified: true,
    rating: 5,
    review: "Discover a collection of timeless wardrobe essentials, seamlessly transitioning from work to weekend. Inspired by travel, our",
    productOfReview: {
      productname: "Classic Denim Jacket",
      productimage: "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_12_2.jpg?v=1715865522&width=60",
      price: 79.99
    }
  },
  {
    customerName: "Mohamed ElSayed",
    imageOfProfile: "https://glozin-demo.myshopify.com/cdn/shop/files/h1-test-3.jpg?v=1716800957&width=240",
    isVerified: false,
    rating: 3,
    review: "Good fabric but the size runs a bit small. Consider ordering one size up.",
    productOfReview: {
      productname: "Slim Fit T-Shirt",
      productimage: "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_17_2.jpg?v=1715866167&width=60",
      price: 29.99
    }
  },
  {
    customerName: "Lina Hossam",
    imageOfProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    isVerified: true,
    rating: 4,
    review: "Very stylish and comfortable. Got lots of compliments!",
    productOfReview: {
      productname: "Floral Summer Dress",
      productimage: "https://img.freepik.com/free-photo/floral-dress-hanger_53876-12345.jpg",
      price: 59.99
    }
  },
  {
    customerName: "Omar Khaled",
    imageOfProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    isVerified: true,
    rating: 5,
    review: "Fast delivery and excellent material. Will order again.",
    productOfReview: {
      productname: "Leather Sneakers",
      productimage: "https://img.freepik.com/free-photo/leather-sneakers-white-background_53876-123421.jpg",
      price: 89.99
    }
  },
  {
    customerName: "Nour Ali",
    imageOfProfile: "https://randomuser.me/api/portraits/women/35.jpg",
    isVerified: false,
    rating: 4,
    review: "Loved the color and texture. A bit pricey but worth it.",
    productOfReview: {
      productname: "Cashmere Scarf",
      productimage: "https://img.freepik.com/free-photo/warm-scarf-isolated_53876-143214.jpg",
      price: 49.99
    }
  },
  {
    customerName: "Youssef Gamal",
    imageOfProfile: "https://randomuser.me/api/portraits/men/36.jpg",
    isVerified: true,
    rating: 2,
    review: "Didn’t match the image online. Disappointed with the fitting.",
    productOfReview: {
      productname: "Formal Pants",
      productimage: "https://img.freepik.com/free-photo/elegant-black-pants-hanger_53876-110213.jpg",
      price: 54.99
    }
  },
  {
    customerName: "Mona Samir",
    imageOfProfile: "https://randomuser.me/api/portraits/women/50.jpg",
    isVerified: true,
    rating: 5,
    review: "Absolutely love it! Perfect for daily wear.",
    productOfReview: {
      productname: "Oversized Hoodie",
      productimage: "https://img.freepik.com/free-photo/oversized-hoodie-hanger_53876-162235.jpg",
      price: 64.99
    }
  },
  {
    customerName: "Karim Nabil",
    imageOfProfile: "https://randomuser.me/api/portraits/men/52.jpg",
    isVerified: false,
    rating: 3,
    review: "Average quality. Expected better for the price.",
    productOfReview: {
      productname: "Basic Polo Shirt",
      productimage: "https://img.freepik.com/free-photo/blue-polo-shirt_53876-104321.jpg",
      price: 34.99
    }
  },
  {
    customerName: "Aya Tarek",
    imageOfProfile: "https://randomuser.me/api/portraits/women/65.jpg",
    isVerified: true,
    rating: 4,
    review: "Very chic and comfy. Great for work and outings.",
    productOfReview: {
      productname: "High-Waist Trousers",
      productimage: "https://img.freepik.com/free-photo/fashionable-trousers-hanger_53876-174234.jpg",
      price: 69.99
    }
  },
  {
    customerName: "Ahmed Mostafa",
    imageOfProfile: "https://randomuser.me/api/portraits/men/8.jpg",
    isVerified: true,
    rating: 5,
    review: "One of the best jackets I’ve owned. Great quality and look.",
    productOfReview: {
      productname: "Bomber Jacket",
      productimage: "https://img.freepik.com/free-photo/bomber-jacket-hanger_53876-176234.jpg",
      price: 99.99
    }
  }
];


export const product = {
  id: "1",
  name: "T-Shirt",
  description: "Comfortable cotton t-shirt",
  price: 25,
  colors: [{ name: "Red", hex: "#FF0000" }],
  sizes: ["S", "M", "L"],
  isOnSale: true,
  discount: 20,
  categories: ["Men", "Casual"],
  tags: ["new", "trending"],
  stock: 150,
  reviews: [],
  finalprice: 20,
  images: [
    {
      color: "grey",
      urls: [
        "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_1.jpg?v=1715851717&width=720",
        "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_2.jpg?v=1715851717&width=720" , 
        "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_3.jpg?v=1715851717&width=720"
      ]
    } , 
    {
      color:"white" , 
      urls:[ "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_4.jpg?v=1715851717&width=720","https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_5.jpg?v=1715851717&width=720" , "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_5.jpg?v=1715851717&width=720"]
    } , 
    {
      color:"black" , 
    urls:[ "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_7.jpg?v=1715851717&width=720" , "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_8.jpg?v=1715851717&width=720"  , "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_9.jpg?v=1715851717&width=720"]
    }

]}

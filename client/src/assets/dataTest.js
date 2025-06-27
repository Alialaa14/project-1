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




export const shopByGram = [
  "https://images.pexels.com/photos/3760859/pexels-photo-3760859.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
 "https://images.pexels.com/photos/1375938/pexels-photo-1375938.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  "https://images.pexels.com/photos/1375938/pexels-photo-1375938.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
     "https://images.pexels.com/photos/3760859/pexels-photo-3760859.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
];


export const socialMedia = [
  {
  "name": "Facebook",
  "svg": <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' fill='#1877F2'><path d='M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.006 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17.006 22 12z'/></svg>
} , 
{
  "name": "Twitter",
  "svg": <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' fill='#000000'><path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 001.84-2.31 8.4 8.4 0 01-2.66 1.02 4.2 4.2 0 00-7.1 3.82A11.93 11.93 0 013 4.85a4.2 4.2 0 001.3 5.6 4.18 4.18 0 01-1.9-.52v.05a4.2 4.2 0 003.36 4.12 4.22 4.22 0 01-1.89.07 4.2 4.2 0 003.92 2.91A8.44 8.44 0 012 19.54 11.88 11.88 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.37 8.37 0 0022.46 6z'/></svg>
}
 , 
 {
  "name": "Instagram",
  "svg": <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' fill='#E1306C'><path d='M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 11-2.25 0 1.13 1.13 0 012.25 0z'/></svg>
}
 , 

{
  "name": "LinkedIn",
  "svg": <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' fill='#0077B5'><path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.8-2.2 4.07 0 4.82 2.7 4.82 6.2V24h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z'/></svg>
} , 
{
  "name": "YouTube",
  "svg": <svg xmlns='http://www.w3.org/2000/svg' height={20} width={20} viewBox='0 0 24 24' fill='#FF0000'><path d='M19.6 3H4.4A1.4 1.4 0 003 4.4v15.2A1.4 1.4 0 004.4 21h15.2a1.4 1.4 0 001.4-1.4V4.4A1.4 1.4 0 0019.6 3zM10 15.5v-7l6 3.5-6 3.5z'/></svg>
}


]


export const product  = 
  {
    id: 1,
    productname: "Classic White T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    images: [
      { color: "Grey", urls: ["https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_1.jpg?v=1715851717&width=330", "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_2.jpg?v=1715851717&width=1200" , "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_3.jpg?v=1715851717&width=720" , "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_7_4.jpg?v=1715851717&width=720"] },
      { color: "azure", urls: ["https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_8_2.jpg?v=1715851894&width=330", "https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_8_1.jpg?v=1715851894&width=330","https://glozin-demo.myshopify.com/cdn/shop/files/fashion_products_8_3.jpg?v=1715851894&width=720"] }
    ],
    price: 25,
    discount: 20,
    finalPrice: 20,
    describition: "A premium cotton T-shirt for everyday comfort.",
    category: "Tops",
    rating: 4.5,
    limtedStock: true ,
    views:20 , 
    reviews:10
  
  }


export const products = [
  // Wooden Crafts
  {
    id: 1,
    name: "Handcrafted Wooden Bowl Set",
    price: 89.99,
    category: "wooden",
    description: "Beautiful set of 3 handcrafted wooden bowls made from sustainable oak wood. Perfect for serving salads, fruits, or decorative purposes.",
    features: ["Sustainable oak wood", "Food-safe finish", "Set of 3 bowls", "Handcrafted"],
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Rustic Wooden Picture Frame",
    price: 34.99,
    category: "wooden",
    description: "Rustic wooden picture frame with natural wood grain. Handcrafted from reclaimed barn wood for a vintage aesthetic.",
    features: ["Reclaimed barn wood", "8x10 inch opening", "Vintage aesthetic", "Wall mounting hardware included"],
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Artisan Wooden Cutting Board",
    price: 67.50,
    category: "wooden",
    description: "Premium hardwood cutting board with beautiful grain patterns. Features juice groove and non-slip feet.",
    features: ["Premium hardwood", "Juice groove", "Non-slip feet", "Food-safe finish"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "Handmade Wooden Jewelry Box",
    price: 125.00,
    category: "wooden",
    description: "Elegant wooden jewelry box with velvet-lined compartments. Features intricate carved details and brass hardware.",
    features: ["Velvet-lined compartments", "Carved details", "Brass hardware", "Multiple storage sections"],
    inStock: false,
    rating: 4.7,
    reviews: 73
  },

  // Pottery
  {
    id: 5,
    name: "Ceramic Dinner Plate Set",
    price: 78.99,
    category: "pottery",
    description: "Handthrown ceramic dinner plates with beautiful glazed finish. Set of 4 plates perfect for everyday dining.",
    features: ["Handthrown ceramic", "Glazed finish", "Set of 4 plates", "Dishwasher safe"],
    inStock: true,
    rating: 4.5,
    reviews: 98
  },
  {
    id: 6,
    name: "Artisan Coffee Mug Collection",
    price: 45.00,
    category: "pottery",
    description: "Collection of 2 unique handcrafted coffee mugs with artistic glazes. Each mug is one-of-a-kind.",
    features: ["Handcrafted ceramic", "Artistic glazes", "Set of 2 mugs", "Microwave safe"],
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 7,
    name: "Decorative Ceramic Vase",
    price: 92.50,
    category: "pottery",
    description: "Large decorative ceramic vase with hand-painted floral motifs. Perfect centerpiece for any room.",
    features: ["Hand-painted design", "Large size", "Floral motifs", "Waterproof"],
    inStock: true,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 8,
    name: "Pottery Serving Bowl",
    price: 56.00,
    category: "pottery",
    description: "Large serving bowl perfect for salads, pasta, or fruit. Features beautiful earth-tone glaze.",
    features: ["Large capacity", "Earth-tone glaze", "Food safe", "Easy to clean"],
    inStock: true,
    rating: 4.7,
    reviews: 91
  },

  // Jewelry
  {
    id: 9,
    name: "Sterling Silver Pendant Necklace",
    price: 156.00,
    category: "jewelry",
    description: "Elegant sterling silver pendant necklace with intricate Celtic knot design. Comes with adjustable chain.",
    features: ["Sterling silver", "Celtic knot design", "Adjustable chain", "Gift box included"],
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 10,
    name: "Handwoven Beaded Bracelet",
    price: 28.50,
    category: "jewelry",
    description: "Beautiful handwoven bracelet with natural stone beads and silver accents. Adjustable size.",
    features: ["Natural stone beads", "Silver accents", "Adjustable size", "Handwoven"],
    inStock: true,
    rating: 4.4,
    reviews: 76
  },
  {
    id: 11,
    name: "Copper Wire Wrapped Earrings",
    price: 42.00,
    category: "jewelry",
    description: "Unique copper wire wrapped earrings with semi-precious stones. Lightweight and comfortable.",
    features: ["Copper wire", "Semi-precious stones", "Lightweight", "Hypoallergenic"],
    inStock: false,
    rating: 4.6,
    reviews: 54
  },
  {
    id: 12,
    name: "Artisan Silver Ring Set",
    price: 89.99,
    category: "jewelry",
    description: "Set of 3 stackable silver rings with different textures and finishes. Perfect for mixing and matching.",
    features: ["Set of 3 rings", "Stackable design", "Different textures", "925 silver"],
    inStock: true,
    rating: 4.8,
    reviews: 118
  }
];

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.rating >= 4.7).slice(0, 6);
};

export const categories = [
  {
    id: 'wooden',
    name: 'Wooden Crafts',
    description: 'Handcrafted wooden items made from sustainable materials',
    count: products.filter(p => p.category === 'wooden').length
  },
  {
    id: 'pottery',
    name: 'Pottery',
    description: 'Beautiful ceramic pieces crafted by skilled artisans',
    count: products.filter(p => p.category === 'pottery').length
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    description: 'Unique handmade jewelry pieces with precious materials',
    count: products.filter(p => p.category === 'jewelry').length
  }
];
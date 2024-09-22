export const dummyTables = [
  "users",
  "orders",
  "products",
  "categories",
  "suppliers",
];

export const dummyTableData = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "456 Elm St, Otherville, USA",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.j@example.com",
      address: "789 Oak Rd, Somewhere, USA",
    },
    {
      id: 4,
      name: "Bob Williams",
      email: "bob.w@example.com",
      address: "101 Pine Ave, Nowhere, USA",
    },
    {
      id: 5,
      name: "Carol Brown",
      email: "carol.b@example.com",
      address: "202 Maple Dr, Anywhere, USA",
    },
    {
      id: 6,
      name: "David Lee",
      email: "david.l@example.com",
      address: "303 Cedar Ln, Everywhere, USA",
    },
    {
      id: 7,
      name: "Eva Garcia",
      email: "eva.g@example.com",
      address: "404 Birch Blvd, Sometime, USA",
    },
    {
      id: 8,
      name: "Frank Chen",
      email: "frank.c@example.com",
      address: "505 Walnut St, Somehow, USA",
    },
    {
      id: 9,
      name: "Grace Kim",
      email: "grace.k@example.com",
      address: "606 Spruce Ct, Whatever, USA",
    },
    {
      id: 10,
      name: "Henry Nguyen",
      email: "henry.n@example.com",
      address: "707 Ash Rd, Whenever, USA",
    },
  ],
  orders: [
    {
      id: 101,
      userId: 1,
      productId: "A1",
      quantity: 2,
      orderDate: "2023-05-01",
      status: "Delivered",
    },
    {
      id: 102,
      userId: 2,
      productId: "B2",
      quantity: 1,
      orderDate: "2023-05-02",
      status: "Shipped",
    },
    {
      id: 103,
      userId: 3,
      productId: "C3",
      quantity: 3,
      orderDate: "2023-05-03",
      status: "Processing",
    },
    {
      id: 104,
      userId: 4,
      productId: "D4",
      quantity: 1,
      orderDate: "2023-05-04",
      status: "Pending",
    },
    {
      id: 105,
      userId: 5,
      productId: "E5",
      quantity: 2,
      orderDate: "2023-05-05",
      status: "Delivered",
    },
    {
      id: 106,
      userId: 6,
      productId: "A1",
      quantity: 1,
      orderDate: "2023-05-06",
      status: "Shipped",
    },
    {
      id: 107,
      userId: 7,
      productId: "B2",
      quantity: 4,
      orderDate: "2023-05-07",
      status: "Processing",
    },
    {
      id: 108,
      userId: 8,
      productId: "C3",
      quantity: 2,
      orderDate: "2023-05-08",
      status: "Pending",
    },
    {
      id: 109,
      userId: 9,
      productId: "D4",
      quantity: 1,
      orderDate: "2023-05-09",
      status: "Delivered",
    },
    {
      id: 110,
      userId: 10,
      productId: "E5",
      quantity: 3,
      orderDate: "2023-05-10",
      status: "Shipped",
    },
  ],
  products: [
    {
      id: "A1",
      name: "Laptop",
      price: 1200,
      category: "Electronics",
      inStock: 50,
    },
    {
      id: "B2",
      name: "Smartphone",
      price: 800,
      category: "Electronics",
      inStock: 100,
    },
    {
      id: "C3",
      name: "Desk Chair",
      price: 250,
      category: "Furniture",
      inStock: 30,
    },
    {
      id: "D4",
      name: "Coffee Maker",
      price: 80,
      category: "Appliances",
      inStock: 20,
    },
    {
      id: "E5",
      name: "Running Shoes",
      price: 120,
      category: "Sports",
      inStock: 75,
    },
    {
      id: "F6",
      name: "Bookshelf",
      price: 150,
      category: "Furniture",
      inStock: 15,
    },
    {
      id: "G7",
      name: "Blender",
      price: 60,
      category: "Appliances",
      inStock: 40,
    },
    { id: "H8", name: "Yoga Mat", price: 25, category: "Sports", inStock: 100 },
    {
      id: "I9",
      name: "Headphones",
      price: 150,
      category: "Electronics",
      inStock: 60,
    },
    {
      id: "J10",
      name: "Desk Lamp",
      price: 40,
      category: "Furniture",
      inStock: 35,
    },
  ],
  categories: [
    { id: 1, name: "Electronics", description: "Gadgets and devices" },
    { id: 2, name: "Furniture", description: "Home and office furniture" },
    { id: 3, name: "Appliances", description: "Kitchen and home appliances" },
    { id: 4, name: "Sports", description: "Sports and fitness equipment" },
    { id: 5, name: "Books", description: "Physical and digital books" },
    { id: 6, name: "Clothing", description: "Men's and women's apparel" },
    { id: 7, name: "Toys", description: "Children's toys and games" },
    { id: 8, name: "Beauty", description: "Cosmetics and personal care" },
    { id: 9, name: "Automotive", description: "Car parts and accessories" },
    { id: 10, name: "Garden", description: "Gardening tools and plants" },
  ],
  suppliers: [
    {
      id: 1,
      name: "TechCorp",
      contactPerson: "Sarah Lee",
      email: "sarah@techcorp.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "FurniturePlus",
      contactPerson: "Mike Johnson",
      email: "mike@furnitureplus.com",
      phone: "234-567-8901",
    },
    {
      id: 3,
      name: "ApplianceMart",
      contactPerson: "Emily Brown",
      email: "emily@appliancemart.com",
      phone: "345-678-9012",
    },
    {
      id: 4,
      name: "SportZone",
      contactPerson: "Tom Wilson",
      email: "tom@sportzone.com",
      phone: "456-789-0123",
    },
    {
      id: 5,
      name: "BookWorm Inc",
      contactPerson: "Lisa Chen",
      email: "lisa@bookworm.com",
      phone: "567-890-1234",
    },
    {
      id: 6,
      name: "FashionFwd",
      contactPerson: "Alex Kim",
      email: "alex@fashionfwd.com",
      phone: "678-901-2345",
    },
    {
      id: 7,
      name: "ToyLand",
      contactPerson: "Chris Taylor",
      email: "chris@toyland.com",
      phone: "789-012-3456",
    },
    {
      id: 8,
      name: "BeautyGlow",
      contactPerson: "Diana Park",
      email: "diana@beautyglow.com",
      phone: "890-123-4567",
    },
    {
      id: 9,
      name: "AutoParts Co",
      contactPerson: "Ryan Nguyen",
      email: "ryan@autoparts.com",
      phone: "901-234-5678",
    },
    {
      id: 10,
      name: "GreenThumb",
      contactPerson: "Olivia Garcia",
      email: "olivia@greenthumb.com",
      phone: "012-345-6789",
    },
  ],
};

export const dummyCollections = [
  "usersCollection",
  "ordersCollection",
  "productsCollection",
];

// User type
export type User = {
  _id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
};

// Order type
export type Order = {
  _id: string;
  userId: string;
  product: string;
  quantity: number;
  totalAmount: number;
  status: "Delivered" | "Shipped" | "Processing" | "Pending";
};

// Product type
export type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  inStock: number;
  rating: number;
};

// Collection data type
export type CollectionData = {
  usersCollection: User[];
  ordersCollection: Order[];
  productsCollection: Product[];
};

export const dummyCollectionData: CollectionData = {
  usersCollection: [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      isActive: true,
    },
    {
      _id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      age: 28,
      isActive: true,
    },
    {
      _id: "3",
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 35,
      isActive: false,
    },
    {
      _id: "4",
      name: "Bob Williams",
      email: "bob@example.com",
      age: 42,
      isActive: true,
    },
    {
      _id: "5",
      name: "Carol Brown",
      email: "carol@example.com",
      age: 25,
      isActive: true,
    },
    {
      _id: "6",
      name: "David Lee",
      email: "david@example.com",
      age: 33,
      isActive: false,
    },
    {
      _id: "7",
      name: "Eva Garcia",
      email: "eva@example.com",
      age: 29,
      isActive: true,
    },
    {
      _id: "8",
      name: "Frank Chen",
      email: "frank@example.com",
      age: 31,
      isActive: true,
    },
    {
      _id: "9",
      name: "Grace Kim",
      email: "grace@example.com",
      age: 27,
      isActive: true,
    },
    {
      _id: "10",
      name: "Henry Nguyen",
      email: "henry@example.com",
      age: 36,
      isActive: false,
    },
  ],
  ordersCollection: [
    {
      _id: "101",
      userId: "1",
      product: "Laptop",
      quantity: 2,
      totalAmount: 2400,
      status: "Delivered",
    },
    {
      _id: "102",
      userId: "2",
      product: "Smartphone",
      quantity: 1,
      totalAmount: 800,
      status: "Shipped",
    },
    {
      _id: "103",
      userId: "3",
      product: "Desk Chair",
      quantity: 3,
      totalAmount: 750,
      status: "Processing",
    },
    {
      _id: "104",
      userId: "4",
      product: "Coffee Maker",
      quantity: 1,
      totalAmount: 80,
      status: "Pending",
    },
    {
      _id: "105",
      userId: "5",
      product: "Running Shoes",
      quantity: 2,
      totalAmount: 240,
      status: "Delivered",
    },
    {
      _id: "106",
      userId: "6",
      product: "Bookshelf",
      quantity: 1,
      totalAmount: 150,
      status: "Shipped",
    },
    {
      _id: "107",
      userId: "7",
      product: "Blender",
      quantity: 1,
      totalAmount: 60,
      status: "Processing",
    },
    {
      _id: "108",
      userId: "8",
      product: "Yoga Mat",
      quantity: 2,
      totalAmount: 50,
      status: "Pending",
    },
    {
      _id: "109",
      userId: "9",
      product: "Headphones",
      quantity: 1,
      totalAmount: 150,
      status: "Delivered",
    },
    {
      _id: "110",
      userId: "10",
      product: "Desk Lamp",
      quantity: 3,
      totalAmount: 120,
      status: "Shipped",
    },
  ],
  productsCollection: [
    {
      _id: "A1",
      name: "Laptop",
      price: 1200,
      category: "Electronics",
      inStock: 50,
      rating: 4.5,
    },
    {
      _id: "B2",
      name: "Smartphone",
      price: 800,
      category: "Electronics",
      inStock: 100,
      rating: 4.3,
    },
    {
      _id: "C3",
      name: "Desk Chair",
      price: 250,
      category: "Furniture",
      inStock: 30,
      rating: 4.0,
    },
    {
      _id: "D4",
      name: "Coffee Maker",
      price: 80,
      category: "Appliances",
      inStock: 20,
      rating: 4.2,
    },
    {
      _id: "E5",
      name: "Running Shoes",
      price: 120,
      category: "Sports",
      inStock: 75,
      rating: 4.1,
    },
    {
      _id: "F6",
      name: "Bookshelf",
      price: 150,
      category: "Furniture",
      inStock: 15,
      rating: 3.9,
    },
    {
      _id: "G7",
      name: "Blender",
      price: 60,
      category: "Appliances",
      inStock: 40,
      rating: 4.4,
    },
    {
      _id: "H8",
      name: "Yoga Mat",
      price: 25,
      category: "Sports",
      inStock: 100,
      rating: 4.6,
    },
    {
      _id: "I9",
      name: "Headphones",
      price: 150,
      category: "Electronics",
      inStock: 60,
      rating: 4.7,
    },
    {
      _id: "J10",
      name: "Desk Lamp",
      price: 40,
      category: "Furniture",
      inStock: 35,
      rating: 4.0,
    },
  ],
};

export const dummySchemaAttributes = [
  { name: "name", type: "string" },
  { name: "email", type: "string" },
  { name: "age", type: "number" },
  { name: "isActive", type: "boolean" },
  { name: "registrationDate", type: "date" },
  {
    name: "address",
    type: "object",
    properties: [
      { name: "street", type: "string" },
      { name: "city", type: "string" },
      { name: "state", type: "string" },
      { name: "zipCode", type: "string" },
    ],
  },
  { name: "phoneNumbers", type: "array", items: { type: "string" } },
  {
    name: "preferences",
    type: "object",
    properties: [
      { name: "newsletter", type: "boolean" },
      { name: "theme", type: "string", enum: ["light", "dark", "system"] },
      { name: "language", type: "string" },
    ],
  },
  {
    name: "orderHistory",
    type: "array",
    items: {
      type: "object",
      properties: [
        { name: "orderId", type: "string" },
        { name: "date", type: "date" },
        { name: "totalAmount", type: "number" },
      ],
    },
  },
  { name: "profilePicture", type: "binary" },
];

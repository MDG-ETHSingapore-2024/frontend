export const dummyTables = ['users', 'orders', 'products'];

export const dummyTableData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ],
  orders: [
    { id: 101, product: 'Laptop', quantity: 2 },
    { id: 102, product: 'Phone', quantity: 1 },
  ],
  products: [
    { id: 'A1', name: 'Laptop', price: 1200 },
    { id: 'B2', name: 'Phone', price: 800 },
  ],
};

export const dummyCollections = ['usersCollection', 'ordersCollection'];

export const dummyCollectionData = {
  usersCollection: [
    { _id: '1', name: 'John Doe', email: 'john@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ],
  ordersCollection: [
    { _id: '101', product: 'Laptop', quantity: 2 },
    { _id: '102', product: 'Phone', quantity: 1 },
  ],
};

export const dummySchemaAttributes = [
  { name: 'name', type: 'string' },
  { name: 'email', type: 'string' },
  { name: 'age', type: 'number' },
];


const userDatabase = [
  { email: 'user@example.com', password: 'password123', user_name: 'John Doe', user_type: 'customer' },
  
];

export const authenticateUser = async (email, password) => {
  const user = userDatabase.find((user) => user.email === email && user.password === password);
  return user || null;
};

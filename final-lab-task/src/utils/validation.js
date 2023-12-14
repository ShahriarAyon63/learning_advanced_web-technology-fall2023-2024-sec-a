
export const validateLoginForm = (email, password) => {
    if (!email || !password) {
      return 'Email and password are required';
    }
  
    if (email.length > 50) {
      return 'Email length should be less than 50 characters';
    }
  
    
    return ''; // Empty string means validation passed
  };
  
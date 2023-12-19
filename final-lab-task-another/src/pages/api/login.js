
import { authenticateUser } from '../../utils/auth'; 
import { validateLoginForm } from '../../utils/validation';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Frontend validation
    const validationError = validateLoginForm(email, password);
    if (validationError) {
      res.status(400).json({ success: false, message: validationError });
      return;
    }

    // Perform backend validations
    const userCredentials = await authenticateUser(email, password);

    if (userCredentials) {
      
      res.status(200).json({ success: true, userCredentials });
    } else {
      // Display error message on failure
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

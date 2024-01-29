import jwt from 'jsonwebtoken';

// Define an interface for the decoded token
interface DecodedToken {
  exp?: number;
  [key: string]: any; 
}

// Function to check authorization
function checkAuthorization(token: string | null): void {
  const decodedToken: DecodedToken | null = token ? jwt.decode(token, { complete: true }) : null;
  const dateNow: number = new Date().getTime();

  if (decodedToken && decodedToken.exp && decodedToken.exp < dateNow) {
    // If token is expired, redirect to login page
    window.location.href = '/login'; // Redirect to login page
  }
}


// Usage
const token: string | null = localStorage.getItem('id_token');
checkAuthorization(token);

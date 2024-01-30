// import { useEffect } from 'react';
// import { useRouter } from 'next/router'; // For client-side routing
// import jwt_decode from 'jwt-decode'; // You'll need to install this library

// // Function to check if token is authorized and not expired
// export const checkAuthorization = (token) => {
//   if (!token) {
//     redirectToLogin();
//     return;
//   }

//   try {
//     const decodedToken = jwt_decode(token); // Decode the token
//     const currentTime = Date.now() / 1000; // Current time in seconds
//     if (decodedToken.exp < currentTime) {
//       // Token is expired
//       redirectToLogin();
//     }
//   } catch (error) {
//     // Token is invalid or cannot be decoded
//     redirectToLogin();
//   }
// };

// // Function to redirect to login page
// const redirectToLogin = () => {
//   const router = useRouter();
//   if (typeof window !== 'undefined') {
//     router.push('/login'); // Redirect to login page
//   } else {
//     // Server-side redirection
//     window.location.href = '/login';
//   }
// };

// // Example usage in a React component
// const ProtectedComponent = () => {
//   useEffect(() => {
//     // Simulate getting token from localStorage or cookie
//     const token = localStorage.getItem('token');
//     checkAuthorization(token);
//   }, []);

//   return (
//     <div>
//       <h1>Protected Component</h1>
//       <p>This is a protected component.</p>
//     </div>
//   );
// };

// export default ProtectedComponent;

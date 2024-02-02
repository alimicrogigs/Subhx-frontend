

const tokenMiddleware = () => {
    // Get the token from local storage
    const token = localStorage.getItem('token');
    if (!token) {
        // Decode the token to get expiration time
        // const decodedToken = jwt_decode(token);
        // const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

        // if (expirationTime < Date.now()) {
        //     // Token is expired, redirect to login page after a short delay
        //     console.log('Token is expired. Redirecting to login page...');
        //     setTimeout(() => {
        //         window.location.href = '/login';
        //     }, 10); // Adjust the delay as needed
        // }
        console.log("Token does not exist. Redirecting to login page...");
        setTimeout(() => {
            window.location.href = '/login';
        }, 10)
    } 
};

export default tokenMiddleware;

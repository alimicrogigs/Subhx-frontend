/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();
const nextConfig = {
    env: {
        // API_URL: 'http://192.168.1.6:8000/api/v1/',
        API_URL: 'http://127.0.0.1:8000/api/v1/',
      },
};


export default nextConfig;

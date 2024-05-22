// next.config.mjs
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/.env` });

const nextConfig = {
  reactStrictMode: true,
  // Other Next.js configurations if any
};

export default nextConfig;

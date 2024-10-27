// /** @type {import('next').NextConfig} */
//  import withPWA from 'next-pwa';


// const withPWA = require('next-pwa')({
//   dest: 'public',
// })
// const nextConfig = {}

// module.exports = withPWA(nextConfig)

// export default nextConfig;

import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,

});

export default nextConfig;

// const withPWA = require('next-pwa')({
//     dest: 'public', // Output directory for service worker files
//     register: true, // Register the service worker automatically
//     skipWaiting: true, // Update the service worker immediately without waiting for users to close tabs
//   });

//   /** @type {import('next').NextConfig} */
//   const nextConfig = withPWA({
//     reactStrictMode: true,
//   });

//   module.exports = nextConfig;

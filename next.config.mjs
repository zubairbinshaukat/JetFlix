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


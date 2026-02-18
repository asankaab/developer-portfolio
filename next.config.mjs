/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/**',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '/images/**',
          port: '',
        },
      ],
      dangerouslyAllowSVG: true,
    },
    
    
};

export default nextConfig;
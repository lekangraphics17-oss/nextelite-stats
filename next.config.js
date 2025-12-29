/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add any Discourse/CDN domains you use here
    domains: ['nextelite.discourse.group', 'discourse-cdn.rawgit.org', 'discourse-cdn.org'],
  }
};

module.exports = nextConfig;

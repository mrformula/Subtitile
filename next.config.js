/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.subscene.best', 'image.tmdb.org'],
    },
    experimental: {
        outputStandalone: true
    }
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.subscene.best', 'image.tmdb.org'],
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
                ]
            }
        ];
    },
    trailingSlash: false,
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*'
            }
        ];
    }
}

module.exports = nextConfig 
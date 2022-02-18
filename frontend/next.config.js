module.exports = {
  reactStrictMode: true,
  async rewrites() {
    console.log("Rewrite")
    return [
      {
        source: '/api',
        destination: 'http://localhost:5000/api',
      },
    ]
  }
}

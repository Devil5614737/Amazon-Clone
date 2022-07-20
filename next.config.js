/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['fakestoreapi.com','localhost','m.media-amazon.com','cflare.shop.bigbazaar.com','rukminim2.flixcart.com,rukminim1.flixcart.com','rukminim1.flixcart.com']
  },
 
}

module.exports = nextConfig

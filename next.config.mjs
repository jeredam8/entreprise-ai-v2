const nextConfig = {
  reactStrictMode: true,
  async redirects() { return [
  {
    "source": "/blog",
    "destination": "/guides",
    "permanent": true
  },
  {
    "source": "/agences",
    "destination": "/agences-ia",
    "permanent": true
  },
  {
    "source": "/ecommerce",
    "destination": "/secteurs/ia-ecommerce",
    "permanent": true
  },
  {
    "source": "/equipe",
    "destination": "/a-propos",
    "permanent": true
  },
  {
    "source": "/methode",
    "destination": "/methodologie",
    "permanent": true
  },
  {
    "source": "/politique-confidentialite",
    "destination": "/confidentialite",
    "permanent": true
  },
  {
    "source": "/blog/quel-budget-integrer-ia-pme",
    "destination": "/guides/combien-coute-projet-ia",
    "permanent": true
  }
]; }
};
export default nextConfig;

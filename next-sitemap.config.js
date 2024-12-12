/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://my12parsecs.github.io',
    generateRobotsTxt: true, // (optional)
    autoLastmod: false,
    generateIndexSitemap: false,
    // ...other options
  }
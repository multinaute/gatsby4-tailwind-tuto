module.exports = {
  siteMetadata: {
    siteUrl: "https://localhost:8000",
    title: "tailwind-gatsby4-okt",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-preload-fonts",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`,
          `Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900`,
        ],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Raleway`,
    //         variants: [
    //           `100`,
    //           `100i`,
    //           `200`,
    //           `200i`,
    //           `300`,
    //           `300i`,
    //           `400`,
    //           `500`,
    //           `500i`,
    //           `600`,
    //           `600i`,
    //           `700`,
    //           `700i`,
    //           `800`,
    //           `800i`,
    //           `900`,
    //           `900i`,
    //         ],
    //       },
    //       // {
    //       //   family: `Playfair Display`,
    //       //   variants: [
    //       //     `ital`,
    //       //     `wght@0`,
    //       //     `500;0`,
    //       //     `600;0`,
    //       //     `800;0`,
    //       //     `900;1`,
    //       //     `400;1`,
    //       //     `500;1`,
    //       //     `600;1`,
    //       //     `700;1`,
    //       //     `800;1`,
    //       //     `900`,
    //       //   ],
    //       // },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}

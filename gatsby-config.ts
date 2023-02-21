import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SUSU LAROCHE`,
    siteUrl: `https://www.susularoche.com`,
    description: `Susu Laroche is an anagram of Chaos Lure Us and a multidisciplinary artist working with film, photography and sound`,
    keywords: `arts, music, photography, video, film, sound, susu laroche, chaos lure us, print, tarot, print, painting`,
    author: `Susu Laroche`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Alegreya Sans`,
            file: `https://fonts.googleapis.com/css2?family=Alegreya+Sans&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;

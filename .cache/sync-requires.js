const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/templates/blog-post.tsx"))),
  "component---src-templates-tags-page-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/templates/tags-page.tsx"))),
  "component---src-templates-blog-page-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/templates/blog-page.tsx"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/pages/about.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/pages/blog.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/matthewshade/WEB.Satellites/src/pages/index.tsx")))
}


# Server Side Rendering (SSR) with React Router aka Isomorphic/Universal  JavaScript

A simple application built to showcase Universal JavaScript with Node.js, Express, React, Webpack, Context state modules and libraries. Shared JavaScript that runs on both the client and server.

## What's the point?

JavaScript driven MVCs (angular, ember, backbone, etc.) render on DOM load, this can be really slow, and can make for a bad user experience.

Another major problem is that, they aren't indexable by search engines (without paying for a third party service like pre-render-io). If your application is serving any kind of data that people might be searching for, this is a bad thing.

When you render JavaScript on the server side, you can solve these problems, and provide a better enhanced user experience.  This ensures best practices for Development Practice Adherence, Accessibility, Usability, and Governance.

###  Isomorphic Javascript Benefits:

Better overall user experience

Search engine indexable

Easier code maintenance - Single codebase for client and server

Free progressive enhancements - as the DOM elements are still made available from  on page load from the server side generated JavaScript using REACT.

### Note 
Evaluate your project to a conclusion, and  to estimate if the complexities in making your application Universal is worth the benefit in the end. From the points made above.

SEO compatible isomorphic applications can be achieved these days using static geneators like Gatsby - https://github.com/kukuu/GatsbyJS/tree/master, and other middlewares including NextJS - https://github.com/kukuu/siliconlabs/tree/master/nextrematch .





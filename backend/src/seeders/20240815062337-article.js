'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('articles', [
      {
          title: 'Understanding JavaScript Closures',
          content: 'Closures are a fundamental concept in JavaScript that every developer should understand. They allow for the creation of private variables and encapsulation of logic within functions.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Getting Started with React Hooks',
          content: 'React Hooks provide a powerful way to use state and other React features without writing a class. Learn how to effectively use Hooks in your React applications.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Mastering Asynchronous Programming in Node.js',
          content: 'Asynchronous programming is crucial in Node.js for handling I/O operations. This article explores different methods for managing asynchronous code, including callbacks, promises, and async/await.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'An Introduction to GraphQL',
          content: 'GraphQL is a query language for APIs that provides a more efficient, powerful, and flexible alternative to REST. Learn the basics of GraphQL and how to implement it in your projects.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Building RESTful APIs with Express.js',
          content: 'Express.js is a minimal and flexible Node.js web application framework. This article covers how to create RESTful APIs using Express.js, including routing, middleware, and error handling.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Exploring the New Features in ES2020',
          content: 'ES2020 introduced several new features to JavaScript, including optional chaining, nullish coalescing, and dynamic imports. This article provides an overview of these features with examples.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Effective Unit Testing in JavaScript',
          content: 'Unit testing is essential for ensuring code quality and preventing bugs. This article discusses best practices for writing effective unit tests in JavaScript using popular testing frameworks.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Understanding CSS Grid Layout',
          content: 'CSS Grid Layout is a powerful tool for creating complex, responsive layouts on the web. Learn the fundamentals of CSS Grid and how to apply it in your designs.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Improving Web Performance with Lazy Loading',
          content: 'Lazy loading is a technique for deferring the loading of non-essential resources until they are needed. This article explains how to implement lazy loading to improve web performance.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Creating Reusable Components in React',
          content: 'Reusable components are key to building scalable and maintainable React applications. This article explores techniques for creating and managing reusable components in React.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Introduction to TypeScript for JavaScript Developers',
          content: 'TypeScript adds static types to JavaScript, helping developers catch errors early and write more robust code. This article introduces TypeScript and how it can benefit your JavaScript projects.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Building Real-Time Applications with Socket.io',
          content: 'Socket.io enables real-time, bidirectional communication between web clients and servers. Learn how to build real-time applications using Socket.io in this tutorial.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Optimizing Images for the Web',
          content: 'Images are often the largest files on a web page, making them a key target for optimization. This article discusses techniques for optimizing images to improve web performance.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Understanding and Using JSON Web Tokens (JWT)',
          content: 'JSON Web Tokens (JWT) are a popular method for securely transmitting information between parties. This article explains how JWTs work and how to use them in authentication systems.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'A Guide to Modern JavaScript Design Patterns',
          content: 'Design patterns provide reusable solutions to common problems in software design. This guide explores modern JavaScript design patterns and how to apply them in your projects.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Building Responsive Layouts with Flexbox',
          content: 'Flexbox is a CSS layout model that allows for flexible and responsive layouts. Learn the fundamentals of Flexbox and how to use it to create modern web designs.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Using Docker for Local Development',
          content: 'Docker simplifies the setup of local development environments by using containers. This article covers the basics of Docker and how to use it to create consistent development environments.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Deploying Node.js Applications with Heroku',
          content: 'Heroku is a platform-as-a-service that simplifies the deployment of web applications. This article explains how to deploy a Node.js application to Heroku.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Exploring the Vue.js Framework',
          content: 'Vue.js is a progressive JavaScript framework for building user interfaces. This article introduces Vue.js and its core concepts, making it easier to get started with the framework.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Building Secure Applications with OAuth 2.0',
          content: 'OAuth 2.0 is an authorization framework that allows third-party applications to access a user’s resources without exposing credentials. This article covers how to implement OAuth 2.0 in your applications.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'A Beginner’s Guide to Git and GitHub',
          content: 'Git is a version control system, and GitHub is a platform for hosting Git repositories. This guide introduces the basics of Git and GitHub, helping beginners get started with version control.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Understanding Event-Driven Architecture',
          content: 'Event-driven architecture is a software design pattern where the flow of the program is determined by events. This article explains the benefits of event-driven architecture and how to implement it.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Getting Started with MongoDB',
          content: 'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. This article provides an introduction to MongoDB and how to use it in your projects.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Implementing User Authentication with Passport.js',
          content: 'Passport.js is a middleware for Node.js that simplifies the process of authenticating users. Learn how to implement user authentication in your Node.js applications using Passport.js.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Best Practices for Writing Clean Code',
          content: 'Writing clean code is essential for maintainability and collaboration. This article covers best practices for writing clean, readable, and maintainable code.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Optimizing Web Performance with CDN',
          content: 'Content Delivery Networks (CDNs) are used to serve content to users from locations close to them, improving web performance. Learn how to implement and benefit from CDNs in your projects.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Introduction to Progressive Web Apps (PWAs)',
          content: 'Progressive Web Apps (PWAs) provide a native app-like experience on the web. This article introduces PWAs and how to build them using modern web technologies.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Handling File Uploads in Node.js',
          content: 'File uploads are a common requirement in web applications. This article explains how to handle file uploads in Node.js, including handling multipart forms and storing files securely.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'Understanding WebSockets for Real-Time Communication',
          content: 'WebSockets provide a full-duplex communication channel over a single TCP connection. This article explains how to use WebSockets for real-time communication in web applications.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          title: 'A Guide to CSS Preprocessors',
          content: 'CSS preprocessors like Sass and Less extend CSS with features like variables, nested rules, and mixins. This guide explains the benefits of using preprocessors and how to integrate them into your workflow.',
          createdAt: new Date(),
          updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('articles', null, {});
  }
};

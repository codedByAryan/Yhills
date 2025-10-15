import { v4 as uuidv4 } from 'uuid';

export const seedPosts = [
  {
    id: uuidv4(),
    title: "Getting Started with React Hooks",
    author: "Piyush",
    content: "React Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This post covers the basics of useState and useEffect.",
    tags: ["react", "hooks", "javascript"],
    createdAt: "2025-07-10T10:00:00Z",
    updatedAt: "2025-07-10T10:00:00Z"
  },
  {
    id: uuidv4(),
    title: "A Guide to Tailwind CSS",
    author: "Aarav",
    content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It's a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
    tags: ["css", "tailwind", "design"],
    createdAt: "2025-07-09T12:30:00Z",
    updatedAt: "2025-07-09T12:30:00Z"
  },
  {
    id: uuidv4(),
    title: "State Management with Context API",
    author: "Piyush",
    content: "The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. This is the official way to manage global state in React.",
    tags: ["react", "state-management", "context"],
    createdAt: "2025-07-08T15:00:00Z",
    updatedAt: "2025-07-08T15:00:00Z"
  },
  {
    id: uuidv4(),
    title: "Understanding Asynchronous JavaScript",
    author: "Rohan",
    content: "Asynchronous JavaScript is a core concept you need to understand. This includes Promises, async/await, and the event loop. This article breaks down these topics in an easy-to-understand way.",
    tags: ["javascript", "async", "es6"],
    createdAt: "2025-07-07T09:45:00Z",
    updatedAt: "2025-07-07T09:45:00Z"
  },
  {
    id: uuidv4(),
    title: "Building a REST API with Node.js",
    author: "Isha",
    content: "Learn how to build a simple, yet powerful REST API using Node.js and Express. We'll cover routing, middleware, and connecting to a mock database.",
    tags: ["nodejs", "api", "backend"],
    createdAt: "2025-07-06T18:20:00Z",
    updatedAt: "2025-07-06T18:20:00Z"
  },
  {
    id: uuidv4(),
    title: "Introduction to Vite",
    author: "Aarav",
    content: "Vite is a modern frontend build tool that provides an extremely fast development experience. It consists of a dev server that serves your files over native ES modules, and a build command that bundles your code for production.",
    tags: ["vite", "build-tool", "frontend"],
    createdAt: "2025-07-05T11:00:00Z",
    updatedAt: "2025-07-05T11:00:00Z"
  },
  {
    id: uuidv4(),
    title: "React Testing Library Best Practices",
    author: "Piyush",
    content: "Testing your components is crucial for building robust applications. React Testing Library encourages you to write tests that resemble how your users interact with your components.",
    tags: ["react", "testing", "jest"],
    createdAt: "2025-07-04T14:10:00Z",
    updatedAt: "2025-07-04T14:10:00Z"
  },
  {
    id: uuidv4(),
    title: "The Power of TypeScript",
    author: "Isha",
    content: "TypeScript is a superset of JavaScript that adds static types. By using types, you can catch errors early in development and improve your code quality and maintainability.",
    tags: ["typescript", "javascript", "code-quality"],
    createdAt: "2025-07-03T16:55:00Z",
    updatedAt: "2025-07-03T16:55:00Z"
  },
    {
    id: uuidv4(),
    title: "Client-Side Routing with React Router",
    author: "Rohan",
    content: "React Router is the standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
    tags: ["react", "routing", "spa"],
    createdAt: "2025-07-02T08:00:00Z",
    updatedAt: "2025-07-02T08:00:00Z"
  },
  {
    id: uuidv4(),
    title: "Deploying a React App to Netlify",
    author: "Aarav",
    content: "Deploying your single-page application has never been easier. With platforms like Netlify, you can connect your Git repository and have a live site in minutes with continuous deployment.",
    tags: ["deployment", "netlify", "ci-cd"],
    createdAt: "2025-07-01T13:40:00Z",
    updatedAt: "2025-07-01T13:40:00Z"
  }
];
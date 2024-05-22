import React from 'react';

const JavaScriptTopics = () => {
  return (
    <div>
      <h2>JavaScript - Advanced Topics 2024</h2>
      <ul>
        <li>
          <h3>Asynchronous JavaScript</h3>
          <ul>
            <li>Promises</li>
            <li>Async/Await</li>
            <li>Callbacks vs Promises vs Async/Await</li>
            <li>Error handling in asynchronous code</li>
          </ul>
        </li>

        <li>
          <h3>Functional Programming</h3>
          <ul>
            <li>Higher-order functions</li>
            <li>Immutability and pure functions</li>
            <li>Functional composition</li>
            <li>Recursion</li>
          </ul>
        </li>

        <li>
          <h3>ES6+ Features</h3>
          <ul>
            <li>Destructuring</li>
            <li>Arrow functions</li>
            <li>Spread and Rest operators</li>
            <li>Classes and inheritance</li>
          </ul>
        </li>

        <li>
          <h3>Modules and Bundlers</h3>
          <ul>
            <li>ES Modules</li>
            <li>CommonJS vs ES Modules</li>
            <li>Webpack and Parcel</li>
            <li>Code splitting</li>
          </ul>
        </li>

        <li>
          <h3>Testing JavaScript Applications</h3>
          <ul>
            <li>Unit testing with Jest</li>
            <li>Integration testing</li>
            <li>Mocking and spies</li>
            <li>End-to-end testing with Cypress</li>
          </ul>
        </li>

        <li>
          <h3>Performance Optimization</h3>
          <ul>
            <li>Profiling and optimization techniques</li>
            <li>Debouncing and throttling</li>
            <li>Memory management</li>
            <li>Lazy loading and code splitting</li>
          </ul>
        </li>

        <li>
          <h3>Security in JavaScript Applications</h3>
          <ul>
            <li>Common security vulnerabilities</li>
            <li>Input validation and sanitization</li>
            <li>Cross-site scripting (XSS) prevention</li>
            <li>Content Security Policy (CSP)</li>
          </ul>
        </li>

        <li>
          <h3>Build Tools and CI/CD</h3>
          <ul>
            <li>Automated builds with npm scripts</li>
            <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
            <li>GitHub Actions and other CI/CD pipelines</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default JavaScriptTopics;

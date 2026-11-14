# Custom Hooks React

A collection of reusable React custom hooks designed to simplify component logic and improve code reusability.

## Currently Available Hooks

### useFetch

A custom hook for fetching data from APIs using React's `useEffect` and `useState`.

**Features**
- Fetches data from a provided URL
- Manages loading states
- Handles API errors
- Supports request cancellation using AbortController

**Usage**

```jsx
const { data, loading, error } = useFetch(
  "https://jsonplaceholder.typicode.com/todos"
);
```

## Tech Stack

- React
- JavaScript
- React Hooks
- Fetch API

## Getting Started

```bash
git clone https://github.com/Naba-cloud/custom-hooks-react.git
cd custom-hooks-react
npm install
npm start
```

## Purpose

This project demonstrates how custom React hooks can encapsulate reusable logic and keep components clean and maintainable.

## Author

Naba Zehra

[GitHub](https://github.com/Naba-cloud)

# Development Setup Guide

This guide will help you set up the development environment for the Website Traffic Checker project.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- PNPM
- Docker
- PostgreSQL

## Initial Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/website-traffic-checker.git
   cd website-traffic-checker
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Set up environment variables:**

   Copy the `.env.example` file to `.env` and update the values as needed.

   ```sh
   cp .env.example .env
   ```

4. **Set up the database:**

   Ensure PostgreSQL is running and create a new database.

   ```sh
   createdb website_traffic_checker
   ```

   Update the `DATABASE_URL` in the `.env` file with your database credentials.

5. **Run database migrations:**

   ```sh
   pnpm run migrate
   ```

6. **Seed the database:**

   ```sh
   pnpm run seed
   ```

## Running the Application

### Frontend

1. **Navigate to the frontend directory:**

   ```sh
   cd apps/frontend
   ```

2. **Start the development server:**

   ```sh
   pnpm run dev
   ```

   The frontend application should now be running at `http://localhost:3000`.

### Backend

1. **Navigate to the backend directory:**

   ```sh
   cd apps/backend
   ```

2. **Start the development server:**

   ```sh
   pnpm run start:dev
   ```

   The backend application should now be running at `http://localhost:3001`.

## Testing

### Unit Tests

To run unit tests for both frontend and backend, use the following command:

```sh
pnpm run test
```

### End-to-End Tests

To run end-to-end tests, use the following command:

```sh
pnpm run test:e2e
```

## Linting and Formatting

To lint the codebase, use the following command:

```sh
pnpm run lint
```

To format the codebase, use the following command:

```sh
pnpm run format
```

## Additional Resources

- [Frontend Documentation](./frontend.md)
- [Backend API Documentation](./backend.md)
- [Deployment Instructions](./deployment.md)

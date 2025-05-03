# Deployment Instructions

## Prerequisites

Before deploying the application, ensure you have the following prerequisites:

- Docker installed on your machine
- Access to a PostgreSQL database
- Environment variables configured in a `.env` file

## Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/website-traffic-checker.git
   cd website-traffic-checker
   ```

2. **Set up environment variables:**

   Create a `.env` file in the root directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.

3. **Build and run the Docker containers:**

   ```sh
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers for the frontend, backend, and database services.

4. **Run database migrations:**

   ```sh
   docker-compose exec backend pnpm run prisma migrate deploy
   ```

   This command will run the database migrations to set up the necessary tables and schema.

5. **Seed the database (optional):**

   ```sh
   docker-compose exec backend pnpm run prisma db seed
   ```

   This command will seed the database with initial data.

6. **Access the application:**

   Once the containers are up and running, you can access the application at `http://localhost:3000`.

## Additional Notes

- To stop the Docker containers, run:

  ```sh
  docker-compose down
  ```

- To view the logs of a specific service, run:

  ```sh
  docker-compose logs <service-name>
  ```

  Replace `<service-name>` with the name of the service (e.g., `frontend`, `backend`, `database`).

- For production deployment, ensure you have set the `NODE_ENV` environment variable to `production` and configured any additional production-specific settings.

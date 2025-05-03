# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-workspace.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy all files
COPY . .

# Build the project
RUN pnpm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "start"]

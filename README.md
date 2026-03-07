# Mini-Zinier

This is the backend for the Mini-Zinier application.

## Project Structure
- `services/`: Contains microservices for different domains (job-service, assignment-service, notification-service).
- `shared/`: Shared utilities and libraries.
- `kubernetes/`: Kubernetes deployment manifests.
- `gateway/`: API Gateway.
- `infrastructure/`: Infrastructure as Code (e.g., Terraform).
- `docs/`: Project documentation.

## How to run the project

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the server in development mode**:
   ```bash
   npm run dev
   ```

   The server will start on port 3000 by default.

3. **Production mode**:
   ```bash
   npm start
   ```

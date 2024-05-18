# Step 1: Build React app
FROM node:14 as build-frontend
WORKDIR /frontend
COPY services/frontend/package.json services/frontend/package-lock.json ./
RUN npm install
COPY services/frontend/ ./
RUN npm run build

# Step 2: Build FastAPI app
FROM python:latest as build-backend
WORKDIR /backend
COPY services/backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY services/backend/ ./

# Step 3: Combine both and serve
FROM python:latest

# Install dependencies
RUN apt-get update && apt-get install -y build-essential

#WORKDIR /app

# Copy backend
COPY --from=build-backend /backend/app/main.py /app/backend/

# Copy frontend build
COPY --from=build-frontend /frontend/build /app/frontend/build

# Install uvicorn
RUN pip install uvicorn

# Command to run FastAPI and serve frontend
CMD ["python", "main.py"]

# Dashboard Backend

A production-ready Node.js backend built for the existing admin panel.

## Architecture

- Node.js / Express.js
- MongoDB / Mongoose
- Modular folders: `config`, `controllers`, `middleware`, `models`, `routes`, `services`, `utils`, `validators`
- JWT authentication with refresh token support
- Role-based access control
- File upload support for product images
- Centralized error handling

## Setup

1. Copy `.env.example` to `.env`
2. Set `MONGODB_URI`, `JWT_SECRET`, and `CLIENT_URL`
3. Install dependencies:
   ```bash
   cd server
   npm install
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```

## API Overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/dashboard/overview`
- `GET /api/dashboard/analytics`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `GET /api/categories`
- `POST /api/categories`
- `GET /api/orders`
- `GET /api/orders/:id`
- `POST /api/orders`
- `PUT /api/orders/:id`
- `DELETE /api/orders/:id`
- `GET /api/customers`
- `GET /api/customers/:id`
- `POST /api/customers`
- `PUT /api/customers/:id`
- `DELETE /api/customers/:id`
- `GET /api/users/me`
- `PUT /api/users/me`
- `PUT /api/users/me/password`
- `PUT /api/users/me/settings`

## Frontend Integration Notes

- Configure the frontend to consume backend APIs at `CLIENT_URL`.
- Use Bearer tokens in `Authorization` headers or cookies for protected requests.
- Upload product images to `/api/products` with multipart form data under the `image` field.

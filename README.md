About My Project :
My project is about stationary products. If the user wants, he can add products. He can delete products. And he can update them. He can see single products using id. If he wants, he can see all products. Through this API of mine

## Features

- 🌟 **Comprehensive API Endpoints**: Provides RESTful endpoints for efficient data handling.
- 📦 **Dynamic Product Management**: Add, update, and delete products seamlessly.
- 🔍 **Stock Management**: Real-time product availability updates based on stock levels.
- 📧 **Order Processing**: Handles customer orders with validation and stock updates.
- 📊 **Scalable Architecture**: Built for extensibility with modular design.
- 🔐 **Secure Configuration**: Environment variables ensure sensitive data protection.
- 📂 **Built-in Timestamps**: Automatically track data creation and updates.
- 🚀 **Ready for Deployment**: Preconfigured for Vercel or other deployment platforms.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Configuration Management**: Dotenv
- **Build Tool**: TypeScript

## Getting Started

Follow the steps below to set up the project locally on your machine.

### Prerequisites

Ensure the following are installed on your system:

- **Node.js** (version 16 or above)  
  [Download Node.js](https://nodejs.org/)
- **MongoDB** (local instance or cloud-based like MongoDB Atlas)  
  [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)
- **Package Manager**: NPM (comes with Node.js) or Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/nayan5572/stationary-server
    ```
2.  Navigate to the project directory
    ```bash
    cd student-stationary-backend
    ```
3.  Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4.  Environment Variables:

    Create a .env file in the root directory and provide the necessary variables:

    ```bash
        PORT=7000
        DB_URL= mongodb+srv://<username>:<password>@cluster.mongodb.net/your-database
    ```

5.  Run the Application:
    Start the server in development mode:

    ```bash
        npm run start:dev
    ```

## API Endpoints

### Product Management

- **GET** `/api/products`: Retrieve all products.
- **GET** `/api/products/:productId`: Retrieve single product.
- **POST** `/api/products`: Add a new product.
- **PATCH** `/api/products/:productId`: Update an existing product.
- **DELETE** `/api/products/:productId`: Delete a product.

### Order Management

- **POST** `/api/orders`: Create a new order.
- **GET** `/api/orders`: Fetch all orders.
- **GET** `/api/orders/single/:orderId`: Retrieve an order By Order Id.
- **GET** `/api/orders/:userId`: Retrieve an user orders.
- **PATCH** `/api/orders/update/:orderId`: Update a order by ID.
- **delete** `/api/orders/:orderId`: Delete an order by ID.

## Project Structure

📦project-root  
┣ 📂dist # Compiled output (after build)  
┣ 📂src # Source code  
┃ ┣📂app
┃ ┃ ┣ 📂models # Mongoose models  
┃ ┃ ┣ 📂routes # Route handlers  
┃ ┃ ┣ 📂services # Business logic  
┃ ┗ app.js  
┃ ┗ server.js # Main server file  
┣ 📜package.json # Project dependencies and scripts  
┣ 📜README.md # Project documentation  
┗ .env # Environment variables

## Contributing

We welcome contributions to enhance this project!

1. Fork the repository
2. Create a branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push your feature
   ```bash
   git push origin feature-name
   ```

## Contact

For questions or feedback, contact:

- **Name**: Nayan Halder
- **Email**: halder25572@gmail.com

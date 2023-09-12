# Express.js Application with AWS Parameter Store and MySQL

This is a sample Express.js application that demonstrates how to securely manage database credentials using AWS Parameter Store and connect to a Amazon RDS. It also uses environment variables for configuration.

## Setup

1. **Clone the Repository:** Clone this repository to your local machine:

   git clone <repository-url>
   cd express-aws-parameter-store-mysql

2. Install Dependencies: Install the project dependencies using npm:

   ```bash
   npm install

3. Configuration

Create a .env file in the project root directory with the following content, replacing placeholders with your actual values:

   AWS_REGION=YOUR_AWS_REGION
   RDS_HOST=YOUR_RDS_HOST
   DB_NAME=YOUR_DB_NAME

4. Run the Application:

Start the Express.js application:
node app.js start

The application will be accessible at http://localhost:3000.

Usage
Access the /dump_data route to retrieve data from the MySQL database. This demonstrates a secure way to fetch database credentials from AWS Parameter Store.

Dependencies
- Express.js
- mysql2
- AWS SDK for JavaScript
- dotenv

About
This application serves as a template for building Express.js applications with secure credential management using AWS Parameter Store. You can customize and extend it for your specific use cases.

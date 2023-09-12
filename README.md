# Express.js Application with AWS Parameter Store and RDS

This is a sample Express.js application that demonstrates how to securely manage database credentials using AWS Parameter Store and connect to a Amazon RDS. It also uses environment variables for configuration.

## Setup

> This project is built and tested on Node.js 16.

1. **Clone the Repository:** Clone this repository to your local machine:

```
git clone https://github.com/dapgx/simple-rest-api.git
```

2. Install Dependencies: Install the project dependencies using npm:

```bash
npm install
```

3. Configuration

Create a .env file in the project root directory with the following content, replacing placeholders with your actual values:

```bash
AWS_REGION=YOUR_AWS_REGION
RDS_HOST=YOUR_RDS_HOST
DB_NAME=YOUR_DB_NAME
```

Don't forget to update the app.js to point to the correct parameter store

4. Run the Application:

Start the Express.js application:
```bash
node app.js start
```

The application will be accessible at http://localhost:3000.

## Usage

Access the /dump_data route to retrieve data from the MySQL database. This demonstrates a secure way to fetch database credentials from AWS Parameter Store.

Dependencies
- Express.js
- mysql2
- AWS SDK for JavaScript
- dotenv

## DATABASE

This SQL script will create a database named dump_data if it doesn't already exist and then create a table named dump_data with the specified columns.

```
CREATE DATABASE dump_data;

USE dump_data;

CREATE TABLE IF dump_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);
```

Insert three sample rows into the dump_data table

```
INSERT INTO dump_data (email, first_name, last_name)
VALUES
  ('john.doe@example.com', 'John', 'Doe'),
  ('jane.smith@example.com', 'Jane', 'Smith'),
  ('bob.johnson@example.com', 'Bob', 'Johnson');
```

## About
This application serves as a template for building Express.js applications with secure credential management using AWS Parameter Store. You can customize and extend it for your specific use cases.

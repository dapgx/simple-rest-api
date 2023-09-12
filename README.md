# Node.js Express App with AWS SSM Parameter Store Integration

This is a Node.js application built with Express.js that demonstrates how to integrate with the AWS SSM (Systems Manager Parameter Store) to retrieve database credentials and connect to a RDS database. The application also uses environment variables loaded from a `.env` file for configuration.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Node.js Official Website](https://nodejs.org/)
- npm (Node Package Manager): Installed with Node.js
- AWS CLI (optional): [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

## Getting Started

> This Project is build and tested on Node.js 16.

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Create a .env file in the root directory of the project and add the following environment variables with your values:

   ```bash
   AWS_REGION=your_aws_region
   RDS_HOST=your_rds_host
   DB_NAME=your_db_name
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   AWS_SESSION_TOKEN=your_session_token
   SSM_DB_USERNAME_PARAMETER=/your/ssm/parameter/store/db/username
   SSM_DB_PASSWORD_PARAMETER=/your/ssm/parameter/store/db/password
   ```

3. Install the required Node.js packages by running:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   node app.js
   ```

The application will start, and you can access it at http://localhost:3000.

## Usage
The application exposes an endpoint at /dump_data that retrieves data from a MySQL database using the credentials obtained from the AWS SSM Parameter Store.

To access the data, make a GET request to http://localhost:3000/dump_data.

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

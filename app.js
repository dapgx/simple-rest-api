const express = require('express');
const mysql = require('mysql2/promise');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
});

const ssm = new AWS.SSM();

async function getDatabaseCredentials() {
  const parameterNames = [process.env.SSM_DB_USERNAME_PARAMETER, process.env.SSM_DB_PASSWORD_PARAMETER];
  const ssmParameters = await ssm.getParameters({ Names: parameterNames }).promise();
  const credentials = {};
  ssmParameters.Parameters.forEach((param) => {
    credentials[param.Name.split('/').pop()] = param.Value;
  });
  return credentials;
}

async function createDBConnection() {
  const credentials = await getDatabaseCredentials();
  const connection = await mysql.createConnection({
    host: process.env.RDS_HOST,
    user: credentials.dbusername,
    password: credentials.dbpassword,
    database: process.env.DB_NAME,
  });
  return connection;
}

app.get('/dump_data', async (req, res) => {
  try {
    const connection = await createDBConnection();
    const [rows] = await connection.execute('SELECT email, first_name, last_name FROM dump_data');
    connection.end();

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

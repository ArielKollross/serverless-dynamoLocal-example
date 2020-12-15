const { DynamoDB } = require('aws-sdk')

module.exports = new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
})

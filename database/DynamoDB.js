const { DynamoDB } = require('aws-sdk')

module.exports = new DynamoDB({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
})


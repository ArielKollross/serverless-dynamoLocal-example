"use strict";

const { DynamoDB, config } = require('aws-sdk')

// config.update({
//     region: 'localhost',
//     endpoint: 'http://localhost:8000',
//     accessKeyId: 'local',
//     secretAccessKey: 'local',
// });

const dynamoDB = new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'local',
    secretAccessKey: 'local',
});

module.exports.handler = async ( event )  => {

    const params =  {
        TableName: 'dev-MyDynamo',
        Item: {
            id: '3',
            email: 'ironman@stark.com',
            name: 'Iron Man',
        }
    }

    
    const response = await dynamoDB.put(params, (err, data) => {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            return
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'era pra ter dado certo!'})
    }
}

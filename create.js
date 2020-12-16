"use strict";

const { v4 } = require('uuid');
const DynamoDB = require('./database/DocumentClient');

module.exports.handler = async ( event )  => {
  const { email, name } = JSON.parse(event.body);

  const data =  {
    TableName: 'dev-MyDynamo',
      Item: {
          id: v4(),
          email,
          name,
        }
    }

  // await dynamoDB.put(data, (err, value) => {
  //   if(err) {
  //     return console.log(JSON.stringify(err))
  //   }
  //   console.log(JSON.stringify(value))
  // })

  DynamoDB.put(data).promise()
    .catch(err => { 
      throw err 
    })

    return {
        statusCode: 200,
        body: JSON.stringify(data.Item)
    }
}

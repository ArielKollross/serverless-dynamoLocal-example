module.export = (status, data, responseMessage ) => {
    return {
      statusCode: status,
      body: JSON.stringify({
        message:  responseMessage || 'Success action',
        data
      })
    }
}
const createResponse = (status, message, data = null) => {
    return {
      status,
      message,
      data,
    };
};
  
module.exports = {
    success: (message, data = null) => createResponse(true, message, data),
    error: (message, data = null) => createResponse(false, message, data),
};
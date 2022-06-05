const CustomResponse = {
    success: (statusCode, body) => {
        return { statusCode, body };
    },
    error: (statusCode, body) => {
        return { statusCode, body };
    }
}
module.exports = CustomResponse;
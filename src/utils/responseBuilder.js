const buildResponse = ({ status = 200, error = false, message = '', data = null }) => {
    return {
        status,
        error,
        message,
        data
    };
};

module.exports = buildResponse;
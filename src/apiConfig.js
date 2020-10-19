export const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://sharee-api.herokuapp.com'
    : 'http://localhost:5003'
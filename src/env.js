let baseURL;
switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = '/api'
        break;
    case 'test':
        baseURL = '/api'
        break;
    case 'prod':
        baseURL = '/api'
        break;
    default:
        break;
}

export default {
    baseURL
}
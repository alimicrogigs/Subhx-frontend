const {parsed : localEnv } = require('dotenv').config();

module.exports={
    env:localEnv,
    images: {
        domains: ['authentication.bit24hr.in'],
    },
}
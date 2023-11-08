import jwt from 'jsonwebtoken';

export const getAccessToken = () => {

    var now = Math.floor(Date.now() / 1000);
    var exp = now + 3600;

    var header = { cty: "stringee-api;v=1" };

    var payload = {
        jti: process.env.API_KEY_SID + "-" + now,
        iss: process.env.API_KEY_SID,
        exp: exp,
        rest_api: 1
    };

    var token = jwt.sign(payload, process.env.API_KEY_SECRET, { algorithm: 'HS256', header: header })

    return token;
}
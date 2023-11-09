import jwt from 'jsonwebtoken';

export const getAccessToken = ({ API_KEY_SECRET, API_KEY_SID }) => {
    var now = Math.floor(Date.now() / 1000);
    var exp = now + 3600;

    var header = { cty: "stringee-api;v=1" };

    var payload = {
        jti: API_KEY_SID + "-" + now,
        iss: API_KEY_SID,
        exp: exp,
        rest_api: 1
    };

    var token = jwt.sign(payload, API_KEY_SECRET, { algorithm: 'HS256', header: header })

    return token;
}
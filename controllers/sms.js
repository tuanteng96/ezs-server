import {
    getAccessToken
} from "../utils/index.js"
import https from "https"

export const createSMS = async(req, res) => {

    try {
        var options = {
            hostname: 'api.stringee.com',
            port: 443,
            path: '/v1/sms',
            method: 'POST',
            headers: {
                'X-STRINGEE-AUTH': getAccessToken({ API_KEY_SECRET: req.body.API_KEY_SECRET, API_KEY_SID: req.body.API_KEY_SID }),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        var data = JSON.stringify({ sms: req.body.sms });

        let response = ""

        var reqs = https.request(options, (config) => {
            config.setEncoding('utf8');

            config.on('data', (chunk) => {
                response = chunk;
            })

            config.on('end', () => {
                res.status(200).json({
                    data: JSON.parse(response)
                })
            })
        });

        reqs.on('error', (e) => {
            res.status(500).json({ error: e.message })
        });

        reqs.write(data);
        reqs.end();

    } catch (error) {
        res.status(500).json({
            error
        })
    }
}
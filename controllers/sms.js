import { getAccessToken } from "../utils/index.js"
import https from "https"

export const createSMS = async(req, res) => {

    try {
        var options = {
            hostname: 'api.stringee.com',
            port: 443,
            path: '/v1/sms',
            method: 'POST',
            headers: {
                'X-STRINGEE-AUTH': getAccessToken(),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        var postData = JSON.stringify({
            "sms": [{
                "from": "FACEWASHFOX",
                "to": req.body.Phone,
                "text": req.body.Content
            }]
        });

        var req = https.request(options, function(res) {
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                console.log('BODY:', chunk);
            });

            res.on('end', function() {
                console.log('No more data in response.');
            });
        });

        req.on('error', function(e) {
            console.log('Problem with request:', e.message);
        });

        req.write(postData);
        req.end();

        //res.status(200).json({})

    } catch (error) {
        res.status(500).json({ error })
    }
}
import express from 'express'
import bodyParser from 'body-parser'
import cros from 'cors'

import sms from "./routers/sms.js"

import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '300mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cros())

app.use('/sms-otp', sms)

app.listen(PORT, () => {
    console.log("Server is running ...")
})
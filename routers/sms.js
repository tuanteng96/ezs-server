import express from "express"
import { createSMS } from "../controllers/sms.js"

const router = express.Router()

router.post('/', createSMS)

export default router
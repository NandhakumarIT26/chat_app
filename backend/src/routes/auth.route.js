import exporess from 'express';
const router = exporess.Router();
import { signup, signin, signout } from '../controllers/auth.controller.js';



router.get("/signin", signin)
router.post("/signup",signup)
router.get("/signout",signout)



export default router;


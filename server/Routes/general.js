import  express  from "express";
import { getAllUsers, getUser } from "../controllers/general.js";


const  router = express.Router();


//id from the controllers
router.get("/user/:id", getUser);

router.get("/user", getAllUsers);



export default router;
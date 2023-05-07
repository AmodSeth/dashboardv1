import  express  from "express";



const  router = express.Router();

router.get("/check", (req, res) => {
    res.send("<h1>this is the check</h1>")
})


export default router;
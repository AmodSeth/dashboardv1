import  express  from "Express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import morgan from "morgan";
import helmet from "helmet";

/*data imports*/

import User from "./models/User.js";
import { dataUser } from "./data/index.js";
import Products from "./models/Products.model.js";
import { dataProduct,dataProductStat } from "./data/index.js";
import ProductStat from "./models/ProductStats.model.js";



 /*
    importing routes
 */
import clientRoutes from './Routes/client.js';
import generalRoutes from './Routes/general.js';
import managementRoutes from './Routes/management.js';
import salesRoutes from './Routes/sales.js';




/*configs*/
dotenv.config();
const app = express();
//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
// app.use(morgan("common"))
app.use(cors());





/*Routes*/
app.use("/clients",clientRoutes);
app.use("/management",managementRoutes);
app.use("/general",generalRoutes);
app.use("/sales",salesRoutes);


/*mongoose setup*/
const PORT = process.env.PORT||5002;
const string = process.env.MONGOOSE_CONNECTION_STRING

app.get('/', (req, res) => {
   res.send("check from the server3");
})



mongoose.connect(string,{
   useNewUrlParser:true,
   useUnifiedTopology:true,
}).then(()=>{
   app.listen(PORT,()=>{
      console.log(`server port established : ${PORT}`);


      //addding the data into the mongo database
      //only add data only one time
      // User.insertMany(dataUser);
      // Products.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);

   })

}).catch((error)=>
console.log(error)
)




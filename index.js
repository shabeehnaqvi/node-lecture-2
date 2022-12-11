// const express = require("express");

// const app = express();

// // app.use(express.json());
// // const bodyParser =  require("body-parser");

// // app.use(bodyParser.urlencoded({extended: true }));
// // app.use(bodyParser.json());

// // const users = [
// //   {
// //     id: 1,
// //     name: "Shabeeh",
// //   },
// //   {
// //     id: 2,
// //     name: "Usama",
// //   },
// //   {
// //     id: 3,
// //     name: "Sohail",
// //   },
// // ];

// // function mlogger(req,res,next){
// //   console.log("This activity has been logged")
// //   next()

// // }
// // app.use(mlogger)

// const myroots = require('./routes/routes')
// app.use("/routes", myroots);
// app.listen(8080,()=>console.log("The Server is listening at server 8080"));


// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
const userRoutes = require("./routes/routes");

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import "./services/db.js";
import cors from "cors";
import employeeRegister from "./features/register-user/routeRegister.js";
import employeeLogin from "./features/login-user/routeLogin.js";
import EmployeeDetail from "./features/register-user/model.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// app.get("/getEmployee", async function (req, res) {
//   const studentData = await EmployeeDetail.find();
//   console.log("Student data ", studentData);
//   if (studentData) {
//     console.log("Student data ", studentData);
//     res.send(studentData);
//   } else {
//     res.send({ message: "No record Found " });
//   }
// });

// app.get("/getSingleEmployee/:email", async function (req, res) {
//   const employeeData = await EmployeeDetail.findOne({
//     email: req.params.email,
//   });
//   console.log("employee data ", employeeData);
//   if (employeeData) {
//     res.send(employeeData);
//   } else {
//     res.send({ message: "No record Found " });
//   }
// });

app.use("/employeeRegister", employeeRegister);
app.use("/employeeLogin", employeeLogin);

app.listen(3005, () => {
  console.log(" Running on the localhost:3005");
});

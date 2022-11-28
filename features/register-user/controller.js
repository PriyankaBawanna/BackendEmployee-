import EmployeeDetail from "./model.js";

export const addEmployee = function (req, res) {
  const { name, email, age, pincode, role, gender, password } = req.body;
  EmployeeDetail.findOne({ email: email }, (error, employee) => {
    if (employee) {
      console.log("user already Present ");
      res.send({ message: "user already Present" });
    } else {
      const employee = new EmployeeDetail({
        name,
        email,
        gender,
        pincode,
        age,
        role,
        password,
      });
      employee.save((error) => {
        if (error) {
          res.send(error);
        } else {
          res.send({ message: "successfully Register" });
        }
      });
    }
  });
};

export const detailsOfEmployee = async function (req, res) {
  const employeeData = await EmployeeDetail.find();
  console.log("Student data ", employeeData);
  if (employeeData) {
    console.log("Student data ", employeeData);
    res.send(employeeData);
  } else {
    res.send({ message: "No record Found " });
  }
};

export const getSingleEMployeeDetails = async function (req, res) {
  const employeeData = await EmployeeDetail.findOne({ _id: req.params.id });
  console.log("employee data ", employeeData);
  if (employeeData) {
    res.send(employeeData);
  } else {
    res.send({ message: "No record Found " });
  }
};

export const updateEmployeeInfo = async (req, res) => {
  console.log(req.body);

  let result = await EmployeeDetail.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
};

export const userProfile = async function (req, res) {
  const employeeData = await EmployeeDetail.findOne({
    email: req.params.email,
  });
  console.log("employee data ", employeeData);
  if (employeeData) {
    res.send(employeeData);
  } else {
    res.send({ message: "No record Found " });
  }
};

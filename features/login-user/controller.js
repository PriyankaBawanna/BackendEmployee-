import EmployeeDetail from "../register-user/model.js";
export const loginEmployee = async (req, res) => {
  var { role, email, password } = req.body;

  EmployeeDetail.findOne({ email: email }, (err, user) => {
    if (user) {
      const checkCredential = () => {
        if (
          user.role === role &&
          password === user.password &&
          email === user.email
        ) {
          console.log("email password And role everything are match ");
          res.send(true);
        } else {
          res.send({ message: "Please Check your Credentials " });
        }
      };

      switch (role) {
        case "Admin":
          if (user) {
            checkCredential(role, password, email);
          }

          break;
        case "HR":
          console.log("HR section ", email, password);

          if (user) {
            checkCredential(role, password, email);
          }

          break;

        case "Manger":
          console.log("Manger section ", email, password);

          if (user) {
            checkCredential(role, password, email);
          }

          break;

        default:
          console.log("No User Found ");
      }
    } else {
      console.log("No User email Match ");
      res.send({ message: "Please Check your Credentials " });
    }
  });
};

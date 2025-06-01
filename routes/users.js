const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users);//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);
  // Copy the code here
  res.send(filtered_users);//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  users.push ({
    "firstName": req.query.firstName,
    "lastName": req.query.lastName,
    "email": req.query.email,
    "DOB": req.query.DOB,
  
  });
  res.send("The user" + req.firstName + "has been added successfully" );//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter((users) => users.email === email);

  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];  // Fixed: Correctly access first user

    let DOB = req.query.DOB;
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    if (DOB) {
      filtered_user.DOB = DOB;
    }
    if (firstName) {
      filtered_user.firstName = firstName;
    }
    if (lastName) {
      filtered_user.lastName = lastName;
    }

    users = users.filter((user) => user.email != email);
    users.push(filtered_user);
    res.send(`User with email ${email} updated`);
  } else {
    res.send("User not found");
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;

export default [
    {
      name: "An",
      email: "an@gmail.com",
      password: "12", // correspond à "123456"
    }
  ];
  
  
const  usersTable = [
  {
    name: "An",
    email: "an@gmail.com",
    password: "$2b$10$WiIzzTnkX0vOv3q7Yp.ISeo7NpMRHUV0PKr21zvNlBqD6slN10Tg.", // correspond à "123456"
  },
  {
    name: "Admin",
    email: "aadmin@gmail.com",
    password: "$2b$10$c6WOzie10E02Wi4WJuIJcOYt4B5yh7M02dKyYQYiLxRUzMxTAixKW", // correspond à "sss"
  }
];
db.users.insertMany(usersTable)

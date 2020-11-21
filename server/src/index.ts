import app from "./api/app";
//import "../global/enviroment"
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log("Server is up 🚀");
});

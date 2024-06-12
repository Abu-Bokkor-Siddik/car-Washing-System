import app from "./app";
const mongoose = require("mongoose");

async function main() {
try {
  await mongoose.connect("mongodb+srv://carWashing:EEjezPN20QgSO7cq@cluster0.kkqbu90.mongodb.net/carWashing?retryWrites=true&w=majority&appName=Cluster0");
  console.log('database connect')
  
} catch (error) {
  console.log(error)
}
}

//carWashing
//EEjezPN20QgSO7cq
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
main()
const mongoose = require("mongoose");
// const config = require("config");
// const db = "mongodb+srv://earlyCoin:earlyCoin__earlyCoin@cluster0.yc2pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db = "mongodb+srv://earlyCoin:M6a4M41frjvsetFN@cluster0.4icji.mongodb.net/earlyCoins?retryWrites=true&w=majority";

mongoose.connect(db,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to database !!');
})
.catch((err)=>{
    console.log('Connection failed !!'+ err.message);
});


// connectDB();
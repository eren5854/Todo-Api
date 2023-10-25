const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://test:1@cv-v3-db.5bxwt3d.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("Veritabanına başarılıyla bağlandı");
})
.catch((err) => {
    console.log("veritabanına bağlanılamadı" + err);
})

// const uri = "mongodb+srv://test:1@cv-v3-db.5bxwt3d.mongodb.net/";

// function connect(){
//     mongoose.connect(uri).then(res=>{
//         console.log("MongoDb bağlantısı başarılı");
//     });
// }

// module.exports = connect;
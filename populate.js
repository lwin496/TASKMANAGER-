require('dotenv').config()
const connectDB = require('./db/connect')
const Fruit = require('./models/DevilFruit')
const jsonProducts = require('./products.json')


const start = async () =>{ 
      try{ 
            await connectDB(process.env.MONGO_URI)
            await Fruit.deleteMany();
            await Fruit.create(jsonProducts);
            console.log("Upload succssessful")
            process.exit(0)
      }catch(err){ 
            console.log(err)
            process.exit(1)
      }
}
start()
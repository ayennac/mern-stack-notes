require('dotenv').config()


const express = require('express')

const workoutRoutes = require('./routes/workouts')



//Initializing an express app
const app = express()


//Routes 
//Specifying the path, when we fire a request to '/api/workouts.. then it will head into the workoutRoutes to find the correct route
app.use('/api/workouts', workoutRoutes)

//Middleware function that will fire anytime a request comes in 

///any request that comes in, 
///with this middleware, it will look for the data in the body of a request
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


//Listening for requests
app.listen(process.env.PORT, () =>[
    console.log('listening on port', process.env.PORT)
])

//If you want this server to run continuously,
//downloand nodemon and run it with 'nodemon server.js'


//To attach an 'npm run' command that includes 'noemon server.js'
//add it to the package.json file
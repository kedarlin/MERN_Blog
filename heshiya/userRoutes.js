import { addNewUser ,getUser, getUserId} from "../controllers/userController";

const routes = (app) => {
    app.route('/user')
    //get all user
    .get((req, res, next) =>
    {
        console.log (`request from :  ${req.originalUrl}`)
        console.log(`request type : ${req.method}`)
        next();
    }, getUser)

    //post a new user
.post(addNewUser );
app.route('/user/:userId')

//to get specific user
.get(getUserId)
.put((req,res) => 
res.send(' put request suceessfull !')
)

.delete((req, res) => 
res.send('delete request sucessfull')
)
}

export default routes;
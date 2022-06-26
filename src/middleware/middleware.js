
const { Octokit } = require("@octokit/rest")            // imporing octokit 



const octokit = new Octokit({
  auth: process.env.personal_access_token          // creating an instant of octokit
})


const User = async(req,res,next) => {                      // middleware to get authenticated username

    try{
        if(req.body.username)                         //    if request body contains a username then we use it
        {
            req.username = req.body.username
           
            next()
        } else{                                         //      else pass authenticated usernmae

            await octokit.request('GET /user', {}).then((result)=> {
                
                req.username = result.data.login
                next()
            })
        }
    } catch(e) {

    }
}


module.exports = User
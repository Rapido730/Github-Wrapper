
const { Octokit } = require("@octokit/rest")            // imporing octokit 
const User = require("github-api/dist/components/User");               

const octokit = new Octokit({
  auth: process.env.personal_access_token         // creating an instant of octokit
})

const createRepo = async (name,private) => {                // function to create a repository

  await octokit.request('POST /user/repos', {
    name,
    private
  }).catch((e) => {
    
        throw new Error()
    
  })
}


const deleteRepo = async (owner,repo) => {               //  function to delete a repository

  await octokit.request('DELETE /repos/{owner}/{repo}', {
    owner,
    repo
  }).then(() => {

  }).catch((e) => {
    
        throw new Error(e)
    
  })
}


const getAllrepo = async(username,cb) => {         // function to list all repository of an user
    
     await octokit.request('GET /users/{username}/repos', {
        username
      }).then((res) => {

        cb(res.data)
      }).catch((e)=> {
        throw new Error()
      })

      
}
  
const getAllrepoTopics= async (username,repoName , cb) => {        // function to list all repository topics
  
  await octokit.request('GET /repos/{owner}/{repo}/topics', {
    owner: username,
    repo: repoName
  }).then((res) => {

    cb(res.data.names)
  }).catch((e)=> {
    throw new Error()
  })
}


module.exports = {createRepo,getAllrepo,getAllrepoTopics,deleteRepo}         // importing all functions
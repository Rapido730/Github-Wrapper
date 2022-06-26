# instructions to run server
    run a script "npm run dev" from parent folder.
    
## put you personal access token value in a file dev.env in config folder

## url 
### "localhost:3000/newRepo"  to create a new repository   
* send  {
    "name" : "RepoName",
    private : true
    }                                as the request body in json

### "localhost:3000/repos"  to list all repository of an user
* send   {
    "username" : "username"
}          as the request body  or leave empty if needed repository of authenticated user

### "localhost:3000/repo/topics"
* send  {
    "repoName" : "repoName"
}                as the request body  in json

### "localhost:3000/repoDelete" 
* send {
    "repo": "repoName"
}              as the request body in json


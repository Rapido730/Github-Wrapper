const express = require('express')      // importing express 
const {createRepo,getAllrepo,getAllrepoTopics,deleteRepo} = require('../octokit/octokit')   //importing important function
const User = require('../middleware/middleware')


const router = new express.Router()       // creating a new router

router.post('/newRepo', async(req,res) => {               //endpoint to create a new Repository
    try{
        await createRepo(req.body.name,req.body.private)           // passing values to function
        res.status(201).send('repository created!')
    } catch(e) {
        res.status(500).send('Respsitory not created')    
    }
})

router.get('/repos', User,async(req,res) => {        //  endpoint to list all repository of a user
    try
    {
        await getAllrepo(req.username, (repos) => {
            const result = []
            for(let rep of repos) {
                result.push(rep.name)
            }
            res.send(result)

        })
        
    } catch(e) {
        res.status(404).send()
    }
})

router.get('/repo/topics',User, async(req,res) => {       // endpoint to list all topics of a repository 
    try
    {
        const repoName = req.body.repoName
        await getAllrepoTopics(req.username,repoName ,(topics) => {       // passing values to function
            res.send(topics)
        })
        // console.log(username)
        // console.log(repos)
    } catch(e) {
        res.status(404).send()
    }
})

router.post('/repoDelete', User,async(req,res) => {                    // endpoint to delte a repository
    
    
    const repo = req.body.repo
    try
    {
        await deleteRepo(req.username,repo)
        res.status(204).send()
 
    } catch(e) {
        res.status(404).send()
    }
})




module.exports = router
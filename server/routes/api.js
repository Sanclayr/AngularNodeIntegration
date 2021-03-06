const express = require('express')
const router = express.Router()

const axios = require('axios')

const PostAPI = 'https://jsonplaceholder.typicode.com/'

// GET 

router.get('/', (req, res) => {

    res.send('It Works')

})

router.get('/posts', (req, res) => {

    axios.get(`${PostAPI}posts`).then(posts => {
        res.status(200).json(posts.data)
    }).catch(error => {
        res.status(500).send(error)
    })

})

module.exports = router;
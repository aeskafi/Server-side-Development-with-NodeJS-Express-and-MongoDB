// ? Assignment 1 Task 3
// Todo: implement the router for: http://localhost:3000/leaders, http://localhost:3000/leaders/:leaderId
// * Done

const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaders to you.');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403; // Forbidden
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaders!');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the details of the leader: ' +
            req.params.leaderId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403; // Forbidden
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write('Update the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name +
            'with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting leader: ' + req.params.leaderId);
    });

module.exports = leaderRouter;
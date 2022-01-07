// ? Assignment 1 Task 2
// Todo: implement the router for: http://localhost:3000/promotions, http://localhost:3000/promotions/:promoId
// * Done
const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions to you.');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403; // Forbidden
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promotions!');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the details of the promotion: ' +
            req.params.promoId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403; // Forbidden
        res.end('POST operation not supported on /promotions/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write('Update the promotion: ' + req.params.promoId + '\n');
        res.end('Will update the promotion: ' + req.body.name +
            'with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promotion: ' + req.params.promoId);
    });

module.exports = promoRouter;
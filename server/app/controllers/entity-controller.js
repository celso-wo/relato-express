/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

const express = require('express');
const router = express.Router();
const Entity = require('../models/entity');

// List
router.get('/:type', (req, res) => {
  console.info(`List entity ${req.params.type}`);

  Entity.find({
    type: req.params.type
  }, (err, entities) => {
    if (err) {
      res.send(err);
    }

    res.json(entities);
  });
});

// Get
router.get('/:type/:entityId', (req, res) => {
  console.info(`Get entity ${req.params.type} with id(${req.params.entityId})`);

  Entity.findOne({
    type: req.params.type,
    _id: req.params.entityId
  }, (err, entity) => {
    if (err) {
      res.send(err);
    }

    res.json(entity);
  });
});

// Create
router.post('/:type', (req, res) => {
  console.info(`Create entity ${req.params.type}: ${JSON.stringify(req.body)}`);

  Entity.create({
    type: req.params.type,
    data: req.body
  }, (err, entity) => {
    if (err) {
      res.send(err);
    }

    res.json(entity);
  });
});

// Update
router.post('/:type/:entityId', (req, res) => {
  console.info(`Update entity ${req.params.type} with id(${req.params.entityId}): ${JSON.stringify(req.body)}`);

  Entity.findOne({
    type: req.params.type,
    _id: req.params.entityId
  }, (err, entity) => {
    if (err) {
      res.send(err);
    }

    entity.data = req.body;
    entity.save();

    res.json(entity);
  });
});

// Delete
router.delete('/:type/:entityId', (req, res) => {
  console.info(`Delete entity ${req.params.type} with id(${req.params.entityId})`);

  Entity.remove({
    type: req.params.type,
    _id: req.params.entityId
  }, (err, entity) => {
    if (err) {
      res.send(err);
    }

    res.send(200);
  });
});

module.exports = router;

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const badBoyzSchema = Schema({
  name: {type: String, required: true},
  pos: {type: String, required: true},
  point: {type: Integer, required: true}
});

module.exports = {
  schema: badBoyzSchema,
  model: mongoose.model('BadBoyz', badBoyzSchema),
  registry: {
    urlTemplates: {
      // On met quoi ici ?
    }
  }
};


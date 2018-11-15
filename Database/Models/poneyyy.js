'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poneySchema = Schema({
  type: {type: String, required: true},
  pos: {type: String, require: true}
  // Cooldown ?
});

module.exports = {
  schema: poneySchema,
  model: mongoose.model('Poneyyy', poneySchema),
  registry: {
    urlTemplates: {
      // On met quoi ici ?
    }
  }
};
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goodGuySchema = Schema({
  name: {type: String, required: true},
  pos: {type: String, required: true},
  point: {type: Integer, required: true}
});

module.exports = {
  schema: goodGuySchema,
  model: mongoose.model('GoodGuy', goodGuySchema),
  registry: {
    urlTemplates: {
      // On met quoi ici ?
    }
  }
};
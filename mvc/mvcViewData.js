/*
* mvcViewData
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

'use strict';

var utils = require('zoo-utils'),
    mvcModelState = require('./mvcModelState');

var mvcViewData = module.exports = function(set) {
    utils.extend(this, set);
    if (!this._model) { this._model = {}; }
    this._modelState = new mvcModelState();
    mvcViewData.superclass.constructor.call(this, true);
};

utils.inherit(mvcViewData, utils.dictionary, {

    httpContext: null, _model: null, _modelState: null,

    model: function(m) {
        return m ? (this._model = m, this) : (this._model);
    },

    getModelState: function() {
        return this._modelState;
    },

    getModelMetadata: function() {
        return this._model && this._model.__metadata;
    }
});

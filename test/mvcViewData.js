var assert = require("assert");
var mvcViewData = require('../mvc/mvcViewData');

describe('mvcViewData', function() {

    var viewData = new mvcViewData();
    var model = { __metadata: {} };

    describe('.model', function() {
        it('get default', function(){
            assert.equal(!!viewData.model(), true);
        });

        it('set', function() {
            assert.equal(viewData.model(model), viewData);
        });

        it('get after set', function() {
            assert.equal(viewData.model(), model);
        });
    });

    describe('.getModelState', function() {
        it('get default', function() {
            assert.equal(viewData.getModelState() != null, true);
        });
    });

    describe('.getModelMetadata', function() {
        it('get default', function() {
            assert.equal(viewData.getModelMetadata() != null, true);
        });
    });

    describe('inner dictionary', function() {

        var dict = viewData;
        
        it('.set', function() {
            assert.equal(dict.set('key', 'value'), dict);
            assert.equal(dict.set('key2', 'value2'), dict);
        });

        it('.get', function() {
           assert.equal(dict.get('key'), 'value');
        });

        it('.exists', function() {
            assert.equal(dict.exists('key'), true);
        });

        it('.remove', function() {
            assert.equal(dict.remove('key'), true);
        });

        it('.exists again after remove', function() {
            assert.equal(dict.exists('key'), false);
        });

        it('.count', function() {
            assert.equal(dict.count(), 1);
        });

        it('.clear', function() {
            assert.equal(dict.clear(), dict);
        });

        it('.count after clear', function() {
            assert.equal(dict.count(), 0);
        });
    });

});
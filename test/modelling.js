var assert = require("assert");
var modellingManager = require('../mvc/modelling/$manager');

var modelling = new modellingManager();

describe('dataTypeManager', function() {

    var dataTypes = modelling.dataTypes;
    var type = function() {};

    describe('.register', function() {
        it('default', function() {
            dataTypes.register('test', type);
            assert.equal(dataTypes._inner.count(), 1);
        });
        it('name empty exception', function() {
            try {
                var ret = dataTypes.register('', type);
            } catch (ex) {
                assert.equal(ex instanceof Error, true);
            }
        });
        it('name type invalid exception', function() {
            try {
                var ret = dataTypes.register({}, type);
            } catch (ex) {
                assert.equal(ex instanceof Error, true);
            }
        });
        it('class type invalid exception', function() {
            try {
                var ret = dataTypes.register('test', null);
            } catch (ex) {
                assert.equal(ex instanceof Error, true);
            }
        });
        it('already exists exception', function() {
            try {
                var ret = dataTypes.register('test', type);
            } catch (ex) {
                assert.equal(ex instanceof Error, true);
            }
        });
    });

    describe('.all', function() {
        it('default', function() {

        });
    });


    it('.all', function() {
        
    });

    it('.get', function() {
        
    });

    it('.exists', function() {
        
    });

    it('.remove', function() {
        
    });

    it('.clear', function() {
        
    });

});


describe('validatorManager', function() {

    var validators = modelling.validators;

    it('.register', function() {
        
    });

    it('.all', function() {
        
    });

    it('.get', function() {
        
    });

    it('.exists', function() {
        
    });

    it('.remove', function() {
        
    });

    it('.clear', function() {
        
    });

});


describe('modellingManager', function() {

});

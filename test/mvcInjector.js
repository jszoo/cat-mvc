var assert = require("assert");
var mvcInjector = require('../mvc/mvcInjector');

describe('mvcInjector', function() {

    describe('.annotate', function() {

        var func = function(arg1, arg2, arg3) {
            assert.equal(arg1, 1);
            assert.equal(arg2, 2);
            assert.equal(arg3, 3);
        };

        it('function type', function() {
            var annotated = mvcInjector.annotate(func);
            assert.equal(annotated.func, func);
            assert.equal(annotated.args.length, 3);
            assert.equal(annotated.args[0], 'arg1');
            assert.equal(annotated.args[1], 'arg2');
            assert.equal(annotated.args[2], 'arg3');
            annotated.func(1, 2, 3);
        });

        var func1 = function(p1, p2, p3) {
            assert.equal(p1, 1);
            assert.equal(p2, 2);
            assert.equal(p3, 3);
        };
        var array = ['arg1', 'arg2', 'arg3', func1];

        it('array type', function(){
            var annotated = mvcInjector.annotate(array);
            assert.equal(annotated.func, func1);
            assert.equal(annotated.args.length, 3);
            assert.equal(annotated.args[0], 'arg1');
            assert.equal(annotated.args[1], 'arg2');
            assert.equal(annotated.args[2], 'arg3');
            annotated.func(1, 2, 3);
        });

        it('exception', function() {
            try {
                mvcInjector.annotate({});
            } catch (ex) {
                assert.equal(ex instanceof Error, true);
            }
        });
    });

});

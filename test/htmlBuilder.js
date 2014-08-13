
var assert = require("assert");
var htmlBuilder = require('../mvc/htmlBuilder');

describe('htmlBuilder', function() {

    var builder = new htmlBuilder('html');
    var node = builder.newTag();

    describe('.newTag', function() {
        it('create and return new builder', function() {
            assert.equal(node instanceof htmlBuilder, true);
        });
        it('the new builder as a child', function() {
            assert.equal(builder.children[0], node);
        });
    });

    describe('.tag', function() {
        it('set action', function() {
            assert.equal(node.tag('head'), node);
        });
        it('get action', function() {
            assert.equal(node.tag(), 'head');
        });
    });

    describe('.cls', function() {
        node.cls('zoo');
        it('set action', function() {
            assert.equal(node.cls('title'), node);
        });
        it('get all action', function() {
            assert.equal(node.cls(), 'zoo title');
        });
    });

    describe('.css', function() {
        node.css('width', '10px')
        it('set action', function() {
            assert.equal(node.css('color', 'red'), node);
        });
        it('get action', function() {
            assert.equal(node.css('color'), 'red');
        });
        it('get all action', function() {
            assert.equal(node.css(), 'width: 10px; color: red;');
        });
    });


    describe('.attr', function() {
        node.attr('zoo', 'cat')
        it('set action', function() {
            assert.equal(node.attr('name', 'head'), node);
        });
        it('get action', function() {
            assert.equal(node.attr('name'), 'head');
        });
        it('get all action', function() {
            assert.equal(node.attr(), 'zoo="cat" name="head"');
        });
    });

    describe('.append', function() {
        it('default', function() {
            assert.equal(node.append('inner content appended'), node);
        });
    });

    describe('.toString', function() {
        it('default', function() {
            assert.equal(builder.toString(), '<html><head zoo="cat" name="head" class="zoo title" style="width: 10px; color: red;">inner content appended</head></html>');
        });

        it('with indent', function() {
            assert.equal(builder.toString(true), '<html>\n    <head zoo="cat" name="head" class="zoo title" style="width: 10px; color: red;">\n        inner content appended\n    </head>\n</html>');
        });
    });
});
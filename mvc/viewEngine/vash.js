/*
* vash
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.10
*/

var fs = require('fs'),
    path = require('path'),
    utils = require('../utilities');

var vash = require('vash'),
    helpers = vash['helpers'];

vash.config.useWith = true;
vash.config.modelName = 'viewdata';
vash.config.helpersName = 'html';
vash.helpers.partial = vash.helpers.include;

vash.loadFile = function(filepath, options, cb) {

    // extend works from right to left, using first arg as target
    options = utils.extend( {}, vash.config, options || {} );

    var browser = helpers.config.browser
        ,tpl

    if( !browser && options.settings && options.settings.views ){
        // this will really only have an effect on windows
        filepath = path.normalize( filepath );

        if( filepath.indexOf( path.normalize( options.settings.views ) ) === -1 ){
            // not an absolute path
            filepath = path.join( options.settings.views, filepath );
        }

        if( !path.extname( filepath ) ){
            filepath += '.' + ( options.settings['view engine'] || 'vash' )
        }
    }

    /*********************** zoo injected code start **********************/
    try {
        if (!browser && !utils.isAbsolute(filepath) && utils.isFunction(options.__ZOO_findView)) {
            filepath = options.__ZOO_findView(filepath);
        }
    } catch (ex) {
        cb (ex);
    }
    /*********************** zoo injected code end **********************/

    // TODO: auto insert 'model' into arguments
    try {
        // if browser, tpl must exist in tpl cache
        tpl = options.cache || browser
            ? helpers.tplcache[filepath] || ( helpers.tplcache[filepath] = vash.compile(fs.readFileSync(filepath, 'utf8')) )
            : vash.compile( fs.readFileSync(filepath, 'utf8') )

        cb && cb(null, tpl);
    } catch(e) {
        cb && cb(e, null);
    }
};

vash.renderFile = function(filepath, options, cb){

    vash.loadFile(filepath, options, function(err, tpl){
        // auto setup an `onRenderEnd` callback to seal the layout
        var prevORE = options.onRenderEnd;

        cb( err, !err && tpl(options, function(err, ctx){
            ctx.finishLayout()
            if( prevORE ) prevORE(err, ctx);
        }) );
    })
};

/*
* export the overrided vash engine
*/
module.exports = function(filePath, options, callback) {
    vash.renderFile(filePath, options, callback);
};

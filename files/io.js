/*
* io
* author: ronglin
* create date: 2014.6.22
*/

'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = {

    writeText: function(filePath, text) {
        var dir = path.dirname(filePath);
        this.ensureDirectoryExists(dir);
        fs.writeFileSync(filePath, text, { encoding: 'utf-8' });
    },

    readText: function(filePath) {
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, { encoding: 'utf-8' });
        } else {
            return null;
        }
    },

    renameFile: function(oldPath, newPath) {
        fs.renameSync(oldPath, newPath);
    },

    deleteFile: function(filePath) {
        fs.unlinkSync(filePath);
    },

    copyFile: function(source, dest, override) {
        var done = function(err) { };
        var destExists = fs.existsSync(dest);
        if (destExists && !override) { return; }
        // read
        var rs = fs.createReadStream(source);
        rs.on('error', function(err) { done(err); });
        // write
        this.ensureDirectoryExists(path.dirname(dest));
        var ws = fs.createWriteStream(dest);
        ws.on('error', function(err) { done(err); });
        ws.on('close', function(ex) { done(); });
        //
        rs.pipe(ws);
    },

    ensureDirectoryExists: function(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    },

    renameDirectory: function(oldDir, newDir) {
        fs.renameSync(oldDir, newDir);
    },

    deleteDirectory: function(dirPath, recursive) {
        //TODO:
    },

    copyDirectory: function(source, dest, override) {
        //TODO: 
    }

};
/*
* areaEx
* author: ronglin
* create date: 2014.6.28
*/

'use strict';

module.exports = {

    onRegister: function(area) {
    	area.mapRoute(
    		('/' + area.name + '/:acTIon?/:conTRoller?/:ArticleId?'),
            ({ controller: 'home', action: 'index' })
        );
    },

    onUnload: function(area) {
    }
};
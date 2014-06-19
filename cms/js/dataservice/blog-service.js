/*
* blog-service
* author: ronglin
* create date: 2014.5.4
*/

module.exports = [function () {
    return {
        query: function (take) {
        	return [{
        		title:'title1',
        		content:'content1'
        	},{
        		title:'title2',
        		content:'content2'
        	},{
        		title:'title3',
        		content:'content3'
        	},{
        		title:'title4',
        		content:'content4'
        	},{
        		title:'title5',
        		content:'content5'
        	}];
        }
    };
}];
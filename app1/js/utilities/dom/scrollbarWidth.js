/*
* scrollbar width
* author: ronglin
* create date: 2014.5.22
*/

module.exports = (function () {
    var helper = document.createElement('div');
    // fix opera bug: put style (position:absolute;top:-99999px;) to hide the test div, or the page would be flashed.
    helper.style.cssText = 'overflow:scroll;width:100px;height:100px;position:absolute;top:-99999px;';
    document.body.appendChild(helper);
    var ret = {
        vertical: helper.offsetWidth - helper.clientWidth,
        horizontal: helper.offsetHeight - helper.clientHeight
    };
    document.body.removeChild(helper);
    return ret;
})();
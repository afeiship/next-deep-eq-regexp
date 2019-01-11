(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isRegExp = function(target) {
    return target instanceof RegExp;
  };

  nx.deepEqRegexp = function(inReg1, inReg2) {
    if (inReg1 === inReg2) {
      return true;
    }

    var isRegExp1 = isRegExp(inReg1);
    var isRegExp2 = isRegExp(inReg2);
    if (isRegExp1 != isRegExp2) {
      return false;
    }
    if (isRegExp1 && isRegExp2) {
      return inReg1.toString() === inReg1.toString();
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepEqRegexp;
  }
})();

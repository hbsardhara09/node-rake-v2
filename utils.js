const Utils = {
  /**
     * Function to check given variable's value is valid or not
     * @param {any} variable - Variable
     * @param {string} type - (Optional) typeof variable
     * @returns {boolean} - If variable's value is valid then return true otherwise return false
     */
  isValidVal: (variable, type) => {
    /* eslint valid-typeof: ["error", { "requireStringLiterals": false }] */
    if (
      (type && typeof variable !== type) ||
            typeof variable === 'undefined' ||
            variable === null ||
            (typeof variable === 'string' && variable.trim !== undefined && variable.trim() === '')
    ) {
      return false;
    }
    return true;
  },

  removeDuplicates: (array) => {
    array = array.map((str) => {
      if (Utils.isValidVal(str)) {
        str = str.toLowerCase();
        str = str.trim();
        if (Utils.isValidVal(str)) {
          return str;
        }
      }
    }).filter((obj) => { return typeof obj !== 'undefined'; });;
    array = array.filter(function(item, pos) {
      return array.indexOf(item) === pos;
    });
    return array;
  },
};
module.exports.Utils = Utils;

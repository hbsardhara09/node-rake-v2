const Utils = {
  /**
     * Function to check given variable's value is valid or not
     * @param {any} variable - Variable
     * @param {string} type - (Optional) typeof variable
     * @returns {boolean} - If variable's value is valid then return true otherwise return false
     */
  isValidVal(variable, type) {
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
};
module.exports.Utils = Utils;

import glob from 'glob';
import _ from 'lodash';

export default (DI) => {

  let validators = glob
    .sync(`${__codeRoot}/validators/*.js`)
    .map(fn => {
      const Validator = require(fn).default;
      return new Validator(DI);
    });

  validators = _.keyBy(validators, 'id');

  return {
    getValidators: () => {
      return _.values(validators);
    },
    get: (id) => {
      const v = validators[id];
      if (v !== undefined) {
        return v;
      }
      return validators['none'];
    },
  };

};

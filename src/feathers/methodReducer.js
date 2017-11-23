import { combineReducers } from 'redux';
import _ from 'lodash';

const childReducer = (reducer, keywords, initState = {}) => (state = initState, action = {}) =>
  (_.isString(action.type) && keywords.find((keyword) => action.type.indexOf(keyword) !== -1))
    ? reducer(state, action)
    : state;

const stringSafe = (value) => _.isString(value) ? [value] : value;

const normalizeMappingValue = (value) => {
  const sValue = stringSafe(value);
  if (_.isArray(sValue)) return normalizeMappingValue({ keywords: sValue });
  if (_.isObject(sValue)) {
    const { keywords, ...rest } = sValue;
    const sKeywords = stringSafe(keywords);
    return {
      ...rest,
      keywords: sKeywords.map((keyword) => `_${keyword.toUpperCase()}`),
    };
  }
  return { keywords: [] };
};

const normalizeMapping = (mapping) => {
  const sMapping = stringSafe(mapping);
  if (_.isArray(sMapping)) {
    return normalizeMapping(_.reduce(
      sMapping,
      (sum, val) => ({ ...sum, [val]: val }),
      {}
    ));
  }
  if (_.isObject(sMapping)) {
    return _.reduce(
      sMapping,
      (sum, value, key) => ({
        ...sum,
        [key]: normalizeMappingValue(value),
      }),
      {}
    );
  }
  return {};
};

export default (reducer, mapping) => !mapping ? reducer : combineReducers(
  _.reduce(
    normalizeMapping(mapping),
    (sum, { keywords, initState }, key) => ({
      ...sum,
      [key]: childReducer(reducer, keywords, initState),
    }),
    {}
  )
);
import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import _ from 'lodash';
 

class Message extends Component {

  validateData = (attr, data, validator) => {
    return validate({[attr]: data}, {[attr]: validator});
  }

  getErrorMessage = (event) => {

    const attrName = this.props.name;
    const validator = _.get(this.context.validation, attrName);
    const value = _.get(this.context.data, attrName);

    const error = this.validateData(attrName, value, validator);

    return error ? error[attrName] : null;
  }


  render() {
    return (
      <div>{this.getErrorMessage()}</div>
    )
  }
}

Message.contextTypes = {
  data: PropTypes.object,
  validation: PropTypes.object,
  onChange: PropTypes.func,
  onError: PropTypes.func
};

export default Message;


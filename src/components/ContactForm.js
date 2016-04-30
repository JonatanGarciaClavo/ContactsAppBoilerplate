import React, { PropTypes } from 'react';

class ContactForm extends React.Component {

  render() {
    const { contact: { contact: { name, email, phoneNumber, imgUrl },
      errors }, onContactAttributeChange, onContactAttributeBlur } = this.props;
    return (
      <div>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  onContactAttributeChange: PropTypes.func.isRequired,
  onContactAttributeBlur: PropTypes.func,
  onSaveClick: PropTypes.func.isRequired,
}

export default ContactForm;

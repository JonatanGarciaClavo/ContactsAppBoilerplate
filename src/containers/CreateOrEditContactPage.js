import React, { Component, PropTypes } from 'react';

class CreateOrEditContactPage extends Component {
  render() {
    return null;
  }
}

CreateOrEditContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  displayError: PropTypes.func.isRequired,
};

export default CreateOrEditContactPage;

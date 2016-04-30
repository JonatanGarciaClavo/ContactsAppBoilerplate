import { LOADING_CONTACT, INITIALIZE_CONTACT, UPDATE_CONTACT_ATTRIBUTE,
VALIDATE_CONTACT, VALIDATE_CONTACT_ATTRIBUTE } from '../constants/contact-actions-constants';
import _ from 'lodash';

const initialState = {
  loading: false,
  isModified: false,
  contact: {
    email: '',
    imgUrl: '',
    name: '',
    phoneNumber: '',
  },
  errors: {},
};

const contact = (state = initialState, action) => {
};

export default contact;

import { LOADING_CONTACT, INITIALIZE_CONTACT, UPDATE_CONTACT_ATTRIBUTE,
VALIDATE_CONTACT, VALIDATE_CONTACT_ATTRIBUTE } from '../constants/contact-actions-constants';
import ContactsServices from '../services/contacts-services';
import SnackbarActions from './snackbar-actions';
import _ from 'lodash';

const initializeContact = (contact) => ({
  type: INITIALIZE_CONTACT,
  contact,
});

export default {
  initializeCreateOrEditContact(params) {
  },
  saveContact() {
  },
  onContactAttributeChange(name, value) {
  },
  onContactAttributeBlur(name, value) {
  },
}

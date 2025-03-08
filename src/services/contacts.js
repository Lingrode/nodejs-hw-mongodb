import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};

export const createContact = async (contactData) => {
  const contact = await ContactsCollection.create(contactData);
  return contact;
};

export const updateContact = async (id, contactData) => {
  const contact = await ContactsCollection.findOneAndUpdate(
    { _id: id },
    contactData,
    { new: true, includeResultMetadata: true },
  );

  if (!contact || !contact.value) return null;

  return contact;
};

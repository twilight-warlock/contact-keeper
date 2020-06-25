import React, { useReducer } from "react";
import { v4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 0,
        type: "professional",
        name: "Vision",
        email: "vish0301@gmail.com",
        phone: "111-111-1111",
        user: { $oid: "5ef060406fb31b4be8a19ae1" },
        date: { $date: { $numberLong: "1592897254437" } },
        __v: { $numberInt: "0" },
      },
      {
        id: 1,
        type: "personal",
        name: "Thor",
        email: "beerbelly@gmail.com",
        phone: "222-222-2222",
        user: { $oid: "5ef060406fb31b4be8a19ae1" },
        date: { $date: { $numberLong: "1592897417846" } },
        __v: { $numberInt: "0" },
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add Contact
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //   Delete Contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

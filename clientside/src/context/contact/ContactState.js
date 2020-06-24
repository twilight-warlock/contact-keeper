import React, { useReducer } from "react";
import uuid from "uuid";
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
        _id: { $oid: "5ef1aee68b368b46fc9945a0" },
        type: "professional",
        name: "Vision",
        email: "vish0301@gmail.com",
        phone: "111-111-1111",
        user: { $oid: "5ef060406fb31b4be8a19ae1" },
        date: { $date: { $numberLong: "1592897254437" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "5ef1af898b368b46fc9945a1" },
        type: "personal",
        name: "Thor",
        email: "beerbelly@gmail.com",
        phone: "222-222-2222",
        user: { $oid: "5ef060406fb31b4be8a19ae1" },
        date: { $date: { $numberLong: "1592897417846" } },
        __v: { $numberInt: "0" },
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add Contact

  //   Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

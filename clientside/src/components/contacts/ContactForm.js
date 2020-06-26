import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current != null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  //   On change of values in the form
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  // On form submission
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearCurrent();
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  // To clear current contact data
  const clearAllVal = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current === null ? "Add " : "Edit "}Contact
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="test@test.com"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Contact number"
        value={phone}
        onChange={onChange}
      />
      <h4>Contact Type :</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "250px",
        }}
      >
        <div>
          <input
            type="radio"
            name="type"
            value="personal"
            checked={type === "personal"}
            onChange={onChange}
          />{" "}
          Personal
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="professional"
            checked={type === "professional"}
            onChange={onChange}
          />{" "}
          Professional
        </div>
      </div>
      <div>
        <input
          type="submit"
          value={current === null ? "Add Contact" : "Update Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAllVal}>
            Clear Contact
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

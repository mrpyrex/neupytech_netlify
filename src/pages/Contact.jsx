import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { CREATE_CONTACT_MUTATION } from "../graphql/mutations";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  // const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event, createContact) => {
    event.preventDefault();
    createContact();
  };

  return (
    <section>
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">Contact Us</h2>
        </div>
        <div className="row contact-content">
          <div className="col-md-6">
            <h3>Make An Enquiry</h3>
            <Mutation
              mutation={CREATE_CONTACT_MUTATION}
              variables={{
                company,
                email,
                enquiry,
                firstName,
                lastName,
                message,
                phone,
              }}
              onCompleted={(data) => {
                setCompany("");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setEnquiry("");
                setMessage("");
              }}
            >
              {(createContact, { loading, error }) => {
                if (error) return <h3>error!</h3>;
                return (
                  <form
                    onSubmit={(event) => handleSubmit(event, createContact)}
                  >
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="company">Company name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          value={company}
                          onChange={(event) => setCompany(event.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <select
                          className="form-control"
                          value={enquiry}
                          onChange={(event) => setEnquiry(event.target.value)}
                        >
                          <option className="form-control">
                            Default select
                          </option>
                          <option className="form-control">
                            Website Development
                          </option>
                          <option className="form-control">
                            Digital Marketing
                          </option>
                          <option className="form-control">SEO</option>
                          <option className="form-control">Mobile App</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="content">A bit about your project</label>
                      <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                      ></textarea>
                    </div>

                    <button
                      disabled={
                        loading ||
                        !firstName.trim() ||
                        !lastName.trim() ||
                        !email.trim() ||
                        !phone.trim() ||
                        !message.trim()
                      }
                      type="submit"
                      className="btn btn-primary"
                    >
                      <i className="fab fa-telegram-plane mr-2"></i>Send Enquiry
                    </button>
                  </form>
                );
              }}
            </Mutation>
          </div>
          <div className="col-md-6">
            <div>
              <h3>Call Us</h3>
              <p>+234 703 3197 665</p>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>support@neupytech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

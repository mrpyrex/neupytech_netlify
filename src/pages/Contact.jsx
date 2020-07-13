import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">Contact Us</h2>
        </div>
        <div className="row contact-content">
          <div className="col-md-6">
            <h3>Make an Enquiry</h3>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="firstname">Firstname</label>
                  <input type="text" class="form-control" id="firstname" />
                </div>
                <div class="form-group col-md-6">
                  <label for="lastname">Lastname</label>
                  <input type="text" class="form-control" id="lastname" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group col-md-6">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" id="phone" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="company">Company name</label>
                  <input type="text" class="form-control" id="company" />
                </div>
                <div class="form-group col-md-6">
                  <select class="form-control">
                    <option class="form-control">Default select</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="content">A bit about your project</label>
                <textarea class="form-control" id="content" rows="5"></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Send Enquiry
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div>
              <h3>Call Us</h3>
              <p>+234 703 3197 665</p>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>info@neupytech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

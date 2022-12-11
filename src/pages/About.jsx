import React from "react";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">About Us</h2>
        </div>

        <div className="row py-4 my-4">
          <div className="col-md-4">
            <h3>Our Process</h3>
          </div>
          <div className="col-md-8 accordion" id="accordionExample">
            <div className="card">
              <div class="card-header" id="learn">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h3>Learn</h3>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="learn"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p>
                    We get to know not just about your project, what best ways
                    to execute it but we also get to know you and what your
                    brand for to enable tailor our design to your brand
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div class="card-header" id="design">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <h3>Design</h3>
                  </button>
                </h2>
              </div>

              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="design"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p>
                    Our design stage involves expressing specific details your
                    want to see in your project on wireframes. After reviewing
                    the wireframes, our team of designers would work with you to
                    create the look and feel of the UI/UX of your project.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div class="card-header" id="development">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <h3>Development</h3>
                  </button>
                </h2>
              </div>

              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="development"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p>
                    Our developers at this stage bring to life what you have
                    agreed with our designers. Serveral tests would be carried
                    out at this stage to ensure your project is functional;
                    given airtight security and confirmed to be bug free
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div class="card-header" id="deploy">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    <h3>Deploy & Growth</h3>
                  </button>
                </h2>
              </div>

              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="deploy"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p>
                    At this point your project is ready for launch! We'll bring
                    the project to an end with basic training to get you and
                    your team familiar with your app. Eventhough we've come to
                    the end of the project, we would not just let you alone, we
                    would be there to support you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row" id="team">
          <div className="col-md-4">
            <h3>Our Team</h3>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <div class="card-body">Add links for social accounts </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <div class="card-body">
                     Add links for social accounts
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <div class="card-body">
                   Add links for social accounts
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <div class="card-body">
                     Add links for social accounts 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;

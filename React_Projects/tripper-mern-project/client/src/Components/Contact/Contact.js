import React from 'react';

const Contact = () => (
    <section className="container col-xl-12 py-5">
        <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-4 fw-bold lh-1 mb-3">Contact US</h1>
                <p className="col-lg-10 fs-4">
                    Let us know what you think about our service. We will be happy to answer your
                    questions.
                </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address{` `}</label>
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="floatingTextarea2"
                            style={{ height: '100px' }}
                        />
                        <label htmlFor="floatingTextarea2">Message{` `}</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;

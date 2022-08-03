import React from 'react';

const Footer = () => (
    <footer className="py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between py-4 my-4 border-top">
            <p>© 2021 Tripper, Inc. All rights reserved.</p>
            <form className="mb-4 mb-md-0">
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                        Email address{' '}
                    </label>
                    <input
                        id="newsletter1"
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                        Subscribe
                    </button>
                </div>
            </form>
            <ul className="list-unstyled d-flex fs-2">
                <li className="ms-3">
                    <a className="link-dark" href="https://twitter.com">
                        <i className="fab fa-twitter" />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="link-dark" href="https://instagram.com">
                        <i className="fab fa-instagram" />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="link-dark" href="https://facebook.com">
                        <i className="fab fa-facebook" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;

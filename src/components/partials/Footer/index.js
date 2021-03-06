import React from 'react'
import Button from 'components/atoms/button'
import IconText from 'components/partials/IconText'
export default function index() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <IconText/>
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payment</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">Our Careers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@staycation.id">Support@staycation.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622122081996">021-2208-1996</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Kemang Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2021 - Power By Staycation
                    </div>
                </div>

            </div>
        </footer>
    )
}

import React, { useState } from "react";
import {
    NavLink,
    Button,
    Card,
    CardText,
    CardTitle,
    Col,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Nav,
    NavItem,
    Row,
    TabContent,
    TabPane,
    Table,
} from "reactstrap";

import './delivery.css'

const ModalSizeG = ({ modalDelivey, toggleDelivey, setModalDelivey }) => {
    return (
        <Modal size="lg" isOpen={modalDelivey} toggle={toggleDelivey} className="modal__size">
            <ModalHeader toggle={toggleDelivey}>Delivery & Return</ModalHeader>
            <ModalBody>
                <div className="delivery">
                    <h4>Delivery</h4>
                    <ul>
                        <li>All orders shipped with UPS Express.</li>
                        <li>Always free shipping for orders over US $250.</li>
                        <li>All orders are shipped with a UPS tracking number.</li>
                    </ul>
                </div>
                <div className="returns">
                    <h4>Returns</h4>
                    <ul>
                        <li>
                            Items returned within 14 days of their original shipment date in same as new condition will
                            be eligible for a full refund or store credit.
                        </li>
                        <li>Refunds will be charged back to the original form of payment used for purchase.</li>
                        <li>
                            Customer is responsible for shipping charges when making returns and shipping/handling fees
                            of original purchase is non-refundable.
                        </li>
                        <li>All sale items are final purchases.</li>
                    </ul>
                </div>
                <div className="help">
                    <h4>Help</h4>
                    <ul>
                        <li>Give us a shout if you have any other questions and/or concerns.</li>
                        <li>Email: help@example.com</li>
                        <li>Phone: +1 (23) 456 789</li>
                    </ul>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="secondary" onClick={toggleDelivey}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalSizeG;

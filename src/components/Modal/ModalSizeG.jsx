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

const ModalSizeG = ({ modal, toggle, setModal }) => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <Modal size="lg" isOpen={modal} toggle={toggle} className="modal__size">
            <ModalHeader toggle={toggle}>Size Guide</ModalHeader>
            <ModalBody>
                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                                Size Crust
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                                Outer Crust
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="modal__tab-content">
                                <h3>Pizza Size Chart</h3>
                                <Table bordered className="text-center">
                                    <thead>
                                        <tr>
                                            <th colspan="4">Pizza Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Size</th>
                                            <td>People</td>
                                            <td>Bust</td>
                                            <td>Money</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Xs</th>
                                            <td>2-3 people</td>
                                            <td>15 cm</td>
                                            <td>~$8</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">M</th>
                                            <td>3-4 people</td>
                                            <td>18cm</td>
                                            <td>~$10</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Xl</th>
                                            <td>5-6 people</td>
                                            <td>21 cm</td>
                                            <td>~$13</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            {" "}
                            <h3>Pizza Extra Size Chart</h3>
                            <Table bordered className="text-center">
                                <thead>
                                    <tr>
                                        <th colspan="4">Pizza Size</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Size</th>
                                        <td>People</td>
                                        <td>Bust</td>
                                        <td>Money</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Xs</th>
                                        <td>8-10 people</td>
                                        <td>15 cm</td>
                                        <td>~$20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">M</th>
                                        <td>3-4 people</td>
                                        <td>18cm</td>
                                        <td>~$10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Xl</th>
                                        <td>5-6 people</td>
                                        <td>21 cm</td>
                                        <td>~$13</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TabPane>
                    </TabContent>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalSizeG;

import React, { useState } from "react";
import { Form, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from "reactstrap";

import "./ModalQuestion.css";

const ModalQuestion = ({ modalQuestion, toggleQuestion, setModalQuestion }) => {
    return (
        <Modal size="lg" isOpen={modalQuestion} toggle={toggleQuestion} className="modal__size">
            <ModalHeader toggle={toggleQuestion}>Ask a Question</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <Label for="examplePhone">Phone Number</Label>
                        <Input id="examplePhone" name="phone" placeholder="with a placeholder" type="text" />
                    </FormGroup>
                </Form>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input id="examplePassword" name="password" placeholder="password placeholder" type="password" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input id="exampleText" name="text" type="textarea" rows="5" />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="secondary" onClick={toggleQuestion}>
                    Submit
                </Button>
                <Button onClick={toggleQuestion}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalQuestion;

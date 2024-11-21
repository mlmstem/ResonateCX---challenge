import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLink, faPhone, faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';

function ProfileModal({ contact, onClose }) {
  const phoneNumber = contact.phone.split(' ')[0].replaceAll('.', '-');

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <div className="d-flex align-items-center w-100">
          <img
            src={`https://thispersondoesnotexist.com/`}
            alt={contact.name}
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
          <div className="d-flex flex-column">
            <Modal.Title className="mb-1">{contact.name}</Modal.Title>
            <span className="text-muted">{contact.email}</span>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faUser} /> Name</Form.Label>
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="First name"
                defaultValue={contact.name.split(' ')[0]}
                readOnly
              />
              <Form.Control
                type="text"
                placeholder="Last name"
                defaultValue={contact.name.split(' ')[1]}
                readOnly
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              defaultValue={contact.email}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faUser} /> Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              defaultValue={contact.username}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faPhone} /> Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number"
              defaultValue={phoneNumber}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faLink} /> Website</Form.Label>
            <Form.Control
              type="url"
              placeholder="Website"
              defaultValue={contact.website}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              defaultValue={`${contact.address.street}, ${contact.address.city}`}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><FontAwesomeIcon icon={faBuilding} /> Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company name"
              defaultValue={contact.company.name}
              readOnly
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;


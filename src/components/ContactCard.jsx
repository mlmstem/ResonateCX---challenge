import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ContactCard({ contact, onCardClick }) {
  return (
    <Card className="h-100 text-center">
      <Card.Img
        variant="top"
        src={`https://robohash.org/${contact.id}?set=set5`}
 // Append a unique query parameter
        alt={contact.name}
        className="rounded-circle mx-auto mt-3"
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{contact.company.name}</Card.Subtitle>
        <Card.Text>{`${contact.address.street}, ${contact.address.city}`}</Card.Text>
        <Button variant="primary" onClick={() => onCardClick(contact)}>
          <i className="bi bi-person"></i> Contact
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;


import React, { useState, useEffect } from 'react';
import ContactCard from './components/ContactCard.jsx';
import ProfileModal from './components/ProfileModal.jsx';

function App() {
  const [contacts, setContacts] = useState([]); // State to store fetched contacts
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedContact, setSelectedContact] = useState(null); // State to track selected contact

  useEffect(() => {
    // Fetch data from the API
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setContacts(data); // Store data in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures this runs once after component mounts

  const handleCardClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contacts</h1>
      {loading ? (
        <div className="text-center">
          <p>Loading contacts...</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {contacts.map((contact) => (
            <div className="col" key={contact.id}>
              <ContactCard contact={contact} onCardClick={handleCardClick} />
            </div>
          ))}
        </div>
      )}
      {selectedContact && (
        <ProfileModal contact={selectedContact} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;


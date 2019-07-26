import React, { useState, useEffect } from 'react';
import Chat from './components/Chat/Chat';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContactsFromDb = async () => {
      try {
        const response = await axios.get('http://192.168.0.15:9000/api/v0/chat/contacts/list/');
        const contactFromApi = await response.data;

        contactFromApi.sort((a, b) => a.last_name.localeCompare(b.last_name));
        
        let data = contactFromApi.reduce((r, e) => {
          let group = e.last_name[0];
          if (!r[group]) r[group] = { group, children: [e] }
          else r[group].children.push(e);
          return r;
        }, {});

        let result = Object.values(data);
       
        setContacts(result);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getContactsFromDb();
  }, []);

  return (
    <div>
      <Chat contacts={contacts}/>
    </div>
  );
}

export default App;
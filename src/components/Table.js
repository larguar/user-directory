import React, {useState, useEffect} from 'react';
import Employee from './Employee';
import API from '../util/API';
import Users from '../util/Users';

function Table() {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: 'ascend',
        filteredUsers: [],
        headings: [
          { name: 'Image' },
          { name: 'Name' },
          { name: 'Phone' },
          { name: 'Email' },
          { name: 'DOB' }
        ]
      });
    
      const sort = heading => {
        if (developerState.order === 'descend') {
            setDeveloperState({ order: 'ascend' })
        } else {
            setDeveloperState({ order: 'descend' })
        }
    
        const compare = (a, b) => {
          if (developerState.order === 'ascend') {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === 'name') {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
            if (a[heading] === undefined){
              return 1;
            } else if (b[heading] === undefined){
              return -1;
            } else if (heading === 'name') {
              return b[heading].first.localeCompare(a[heading].first);
            } else {
              return b[heading]-  a[heading];
            }
          }
        }
        const sortedUsers = developerState.filteredUsers.sort(compare);
        setDeveloperState({ ...developerState, filteredUsers: sortedUsers });
      };
   
      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ ...developerState, filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getUsers().then(results => {
          setDeveloperState({ ...developerState, users: results.data.results, filteredUsers: results.data.results });
        });
      }, []);
    
      return (
        <Users.Provider value={{ developerState, handleSearchChange, sort }}>
          <div className="data-area">
            {developerState.filteredUsers.length > 0 
            ? <Employee />
            : <div></div>
          }
          </div>
        </Users.Provider>
      );
    }
    
    export default Table;
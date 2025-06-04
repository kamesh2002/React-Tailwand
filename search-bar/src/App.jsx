import React ,{useState} from 'react';
const usersData =[
  {id: 1, name:'Alice Johnson'},
  {id: 2, name: 'Bob Smith'},
  {id: 3, name: 'Charlie Davis'},
  {id: 4, name: 'David Garcia'},
  {id: 5, name: 'Emily Clark'}
];

export default function App(){
  const [searchText, setSearchText] = useState('');

  //filter the users based on the search input

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold  text-center">User Search</h1>
       
        <input type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        <ul className="space-y-2">
          {filteredUsers.map((user) => (
            <li
            key={user.id}
            className="p-2 bg-blue-100 rounded hover:bg-blue-200 cursor-pointer"
            > 
            {user.name}</li>
          ))}

          {filteredUsers.length == 0 && (
            <li className="text-gray-500 text-center">No results found.</li>
          )}
        </ul>
      </div>
     
    </div>
  );

}
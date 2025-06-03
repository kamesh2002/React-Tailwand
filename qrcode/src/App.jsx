import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    title: 'Why use React?',
    content: 'React makes it painless to create interactive UIs.',
  },
  {
    id: 3,
    title: 'Getting Started with React',
    content: 'To get started, you need Node.js and a package manager like npm or yarn.',
  },
];

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const handleBackToHome = () => {
    setSelectedPost(null);
  };

  return (
    <div className=" h-screen bg-indigo-200 text-center">
    <div className="mx-auto w-max">
      <h1 className="text-black text-4xl font-bold py-2 drop-shadow-lg text-center" >Blog Homepage</h1>

      {selectedPost ? (
        <div className="m-2 ">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{selectedPost.title}</h2>
          <p className="text-black leading-relaxed">{selectedPost.content}</p>
          <button onClick={handleBackToHome} className="mt-2 bg-red-400 hover:bg-green-100 cursor-pointer rounded shadow py-1 px-4" >Back to Homepage</button>
        </div>
      ) : (
        <div>
  <h2 className="text-black text-2xl font-bold text-center">Latest Posts</h2>

  <div className="m-2">
    <ul className="grid grid-cols-3 gap-4 w-max mx-auto">
      {blogPosts.map((post) => (
        <li className="grid grid-row ">
          <div className="bg-purple-400 p-4 rounded  ">
            <p key={post.id} ></p>
          <h3>{post.title}</h3>
          </div>
          <div>
            <button onClick={() => handleViewPost(post)} className="mt-2 bg-red-400 hover:bg-green-100 cursor-pointer rounded shadow py-1 px-4" >Read More</button>
          </div>
          
        </li>
      ))}
    </ul>
  </div>
</div>

      )}
    </div>
    </div>
  );
}

export default App;

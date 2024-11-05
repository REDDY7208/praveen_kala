// MindMap.jsx
import React from 'react';
import './UserMindMap.css'; // Add some CSS for styling the mind map

const UserMindMap = ({ data }) => {
  return (
    <div className="mindmap-container">
      <h3>Network Mind Map</h3>
      <ul className="mindmap">
        {data.map((person, index) => (
          <li key={index}>
            {person.name}
            {person.children && person.children.length > 0 && (
              <UserMindMap data={person.children} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMindMap;

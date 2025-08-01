// import React from 'react'
// import nargispic from '../assets/nargispic.jpeg'
// const UserCard = () => {
//   return (
//       <div className='user-container'>
//       <p id='user-name'>Nargis Perween</p>
//       <img id='user-img' src={nargispic} alt="nargis" />
//       <p id='user-desc'>Hi, I'm Nargis — a passionate Computer Science student currently pursuing my B.Tech in 3rd year. I love exploring technology, building projects, and learning something new every day!</p>
//     </div>
//   )
// }

// export default UserCard;



import React from 'react';

const UserCard = ({ name, img, desc }) => {
  return (
    <div className="user-container">
      <p id="user-name">{name}</p>
      <img id="user-img" src={img} alt={name} />
      <p id="user-desc">{desc}</p>
    </div>
  );
};

export default UserCard;

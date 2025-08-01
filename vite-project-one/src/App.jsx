import UserCard from "./components/userCard";
import './App.css';
import './components/UserCard.css';

import nargispic from './assets/nargispic.jpeg';
import surajpic from './assets/surajpic.jpeg';
import sanjeevpic from './assets/sanjeevpic.jpeg';
import nikitapic from './assets/nikitapic.jpeg';
import abhishekpic from './assets/abhishekpic.jpeg';

function App(){
  return(
    <div className="container">
     <UserCard 
      name="Nargis Perween"
        img={nargispic}
        desc="Hi, I'm Nargis — a passionate Computer Science student currently pursuing my B.Tech in 3rd year."
      />
     <UserCard 
      name="Suraj Mandal"
        img={surajpic}
        desc="Hey, I'm Suraj — a full-stack developer who loves to build web apps and teach coding!"
      />
     
     <UserCard  name="Sanjeev Rai"
        img={sanjeevpic}
        desc="Hey, I'm Sanjeev — a full-stack developer who loves to build web apps and teach coding!"
      />
      <UserCard  name="Nikita Kumari"
        img={nikitapic}
        desc="Hey, I'm Nikita — a full-stack developer who loves to build web apps and teach coding!"
      />
      <UserCard  name="Abhishek Yadav"
        img={abhishekpic}
        desc="Hey, I'm Abhishek — a full-stack developer who loves to build web apps and teach coding!"
      />
    </div>
  )
}

export default App;
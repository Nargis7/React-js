function Hello(){

  let myName = 'prashant';
  // let fullName = 'Nargis Perween';

  let fullName = () => {
    return 'Nargis Perween';
  }

  return <h3>
    hello this is future speaking. i m {fullName()} 
  </h3>

}
 export default Hello;
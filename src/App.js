import Contact from './components/Contacts';
import './App.css';
import './components/Contacts.css'


function App() {
  return (
    <div className='Contacts'>
      <Contact  
      img='../../images/kendrick.png' 
      name='mr. kendrick'
      phone='+234 802 519 2799'
      email='saboanamero8521@gmail.com'/>
      <Contact 
        img='../../images/mojisola.png' 
        name='ms. mojisola'
        phone='+234 906 452 8556'
        email='adwunmimadwoman7@gmail.com'/>
      <Contact 
        img='../../images/khalifa.png' 
        name='mr. khalifa'
        phone='+234 812 867 3856'
        email='kehindekhalifa@gmail.com'/>
      <Contact
        img='../../images/milo.png' 
        name='mr. milo'
        phone='+234 777 777 7777'
        email='milomilomilo@gmail.com' />
      </div>
  );
}

export default App;

import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Category from './components/Category';
import Header from './components/Header';
import Items from './components/Items';
import NavBar from './components/Navbar';
import { items } from './data';
const App = () => {
  const allCategory = ["الكل",...new Set(items.map(item => item.category))];
  const [itemData, setItemData] = useState(items);
  const filterData = (cate) => {
    if (cate === "الكل") {
      setItemData(items);
    } else {
      const newArray = items.filter((items) => items.category === cate);
      setItemData(newArray);
    }
  }
  const filterSea = (search) => {
    const newArray = items.filter((items) => items.title === search )
    setItemData(newArray);
    console.log(newArray)
  }
  return (
    <div className='color-body'>
      <NavBar filterSea={filterSea} />
      <Container>
        <Header/>
        <Category myFilter={filterData} allCategory={allCategory} />
        <Items itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { getCanvases } from '../api/canvas';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  const [data, setData] = useState([]);

  async function fetchData() {
    // const data = await fetch('http://localhost:8000/canvases')
    //   .then(res => res.json())
    //   .catch(console.error);
    // const response = await axios.get('http://localhost:8000/canvases');
    // console.log(response);
    const response = await getCanvases();
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteItem = id => {
    setData(data.filter(item => item.id !== id));
  };

  const filteredItems = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <CanvasList
        filteredItems={filteredItems}
        isGridView={isGridView}
        searchText={searchText}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default Home;

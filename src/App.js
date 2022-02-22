import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Tours from "./components/Tours";

const url = 'http://localhost:5000/destinations'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    setTours(data);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const onDelete = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  }

  if(loading) {
    return(
      <main>
        <Loading />
      </main>
    )
  }

  return(
    <main>
      <Tours tours={tours} onDelete={onDelete}/>
    </main>
  )
}

export default App;

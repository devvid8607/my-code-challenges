import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import axios from "axios";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    console.log("here");
    setLoading(true);
    try {
      const response = await axios.get(url);
      const tours = response.data;
      console.log(tours);
      setLoading(false);
      setTours(response.data);
    } catch (error) {
      console.log(error.message);
      setTours([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : tours.length === 0 ? (
        <main>
          <div className="title">
            <h2>No Tours Left</h2>
            <button onClick={fetchTours} className="refresh-btn">
              Refresh All
            </button>
          </div>
        </main>
      ) : (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      )}
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage"
import NotFound from "./pages/NotFound";

import { useState, useEffect } from 'react';
import { ITask } from './components/Interfaces';

function App() {
  const [stateTodos, setStateTodos] = useState<ITask[]>([]);
  const src = 'http://localhost:3001/posts';

  async function getDataApi() {
    const response = await fetch(src);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataApi();
      setStateTodos(data);
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home stateTodos={stateTodos}/>} />
        <Route path="/posts/:title" element={<DetailPage stateTodos={stateTodos}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App;

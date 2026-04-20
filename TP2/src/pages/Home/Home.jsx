import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { getAllMovies } from "../../../services/getAllMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      const data = await getAllMovies(page, 8, search);
      setMovies(data);
    };
    loadData();
  }, [page, search]);

  return <h1>Películas encontradas: {movies.length}</h1>;
};
export default Home;

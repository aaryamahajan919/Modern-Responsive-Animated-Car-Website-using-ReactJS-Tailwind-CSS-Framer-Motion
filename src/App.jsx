import React from "react";
import Hero from "./components/Hero/Hero";

const App = () => {
  return <main className="">
    <Hero/>     
    </main>;
};

export default App;


// import { useState, useEffect } from "react";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedTerm, setDebouncedTerm] = useState("");
  
//   const movies = [
//     "The Shawshank Redemption",
//     "The Godfather",
//     "The Dark Knight",
//     "Inception",
//     "Interstellar",
//     "Pulp Fiction",
//     "Forrest Gump"
//   ];


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedTerm(searchTerm);
//     }, 300); 


//     return () => clearTimeout(timer);
//   }, [searchTerm]);


//   const filteredMovies = movies.filter(movie =>
//     movie.toLowerCase().includes(debouncedTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px",}}>
//       <h1>Movie List</h1>

//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ padding: "8px", width: "300px", marginBottom: "15px" }}
//       />

//       <ul>
//         {filteredMovies.length > 0 ? (
//           filteredMovies.map((movie, index) => <li key={index}>{movie}</li>)
//         ) : (
//           <li>No movies found</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;

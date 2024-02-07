import { useState } from "react"

import Nav from "./navigation/Nav"
import Hero from "./hero/Hero"
import Genre from "./genre/Genre"
import Show from "./show/Show"
import Card from "./components/Card"

import datas from "./db/data"

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");

  const handleSearchInput = (event) => {
    setQuery(event.target.value)
  }

  const handleSelectionInput = (event) => {
    setSelectedCategory(event.target.value);
  }

  let filteredShowData = datas.filter((data) => 
    data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  const filteredShows = (query,selected) => {
    let filteredData = datas

    if(query){
      filteredData = filteredShowData
    }

    if(selected){
      filteredData = filteredData.filter((shows) => 
        shows.category === selected ||
        shows.genre === selected
      )
    }

    return filteredData = filteredData.map(({img,title,rating,genre,releaseDate,description,cast}) => (
      <Card 
        img = {img}
        title = {title}
        rating = {rating}
        genre = {genre}
        releaseDate = {releaseDate}
        description = {description}
        cast = {cast}
      />
      )
    )
  }

  let result = filteredShows(query,selectedCategory)

  return (
    <>
      <Nav query = {query} handleSearchInput = {handleSearchInput} handleSelectionInput = {handleSelectionInput}/>
      <Hero />
      <Genre handleSelectionInput = {handleSelectionInput}/>
      <Show result={result}/>
      <p style={{textAlign:"center", color:"gainsboro"}}>&copy; Made By: Saud</p>
    </>
  )
}

export default App

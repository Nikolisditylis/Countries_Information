import { useState, useEffect } from 'react'

import './App.css'

import axios from 'axios'


/*
  const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('type note')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService.getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content : newNote,
      important : Math.random() < 0.5
    }

    noteService.create(noteObject).then(returnedNote =>{
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    }
    )
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const toggleImportanceOf = (id) => {
    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important: !note.important}
    const url = `http://localhost:3001/notes/${id}`

    noteService.update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id === id ? returnedNote : note))
    })
  }

  return(
    <div>
      <h1>Notes</h1>

      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} 
        toggleImportance={() => toggleImportanceOf(note.id)}/>)}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'> Save </button>
        <button onClick={() => setShowAll(!showAll)}>
           show {showAll ? 'important' : 'all'} </button>
      </form>
    </div>
  )
}
*/
import countryService from './services/countries'
import Country from './components/Country'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [name, setName] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
           .getAll()  
           .then(allCountries => { setCountries(allCountries)})
  } , [])

  const handleNameChange = (event) => {
    setName(event.target.value)
    setSelectedCountry(null)
  }

  const countriesToShow = countries.filter(country => 
    country.name.common.toLowerCase().includes(name.toLocaleLowerCase()))  

  const showCountryDetails = (country) => {
    setSelectedCountry(country)
  }  

  return(
    <div>
      <form>
      find countries <input value={name}
                            onChange={handleNameChange}/>    
      </form>

     <ul>
       {(countriesToShow.length < 10) 
       ? countriesToShow.map(country =><Country key={country.name.common} 
        country = {country} 
        buttonAction={() => showCountryDetails(country)}/>) 
                                : 'Too many matches, please filter'}
     </ul>

     {(countriesToShow.length == 1) && <CountryDetails country={countriesToShow[0]}/>
      || selectedCountry && <CountryDetails country={selectedCountry} /> }
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import TopicsList from './components/TopicsList/TopicsList';
import SingleArticle from './components/SingleArticle/SingleArticle';
import UserContext from './components/Contexts/UserContext'

function App() {
  const [user, setUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
  })

  return (
      <UserContext.Provider value={{user: user, setUser: setUser}}>
      <Header />
      <Routes>
        <Route 
          path='/'
          element= {<Homepage user={user}/>}
        ></Route>
        <Route
          path='/topics'
          element= {<TopicsList />}
        ></Route>
        <Route
          path='/articles/:article_id'
          element= {<SingleArticle />}
        ></Route>
      </Routes>
      </UserContext.Provider>
  )
}

export default App
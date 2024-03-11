import { useState } from 'react'
import './App.css'
import ArticlesList from './components/ArticlesList/ArticlesList';
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage';

function App() {
  const [user, setUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
  })

  return (
    <>
      <Header />
      <Homepage user={user}/>
      <ArticlesList />
    </>
  )
}

export default App

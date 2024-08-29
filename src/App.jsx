import Header from './components/Header'
import FirstSection from './components/FirstSection'
import './index.css'
import ArtSection from './components/ArtSection'
import MusicSection from './components/MusicSection'


function App() {
  return (
    <>
      <div >
        <Header />  
      </div>
      <div >
        <FirstSection />
      </div>
      <div >
        <ArtSection />
      </div>
      <div >
        <MusicSection />
      </div>
      <a href="#" id='moreInfoBtn'>more info</a>

      
    </>
  )
}

export default App

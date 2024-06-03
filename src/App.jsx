import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {


  return (
    <div className='container mx-auto'>
      <Header></Header>
      
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </div>
  )
}

export default App

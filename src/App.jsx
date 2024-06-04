import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'
import ReadingTime from './Components/ReadingTime/ReadingTime'

function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [spentTime,setSpentTime]=useState(0);

  const handleAddToBookmarks=(blog,id)=>{

    const checkExistedBookmark=bookmarks.filter(bookmark=> bookmark.id===id);
    if(!checkExistedBookmark.length)
      {
        const newBookmarks=[...bookmarks,blog];
        setBookmarks(newBookmarks);
      }
  }

  const handleSpentTime=(reading_time,id)=>{
    console.log("Dekh rahe ho binod")
    const newSpentTime=spentTime+reading_time;
    setSpentTime(newSpentTime);
    
  }

  //remove blog from bookmars for mark as read

  const handleRemoveBookmark=(id)=>{
    const newBookmarks=bookmarks.filter(bookmark=> bookmark.id!==id)
    setBookmarks(newBookmarks);
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      
      <main className='md:flex gap-6 mt-8' >
        <Blogs 
            handleAddToBookmarks={handleAddToBookmarks} 
            handleSpentTime={handleSpentTime} 
            handleRemoveBookmark={handleRemoveBookmark}>
        </Blogs>

        <div className='md:w-1/3'>
          <ReadingTime spentTime={spentTime}></ReadingTime>
          <Bookmarks bookmarks={bookmarks} ></Bookmarks>
        </div>
      </main>
    </div>
  )
}

export default App

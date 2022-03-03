import Footer from './appComponents/Footer'
import Header from "./appComponents/Header"
import {useEffect, useState} from "react"
import MainContent from "./appComponents/MainContent"

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"
  const [fetchError, setFetchError] = useState(null)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [data, setData] = useState([])
  const [view, setView] = useState("posts")

  useEffect(() => {
    const fetchItems = async()=>{
      try {
        const reqURL = `${API_URL}/${view}`
        const apiResponse = await fetch(reqURL)
        if(!apiResponse.ok) throw Error("Unable To Fetch Data. Please Relod.")
        const Data = await apiResponse.json()
        setData(Data)
        setFetchError(null)

      } catch (err) {
        setFetchError(err.Message)
      }finally{
        setIsLoadingData(false)
      }
      

    }
    fetchItems()

  }, [view])
  

  return (
    <>
      <Header />    

      <main className='py-3'>
        <div className="row sticky-top bg-white shadow py-3 g-0 my-3 d-flex justify-content-center">
          <div class="col-4 p-2 d-grid gap-2">
            <button className='btn btn-outline-dark' onClick={(e)=>setView("posts")}>Posts</button>
          </div>
          <div class="col-4 p-2 d-grid gap-2">
            <button className='btn btn-outline-dark' onClick={(e)=>setView("users")}>Users</button>
          </div>
          <div class="col-4 p-2 d-grid gap-2">
            <button className='btn btn-outline-dark' onClick={(e)=>setView("comments")}>Comments</button>
          </div>
        </div>
        
      <MainContent data={data} fetchError={fetchError} isLoadingData={isLoadingData} view={view}/>
      </main>

      <Footer />
    </>

    

  );
  
}

export default App;

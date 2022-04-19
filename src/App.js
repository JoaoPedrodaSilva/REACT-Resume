import React, {useState, useEffect} from "react"
import Company from './Company.js'
import Job from './Job.js'
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [index, setIndex] = useState(3)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if(loading) {
    return (
      <main className="App">
        <header>
          <h1 className="title">Resumé</h1>
        </header>
        <section>
          <h2 className="loading">Loading...</h2>
        </section>  
      </main>
    )
  }  
  
  const filteredJob = jobs.filter(job => job.order === index)
  return (
    <main className="App">
      <header>
        <h1 className="title">Resumé</h1>
        <div className="underline" />
      </header>

      <section className="companies">
        {jobs.map((job) => {
          const {order, company} = job
          return <Company key={order} company={company} order={order} index={index} setIndex={setIndex}/>
        })}
      </section>

      <section className="jobs">
        <Job {...filteredJob[0]}/>
      </section>   
    </main>
  )
}

export default App

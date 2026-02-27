import JobListing from './JobListing'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs')
        const data = await res.json()
        setJobs(isHome ? data.slice(0, 3) : data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setloading(false)
      }
    }
    fetchJobs()
  }, [isHome])

  return (
    <section className="section-listings px-4 py-12">
      <div className="container-xl lg:container m-auto">
        <h2 className="section-title text-3xl mb-8 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default JobListings

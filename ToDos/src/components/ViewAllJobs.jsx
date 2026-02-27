import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-12 px-6">
      <Link to="/jobs" className="btn-view-all">
        View All Jobs →
      </Link>
    </section>
  )
}

export default ViewAllJobs

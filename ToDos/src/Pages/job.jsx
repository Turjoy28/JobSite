import { useLoaderData, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaArrowLeft, FaEdit, FaTrash, FaEnvelope, FaPhone } from 'react-icons/fa'

const Job = ({ deleteJob }) => {
  const job = useLoaderData()
  const navigate = useNavigate()

  const onClickdeleteJob = (jobId) => {
    const confirmWindow = window.confirm('Are you sure you want to delete this job?')
    if (!confirmWindow) return
    deleteJob(jobId)
    navigate('/jobs')
  }

  return (
    <>
      {/* Back link bar */}
      <section className="back-link-bar">
        <div className="container m-auto py-4 px-6">
          <Link to="/jobs" className="back-link">
            <FaArrowLeft className="text-sm" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="section-bg py-10">
        <div className="container m-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] w-full gap-6 max-w-5xl mx-auto">

            {/* Main content */}
            <main className="space-y-6">
              {/* Title card */}
              <div className="detail-card p-7">
                <span className="badge badge-type mb-4 block w-fit">{job.type}</span>
                <h1
                  className="text-3xl font-extrabold mb-4 leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {job.title}
                </h1>
                <div className="location-chip">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Description card */}
              <div className="detail-card p-7">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--primary-light)' }}>
                  📄 Job Description
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {job.description}
                </p>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--primary-light)' }}>
                  💰 Salary
                </h3>
                <span className="salary-chip">{job.salary} / yr</span>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Company Info */}
              <div className="detail-card p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  🏢 Company Info
                </h3>
                <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--primary-light)' }}>
                  {job.company.name}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {job.company.description}
                </p>

                <hr className="fancy-divider" />

                <div className="space-y-3">
                  <div>
                    <p className="form-label flex items-center gap-1.5 mb-1.5">
                      <FaEnvelope className="text-indigo-400 text-xs" /> Contact Email
                    </p>
                    <div className="contact-pill">{job.company.contactEmail}</div>
                  </div>
                  <div>
                    <p className="form-label flex items-center gap-1.5 mb-1.5">
                      <FaPhone className="text-indigo-400 text-xs" /> Contact Phone
                    </p>
                    <div className="contact-pill">{job.company.contactPhone}</div>
                  </div>
                </div>
              </div>

              {/* Manage Job */}
              <div className="detail-card p-6">
                <h3 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  ⚙️ Manage Job
                </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="btn-primary w-full text-center block"
                >
                  <FaEdit className="inline mr-2 text-sm" />
                  Edit Job
                </Link>
                <button
                  onClick={() => onClickdeleteJob(job.id)}
                  className="btn-danger"
                >
                  <FaTrash className="inline mr-2 text-sm" />
                  Delete Job
                </button>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`)
  const data = await res.json()
  return data
}

export { Job as default, jobLoader }

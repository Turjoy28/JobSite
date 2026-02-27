import { useState } from 'react'
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({ job }) => {
  const [showFullDescription, setshowFullDescription] = useState(false)
  let description = job.description
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...'
  }

  return (
    <div className="job-card">
      <div className="p-6">
        {/* Type badge */}
        <div className="mb-4">
          <span className="badge badge-type">{job.type}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 leading-snug" style={{ color: 'var(--text-primary)' }}>{job.title}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>{description}</p>

        <button
          onClick={() => setshowFullDescription((prev) => !prev)}
          className="btn-toggle mb-4"
        >
          {showFullDescription ? (
            <><FaChevronUp className="text-xs" /> Show less</>
          ) : (
            <><FaChevronDown className="text-xs" /> Show more</>
          )}
        </button>

        {/* Salary */}
        <div className="mb-4">
          <span className="salary-chip">{job.salary} / yr</span>
        </div>

        <hr className="fancy-divider" />

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="location-chip">
            <FaMapMarkerAlt className="text-amber-600 text-sm" />
            <span>{job.location}</span>
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="btn-primary text-sm py-2 px-4"
          >
            Read More <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobListing

import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-10 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.18)', border: '1px solid rgba(99,102,241,0.3)' }}
              >
                💻
              </div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                For Developers
              </h2>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Browse our React jobs and start your career today
            </p>
            <Link to="/jobs" className="btn-dark">
              Browse Jobs
            </Link>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(139,92,246,0.18)', border: '1px solid rgba(139,92,246,0.3)' }}
              >
                🏢
              </div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                For Employers
              </h2>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              List your job to find the perfect developer for the role
            </p>
            <Link to="/add-job" className="btn-primary">
              Add Job
            </Link>
          </Card>

        </div>
      </div>
    </section>
  )
}

export default HomeCards

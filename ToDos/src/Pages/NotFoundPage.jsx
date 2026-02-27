import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="not-found-page flex flex-col justify-center items-center min-h-screen text-center px-4">
      <div className="not-found-icon mb-6">
        <FaExclamationTriangle className="text-8xl text-yellow-400" />
      </div>
      <h1 className="not-found-code text-9xl mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Page Not Found</h2>
      <p className="mb-8 max-w-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary text-base px-8 py-3">
        ← Go Back Home
      </Link>
    </section>
  )
}

export default NotFoundPage

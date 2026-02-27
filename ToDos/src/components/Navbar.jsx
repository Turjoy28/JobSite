import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar-glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

            {/* ── Professional SVG Logo ── */}
            <NavLink className="flex flex-shrink-0 items-center gap-3 mr-6 group" to="/">
              <div className="logo-mark">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="hex-fill" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stopColor="#6366f1" />
                      <stop offset="55%"  stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="hex-stroke" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stopColor="#c7d2fe" />
                      <stop offset="100%" stopColor="#f0abfc" />
                    </linearGradient>
                  </defs>
                  {/* Outer hex */}
                  <path
                    d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
                    fill="url(#hex-fill)"
                    stroke="url(#hex-stroke)"
                    strokeWidth="1.5"
                    opacity="0.96"
                  />
                  {/* Inner ring */}
                  <path
                    d="M20 7.5 L31 13.75 L31 26.25 L20 32.5 L9 26.25 L9 13.75 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="0.8"
                  />
                  {/* "RJ" text mark */}
                  <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    fill="white"
                    fontSize="13"
                    fontWeight="900"
                    fontFamily="system-ui,-apple-system,sans-serif"
                    letterSpacing="-0.5"
                  >
                    RJ
                  </text>
                </svg>
              </div>

              {/* Brand text */}
              <div className="hidden md:flex flex-col leading-none select-none">
                <span className="logo-text-primary text-xl tracking-tight">
                  React<span style={{ opacity: 0.65 }}>Jobs</span>
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    color: 'rgba(129,140,248,0.7)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  Find your role
                </span>
              </div>
            </NavLink>

            {/* ── Navigation Links ── */}
            <div className="md:ml-auto flex items-center">
              <div className="flex space-x-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active px-4 py-2 text-sm' : 'nav-link px-4 py-2 text-sm'
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active px-4 py-2 text-sm' : 'nav-link px-4 py-2 text-sm'
                  }
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active px-4 py-2 text-sm' : 'nav-link px-4 py-2 text-sm'
                  }
                >
                  + Add Job
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

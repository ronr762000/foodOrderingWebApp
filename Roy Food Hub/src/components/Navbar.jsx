import { Link } from "react-router-dom"
export default function HomePage() {
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand font-weight-bold font-italic align-basline" to="/">Ronit Food Corner</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>
      </>
    )
  }
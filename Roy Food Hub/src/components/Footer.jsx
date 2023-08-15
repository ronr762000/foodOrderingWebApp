import { Link } from "react-router-dom"
function Footer() {
  return (
    <div>
  <footer className="py-3 my-4">
    <Link className="text-center text-muted" to="/">© 2023 Ronit Food Corner, Inc</Link>
  </footer>
    </div>
  )
}

export default Footer
import Body from "../components/Body"
import Carousal from "../components/Carousal"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
    <div><Navbar/></div>
    <div><Carousal/></div>
    <div className="m-3"><Body/></div>
    <div><Footer/></div>
    </>
  )
}

export default Home
import Head from "./head"
import Navbar from "./navbar"
import Search from "./search"
import "./header.css"


function Header() {
    return (
        <>
          <Head />
          <Search />
          <Navbar />   
        </>
    )
}
export default Header
import ProgressWrap from "../ProgressWrap"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <ProgressWrap />
      {children}
      <Footer />
    </>
  )
}

export default Layout

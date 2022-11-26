import Catagoire from "./catagoires";
import Slider from "./clider";
import "./home.css"

function Home() {
    return (
        <>
          <section className="home">
            <div className="container d_flex" >
               <Catagoire />
               <Slider />
            </div>
          </section>
        </>
    )
}
export default Home;
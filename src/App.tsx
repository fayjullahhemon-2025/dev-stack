import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/TechnologyStacks/Technologies"
import type { TechnologyStacksType } from "./components/types"
import Footer from "./components/Footer"


function App() {
  const TechnologyPromiseData = async (): Promise<TechnologyStacksType[]> =>{
    const res = await fetch('/techonologyStacks.json');
    const data = await res.json();
    return data;
  }

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={
        <div className="flex justify-center items-center">
          <h2 className="text-4xl text-gray-400">Loading....</h2>
        </div>
      } >
        <Technologies TechnologyPromiseData={TechnologyPromiseData()} ></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App

import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/TechnologyStacks/Technologies"
import type { TechnologyStacksType } from "./components/types"


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
      <Suspense fallback={<p>Loading...</p>} >
        <Technologies TechnologyPromiseData={TechnologyPromiseData()} ></Technologies>
      </Suspense>
    </>
  )
}

export default App

// import Nav from "./components/Nav"
import Age18 from "./assets/component/age18"

const App = () => {
  // const name = "Allen";
  
  // if (name === "a") {
  //   return (
  //     <div  className="w-full h-screen items-center justify-center flex flex-col gap-2 bg-gray-100">
  //       <p>name is : {name}</p>
  //     </div>
  //   )
  // }

  return(
  <div className="w-full h-screen items-center justify-center flex flex-col gap-2 bg-gray-100">
    {/* <Nav /> */}
    <div className=" flex gap-2 items-center">
      <Age18/>
      {/* <button className=" btn btn-block bg-gray-300 outline-none border-none">Number + 1</button> */}
      {/* <p className="  ">name is not allen is :{name}</p> */}
    </div>
  </div>
  )
}
export default App
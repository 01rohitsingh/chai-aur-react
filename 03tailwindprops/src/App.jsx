import Card from "./components/card"


function App() {

  let myobj={
    name:"Rohit",
    age:29
  }

  return (
    <>
     <h1 className="bg-green-400">rohit</h1> 
     <Card username="chai aur code" someobg={myobj} btnText="click me"/>
     <Card username="Rohit" />
    </>
  )
}

export default App

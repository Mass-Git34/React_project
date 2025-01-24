import React, {useState} from 'react'
//Hooks is function make functional component work as a class component or hooks are function to use some react features in functional components
//usestate hooks is a function to add state in functional component and state is nothing but just values or variables of your component
const State = () => {
    // const [count, setCounter] = useState(0)
    // const [name, setName] = useState("");
    const [details, setDetails] = useState({count:0, name: ""})

    function increaseCounter() {
        // setCounter(count+1);
        setDetails((prev) => ({
            ...prev,
            count: prev.count + 1,
        }))
    }
  return (
    <div>
        <span class="font-bold text-lg text-blue-700">Use State Hooks</span>
    <input type="text" onChange={e => /*setName*/(e.target.value) } className="border border-gray-300 p-2 rounded-md" />
        <h1>
            {details.name} has clicked Count {details.count} times
        </h1>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
         onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default State
import { useState } from "react"

function Counter(){
            const[task,setTask]=useState(0);

            function Increment(){
                setTask(task+1);

            }

            function decrement(){
                setTask(task-1);
            }

            function reset(){
                setTask(0);
            }


    return(       
        <div>
        <h1>Welcome to Counter App</h1>
        <h2 className="c">Your Counter:{task}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter
import React, {useState} from "react"


function ToDoList() {
    const [toDoData, settoDoData] = useState([]);


      function handleSubmit(e) {
          e.preventDefault();
          settoDoData(prevData => [...prevData,
            {
                title: e.target.toDoList.value,
                Completed: true,
                id: Date.now(),
            } 
            ]);
           
      }

      console.log(toDoData);


      return (
          <>   
              <form onSubmit={handleSubmit}>
                  <input 
                      placeholder="add item"
                      name="toDoList" 
                  />
                  <button className="addBtn">Add </button>
              </form>
              <ul className="toDoList" >
                  {toDoData.map(item => {
                      return (
                          <li className="list">
                              <input type="checkbox"  />
                              <span>{item.title}</span>
                              <button>delete</button>
                          </li>
                      )
                  })}
              </ul>
          </>
      )
  }
export default ToDoList
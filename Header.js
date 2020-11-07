import React from "react"


function Header() {
    return(
      <nav>
          <ul className="todo">
              <li><a href="#">All</a></li>
              <li><a href="#">Active</a></li>
              <li><a href="#">Complete</a></li>
          </ul>
      </nav>
    )
}


export default Header 
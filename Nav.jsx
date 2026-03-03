import React from 'react'
import { Outlet,Link} from 'react-router-dom'
import "./Nav.css"


const Nav = () => {
  return (
    <div>
            <section className='nav'>

                   <h1>It is a Grap</h1>
                      <ul>
                              <li><Link>Home</Link></li>
                              <li><Link>LineGrap</Link></li>
                              <li><Link to="bar">BarGrap</Link></li>
                              <li><Link to="pie">Piechart</Link></li>
                      </ul>
            </section>
            <section>
                        <Outlet></Outlet>
            </section>
    </div>
  )
}

export default Nav

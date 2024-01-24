import React from 'react'
import Nproduct from "./Nproduct";
import {productData,responsive} from "./data";
import { Outlet } from 'react-router-dom';

function Slider() {
const product =productData.map((item)=>(<Nproduct 
name={item.name} 
src={item.src}
price={item.price}
description={item.description}/>));   
  return (
    <>
    <div className='kl'>{product}</div>
    <Outlet/>
  </>
  )
}
export default Slider;
/*<div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}} alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>
  
     <div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}}alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>
     <div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}}alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>
     <div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}}alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>*/


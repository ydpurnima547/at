import React from 'react'

export default function Aobj({aobj}) {
  return (
    <div>
       { aobj.map((dt)=>{
            return <h3>{dt.ntitle}<br/>{dt.ncontent}</h3>

       })
        }
    </div>
  )
}

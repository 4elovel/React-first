import React from 'react'


function MusicBand({title,members,albums}) {
    return(
  <>
  <h2>Music Band</h2>
     <h3>{title}</h3>
<div>
  {members.map((i)=>(
    <div> {i} <br/></div>
  ))}
</div>
{albums.map(({title,image})=>(
  <>
  <div>{title}</div>
<img src={image} height="100px" width="100px" alt="album logo" />
</>
))}
  </>)}
export default MusicBand

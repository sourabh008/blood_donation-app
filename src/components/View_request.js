import React from 'react'

function View_request() {
    const arr=[{name:"jill",lastname:"smith",age:"50",blood:"b+",gender:"male",mobile:"8950703051",gmail:"sourabhkamboj247@gmail.com"},{name:"jill",lastname:"smith",age:"50",blood:"b+",gender:"male",mobile:"8950703051",gmail:"sourabhkamboj247@gmail.com"},{name:"jill",lastname:"smith",age:"50",blood:"b+",gender:"male",mobile:"8950703051",gmail:"sourabhkamboj247@gmail.com"},{name:"jill",lastname:"smith",age:"50",blood:"b+",gender:"male",mobile:"8950703051",gmail:"sourabhkamboj247@gmail.com"},{name:"jill",lastname:"smith",age:"50",blood:"b+",gender:"male",mobile:"8950703051",gmail:"sourabhkamboj247@gmail.com"},{name:"jill",lastname:"smith",age:"50",blood:"b+",gender:"male",mobile:"8950703051",gmail:"sourabhkamboj247@gmail.com"}]
    return (
        <div className="view_req_box">
          <h1>Requests For Blood</h1>
            <table >
  <tr>
    <th>Firstname</th>
    <th>Age</th>
    <th>Blood Group</th>
    <th>Gender</th>
    <th>Contact No.</th>
    <th>Email</th>
  </tr>
  {arr.map(item=>{
      return(
 <tr>
 <td>{item.name}</td>
 <td>{item.age}</td>
 <td>{item.blood}+</td>
 <td>{item.gender}</td>
 <td>{item.mobile}</td>
 <td>{item.gmail}</td>
</tr>
  )})}
 
 
</table>
        </div>
    )
}

export default View_request

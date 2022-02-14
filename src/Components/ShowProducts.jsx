import React from 'react'

const ShowProducts = ({ data }) => {

    console.log("Show products =", data);

    const style = {
        height: "50px",
        width: "50px"
    }

  return (
    <div style={{margin: "0px auto", border: "1px solid black"}}>
      <table border="1" style={{margin: "0px auto"}}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Cost</th>
            <th>Image</th>
            <th>Categorise</th>
          </tr>
      
      {
          data.map(({id, title, cost, image, category}) => 
              <tr>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>Rs.{cost}</td>
                  <td>
                      <img style={style} src={image} alt={title} />
                  </td>
                  <td>{category[0]}</td>
              </tr>
          )
      }
      </table>
    </div>
  )
}

export default ShowProducts;

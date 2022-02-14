import React from 'react'

const ShowProducts = ({ data }) => {

    console.log("Show products =", data);

    const style = {
        height: "50px",
        width: "50px"
    }

  return (
    <div style={{margin: "0px auto"}}>
      <table>
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
                  <th>{id}</th>
                  <th>{title}</th>
                  <th>{cost}</th>
                  <th>
                      <img style={style} src={image} alt={title} />
                  </th>
                  <th>{category[0]}</th>
              </tr>
          )
      }
      </table>
    </div>
  )
}

export default ShowProducts;

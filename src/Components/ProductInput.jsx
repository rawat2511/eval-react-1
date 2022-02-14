import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 18px;
    border: 1px solid black;
`;

const MainWrapper = styled.div`
    width: 600px;
    margin: 20px auto;
`;



const ProductInput = () => {

  const [data, setData] = useState({category: []});

  const settingData = (e) => {
    let {value, name} = e.target;
    setData({...data, [name] : value});
    console.log(data);
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setData( { ...data, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const addCategory = (e) => {
      const {checked, name} = e.target;
      console.log(name, checked);
      var c = data.category;
      console.log(c);
      if( checked ){
          c.push(name);
      }
      else{
          c = c.filter((item) => item !== name )
      }
      setData({...data, category:  c});
      console.log(data);
  }

  const addDataToJson = (e) => {
    //   e.preventDefault();
      fetch("http://localhost:8000/products", {
          method: "POST",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(data)
      }).
      then((res) => res.json() )
      .then(res => console.log("Response = ", res))
      .catch(err => console.log(err)); 
  }

  return (
    <MainWrapper>
      <form>
          <Wrapper>
              <label style={{fontWeight: "bold", fontSize: "18px"}} htmlFor="title">Title :</label>
              <input onChange={settingData} type="text" name="title" id="title" placeholder='Title'/>
          </Wrapper>
          <Wrapper>
              <label style={{fontWeight: "bold", fontSize: "18px"}} htmlFor="cost">Cost :</label>
              <input onChange={settingData} type="number" name="cost" id="cost" placeholder='Cost'/>
          </Wrapper>
          {/* <Wrapper>
              <label style={{fontWeight: "bold", fontSize: "18px"}} htmlFor="image">Image :</label>
              <input onChange={onImageChange} type="file" name="image" id="image" />
          </Wrapper> */}
          <Wrapper>
              <label style={{fontWeight: "bold", fontSize: "18px"}} htmlFor="image">Image :</label>
              <input onChange={settingData} type="text" name="image" id="image" placeholder='ImageURL' />
          </Wrapper>
          <Wrapper>
              <label style={{fontWeight: "bold", fontSize: "18px"}} >Categories :</label>
              <label htmlFor="vegetables">Vegetables</label>
              <input onChange={addCategory} type="checkbox" name="vegetables" id="vegetables" />
              <label htmlFor="fruits">Fruits</label>
              <input onChange={addCategory} type="checkbox" name="fruits" id="fruits" />
              <label htmlFor="provisions">Provisions</label>
              <input onChange={addCategory} type="checkbox" name="provisions" id="provisions" />
          </Wrapper>
          <input onClick={addDataToJson} type="submit" value="ADD ITEM" />
      </form>
    </MainWrapper>
  )
}

export default ProductInput;

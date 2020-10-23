import styled from 'styled-components'

const RecomedationDiv = styled.div`
  width: 68%;
  margin: 10px auto;
  background-color: #4CB1F7; 
  color: #f5f5f6;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items:center;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 60px;
  border: 1px solid white;
  h1{
    font-size: 46px;
    margin-bottom: 15px;
  }
  div.recomend{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 15px;
    width: 94%;
    padding-bottom: 15px;
  }
  div.items {
    background: white; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #303030;
    font-weight: bold;
    padding-top: 10px;
  }
  div.items img {
    width: 80px;
    height: 80px;
  }
  div.items p {
    padding: 10px;
  }
  div.ultimo {
    grid-template-columns: 2fr;
 
    grid-column-start: 1; 
    grid-row-start: 1; 
    grid-row-end: 3; 
     
  }
  @media(max-width:700px){
    div.recomend{
      grid-template-columns: 1fr;
    }
    h1{
      font-size: 25px;
    }
  }
`

export default RecomedationDiv
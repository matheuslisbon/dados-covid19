import styled from 'styled-components'

const CasesDiv = styled.div`
  section{
    width: 68%;
    margin:10px auto;
    color: #f5f5f6;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
    div{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      align-items:center;
      border: 1px solid white;

      background-color: #4CB1F7; 

    border-radius: 8px;

    line-height: 1.5;
    font-weight: bold;
    }
    div p.case {
      padding: 15px;
    }
    div p.data{
      background:tomato;
      width: 100%;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      display:flex;
      flex-direction:column;
      text-align:center;
      padding: 4px;
    } 
    @media(max-width:750px){
      section{
        grid-template-columns: 1fr;  
      }
    }


  


`

export default CasesDiv
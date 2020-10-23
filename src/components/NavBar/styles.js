import styled from 'styled-components'

const NavBarDiv = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
  background: #4CB1F7;
  height: 60px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: clamp(8px, 15px, 20px );
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border: 1px solid white;
  @media(max-width:750px){
    font-size: 10px;
  }
`

export default NavBarDiv
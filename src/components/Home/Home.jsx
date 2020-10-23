import React, {useState, useEffect} from 'react'
import HomeDiv from './styles'
import axios from 'axios'
import Cases from '../CasesDiaries/Cases'

export default function Home (){
  const [countries, setCountry] = useState([])
  const [pais, setPais] = useState("BR")

  useEffect(()=>{
    async function createOption(){
      const response = await axios.get('https://covid19.mathdro.id/api/countries')
      const data = (response.data.countries)
      setCountry(data)
      
  }
  createOption()
  }, [])

  return (
    <HomeDiv>
      <header>
        
        <h2>Dados diarios de covid-19</h2>
        <p>Selecione o país para ver os resultados </p>
        <form action="">
          selecione o país :  <br/>
          <select name="pais" onChange={(e)=> setPais(e.target.value)}>
          <option  value='BR'>Brasil</option>
            {countries.map((city, key)=> {
              return <option key={key} value={city.iso2}>{city.name}</option>
            })}
            
          </select>
        </form>
            
      </header>

      <Cases url={`https://covid19.mathdro.id/api/countries/${pais}`} ></Cases>
    </HomeDiv>

  )
}
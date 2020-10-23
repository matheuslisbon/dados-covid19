import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CasesDiv from './styles'

export default function Cases ({url}){
  const [cases, setCases] = useState([])
  const [mortes, setMortes] = useState([])
  const [recovers, setRecovers] = useState([])
  useEffect(()=>{
    async function dataCases(){
      console.log(url)
      const response = await axios.get(url)
      const data = (response.data.confirmed)
      const dataKill = (response.data.deaths)
      const dataRecovers = (response.data.recovered)
      setMortes(dataKill)
      setRecovers(dataRecovers)
      setCases(data)
      
  }
  dataCases()
  }, [url])
  return (
<CasesDiv>

  <section>
    <div><p className='case'>Total de casos</p>  <p className='data'>{cases.value}</p></div>
    <div><p className='case'>Total de recuperados</p> <p className='data'>{recovers.value}</p></div>
    <div><p className='case'>Total de mortes</p> <p className='data'>{mortes.value}</p></div>

  </section>

</CasesDiv>
  )
}
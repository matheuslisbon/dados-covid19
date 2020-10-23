import React from 'react'

import RecomendationDiv from './styles'
import imgPessoa from '../../styles/images/cold.png'
import ImgAviao from '../../styles/images/flight.png'
import ImgMao from '../../styles/images/agreement.png'
import ImgGato from '../../styles/images/fever.png'
import ImgMask from '../../styles/images/medical-mask.png'
import ImgHome from '../../styles/images/stay-at-home.png'
import ImgLavarMao from '../../styles/images/washing-hand.png'
import ImgKit from '../../styles/images/first-aid-kit.png'

export default function Recomandations (){
  return(
    <RecomendationDiv>
      <h1>Recomendações</h1>

      <div className='recomend'>
        <div className='items'>
          <img src={ImgMao} alt=""/>
          <p>Não Aperta as mãos </p>
        </div>

        <div className='items'>
          <img src={imgPessoa} alt=""/>
          <p>Quando tossir ou espirrar cubra a boca e nariz com lenço</p>
        </div>

        <div className='items'> 
          <img src={ImgAviao} alt=""/>
          <p>Não viaje se tiver tosse ou febre</p>
        </div>

        <div className='items'>
          <img src={ImgGato} alt=""/>
          <p>Evitar contato com animais que estão doentes</p>
        </div>

        <div className='items'>
          <img src={ImgMask} alt=""/>
          <p>Usar mascaras em locais publicos, E em caso de dûvida</p>
        </div>

        <div className='items'>
          <img src={ImgHome} alt=""/>
          <p>Fique em casa durante a quarentena e só saia em caso de necessidade</p>
        </div>

        <div className='items ultimo'>
          <img src={ImgLavarMao} alt=""/>
          <p>Sempre lavar as mãos por cerca de 30 segundos com sabão e água</p>
        </div>
        <div className='items'>
          <img src={ImgKit} alt=""/>
          <p>Usar mascaras em locais publicos, E em caso de dûvida</p>
        </div>
      </div>
  </RecomendationDiv>
  )

}
import React from 'react';
import './style.css'

import Title from "../../../components/Title/Index";

const About = () => {
   return(
       <section className="about">
           <Title text="Sobre o projeto" className="main__title" />
           <p>Hoje em dia a procura de bootcamps está em alta, muitas pessoas procuram informações sobre o tema e acabam ficando perdidas no meio de tantas opções e fontes sobre o assunto, pensando nisso decidimos criar o boot4free, uma plataforma para centralizar informações dos bootcamps gratuitos.</p>
       </section>
   )
}

export default About
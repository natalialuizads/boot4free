import React from "react";
import "./style.css";

import Title from "../../../components/Title/Index";
import person1 from "../../../assets/images/person_sobre.png";
import person2 from "../../../assets/images/person_sobre2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__infos">
        <div>
          <Title text="O que é um bootcamp?" className="about__title" />
          <p className="about__paragraph">
            Bootcamps são treinamentos intensivos focados em tecnologia, que
            visam treinar seus participantes em aspectos técnicos e
            sócio-emocionais. A duração normalmente pode variar entre algumas
            semanas até meses, e a ideia é que após a conclusão, o aluno esteja
            pronto para ser empregado no mercado de trabalho, além de participar
            na comunidade caso assim deseje.
          </p>
          <Title text="Sobre Projeto" className="about__title" />
          <p className="about__paragraph">
            Hoje em dia a procura de bootcamps está em alta, muitas pessoas
            procuram informações sobre o tema e acabam ficando perdidas no meio
            de tantas opções e fontes sobre o assunto, pensando nisso decidimos
            criar o boot4free, uma plataforma para centralizar informações dos
            bootcamps gratuitos.
          </p>
        </div>
      </div>
      <img className="about__person__women" src={person1} alt=""></img>
      <img className="about__person_man" src={person2} alt=""></img>
    </section>
  );
};

export default About;

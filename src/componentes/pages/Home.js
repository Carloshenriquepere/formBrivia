import React from "react"
import { Link } from "react-router-dom"
import logoDesck from "../../img/logo_descktop.png"
import vetorDesck from "../../img/vector_1.png"
import sede from "../../img/sede_descktop.png"
import vetor_2 from "../../img/vector_2.png"
import logo_rodape from "../../img/logo_footer.png"
import linkedin from "../../img/img_linkedin.png"
import instagran from "../../img/img_insta.png"
import facebook from "../../img/img_face.png"
import youtube from "../../img/img_youtube.png"
import btn_rodape from "../../img/btn_rodape.png"
import logoMobile from "../../img/logo_mobile.png"
import bannerMobile from "../../img/banner_mobile.png"
import sedeMobile from "../../img/sede_mobile.png"


export default function Home(){
  
    return(
        <body>
            <main>
                <header className="containner">
                    <div className="banner">
                        <div className="logo">
                            <img src={logoDesck} alt="logo grande"/>
                        </div>
                        <div className="link">
                            <Link className="botao-mobile" to={`/user`}> 
                                <strong>USUÁRIO</strong>
                                <img id="vector_descktop" src={vetorDesck}/>   
                            </Link>
                            
                        </div>
                    </div>
                </header>
                <img id="logo-mobile" src={logoMobile} alt="logo-mobile"/>
                   <Link className="botao_" to={`/user`}> 
                        <strong>USUÁRIO</strong>
                        <img id="vector-pequeno" src={vetorDesck}/>   
                    </Link>
                <img id="banner-mobile" src={bannerMobile} alt="banner-pequeno"/>
                <div className="chamada-01">
                    <h1>
                        A2C VIRA BRIVIADEZ E FORMA UMA DAS MEIORES OPERAÇÕES DE COMUNICAÇÃO DO PAÍS
                    </h1>
                    <p>
                        Maior agência full catarinense e uma das top 10 independentes do país, a A2C agora faz parte de um projeto ainda maior e mais ambicioso. Com 18 anos de trajetória, a empresa nascida em Joinville e com forte presença nacional foi adquirida pela BriviaDez. Resultado dessa ação de M&A, surge a mais completa operação de estratégia, experiência e comunicação do Brasil. Cerca de 250 colaboradores atuarão em seis sedes, sendo uma delas no exterior.
                        <br/><br/>
                        De acordo com Anderson de Andrade, sócio-fundador e CEO da A2C, a novidade fortalece o estado nos mercados de comunicação e transformação digital.
                        <br/><br/>
                        — Esse é o maior e mais relevante fato já realizado no setor em Santa Catarina. São duas empresas nativas da nova economia e da era da transformação completa dos modelos de negócios — aponta o executivo, que fará parte do Conselho de Administração da BriviaDez.
                    </p>
                </div> 
                <div className="chamada-02">
                    <h2>FOCO EM SANTA CATARINA 
                        <img className="vector02" src={vetor_2} alt="vector02-chamada-2"/  >
                    </h2>
                    <p>
                        Segundo as duas empresas que unificaram as operações, a percepção da relevância do mercado catarinense foi uma das principais motivações da aquisição. Líder estadual, a A2C tem entre seus clientes algumas das principais marcas locais, como Senior, Ciser, Embraco, Univille, Ailos e Neogrid – com o reforço do portfólio nacional, que reúne Paris Filmes e Tecnisa, entre outras companhias. Já a BriviaDez mantém um carteira com 30 clientes de grande porte, como Vivo, Banco Carrefour, Votorantim Cimentos e KPMG. Em Santa Catarina, atua há mais de duas décadas, desenvolvendo soluções para organizações como Floripa Airport e Angeloni. 
                        <br/><br/>
                        — Estamos alinhados com o propósito do estado mais inovador do país. Santa Catarina é campeã na abertura e no desenvolvimento de empresas de tecnologia, comunicação e inovação. Aqui se formam muitos talentos, que aumentam substancialmente a competitividade catarinense. Por isso tudo, queremos reforçar nossa participação — destaca Anderson de Andrade, que já presidiu Associação Brasileira dos Agentes Digitais (ABRADi) e é investidor serial em scale-ups. 
                    </p>
                    <picture>
                    <source media="(min-width:980px )" srcset={sede}/>
                        <img className="img-sede" src={sedeMobile} alt="imagem sedes"/>
                    </picture>
                    <h2>CULTURA NÔMADE</h2>
                    <p className="p-chamada-02">
                        As seis sedes são como hubs para a relação com os clientes e parceiros. Todos os procedimentos de gestão de capital humano estão preparados para que as pessoas desempenhem suas tarefas de qualquer lugar. É o que a BriviaDez chama de “cultura nômade”: os profissionais estão liberados a trabalhar em qualquer lugar, desde que apresentem resultados. Por isso mesmo, a companhia tem apostado cada vez mais em sedes com formato colaborativo. O trabalho remoto é uma estratégia para ampliar a força da agência ao ser uma plataforma de soluções para as marcas, permitindo melhores e mais profundas conexões com ecossistemas de serviços especializados.
                        <br/><br/>
                        Os executivos que lideram a operação acreditam que é necessário desconstruir pensamentos arraigados e abrir-se ao novo. Não por acaso, os colaboradores são chamados de “desbravadores”. A proposta é levada tão a sério que fez a BriviaDez ativar conexões internacionais. Holanda, Austrália e Portugal estão entre as nações que recebem alguns membros da equipe – que desempenham suas atribuições com a mesma competência de quando estavam nas sedes originárias. Os drives para isso dar certo, segundo os diretores da agência, são cultura e gestão. 
                    </p>  
            <div className="footer">
                <div className="grupo">
                    <img src={logo_rodape} alt="logo roda pe"/>
                    <div>
                        <a href="#" className="logolinkedin">
                            <img src={instagran} alt="botao-linkedin"/>
                        </a>
                        <a href="#" className="logoinsta">
                            <img src={linkedin} alt="botao-insta"/>
                        </a>
                        <a href="#" className="logoface">
                            <img src={facebook} alt="botao-face"/>
                        </a>
                        <a href="#" className="logoyou">
                            <img src={youtube} alt="botao-youtube"/>
                        </a>
                    </div>
                    <a href="#">
                        <img src={btn_rodape} alt="botao-link-rodape"/>
                    </a>
                </div>
            </div>
                    <div className="footer-descktop">
                        <div className="grupo-descktop">
                            <img src={logo_rodape} alt="logo roda pe"/>
                            <div>
                                <a href="#" className="logolinkedin">
                                    <img src={linkedin} alt="botao-linkedin"/>
                                </a>
                                <a href="#" className="logoinsta">
                                    <img src={instagran} alt="botao-insta"/>
                                </a>
                                <a href="#" className="logoface">
                                    <img src={facebook} alt="botao-face"/>
                                </a>
                                <a href="#" className="logoyou">
                                    <img src={youtube} alt="botao-youtube"/>
                                </a>
                            </div>
                            <a href="#">
                                <img src={btn_rodape} alt="botao-link-rodape"/>
                            </a>
                        </div>
                    </div>  
                </div>
            </main>
            
        </body>
    )
}
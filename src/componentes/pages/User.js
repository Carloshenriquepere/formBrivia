import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoDesck from "../../img/logo_descktop.png"
import vetorDesck from "../../img/vector_1.png"
import logo_rodape from "../../img/logo_footer.png"
import linkedin from "../../img/img_linkedin.png"
import instagran from "../../img/img_insta.png"
import facebook from "../../img/img_face.png"
import youtube from "../../img/img_youtube.png"
import btn_rodape from "../../img/btn_rodape.png"
import logoMobile from "../../img/logo_mobile.png"
import bannerMobile from "../../img/banner_mobile.png"
import sedeMobile from "../../img/sede_mobile.png"

export default function User(){

    const [user , setUser] = useState([])
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then((res) => res.json())
        .then((res) => setUser(res))
    },[])
    
    
    return(
       
        <body>
            <main>
                <header className="containner">
                    <div className="banner">
                        <div className="logo">
                            <img src={logoDesck} alt="logo grande"/>
                        </div>
                        <div className="link">
                            <Link className="botao-mobile" to={`/`}>
                                <strong>HOME</strong>
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
                <h1 className="h1">LISTA DE USUARIO</h1>
                {user.map(user=> ( 
                    <div className="container" key={user.id}> 
                       <div className="btn_editar"> 
                            <p><strong>BRET</strong></p>
                            <Link to={`/sobre/${user.id}`}>Editar</Link>
                        </div> 
                        <ul>
                            <li> <strong>Nome</strong> {user.name}</li>
                            <li> <strong>Email</strong> {user.email}</li> 
                        </ul>
                    </div>
                ))}
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
            </main>
        </body>
        
    )
}
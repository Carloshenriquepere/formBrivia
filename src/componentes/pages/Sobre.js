import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
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
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup" 
import {useForm} from "react-hook-form"

const schema = yup.object().shape({
    webSite: yup.string() .url('url inválida!') .required('O campo Site é OBRIGATORIO!'),
    phone: yup.number() .required('O campo Telefone é OBRIGATORIO!') .positive() 
     .integer(),
    email: yup.string() .email('Email inválido!') .required('O campo Email é OBRIGATORIO!'),
    name: yup.string().required('O campo Nome é OBRIGATORIO!')
  }) .required();


export default function Sobre(){
   
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [webSite, setWebSite] = useState('');


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setName(res.name)
            setEmail(res.email)
            setPhone(res.phone)
            setWebSite(res.website)
            console.warn(res)
        });
    },[])

    const {register ,handleSubmit, formState:{ errors } } = useForm({
       resolver: yupResolver(schema)
       
    })
   
    const handleLogin = (e) => {
        console.log({name, email, phone, webSite})
    }
   
    

    
    return(
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
            <h1 className="h1">EDITAR USUÁRIO</h1> 
            <div className="btn_editar">
                <p> <strong>ID:</strong> {id}</p>
                <Link className="Link" to={'/user'}>Cancelar</Link>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className="form">
                <label className="form_label">Nome: </label>
                <input 
                    type="text" 
                    name="nome"
                    {...register('name')}
                    placeholder="Nome"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                />
                <br/>
                <label className="form_label">Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    {...register('email')}
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
                <br/>
                <label className="form_label">Telefone: </label>
                <input 
                    type="tel" 
                    name="phone"
                    {...register('phone')}
                    placeholder="Telefone"
                    onChange={(e)=> setPhone(e.target.value)}
                    value={phone}
                />
                <br/>
                <label className="form_label">Site: </label>
                <input 
                    type="url" 
                    name="webSite"
                    {...register('webSite')}
                    placeholder="Site"
                    onChange={(e)=> setWebSite(e.target.value)}
                    value={webSite}
                />
                <br/>
                <p className="form_label">*Todos os campos são obrigatórios</p>
                    <br/><br/>  
                <button className="form_btn" type="submit">Salvar Cadastro</button>

                <div className="btn_cadastro">
                        <span className="p_erro">
                            {errors.name?.message}
                            {errors.email?.message}
                            {errors.phone?.message}
                            {errors.webSite?.message}
                        </span>
                </div>
                <div className="btn_cadastro">
                    <span>
                            
                    </span>
                </div>
            </form> 
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
        </main>
    )   
    
}
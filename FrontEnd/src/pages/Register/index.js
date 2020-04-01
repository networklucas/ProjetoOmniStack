import React,{useState} from 'react';
import './styles.css';
import logoImag from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';


 export default  function Register(){

 const[name, setName] = useState('');
 const[email, setEmail] = useState('');
 const[whatsapp, setWhatsApp] = useState('');
 const[city, setCity] = useState('');
 const[uf, setUf] = useState('');

 const history = useHistory();
    async function handleRegister(e){
       e.preventDefault();
  
       const data =
       {
           name,
           email,
           whatsapp,
           city,
           uf,
        };

        
        try{
        const response = await api.post('/ongs',data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        
        history.push('/');

        } catch(err){
                       alert('Erro no Cadastro, tente novamente');
                       console.log(err);
                     }

        }
       
    
    

     return(
         <div className="register-container">
             <div className="content">
             <section>
                <img src={logoImag} alt ="Be the Hero"/>
                <h1>Cadastro </h1>
                <p>Faça seu cadastro em nossa Plataforma para ser mais feliz</p>

                <Link className="back-link"to="/">
                         <FiArrowLeft size={16} color="#E02041"/>
                      Não Tenho cadastro
                </Link>
             </section>

             <form onSubmit={handleRegister}>
                 <input 
                 placeholder="Nome da ONG"
                 value={name}
                 onChange={e => setName(e.target.value)} 
                 />

                 <input 
                 type="email"
                 placeholder="E-mail"
                 value={email}
                 onChange={e => setEmail(e.target.value)} 
                 />

                 <input 
                 placeholder="WhatsApp"
                 value={whatsapp}
                 onChange={e => setWhatsApp(e.target.value)}
                 />

                 <div className="input-group">
                     <input
                      placeholder="cidade"
                      value={city}
                      onChange={e => setCity(e.target.value)} 
                      />
                     <input 
                     placeholder="UF" 
                     value={uf}
                     onChange={e => setUf(e.target.value)} 
                     style={{width:80}}
                     />

                 </div>
                 <button className="button" type="submit" >
                     Cadastrar
                 </button>
             </form>
         </div>
    </div>
     )
     
 }
 

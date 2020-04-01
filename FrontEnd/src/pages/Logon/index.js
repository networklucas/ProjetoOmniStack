import React from 'react';
import {useState} from 'react';
import './styles.css';
import herosImag from '../../assets/heroes.png';
import logoImag from '../../assets/logo.svg';
import{FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import api from '../../services/api.js';



 export default function Logon(){

    const [id,setId] = useState('');
    const history = useHistory();


    async function handlelogin(e){
        e.preventDefault();
        try {
            const response = await api.post('session', {id});
           localStorage.setItem('ongId', id);
           localStorage.setItem('ongName',response.data.name);
            history.push('/profile')
         
            
        } catch (error) {
            console.log({id});
            alert('Falha no Login, tente novamente.');
            
        }


    }
     return(
         <div className="logon-container">
             <section className="form">
                 <img src={logoImag} alt="Be the Hero"/>
                 <form onSubmit={handlelogin}>
                     <h1>Faça seu Logon </h1>
                     <input 
                     placeholder="Sua ID"
                     name={id}
                     onChange={e => setId(e.target.value)}
                     />
                     <button className="button" type="submit">Entrar</button>
                     <Link className="back-link"to="/cadastro">
                         <FiLogIn size={16} color="#E02041"/>
                      Não Tenho cadastro
                     </Link>
                 </form> 

    
             </section>
             <img src={herosImag} alt="Heroes"/>
         </div>

     );
 }
import React from 'react';
import './styles.css';
import herosImag from '../../assets/heroes.png';
import logoImag from '../../assets/logo.svg';
import{FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';



 export default function Logon(){
     return(
         <div className="logon-container">
             <section className="form">
                 <img src={logoImag} alt="Be the Hero"/>
                 <form>
                     <h1>Faça seu Logon </h1>
                     <input placeholder="Sua ID"/>
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
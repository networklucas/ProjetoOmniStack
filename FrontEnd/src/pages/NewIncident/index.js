import React from "react";
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import{FiLogIn, FiArrowDownLeft} from 'react-icons/fi';


 export default function Newincident(){
     return (
        <div className="new-incidents-container">
            <div className="content">
            <section>
               <img src={logoImg} alt ="Be the Hero"/>
               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamente para encontrar alguem</p>
               <Link className="back-link" to="/profile">
               <FiArrowDownLeft size={16} color="#E02041"/>
               Voltar para home
               </Link>
              
            </section>

            <form>
                <input placeholder="Titulo do caso"/>
                <textarea placeholder="Descrição"/>
                <input placeholder="Valor em Reais"/>
                
                <button className="button" type="submit" >
                 <FiLogIn size={16} color="#E02041"/> 
                    Cadastrar
                </button>
            </form>
        </div>
   </div>
     )
 }
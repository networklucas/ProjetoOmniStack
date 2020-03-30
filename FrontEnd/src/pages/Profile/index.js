import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import{FiTrash2} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';


export default function Profile(){
    return (
        <div className= "profile-container">
            <header>
                <img src={logoImg} alt="be the hero"/>
                <span> Bem vindo *** </span>
                <Link className="button" to="./novoincidente"> Cadastrar novo Caso</Link>
               <button type="button">
                   <FiPower size={18} color="#E02041"/>
               </button>
             </header>

            <h1>Casos cadastados</h1>

            <ul> 
             <li>
                  <strong> CASO:</strong>
                  <p>Caso</p>

                  <strong>DESCRIÇÃO</strong>
                  <p>Descrião do caso</p>

                  <strong>VALOR:</strong>
                  <p>R$120,00</p>

                  <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
                  </button>
            </li>
            <li>
                  <strong> CASO:</strong>
                  <p>Caso</p>

                  <strong>DESCRIÇÃO</strong>
                  <p>Descrião do caso</p>

                  <strong>VALOR:</strong>
                  <p>R$120,00</p>

                  <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
                  </button>
                  
            </li>
            <li>
                  <strong> CASO:</strong>
                  <p>Caso</p>

                  <strong>DESCRIÇÃO</strong>
                  <p>Descrião do caso</p>

                  <strong>VALOR:</strong>
                  <p>R$120,00</p>

                  <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
                  </button>
                  
            </li>
            <li>
                  <strong> CASO:</strong>
                  <p>Caso</p>

                  <strong>DESCRIÇÃO</strong>
                  <p>Descrião do caso</p>

                  <strong>VALOR:</strong>
                  <p>R$120,00</p>

                  <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
                  </button>
                  
            </li>
          </ul>
         
        
      </div> 
           


    ) ;
}
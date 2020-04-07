import React,{useState} from "react";
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import{FiLogIn, FiArrowDownLeft} from 'react-icons/fi';
import api from "../../services/api";


export default function Newincident(){

const[titulo, setTitulo] = useState('');
const[descripiton,setDescripiton] = useState('');
const[value,setValue]= useState('');
const history = useHistory();
const ongId = localStorage.getItem('ongId');


async function handleNewincident(e){
    e.preventDefault();
   
    const data ={
        titulo,
        descripiton,
        value,
    };
    try { 
        console.log(data);
        await api.post('incidents',data, { headers:{Authorization: ongId,}})
       
       history.push('/profile');
        
    } catch (error) {
        alert('Erro ao Cadastrar caso, tente novamente');
    }
}

     return (
        <div className="new-incidents-container">
            <div className="content">
            <section>
               <img src={logoImg} alt ="Be the Hero"/>
               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso no qual precise de ajuda e encontre alguem para ajudar. </p>
               <Link className="back-link" to="/profile">
               <FiArrowDownLeft size={16} color="#E02041"/>
               Voltar para home
               </Link>
              
            </section>

            <form onSubmit={handleNewincident} >
                <input 
                placeholder="Titulo do caso"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                />
                <textarea 
                placeholder="Descrição"
                value={descripiton}
                onChange={e => setDescripiton(e.target.value)}
                />
                <input 
                placeholder="Valor em Reais"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                
                <button className="button" type="submit" >
                 <FiLogIn size={16} color="#E02041"/> 
                    Cadastrar
                </button>
            </form>
        </div>
   </div>
     )
 }
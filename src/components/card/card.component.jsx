//Using class component

import React,{ Component } from "react";
import './cards.style.css';

class Card extends Component{
    render(){
        const {name,email,id}=this.props.monster;
        return(
            <div className="card-container" key={id}>
                    <img 
                        alt={`monster ${name}`}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                    <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        )
    }
}

export default Card;

//Using fucntional component

// import './cards.style.css';

// const Card=((props)=>{
//     const {name,email,id}=props.monster;           //const Card=({monster})=>{const {name,email,id}=monster;}
//         return(
//             <div className="card-container" key={id}>
//                     <img 
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                     />
//                     <h2>{name}</h2>
//                     <p>{email}</p>

//                 </div>
//         )
// })
// export default Card;
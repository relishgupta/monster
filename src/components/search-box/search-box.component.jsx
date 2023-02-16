//Using class component

import { Component} from "react";
import './search-box.css';
class SearchBox extends Component{
    render(){
        const {className,placeholder,onChangeHandler}=this.props;
        return(
            <input 
                className={`search-box ${className}`} 
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler}
        />
        )
    }
}
export default SearchBox;

//Using functional component

// import './search-box.css';

// const SearchBox=((props)=>{
//         const {className,placeholder,onChangeHandler}=props;      
//         return(
//             <input 
//                 className={`search-box ${className}`} 
//                 type='search' 
//                 placeholder={placeholder} 
//                 onChange={onChangeHandler}
//         />
//         )
//     })
// export default SearchBox;

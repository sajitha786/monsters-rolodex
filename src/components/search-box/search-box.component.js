import {Component} from 'react';
import './search-box.styles.css';

class SearchBox extends Component{
    
    onSearchChange ={

    }

    render(){
        return(
            <div>
                <input 
                    className={`search-box ${this.props.className}`}
                    type= 'search' 
                    placeholder ={this.props.placeholder} 
                    onChange ={this.props.onChangeHandler}
                    //console.log(searchFeild)
        />
            </div>
        )
    }
}

export default SearchBox;
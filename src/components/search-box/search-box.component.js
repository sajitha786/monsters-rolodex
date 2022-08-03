import './search-box.styles.css';

const SearchBox = ({className,placeholder,onChangeHandler}) => (
<div>
    <input 
      className={`search-box ${className}`}
      type= 'search' 
      placeholder ={placeholder} 
      onChange ={onChangeHandler}
      //console.log(searchFeild)
    />
</div>
);

export default SearchBox;
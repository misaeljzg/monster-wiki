import './search-box.styles.css';

import {ChangeEvent, ChangeEventHandler} from 'react';

//const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

// interface ISearchBoxProps{
//     className: string;
//     placeholder?: string;
    
// }

// interface ISearchBoxProps {
//     onChangeHandler : (a: string) => void;
// }

type SearchBoxProps = {
    className: string;
    placeholder? : string;
    onChangeHandler : (event: ChangeEvent<HTMLInputElement>) => void;
}



const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

// class SearchBox extends Component {
//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type='search'
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         )
//     }
// }

export default SearchBox;
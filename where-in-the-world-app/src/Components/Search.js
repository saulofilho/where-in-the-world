import React from 'react';

const Search = (props) => {
    return (
        <form onSubmit={props.getInfos}>
            <input type="text" name="country"></input>
            <button>search</button>
        </form>
    );
}

export default Search;
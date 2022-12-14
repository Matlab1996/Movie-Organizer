import React from 'react';
import './SearchBox.css';

import store from '../../redux/store';
import actionSearchMovie from '../../redux/actionSearchMovie';

export default function SearchBox({searchMovie}) {
    let [searchLine, setSearchLine] = React.useState('');

    let searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        searchMovie(searchLine).then((movies) => store.dispatch(actionSearchMovie(movies)));
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Search film by title:
                    <input
                        type="text"
                        className="search-box__form-input"
                        placeholder="For example, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Search
                </button>
            </form>
        </div>
    );
}
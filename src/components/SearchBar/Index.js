import React from "react";
import "./style.css";

import Input from "../Input";
import Button from "../Button";
import IconSearch from "../../assets/images/search.png";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="searchbar">
      <Input
        type="text"
        placeholder="O que você busca?"
        value={value}
        onChange={onChange}
        className="input__search"
      />
      <Button className="btn__search" icon={IconSearch} text="" />
    </div>
  );
};

export default SearchBar;

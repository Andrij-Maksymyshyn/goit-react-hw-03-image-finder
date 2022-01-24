import React, { Component } from 'react';
import toast from 'react-hot-toast';
import IconButton from '../IconButton';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { Header, SearchForm, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputFormValue: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({
      inputFormValue: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    const { inputFormValue } = this.state;
    e.preventDefault();

    if (inputFormValue.trim() === '') {
      toast.error('Please, fill in the field of search');
      return;
    }

    this.props.onSubmit(inputFormValue);

    this.setState({
      inputFormValue: '',
    });
  };

  render() {
    const { inputFormValue } = this.state;

    return (
      <>
        <Header>
          <SearchForm onSubmit={this.handleSubmit}>
            <IconButton aria-label="search">
              <BiSearch width="40" height="40" />
            </IconButton>
            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={inputFormValue}
              onChange={this.handleChange}
            />
          </SearchForm>
        </Header>
      </>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

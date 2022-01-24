import { Component } from 'react';
import { getImage } from '../../getImage/getImage';
import { Toaster, toast } from 'react-hot-toast';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import { Container } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    endPage: 0,
  };

  addSearchValue = formData => {
    this.setState({
      searchValue: formData,
    });
  };

  componentDidUpdate(_, prevStates) {
    const { searchValue, page, perPage } = this.state;
    if (prevStates.searchValue !== searchValue) {
      return getImage(searchValue, page === 1).then(data => {
        if (data.hits.length === 0) {
          return toast.error(
            'Sorry, there is no pictures. Try another request...',
          );
        }
        this.setState({
          images: [...data.hits],
          page: 1,
          totalHits: data.totalHits,
          endPage: perPage + 1,
        });
      });
    }
  }

  handleClick = () => {
    const { searchValue, page } = this.state;

    getImage(searchValue, page + 1).then(data => {
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.hits],
          page: page + 1,
          totalHits: data.totalHits,
          endPage: data.totalHits - page * 12,
        };
      });
    });
  };

  render() {
    const { images, endPage, perPage } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.addSearchValue} />
        <Toaster position="top-right" />
        {images.length > 0 && <ImageGallery prop={this.state.images} />}
        {endPage > perPage && <Button buttonP={this.handleClick} />}
      </Container>
    );
  }
}

export default App;

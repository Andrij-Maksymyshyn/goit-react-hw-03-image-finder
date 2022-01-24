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
  };

  addSearchValue = formData => {
    this.setState({ searchValue: formData });
  };

  componentDidUpdate(_, prevStates) {
    const { searchValue, page } = this.state;
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
        };
      });
    });
  };

  render() {
    const { images } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.addSearchValue} />
        <Toaster position="top-right" />
        <ImageGallery prop={this.state.images} />
        {images.length > 0 && <Button buttonP={this.handleClick} />}
      </Container>
    );
  }
}

export default App;

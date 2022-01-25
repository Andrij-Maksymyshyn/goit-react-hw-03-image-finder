import { Component } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import { Container } from './App.styled';

const KEY = '24382748-1dfb63c81149146d5ea200f75';
const BASE_URL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    endPage: 0,
    perPage: 12,
  };

  addSearchValue = formData => {
    this.setState({
      searchValue: formData,
      page: 1,
      images: [],
    });
  };

  async componentDidUpdate(_, prevState) {
    const { searchValue, images, page, perPage, endPage } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      try {
        await axios
          .get(
            `${BASE_URL}/?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}
`,
          )
          .then(data => {
            const {
              data: { hits, totalHits },
            } = data;

            if (hits.length === 0) {
              return toast.error(
                'Sorry, there is no pictures. Try another request...',
              );
            }

            this.setState(prevState => {
              return {
                images: [...prevState.images, ...hits],
                endPage: totalHits - page * perPage,
              };
            });

            if (images.length > 0 && endPage < perPage) {
              return toast.error('Pictures are finished.Try new request');
            }
          });
      } catch (error) {
        toast.error('Whoops, something went wrong:', error);
      }
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, endPage, perPage } = this.state;
    return (
      <Container>
        <Toaster position="top-right" />
        <Searchbar onSubmit={this.addSearchValue} />
        {images.length > 0 && <ImageGallery prop={this.state.images} />}
        {endPage > perPage / 2 && <Button buttonP={this.handleClick} />}
      </Container>
    );
  }
}

export default App;

// npm install spinners-react

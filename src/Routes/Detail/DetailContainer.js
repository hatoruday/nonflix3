import { movieAPI, tvAPI } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

const eclass = class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push('/');
    }
    let result;
    try {
      if (isMovie) {
        const request = await movieAPI.movieDetail(id);
        result = request.data;
      } else {
        const request = await tvAPI.showDetail(id);
        result = request.data;
      }
      console.log(result);
    } catch {
      this.setState({
        error: "Can't find resultdd",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
};

export default eclass;

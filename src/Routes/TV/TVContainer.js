import { tvAPI } from 'api';
import React from 'react';
import TVPresenter from './TVPresenter';
const eclass = class extends React.Component {
  state = {
    top_rated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: top_rated },
      } = await tvAPI.top_rated();
      const {
        data: { results: popular },
      } = await tvAPI.popular();
      const {
        data: { results: airingToday },
      } = await tvAPI.airingToday();
      this.setState({
        top_rated,
        popular,
        airingToday,
      });
    } catch {
      this.setState({
        error: "Can't find TV information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { top_rated, popular, airingToday, error, loading } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        top_rated={top_rated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
};

export default eclass;

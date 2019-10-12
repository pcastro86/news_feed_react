import React, {Component} from 'react';
import CardNews from '../components/Card/Card';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import api from '../utils/api'


class Home extends Component{

  constructor(props){
    super(props)
    this.state = {
      isloading: false,
      news : [],
    }
  }
  
  async componentDidMount(){
    const news = await api.latestNews();
    const a = news.slice(1,10)
    this.setState({news: a})
  }



  render(){
    const { news, isloading } = this.state
    return (
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
            {
            news.map(latestNew => (
              <Grid item xs={4} key={latestNew.news_id}>
                <CardNews news={latestNew} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  loading: PropTypes.bool,
  news: PropTypes.arrayOf(PropTypes.shape({
    bayes_category_id: PropTypes.string,
    category: PropTypes.string,
    content_views_count: PropTypes.string,
    date: PropTypes.number,
    img_url: PropTypes.string,
    news_id: PropTypes.number,
    reactions_count: PropTypes.string,
    source_id: PropTypes.number,
    source_name: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }))
}
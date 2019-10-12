import React, {Component} from 'react';
import CardNews from '../components/Card/Card';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import api from '../utils/api';
import Skeleton from 'react-skeleton-loader';


class Home extends Component{

  constructor(props){
    super(props)
    this.state = {
      isloading: false,
      news : [],
    }
  }
  
  async componentDidMount(){
    this.setState({isloading: true})
    const news = await api.latestNews();
    this.setState({news: news.slice(0,10), isloading: false})
  }



  render(){
    const { news } = this.state
 
    return (
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          {this.state.isLoading &&
            Array.from({ length: 10 }, (_, index) => (
              <Grid item xs={4} key={index}>
                <Skeleton width={282} height={337} />
              </Grid>
            ))}

          {news.length > 0 &&
            news.map(latestNew => (
              <Grid item xs={4} key={latestNew.news_id}>
                <CardNews news={latestNew} />
              </Grid>
            ))}
        </Grid>
      </div>
/*       <div style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
            {isloading && Array.from({length: 10}, (_,index) => (
              <Grid item xs={4} key={index}>
                <Skeleton width={282} height={337} />
              </Grid>
            ))}
            {
              news.length > 0 &&
            news.map(latestNew => (
              <Grid item xs={4} key={latestNew.news_id}>
                <CardNews news={latestNew} />
              </Grid>
            ))}
        </Grid>
      </div> */
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
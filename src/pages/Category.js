import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CardNews from '../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import api from '../utils/api';


const categoriesId = {
  home: '0',
  politica: '1',
  internacionales: '2',
  tecnologia: '3',
  espectaculos: '4',
  deportes: '5',
}




class Category extends Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }

    componentDidMount ( ){
      this.fetchNews()
    }

    componentDidUpdate(prevProps) {
      if (prevProps.match.params.category !== this.props.match.params.category) {
        this.fetchNews();
      }
    }

    fetchNews = async () => {
      const category = this.props.match.params.category;
      const categoriesNames = categoriesId[category];
      const news = await api.categoryNews(categoriesNames);
      this.setState({news})
    }









  render(){
    const { news } = this.state;
    
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

export default withRouter(Category);
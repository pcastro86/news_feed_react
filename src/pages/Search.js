import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CardNews from '../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import api from '../utils/api';



class Search extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div style={{ marginTop: '10px' }}>
      <h1>Resultados de busquedad</h1>
       <Grid container spacing={3}>
            {
            this.props.searchResult.map(latestNew => (
              <Grid item xs={4} key={latestNew.news_id}>
                <CardNews news={latestNew} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default withRouter(Search);
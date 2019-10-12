import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom'


const categoriesId = {
  home: '0',
  politica: '1',
  internacionales: '2',
  tecnologia: '3',
  espectaculos: '4',
  deportes: '5'
}

const categoriesNames = Object.keys(categoriesId)


class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
    }
  }

  handleChange = async (index) => {
    this.setState({ value: index });
    const urlValue = categoriesNames[index]

    const { history } = this.props
    if(urlValue == 'home'){
      history.push(`/`);
    } else {
      history.push(`/categorias/${urlValue}`);
    }
  };


  render(){
    return (
      <div>
        <Tabs
            value={this.state.value}
            onChange={(_event, index) => this.handleChange(index)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            { categoriesNames.map( (element, index) => (
              <Tab label={element} key={index}/>
            ))}
          </Tabs>
      </div>
    );
  }
}

export default withRouter(Nav);

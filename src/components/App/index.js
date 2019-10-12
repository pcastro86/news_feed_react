import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import Container from "@material-ui/core/Container";
import Header from "../Header/index";
import { createGlobalStyle } from "styled-components";
import Nav from "../Nav/index";
import Search from "../../pages/Search";
import api from "../../utils/api";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0px;
  }
`;

class App extends Component {
  state = {
    searchResult: []
  };

  handleSearch = async event => {
    if (event.length) {
      const res = await api.searchNews(event);
      this.setState({ searchResult: res });
      console.log(this.state.searchResult);
    }
  };

  render() {
    return (
      <Router>
        <Container maxWidth="lg">
          <GlobalStyle />
          <Header handleSearch={this.handleSearch} />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categorias/:category" exact component={Category} />
            <Route
              path="/search/:query"
              render={props => (
                <Search {...props} exact searchResult={this.state.searchResult} />
              )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}
export default App;

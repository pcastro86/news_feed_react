import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";

const StyledToolbar = styled(Toolbar)`
  h6 {
    flex-grow: 1;
  }
`;
const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    color: white;
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiInputLabel-outlined.MuiInputLabel-marginDense {
    color: white;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  onEnter = e => {
    if (e.key === "Enter") {
      this.props.handleSearch(e.target.value);
      this.props.history.push(`search/${e.target.value}`);
    }
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <StyledToolbar>
            <Typography variant="h6">News Mio</Typography>
            <StyledTextField
              label="Buscar noticias"
              margin="dense"
              variant="outlined"
              onKeyPress={this.onEnter}
            />
          </StyledToolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Header);

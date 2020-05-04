import * as React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";

export class DrawerItems extends React.Component {
  render() {
    return(
      <List>
        <ListItem button component={Link} to={"/players"}>
          <ListItemText primary={"Players"} />
        </ListItem>
      </List>
    )
  }
}
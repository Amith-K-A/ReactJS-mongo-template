import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import LayersIcon from "@material-ui/icons/Layers";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import AccountTreeSharpIcon from "@material-ui/icons/AccountTreeSharp";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
const styles = {
  sideNav: {
    marginTop: "-60px",
    zIndex: 3,
    marginLeft: "0px",
    position: "fixed",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  active: {
    color: "black",
  }
};
export const mainListItems = (pathName: any) => {
  
  return (
    <div>
      <Link to="/project" style={styles.link}>
        <List>
          <ListItem button selected={"/project" === pathName}>
            <ListItemIcon>
              <AccountTreeSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
          </ListItem>
        </List>
      </Link>
      <Link to="/dashboard" style={styles.link}>
        <List>
          <ListItem button selected={"/dashboard" === pathName}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Link>
      <Link to="/userform" style={styles.link}>
        <List>
          <ListItem button selected={"/userform" === pathName}>
            <ListItemIcon>
              <FormatAlignRightIcon />
            </ListItemIcon>
            <ListItemText primary="User Forms" />
          </ListItem>
        </List>
      </Link>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);

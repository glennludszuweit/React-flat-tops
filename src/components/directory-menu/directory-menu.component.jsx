import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data";
import "./directory-menu.styles.scss";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;

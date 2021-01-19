import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./main-menu.styles.scss";

class MainMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                  }
            ]
        }
    }

    render() {
        return(
          <div className="main-menu">       
            {
              this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
              ))
            }            
          </div>
        );
    }
}

export default MainMenu;
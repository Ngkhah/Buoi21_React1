import React, { Component } from 'react';

import Banner from './Banner';
import Item from './Item';
export default class BTBody extends Component {
    render() {
        return (
        
        <div className="btbody" style={{width: '80%', margin: '0 auto'}}>
          <Banner />
          <Item />
          
        </div>
        
            
        )
    }
}

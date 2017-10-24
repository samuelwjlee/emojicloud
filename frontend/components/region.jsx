import React from 'react';
import {fetchEmojis} from '../utility/d3cloud';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Region extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return(
      <div>
        <SelectField
          floatingLabelText="Region"
          value={this.state.value}
          onChange={this.handleChange}>

          <MenuItem value={1} primaryText="World" />
          <MenuItem value={2} primaryText="Asia" />
          <MenuItem value={3} primaryText="America" />
          <MenuItem value={4} primaryText="Africa" />
          <MenuItem value={5} primaryText="Europe" />
        </SelectField>
      </div>
    )
  }
}

export default Region;

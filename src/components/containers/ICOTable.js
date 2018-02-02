import React, {
  Component
} from 'react';
import { PropTypes } from "prop-types";
import TableSimple from "./../presentational/TableSimple";



export default class ICOTable extends Component {
  constructor(props) {
    super(props);
    this.convertToArray = this.convertToArray.bind(this);
    this.state = {
      loading: true
    };
  }


  componentDidMount() {
    const myInit = {
      method: 'GET',
      cache: 'default'
    };
    const url = "https://min-api.cryptocompare.com/data/all/coinlist"

    fetch(url, myInit)
      .then(res => res.json())
      .then(
        data => this.setState({
          loading: false,
          data: this.getIteratableDataset(data),
          baseUrl: data.BaseImageUrl
        })
      )
      .catch(
        error => this.setState({
          loading: false,
          error
        })
      )


  }

/*
Get get iteratable dataset to work with
@param obj 
*/
  getIteratableDataset(obj) {
    return Array.from(Object.values(obj.Data).slice(0, this.props.length));
  }

  render() {
    return <TableSimple { ...this.state }/>
  }
}

ICOTable.propTypes ={
  length: PropTypes.number
}

ICOTable.defaultProps = {
  length: 20
};
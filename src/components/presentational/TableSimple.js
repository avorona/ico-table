import React from 'react';
import { PropTypes } from "prop-types";
import ReactTable from "react-table";
import 'react-table/react-table.css'
import './TableSimple.css';



const LoadingView = () => <div>Loading data...</div>

const ErrorView = () => <div>I'm sorry! Please try again.</div>
  
const TableView = ( { data, baseUrl } ) => {


const columns =  [

        {
          Header: <span className="table_heading">Serial number</span>,
          Cell: row => (
          <div className='table__cell' >
            <span >{`${row.index+1}`}</span>
          </div>
          )
        },
        {
          Header: <span className='table__heading'> ICO logo </span>,
          id: "ImageUrl",
          accessor: 'ImageUrl',
          Cell: (props,row) => (
            <div className='table__cell table__cell_img'  title={`${props.value}`}>        
              <img src={`${baseUrl}${props.value} `}  alt={`ICO ${props.value}`}/>        
            </div>
          )

        },
        {
          Header: "ICO name",
          id: "Name",
          accessor: 'Name',
          Cell: props => (
          <div className='table__cell'>
            <span> {props.value }</span>
          </div>
          )
        }  
  ]

  return (
  <ReactTable
    data={ data }
    columns={ columns }
    defaultPageSize={10}
    // showPagination={false}
    className="-striped -highlight"
  />
  )
}

   
const TableSimple= ( { loading, data, baseUrl }) => {
 
  if( loading) {
    return <LoadingView/>;
  } else if (data) {
    return <TableView data={data} baseUrl={baseUrl} />
  } else {
    return <ErrorView/>
  }
};

// Apecify types for TableSimple params

  TableSimple.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array,
    baseUrl: PropTypes.string
  }



export default TableSimple;
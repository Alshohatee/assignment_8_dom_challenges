import React from "react"
import TableCell from "./TableCell"

class TableRaw extends React.Component {

    render() {
        console.log( this.props.column )
        const column = this.props.column
        const currentColor = this.props.color
        console.log( "TableRow Test: " + column )

        let displayRow = []

        for ( let i = 0; i < column; i++ ) {
            displayRow.push( <TableCell key={i} color={currentColor} /> )
        }


        return (
            <>
                {displayRow}
            </>
        )
    }

}

export default TableRaw
import React from "react"
import TableRow from "./TableRow"

class Table extends React.Component {
    
    render () {
        console.log(this.props.row)
        const grid = []
        for (let i=0; i<this.props.row; i++) {
            grid.push(<tr><TableRow key ={i} column={this.props.column}/></tr>)
        }
        return (
            <table>
                {grid}
                
            </table>
        )

    }
    
}

export default Table
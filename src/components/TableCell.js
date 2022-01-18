import React from "react"


class TableCell extends React.Component {

    render() {
        const currentColor = this.props.color
        console.log( "Table Cell CVhange color" + currentColor )
        return (
            <>
                <td><p className="square" style={{ background: currentColor }}></p></td>
            </>
        )
    }
}

export default TableCell
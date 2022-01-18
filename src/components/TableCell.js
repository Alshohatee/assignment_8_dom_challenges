import React from "react"


class TableCell extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            color: ""
        };

    }

    boxClick = () => {
        this.setState( { color: this.props.color } )
    }
    handleMouseOver(event) {
        if (event.buttons === 1) {
            this.setState( { color: this.props.color } )
        }
        
    }

    background = () => {
        this.setState( { color: this.props.color } )
    }

    render() {

        return (
            <>
                <td><p
                    className="square"
                    style={{ background: this.state.color }}
                    onClick={this.boxClick}
                    onMouseOver={(event) => this.handleMouseOver(event)}></p>
                </td>

            </>
        )
    }
}

export default TableCell
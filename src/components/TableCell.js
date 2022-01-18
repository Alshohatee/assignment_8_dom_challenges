import React from "react"


class TableCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };
    }

    boxClick = () => {
        this.setState({color: this.props.color})
    }

    render() {
       
        return (
            <>
                <td><p className="square" style={{ background: this.state.color }} onClick={this.boxClick}></p></td>

            </>
        )
    }
}

export default TableCell
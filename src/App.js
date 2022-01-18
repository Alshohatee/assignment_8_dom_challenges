
import TableRow from './components/TableRow'
import React from "react"
import "./App.css"
import Table from "./components/Table"


class App extends React.Component {
  constructor( props ) {
    super( props )

    //Set initial state
    this.state = {
      row: 0,
      column: 0,
      color: ""
    }

    //Bind keyword
    this.addRow = this.addRow.bind( this )
    this.addColumn = this.addColumn.bind( this )
    this.removeRow = this.removeRow.bind( this )
    this.removeColumn = this.removeColumn.bind( this )
    this.removeReset = this.removeReset.bind( this )

    this.fillAll = this.fillAll.bind( this )
    this.clearAll = this.clearAll.bind( this )
    this.fillUnedited = this.fillUnedited.bind( this )
    this.createColor = this.createColor.bind( this )
  }

  // This function adds a new row of cells
  addRow() {
    // When there is no cell in the beginning
    if ( this.state.row === 0 && this.state.column === 0 ) {
      this.setState( { row: 1, column: 1, color: "" } )
    } else {
      this.setState( { row: this.state.row + 1 } )
    }
    console.log( "row: " + this.state.row + " column: " + this.state.column )
  }

  addColumn() {
    // When there is no cell in the beginning
    if ( this.state.row === 0 && this.state.column === 0 ) {
      this.setState( { row: 1, column: 1, color: "" } )
    } else {

      this.setState( { column: this.state.column + 1 } )
    }
  }

  removeRow() {
    // When there is no cell in the beginning or if you remove all rows
    if ( this.state.row <= 0 ) {
      this.setState( { row: 0, column: 0, color: "" } )
    } else {
      this.setState( { row: this.state.row - 1 } )
      console.log( "Row- Taking 1" )
    }
    console.log( this.state )
  }

  removeColumn() {
    // When there is no cell in the beginning or if you remove all columns
    if ( this.state.column <= 0 ) {
      this.setState( { row: 0, column: 0, color: "" } )
    } else {
      this.setState( { column: this.state.column - 1 } )
      console.log( "column- Taking 1" )
    }
    console.log( this.state )
  }

  removeReset() {
    // Everything is default state
    this.setState( { row: 0, column: 0, color: "" } )

    console.log( this.state )
  }

  fillAll() {
    // Everything is default state
    let fill = document.querySelectorAll( ".square" );

    fill.forEach( element => element.style.backgroundColor = this.state.color );



    console.log( this.state.color )
    console.log( "fillAll " + this.state.color )

  }

  clearAll() {
    // Everything is default state
    let clear = document.querySelectorAll( ".square" );

    clear.forEach( element => element.style.backgroundColor = "" );


    console.log( this.state.color )
    console.log( "clear All" + this.state.color )

  }

  createColor( event ) {
    this.setState( { color: event.target.value } )
  }


  //This function will fill color to All Unedited Square
  fillUnedited() {
    document.querySelectorAll( ".square" ).forEach( e => {
      if ( e.style.backgroundColor === "" ) {
        e.style.backgroundColor = this.state.color;
      }
    }
    )
  }


  render() {
    return (
      <>
        <main>
          <div className="controlPanel">
            <div className="edit-btn">
              <button className="control-btn" onClick={() => this.addRow()}>Add Row</button>
              <button className="control-btn" onClick={() => this.addColumn()}>Add Column</button>
              <button className="control-btn" onClick={() => this.removeRow()}>Remove Row</button>
              <button className="control-btn" onClick={() => this.removeColumn()}>Remove Column</button>
              <button className="control-btn" onClick={() => this.removeReset()}>Reset</button>
            </div>
            <div className="color-btn">
              <button className="control-btn" onClick={() => this.fillUnedited()}>Fill Unedited</button>
              <button className="control-btn" onClick={() => this.fillAll()}>Fill All</button>

              <button className="control-btn" onClick={() => this.clearAll()}>Clear All</button>
              <label className="Selection">Color Selection</label>

              <select className="colorSelection" onChange={( event ) => this.createColor( event )}>
                <option value="transparent">None</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
              </select>
            </div>

            <div className="table">
              <Table row={this.state.row} column={this.state.column} color={this.state.color} />
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default App;

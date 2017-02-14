import React, { Component } from 'react';
import DropZone from 'react-dropzone';


class CreateCalendar extends Component{
  onDrop(files){
    console.log("received", files)
    return <img src={files.name} />
  }

  onOpenClick(files){
    this.refs.dropzone.open();
    return <img src={files.name} />
  }

  render(){
    return (
      <div>
        <DropZone ref="dropzone" onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload</div>
        </DropZone>
        <button className="btn btn-primary" onClick={this.onOpenClick.bind(this)}>
          Open Dropzone
        </button>

      </div>
    )
  }
}

export default CreateCalendar

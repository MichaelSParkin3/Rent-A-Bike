import React, { Component } from 'react';

export default class News extends Component {
  render() {
    console.log(this.props.id);
    // var url = 'url(' + this.props.img + ')';
    // var divStyle = {
    //   'background-image': url
    // };
    return (
      <div className="card imghover">
        <div className="overflow">
          <img
            className="card-img-top"
            src={window.location.origin + this.props.img}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.info}</p>
        </div>
        <div className="card-tags">
          {this.props.tags.map(x => <span className="tag">{x}</span>)}
        </div>
        <div className="card-footer">
          <small className="text-muted">{'by ' + this.props.author}</small>
        </div>
      </div>
    );
  }
}

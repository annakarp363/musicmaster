import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  render() {
    console.log('gallery props', this.props)
    let tracks = [{
      name: ' ',
      image: [
          {},
          {},
           {"#text":''}

    ]
    }]
    if(this.props.tracks !== undefined){
        tracks = [].slice.call(this.props.tracks);
        console.log(tracks);
    }

    console.log(tracks);
    return (
      <div className="tracks">

       {
           tracks.map((elem, id)=>{

             console.log(elem);
               console.log();
           return (
             <div key={id} className="track">
                 <p className="track-text">
                    {elem.name}
                 </p>
                 <img
                     alt="track"
                     className="track-img"
                     src={elem.image[2]['#text']}

                 />
             </div>
               )
           })
       }
       </div>
       )
  }
}

export default Gallery;

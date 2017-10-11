import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = {name: '', listeners: "", image: [{$text: ""}]};
    artist = this.props.artist !== null ? this.props.artist : artist;

    return (
    <div className="profile">
      <img
        alt="Profile"
        className="profile-img"
        src={artist.image[3]['#text']}
      />
      <div className="profile-info">
        <div className="profile-name">{artist.name}</div>
        <div className="profile-listeners">
        {artist.listeners} listeners</div>
      </div>
    </div>
    )
  }
}

export default Profile;

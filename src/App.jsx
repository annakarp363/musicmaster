import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      toptracks: {}
    }
  }

  search() {
    const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist';
    let FETCH_URL = `${BASE_URL}=${this.state.query}&api_key=25538e27970152c04392725571438b7c&format=json&type=artist&limit=1`;
    const ALBUM_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist';

    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.results.artistmatches.artist[0];
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}=${this.state.query}&api_key=25538e27970152c04392725571438b7c&format=json`;
      fetch(FETCH_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        const { toptracks } = json;
        this.setState({toptracks});
      })
    });
  }

  render() {
    const {toptracks} = this.state;
    console.log(toptracks);

    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ?
            <div>
              <Profile
                artist={this.state.artist}
                />
                <Gallery
                  tracks={toptracks.track}
                />
              </div>
            : <div></div>
        }


      </div>
    )
  }
}

export default App;

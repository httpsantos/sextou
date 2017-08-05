import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import './app.css';

class App extends Component {
  render() {
    if (this.props.playlistQuery && this.props.playlistQuery.loading) {
      return <p>loading</p>
    }

    if (this.props.playlistQuery && this.props.playlistQuery.error) {
      return <p>error</p>
    }

    const playlist = this.props.data.Playlist;
    console.log(playlist);

    return (
      <header>
          <h1>Sextou</h1>
          <div>
            <h2>add a song</h2>
            <input type="text"/>

          </div>
          <div>
            <h2>next songs</h2>
            <ol>
            </ol>
          </div>
      </header>
    );
  }
}

const PlaylistQuery = gql`
  query Playlist {
    Playlist(id: "opipuoij") {
      tracks
    }
  }
`
export default graphql(PlaylistQuery)(App);
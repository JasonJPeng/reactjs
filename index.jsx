class PlayerBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        playing: false
      };
    }
  
    clickPlayButton() {
      // TODO: implement
    }
  
    renderPlayButton() {
      let buttonUrl = '';
      if (this.state.playing) {
        buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557137524244/rounded-pause-button.svg';
      } else {
        buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557136695174/play-right-arrow-circular-button.svg';
      }
      return (
        <input
          id="playPause"
          className="play-button"
          type="image"
          src={buttonUrl}
          onClick={() => this.clickPlayButton()}
        />
      );
    }
  
    renderNextButton() {
      let buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557137539567/next-button.svg';
      return (
        <input
          id="next"
          className="play-button" 
          type="image" 
          src={buttonUrl} 
          // TODO: implement onClick event
        />
      );
    }
  
    renderPrevButton() {
      let buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557138446191/previous-button.svg';
      return (
        <input
          id="prev"
          className="play-button" 
          type="image"  
          src={buttonUrl} 
          // TODO: implement onClick event
        />
      );
    }
  
    render() {
      return (
        <div>
          {this.renderPlayButton()}
          {this.renderPrevButton()}
          {this.renderNextButton()}
          
          <div className="song-descr">
            <span className="song-artist song-span">Artist of the selected song</span>
            <span className="song-name song-span">Selected song name</span>
          </div>
        </div>
      );
    }
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
  
      // TODO: implement missing parts of the constructor
  
      const playlist = [
          {
            id: 1,
            name: 'Yesterday',
            artist: 'Beatles'
          },
          {
            id: 2,
            name: 'Nothing else matters',
            artist: 'Metallica'
          },
          {
            id: 3,
            name: 'Always',
            artist: 'Bon Jovi'
          },
          {
            id: 4,
            name: 'Waka Waka',
            artist: 'Shakira'
          } 
      ];
  
      this.state = {
        playlist: playlist,
        curItemIndex: 0
      };
    }
  
    getSongClass(index) {
      let className = 'list-group-song song row';
      if (index === this.state.curItemIndex) {
        className += ' selected';
      }
      return className;
    }
  
    renderItems() {
      return this.state.playlist.map((song, index) => {
        return (
          <li className={this.getSongClass(index)} key={song.id}>
            <span className="song-artist song-span">{song.artist}</span>
            <span className="song-name song-span">{song.name}</span>
          </li>
        );
      });
    } 
  
    clickNextButton() {
      // TODO: implement
    }
  
    clickPrevButton() {
      // TODO: implement
    }
  
    render() {
      return (
        <div>
          <ul className="song-list container">
            {this.renderItems()}
          </ul>
          <hr />
          <div className="player-bar"> 
            <PlayerBar
              // TODO: provide corresponding parameters
            />
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
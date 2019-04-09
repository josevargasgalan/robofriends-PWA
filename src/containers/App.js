import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getRobots();
  }

  render() {
    const { searchField, setSearchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const error = this.props.error ? <h1>{this.props.error}</h1> : null;
    const renderRobots = isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={event => setSearchField(event)} />
        <Scroll>
          {error}
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
    return renderRobots;
  }
}

const mapStateToProps = state => ({
  searchField: state.searchReducer.searchField,
  robots: state.getRobotsReducer.robots,
  isPending: state.getRobotsReducer.isPending,
  error: state.getRobotsReducer.error
});

const mapDispatchToProps = dispatch => ({
  setSearchField: event => dispatch(actions.setSearchField(event.target.value)),
  getRobots: () => dispatch(actions.getRobots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

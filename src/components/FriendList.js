import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
  constructor(props){
    super();
    this.state = {
      friendsPage : 1
    }
  }

  static propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  showNext () {
    this.setState({
      friendsPage: (this.state.friendsPage + 1)
    });
  }

  render () {
    return (
      <ul className={styles.friendList}>
        {
          mapValues(this.props.friends, (friend, key) => {
            if (friend.gender === this.props.selectedGender) {
              if (key <= (this.state.friendsPage*2)) {
                return (<FriendListItem
                  key={friend.id}
                  id={friend.id}
                  name={friend.name}
                  starred={friend.starred}
                  {...this.props.actions} />);
              } else if (key > (this.state.friendsPage*2+1)) {
                return (
                  <div>
                    <button onClick={this.showNext.bind(this)}>Show next...</button>
                  </div>
                )
              }
            }
          })
        }
      </ul>
    );
  }

}

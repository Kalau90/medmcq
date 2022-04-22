import React from 'react';
import Countdown from 'react-countdown';
import { Button, Divider, Grid, Icon, Image, Message } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from 'redux/reducers';
import image from './tj_profile.jpg';
import settingsReducer from 'redux/reducers/settings';
import Log from 'classes/log.class';

interface SelectionCountdownProps {}

const SelectionCountdown = (props: SelectionCountdownProps) => {
  const dispatch = useDispatch();
  const hasVoted = useSelector((state: ReduxState) => state.settings.hasVoted);
  const user = useSelector((state: ReduxState) => state.auth.user);

  const openVoting = async (name: string) => {
    dispatch(settingsReducer.actions.toggleHasVoted());
    await Log.create({ name });
  };

  if (hasVoted)
    return (
      <Button
        basic
        color="green"
        fluid
        onClick={() => {
          window.open('https://e-vote.dk/e-valg-afstemning/faces/Afstemning', '_blank');
          openVoting('voted again');
        }}
      >
        Tak for din stemme! <Icon name="heart outline" />
        Fik du ikke stemt? Tryk her.
      </Button>
    );
  return (
    <Message style={{ border: '2px solid red' }}>
      <div
        style={{
          textAlign: 'center',
          fontSize: '2em',
          color: 'red',
          fontWeight: 'bolder',
          marginBottom: '5px'
        }}
      >
        <Countdown date={new Date(2020, 10, 12, 16)} />
      </div>
      
      <Divider />
      
    </Message>
  );
};

export default SelectionCountdown;

import React from 'react';
import { View } from 'react-native';
import UnreadMessagesCounter from '../UnreadMessagesCounter';
import DateSnippet from '../DateSnippet';

export default function SecondarySnippet({ date, unreadMessages }) {
  return (
    <View style={{ width: 90, alignItems: 'flex-end', marginRight: 10, marginTop: 5 }}>
      <DateSnippet date={date} />
      <UnreadMessagesCounter unreadMessages={unreadMessages} />
    </View >
  );
}
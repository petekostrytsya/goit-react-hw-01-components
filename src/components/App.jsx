import React from 'react';
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';
import { TaskNumberOne, TitleTasks } from 'App.styled';



export const App = () => {
  return (
    <TaskNumberOne>

      <TitleTasks>"Profile"</TitleTasks>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      
      <TitleTasks>"Statistics"</TitleTasks>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      
      <TitleTasks>"FriendList"</TitleTasks>
        <FriendList friends={friends} />
    
      <TitleTasks>"TransactionHistory"</TitleTasks>
        <TransactionHistory items={transactions} />
      
    </TaskNumberOne>    
  )
}




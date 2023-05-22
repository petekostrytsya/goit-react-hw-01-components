import React from 'react';
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';



export const App = () => {
  return (
    <section>
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    > <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      </div> 
      
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>

      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <FriendList friends={friends} />
      </div>

      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <TransactionHistory items={transactions} />
      </div>
    </section>

    
  )
}




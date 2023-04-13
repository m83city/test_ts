import logo from './logo.svg';
import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, } from '@apollo/client';
import { log } from 'console';
import { Test } from './Test';

function App() {

  enum QWery {
    BOT = 'bot',
    SHOP = 'shop'
  }
  const q = {
    bot: () => console.log(),
    shop: 2
  }

  let a = QWery.BOT

  const qqq = q[a]
  const content = "content"
  return (
    <>
      <div className='test'> content div</div>
      <div className='test_another'> content div another</div>

      <div className='input-container'>
        <input className='input-field' type="text" />
        <label className='input-label'>Name</label>
      </div>

      {/*       <div className='input-container'>
        <input className='input'></input>
        <span className='placeholder'>{content}</span>
      </div> */}

      {/* <form>
        <input  type='text' />
        <label  placeholder='Type your Email'></label>
      </form> */}

    </>
  );
}

export default App;



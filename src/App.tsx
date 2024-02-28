import React from 'react';
import CryptoExchangeWidget from 'fanbase-pure-erc20-swap-widget';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex justify-center'>
        <div className='flex'>
          <CryptoExchangeWidget 
            appId='0x3946fb7bd818532c15370fe059de80783d3fae31070dd3e0730838fd20cb1aa5' // Access key from plan.fanase.io
            chainId={80001} // Plan registered chain id
          />
        </div>
      </div>
    </div>
  );
}

export default App;
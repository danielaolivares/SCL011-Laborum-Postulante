import React from 'react';
import './App.css';
import Registry from './Component/registry';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/personalnformationView';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ProviderContext>
        <PersonalInformation></PersonalInformation>
      </ProviderContext>
    <Registry></Registry>
    </div>
  );
}

export default App;

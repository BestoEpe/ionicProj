import React, { useState } from 'react';
import './Setup.css';

type SetupProps = {
  name?: string;
};

const Setup: React.FC<SetupProps> = ({ name }) => {
  const [copiedCommand, setCopiedCommand] = useState('');

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(''), 2000); 
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div id="setup-container">
      <h1>Ionicin asennusohjeet</h1>
      <p>Tervetuloa Ionicin asennusoppaaseen, {name}!</p>
      <ol>
        <li>
          <strong>Asenna Node.js:</strong> Varmista, että Node.js on asennettu järjestelmääsi.
        </li>
        <li>
          <strong>Asenna Ionic CLI:</strong> Suorita komento <code>npm install -g @ionic/cli
          <button onClick={() => copyToClipboard('npm install -g @ionic/cli', 'ionic-cli')}>
            {copiedCommand === 'ionic-cli' ? 'Copied' : 'Copy'}
          </button>
          </code>
        </li>
        <li>
          <strong>Luo Ionic-projekti:</strong> Käytä komentoa <code>ionic start
          <button onClick={() => copyToClipboard('ionic start', 'ionic-start')}>
            {copiedCommand === 'ionic-start' ? 'Copied' : 'Copy'}
          </button>
          </code>
        </li>
        <li>
          <strong>CodeSpaces-asennus:</strong> Jos käytät GitHub CodeSpacesia, varmista, että se on määritetty tarvittavilla laajennuksilla ja asetuksilla Ionic-kehitystä varten.
        </li>
        <li>
          <strong>Käynnistä sovellus:</strong> Siirry projektikansioosi ja suorita 
          <code>ionic serve
          <button onClick={() => copyToClipboard('ionic serve', 'ionic-serve')}>
            {copiedCommand === 'ionic-serve' ? 'Copied' : 'Copy'}
          </button>
          </code>
        </li>
      </ol>
    </div>
  );
};

export default Setup;

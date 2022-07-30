import './App.css';
import { Trans, useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function App() {
  const languagesDP = [
    {key : 'en', value: 'English'},
    {key : 'hindi', value: 'Hindi'},
    {key: 'es', value: 'Spanish'},
    {key: 'la', value: 'Latin'},
    {key: 'zh', value: 'Chinese'}
  ];

  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  
  const handleChange = (e) => {
    setLanguage(e.target.value);
  }

  useEffect(()=> {
    i18n.changeLanguage(language);
  }, [language]);

  const header = {
    'padding': '15px',
    'margin-bottom': '10px',
    'background-color': '#26a69a',
    'color': '#fff',
    'font-weight': '500'
  }


  return (
    <div className="App">
      <header style={header}> 
      <p>React Internalization(i18n) example</p></header>
      <select onChange={handleChange}>
      { languagesDP.map(lan =>
          <option key={lan.value} value={lan.key}>{lan.value}</option>
      )}
      </select>
      <h3>{t('key')}</h3>
      <p>
         <Trans i18nKey='message'>
         localization example
        </Trans>
      </p>
    </div>
  );
}

export default App;

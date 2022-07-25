import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorMessage } from './components/errorMessage/ErrorMessage';
import { Snackbar } from './components/snackbar/Snackbar';
import { Header } from './components/Header/Header';
import { HandleDisplay } from './components/handleDisplay/HandleDisplay';
import { View } from './pages/view/View';
import { Home } from './pages/home/Home';

export const App: React.FC<{propsMessage: string}>= ({propsMessage}) => {

  const [showError, setShowError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  console.log(`${propsMessage} App`)

  return (
    <main>
      <Header propsMessage={propsMessage}/>
      <HandleDisplay propsMessage={propsMessage} shouldDisplay={!!showError}>
        <ErrorMessage propsMessage={propsMessage}
          onClose={() => setShowError('')}
          title={'External error'}
          body={showError}
        />
      </HandleDisplay>
      <Snackbar propsMessage={propsMessage}
        text={successMessage}
      />
      <Routes >
        <Route path='/posts' element={(<Home propsMessage={propsMessage}
        setSuccessMessage={() => setSuccessMessage('Successfully loaded posts')}
        setShowError={() => setShowError('Error while getting the list of posts.')} />)} />
        <Route path={"/post/:id"} element={(
          <View propsMessage={propsMessage} setShowError={() => setShowError('Error while getting the post.')}
          setSuccessMessage={() => setSuccessMessage('Successfully loaded post information')} />
        )} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes >
    </main>
  );
}

export default App;

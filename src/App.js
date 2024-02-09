import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './component/Header';
import TopPage from './component/TopPage';
import Issue from './component/Issue';
import SendIssue from './component/SendIssue';
import Footer from './component/Footer';
import {Container, CssBaseline,ThemeProvider,createTheme} from '@mui/material'
import IssuePage from './component/IssuePage';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';

const theme = createTheme({
  typography: {
    fontFamily: [
      'メイリオ',
      'ＭＳ Ｐゴシック',
      'Helvetica Neue',
      'Arial',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'sans-serif',
    ].join(),
  },
  palette:{
    primary:{
      main:'#222',
    },
    secondary:{
      main:'#fff',
    },
    thirdary:{
      main:"#36C",
    },
    background:{
      default: '#eee',
    },
    text:{
      primary:'#222',
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
          {/* <Container maxWidth="xl"></Container> */}
          <div style={{ padding:"20px"}}></div>
          <Routes>
            <Route path="/" element={<TopPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/issue">
              <Route path=':issueId' element={<IssuePage />} />
            </Route>
            <Route path="/sendissue" element={<SendIssue/>}/>
          </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;

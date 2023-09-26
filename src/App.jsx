import './App.css'
import Header from './components/Header';
import { useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
    background:{
      primary: "#ddd",//
      secondary:"",
      text:''
    },
    color:{
      primary:"darkblue",
      text:"#222"
    }
}

const darkTheme = {
  background:{
    primary: "#000",
    secondary:''
  },
  color:{
    primary:"lightblue",
    text:"#eee"
  }
}

function App() {
  const [is_dark,set_is_dark] = useState(false);
  const toggleTheme = ()=>{
     set_is_dark((is_dark)=> !is_dark );
  } 

  return (
    <>
      <ThemeProvider theme={is_dark?darkTheme:lightTheme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

export default App

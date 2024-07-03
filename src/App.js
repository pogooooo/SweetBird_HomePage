import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './styles/App.css';
import Main from './components/Main.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/signUp.js'
import Bulletin from './components/Bulletin.js';
import AnimatedCursor from 'react-animated-cursor'

function App() {
  return (
    <div className="App">
      <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color='193, 11, 111'  // 기본 색상 설정 (내부 커서에만 적용)
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          innerStyle={{
              backgroundColor: 'rgb(255, 255, 255)'  // 내부 커서 색상
          }}
          outerStyle={{
                // 외부 커서 색상
              background: 'rgb(75, 189, 255, 0)'
          }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/bulletin" element={<Bulletin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

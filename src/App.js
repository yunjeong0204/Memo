import { memo, useCallback, useEffect, useRef, useState } from 'react';
import MemoInput from './Component/MemoInput';
import MemoTemPlate from './Component/MemoTemPlate';
import MemoList from './Component/MemoList';
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import { createGlobalStyle } from 'styled-components';
import ThemeContext from './Component/Theme/ThemeContext';
import ThemeMain from './Component/Theme/ThemeMain';


const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    background: white;
  }
`;

// theme
const themeList = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

function App() {
  const [memos, setMemos] = useState([]);


  //theme 테마변경
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }

  useEffect(() => {
    const dbMemos = JSON.parse(localStorage.getItem('memos')) || [];
    setMemos(dbMemos);
  },[]);

  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos)); 
  }, [memos]);

  const nextId = useRef(4);

  const handleInput = useCallback((text) => {
    
    // 날짜
    const d = new Date();
    const d2 = d.getFullYear() + "-" + (d.getMonth() +1) + "-"+ d.getDate();
    
    const memo = {
      id: uuidv4(),
      text ,
      checked: false,

      // 날짜
      data: d2
    }; 

    const copyMemos = [...memos];
    copyMemos.push(memo);
    setMemos(copyMemos); 

    nextId.current += 1;
  }, [memos]);

  // onRemove
  const handleRemove = useCallback((id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const copyMemos = [...memos];
      const targetIndex = memos.findIndex((memo) => memo.id === id);
      copyMemos.splice(targetIndex, 1);
      setMemos(copyMemos);  
    } 
  }, [memos]); 

  //onToogle 
  const handleToggle = useCallback((id) => {
    const copyMemos = [...memos];
    const target = memos.find((memo) => memo.id === id);
    target.checked = !target.checked;
    const targetIndex = memos.findIndex((memo) => memo.id === id);
    copyMemos[targetIndex] = target;
    setMemos(copyMemos);
  }, [memos]);

  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider value={{theme, themeList, toggleTheme}}>
      <ThemeMain />
        <MemoTemPlate>
          <MemoInput onInsert={handleInput}/>
          <MemoList memos={memos} 
            onRemove = {handleRemove}
            onToggle = {handleToggle}/>
        </MemoTemPlate>
      </ThemeContext.Provider>
    </>
  );
}
export default App;

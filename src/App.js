import { memo, useCallback, useEffect, useRef, useState } from 'react';
import MemoInput from './Component/MemoInput';
import MemoTemPlate from './Component/MemoTemPlate';
import MemoList from './Component/MemoList';
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import { createGlobalStyle } from 'styled-components';
import ThemeChange from './Component/Theme/ThemeChange';


const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    background: white;
  }
`;

function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const dbMemos = JSON.parse(localStorage.getItem('memos')) || [];
    setMemos(dbMemos);
  },[]);

  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos)); 
  }, [memos]);


  const nextId = useRef(4);

  const handleInput = useCallback((text) => {
    const memo = {
      id: uuidv4(),
      text ,
      checked: false
    }; 

    const copyMemos = [...memos];
    copyMemos.push(memo);
    setMemos(copyMemos); 

    nextId.current += 1;
  }, [memos]);


  // onRemove
  const handleRemove = useCallback((id) => {
    const copyMemos = [...memos];
    const targetIndex = memos.findIndex((memo) => memo.id === id);
    copyMemos.splice(targetIndex, 1);
    setMemos(copyMemos);
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
      <MemoTemPlate>
        <ThemeChange />
        <MemoInput onInsert={handleInput}/>
        <MemoList memos={memos} 
          onRemove = {handleRemove}
          onToggle = {handleToggle}/>
      </MemoTemPlate>
    </>
  );
}

export default App;

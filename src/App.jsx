import React, { useContext, } from 'react'
import { CounterContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';




function App() {
 
  return <div> 
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  </div>

}

function Count(){
  console.log("faltu ki baate");
  return <div>
    <CountRenderer/>
    <Button/>
  </div>
}
function CountRenderer(){

  const count=useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button(){
  const [count,setCount]=useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>
      Decrease
    </button>
  </div>
}

export default App

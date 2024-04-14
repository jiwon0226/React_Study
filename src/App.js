import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

class Modal2 extends React.Component { //constructor, super, render 채워넣어야함
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(<>
      <div>
        {this.state.age}
      </div>
      <button onClick={()=>this.setState({age:32})}>버튼</button>
    </>)
  }
}

function Modal(props) { //컴포넌트는 대분자
  //style={{background : props.color}}
  return (
    <div className="modal" > 
        <h4>{props.작명[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용d</p>
        <button onClick={()=>{props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])}}>글수정</button>
    </div>
  )
} 

function 함수(){
  
}


function App() {
  let post = "강남 우동 맛집"; //서버에서 가져온 정보
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] ); //state는 갑자기 변경되면 html 자동 재렌더링됨
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값저장] = useState('');


  //document.querySelector('h4').innerHTML = post; //기존에는 변수에 있던 정보를 html에 넣고 싶을 때 innerHTML
  
  //[1,2,3].map(function(){ //array 자료 갯수만큼 함수안의 코드 실행해줌
    // 함수의 파라미터는 array안에 있던 자료
    // return에 적으면 array로 담아줌

  //})

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {/*
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{단골변경(1)}}>단골여부</span>{단골여부}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> 
      */}
      <Modal2></Modal2>
      <div>
      { 
        글제목.map(function(a,i){ //a는 array안의 데이터, 파라미터는 두개까지 가능한데, 뒤에는 반복문 돌때마다 1씩 증가하는 정수,
          //a라고 적거나, 글제목[i]라고 해도됨
          //즉 맵은 왼쪽 array 자료만큼 내부코드 실행, return 오른쪽에 있는 걸 array에 담아주고, 파라미터는 2개 가능
          return ( 
          <div>
              <div className="list">
                <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{ a }
                <span onClick={(e)=>{ e.stopPropagation()
                  let copy1 = [...따봉];
                  copy1[i] = copy1[i] + 1;
                  따봉변경(copy1)  
                  }}>👍</span> {따봉[i]} 
                </h4> 
                <p>2월 17일 발행</p>
                <button onClick={()=>{ 
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                 }}>삭제</button>
              </div>
          </div>
          )
        }) 
      }
      </div>

      <input onChange={(e)=>{입력값저장(e.target.value)}}/>
      <button onClick={()=>{ 
        let copy = [...글제목];
        copy.unshift(입력값); //array 자료 맨 앞에 자료 추가하는 문법
        글제목변경(copy)
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 작명={글제목}/> : null //자식컴포넌트 쓸 때 스테이트 전달, 보통작명은 똑같은거로 함
      }

      {/* 
      <button onClick={()=>{
        let copy = [...글제목]; //arrary나 object는 원본 보존 중요
        //[...점세개] 괄호 벗겨주세요, 다시 씌워주세요 라는거라 화살표가 달라짐
        copy[0] = '여자코트 추천';
        글제목변경(copy); //변경하기전 같으면 변경안해줌 (검사를 해줌), arrary나 object 화살표만 공간에 저장, 즉 달라야만 변경됨

      }}>버튼</button>
      */}

      <button onClick={()=>{
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>가나다 순 정렬</button>
    </div>
  );
}

export default App;

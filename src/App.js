import React, {Component} from 'react'
import "./App.css"

export default class App extends Component{
state = {
  n1:null,
  n2:null,
  result:null,
  msg:null,
  pts:0,
  choose:null,
  ver:true,
  num:true,
  life:3,
  input:"começar",
  pl:"Carregando contas"
}

handleChange = (e) =>{
  this.setState({
    choose: e.target.value
  })
}
verifyEvent = () =>{
  
  if(this.state.life!=0 && this.state.input=="Próximo" && this.state.choose!=''){
    this.setState({
      choose: '',
      num:true
    })
  if(this.state.choose == this.state.result){
    if(this.state.ver==true){
      this.setState({
        pts: this.state.pts+1,
        pl:"Parabéns!!",
        ver:false,
      })
    }
  
  }else{
    if(this.state.life==1){
      this.setState({
        msg:"Game Over"
      })
    }
    if(this.state.ver==true){
      this.setState({
        life:this.state.life -1,
        ver:false,
        pl:"Na próxima vai"
      })
    }
   
  }}
}
multEvent = () =>{
  if(this.state.life !=0 && (this.state.choose!='' || this.state.ver==false) && this.state.num==true){
  let a = parseInt((Math.random()*9)+1)
  let b = parseInt((Math.random()*9)+1)
  this.setState({
    result: a*b,
    msg: `${a} * ${b}`,
    ver:true,
    input:"Próximo",
    choose:'',
    pl:"Digite o valor",
    num:false,

  })
}else{this.setState({
  pl:"Ops! O valor..."
})}
}

reset = () => {
  this.setState({
    life:3,
    pts:0,
    input:"começar",
    result:'',
    msg:'',
    ver:false
  })
}

  render(){
    let {handleChange, multEvent, verifyEvent, reset} = this
    return(
    <div className='game'>
      <div className='game-content'>
        <div className="top-screen">
          <h1>Pontuação: {this.state.pts}</h1> 
          <button className='button' onClick={reset}>RESET</button> 
          <h1>Vida: {this.state.life}</h1>
       </div>
       <div className='mid-screen'>
         <h1>{this.state.msg}</h1> 
       </div>
     
     
      <div className='action'>
        <input className='input' onChange={handleChange} type="number" name="choose" value={this.state.choose} placeholder={this.state.pl}></input>
        <div className='buttons'>
        <button className='button' onClick={verifyEvent}>Confirmar</button>
        <button className='button' onClick={multEvent}>{this.state.input}</button>
       </div>
      </div>
    </div>
    </div>
    )
  }
}
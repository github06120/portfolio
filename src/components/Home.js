import React from 'react'
import './css/Home.css'
import titleImg from './img/Title.png'
class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <h1 class="title">Portfolio</h1>
        <img src = {titleImg}></img>
        <h2>Profile</h2>
        <h3>こんにちは！画像の一番右の紫色が中京大学工学部情報工学科 4年 森山 廣大です。</h3>
        <p>京都府出身 22歳 Unityでゲーム制作しています。</p><br></br>
        <p>私のことを知ってもらいたいと思い<span>react</span>と<span>netlify</span>を使って制作してみました。</p>
        <p>好きなものは、スノーボード・サッカー・ゲームです。</p><br></br>
        <p>性格は気に入ったものはとことん追求し続け、気にならなかったものは全く興味を持たないです。そのため、最近はいろいろな人と関わり初めての体験をしようと心掛けています。</p>
        <p>スノーボードはそのような心掛けから好きになったものの一つです。</p>
        
      </div>
    );
  }
}

export default Home
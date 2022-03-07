import React from 'react'
import './css/About.css'
import titleImg from './img/aboutTitle.png'

class About extends React.Component {
  render() {
    return (
      <div class="about">
        <h1 className="title">About</h1>
        <img src = {titleImg} className ="titleImg"></img>
        <br></br>
        <h2 class="h2body">こんにちは！画像の一番右の紫色が<br></br>中京大学工学部情報工学科 4年 森山 廣大です。</h2>
        <p class="body">京都府出身 22歳 Unityでゲーム制作しています。</p>
        <p class="body">私のことを知ってもらいたいと思い
        <br></br><span>react</span>と<span>netlify</span>を使って制作してみました。
        新しい技術を勉強したらここで使っていこうと思います。
        </p>
        <p class="body">好きなものは、スノーボード・サッカー・ゲームです。</p><br></br>
        <p class="body">性格は気に入ったものはとことん追求し続け、気にならなかったものは全く興味を持たないです。
        <br></br>そのため、最近はいろいろな人と関わり初めての体験をしようと心掛けています。</p>
        <p class="body">スノーボードはそのような心掛けから好きになったものの一つです。</p>
        
      </div>
    );
  }
}

export default About
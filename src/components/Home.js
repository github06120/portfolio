import React from 'react'
import './css/Home.css'


import work1 from './img/work1.png';
import work2 from './img/work2.png';
import work3 from './img/work3.png';
import work4 from './img/work4.png';

class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <iframe src="https://www.youtube.com/embed/m70bJhvTf3U"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="videoHome"></iframe>
        <h1 className="title">News</h1>
        <dl classname ="jdl">
        <dt className="jdt">２０２２. ０３. ０５</dt>
        <dd className="jdd">情報処理学会 第８４回全国大会 ～変わる社会と情報処理～ 教育部門にて参加</dd>
        <dt className="jdt">２０２１. １２. １４</dt>
        <dd className="jdd">ARフィードバックupdate</dd>
        </dl>
        <h1 className="title">Works</h1>
        <div className="contents">
          <div className="item">
            <h2>スマートフォンの音声認識やジャイロを用いた車レース</h2>
            <img src={work1} className="work1"></img>
            <h3>既存しているカーレースとは異なる体験で楽しんでもらうため、<br></br>スマートフォンのジャイロでの操作やiOSのSpeech Frameworkを用いた<br></br>音声認識の操作を取り入れた。</h3>
            <a href="https://youtu.be/m70bJhvTf3U"><button class="button">Demo動画</button></a>
            <a href="https://docs.google.com/spreadsheets/d/1WF-9XWZO4YRu9tNM1H6Iwv3kD6b_2qOa/edit?usp=sharing&ouid=108986562209569437301&rtpof=true&sd=true"><button class="button">フィードバック</button></a>
          </div>
          <div className="item">
          <h2>Blenderを用いてオリジナルキャラクター制作</h2>
            <img src={work2} className="work2"></img>
            <h3>オリジナル性を出すためにBlenderを勉強し、オリジナルキャラクターを制作した。<br></br>いろいろな色で使いたいため、虹色のビスマス鉱石をモデルに制作。</h3>
          </div>
          <div className="item">
          <h2>AR空間での英語学習ゲームアプリ<br></br>～Listeningモード～</h2>
            <img src={work3} className="work3"></img>
            <h3>小学生の英語の必修化が始まり、効率よく楽しく学習できるように運動を取り入れ、<br></br>英語学習ゲームを制作した。<br></br>Listeningモードでは1分間で読まれる英単語の物体をタッチして得点を競うゲームです。<br></br>情報処理学会 第８４回全国大会提出した一つです。</h3>
            <a href="https://youtu.be/rg_QvEbn9NI"><button class="button">Demo動画</button></a>
            <a href="https://docs.google.com/spreadsheets/d/1WF-9XWZO4YRu9tNM1H6Iwv3kD6b_2qOa/edit?usp=sharing&ouid=108986562209569437301&rtpof=true&sd=true"><button class="button">フィードバック</button></a>
          </div>
          <div className="item">
          <h2>AR空間での英語学習ゲームアプリ<br></br>～Speakingモード～</h2>
            <img src={work4} className="work4"></img>
            <h3>小学生の英語の必修化が始まり、効率よく楽しく学習できるように運動を取り入れ、<br></br>英語学習ゲームを制作した。<br></br>Speakingモードでは1分間でboxから出てくる物体を英語で得点を競うゲームです。<br></br>情報処理学会 第８４回全国大会提出した一つです。</h3>
            <a href="https://youtu.be/NGzw6G9kUS4"><button class="button">Demo動画</button></a>
            <a href="https://docs.google.com/spreadsheets/d/1WF-9XWZO4YRu9tNM1H6Iwv3kD6b_2qOa/edit?usp=sharing&ouid=108986562209569437301&rtpof=true&sd=true"><button class="button">フィードバック</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
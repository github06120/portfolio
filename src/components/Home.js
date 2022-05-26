import React from 'react'
import './css/Home.css'


import work1 from './img/work1.png';
import work2 from './img/work2.png';
import work3 from './img/work3.png';
import work4 from './img/work4.png';
import work5 from './img/work5.png';
import work6 from './img/work6.png';
import profileImg from './img/aboutTitle.png';

class Home extends React.Component {
  render() {
    return (
      <div class="home">

        <div className="title">Profile</div>

        <div className="profile">
          <img src={profileImg} className="img"></img>
          <div className="p">はじめまして。<br></br>
                             中京大学工学部　情報工学科　４年　森山　廣大です。<br></br>
                             <br></br>
                             Unityを使ってゲーム制作しています。<br></br>
                             好きなものは、プログラミング・3Dアート・スノーボード・サッカー・マジックです。<br></br>
          </div>
        </div>


        <div className="title">業績</div>

        <div className="performance">
          <a href="https://www.ipsj.or.jp/event/taikai/84/ipsj_web2022/data/pdf/6ZH-07.html" className="a">「ARを用いた体感型学習支援ゲームの開発」　情報処理学会 　第８４回全国大会</a>
          <a className="num">　　　　　　　２０２２  ０３. ０５</a>
          <a href="https://www.ipsj.or.jp/event/taikai/84/ipsj_web2022/data/pdf/6ZH-07.html" className="a">「モーション認識を用いた運動型AR学習ゲームの開発」　情報処理学会 　第８４回全国大会 </a>
          <a className="num">　２０２２. ０３. ０５</a>
        </div>

        <div className="title">開発ソフトウェア</div>

        <div className="works">

          <div className="work">
            <div className="work-title">スマートフォンの音声認識やジャイロを用いた車レース</div>
            <img src={work1} className="work1"></img>
            <div className="work-a">既存しているカーレースとは異なる体験で楽しんでもらうため<br></br>スマートフォンのジャイロでの操作や<br></br>iOSのSpeech Frameworkを用いた音声認識の操作を取り入れた。<br></br>今後は他の変わった操作方法で<br></br>操作できるようにしていこうと思っている。</div>
            <a href="https://youtu.be/m70bJhvTf3U"><button class="button">Demo動画</button></a>
            <a href="https://drive.google.com/file/d/1BFj4U2ehf9Xvzae860qtZ54z5J9So1q4/view?usp=sharing"><button class="button">フィードバック</button></a>
          </div>

          <div className="work">
          <div className="work-title"><br></br></div>
          <iframe src="https://www.youtube.com/embed/m70bJhvTf3U"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="videohome"></iframe>
          </div>

          <div className="work">
            <div className="work-title">AR空間での英語学習ゲームアプリ<br></br>～Listeningモード・Speakingモード～</div>
            <a className="work-p">Listeningモード</a>
            <img src={work3} className="work3"></img>
            <div className="work-a">個別指導塾のアルバイト中、英語が身についていない中学生が多く<br></br>効率よく楽しく学習できる英語学習ゲームを制作。<br></br>AR空間での運動を取り入れ、学習の効率を向上する工夫を行った。<br></br>Listeningモードでは1分間で読まれる英単語の物体をタッチして<br></br>得点を競うゲームです。<br></br></div>
            <a href="https://youtu.be/rg_QvEbn9NI"><button class="button">Demo動画</button></a>
            <a href="https://drive.google.com/file/d/1BFj4U2ehf9Xvzae860qtZ54z5J9So1q4/view?usp=sharing"><button class="button">フィードバック</button></a>
            
          </div>

          <div className="work">
            <div className="work-title"><br></br><br></br></div>
            <a className="work-p">Speakingモード</a>
            <img src={work4} className="work4"></img>
            <div className="work-a">左記と同様の制作物のSpeakingモード<br></br>Speakingモードでは1分間でboxから出てくる物体を英語で発声し<br></br>得点を競うゲームです。<br></br></div>
            <a href="https://youtu.be/NGzw6G9kUS4"><button class="button">Demo動画</button></a>
            <a href="https://drive.google.com/file/d/1BFj4U2ehf9Xvzae860qtZ54z5J9So1q4/view?usp=sharing"><button class="button">フィードバック</button></a>
            <a href=""><button class="button">Git hub リンク</button></a>
          </div>
          
          <div className="work">
          <div className="work-title">スマートフォンのジャイロを使用した男女遊べるTPS (チーム開発)</div>
            <img src={work6} className="work6"></img>
            <div className="work-a">お菓子を題材にスマートフォンのジャイロで<br></br>視点移動する男女一緒に遊べるTPSを4人チームで開発。<br></br><br></br>（只今開発途中）</div>
            
          </div>


          <div className="work">
            <div className="work-title">Blenderを用いてオリジナルキャラクター制作</div>
            <img src={work2} className="work2"></img>
            <div className="work-a">オリジナル性を出すためにBlenderを勉強し<br></br>オリジナルキャラクターを制作した。<br></br>いろいろな色で使い分けたいため<br></br>虹色のビスマス鉱石をモデルに制作。</div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default Home
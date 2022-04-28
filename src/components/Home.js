import React from 'react'
import './css/Home.css'


import work1 from './img/work1.png';
import work2 from './img/work2.png';
import work3 from './img/work3.png';
import work4 from './img/work4.png';
import work5 from './img/work5.png';

class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <iframe src="https://www.youtube.com/embed/m70bJhvTf3U"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="videohome"></iframe>

        <h1 className="title">業績</h1>

        <dl classname ="perfor-dl">
          <dt className="perfor-dt">２０２２. ０３. ０５</dt>
          <dd className="perfor-dd">ARを用いた体感型学習支援ゲームの開発 情報処理学会 第８４回全国大会</dd>
          <dt className="perfor-dt">２０２２. ０３. ０５</dt>
          <dd className="perfor-dd">モーション認識を用いた運動型AR学習ゲームの開発 情報処理学会 第８４回全国大会</dd>
        </dl>

        <h1 className="title">Works</h1>

        <div className="works">

          <div className="work">
            <div className="work-title">スマートフォンの音声認識やジャイロを用いた車レース</div>
            <img src={work1} className="work1"></img>
            <div className="work-a">既存しているカーレースとは異なる体験で楽しんでもらうため<br></br>スマートフォンのジャイロでの操作やiOSのSpeech Frameworkを用いた<br></br>音声認識の操作を取り入れた。<br></br>今後は他の変わった操作方法で操作できるようにしていこうと思っている。</div>
            <a href="https://youtu.be/m70bJhvTf3U"><button class="button">Demo動画</button></a>
            <a href="https://drive.google.com/file/d/1BFj4U2ehf9Xvzae860qtZ54z5J9So1q4/view?usp=sharing"><button class="button">フィードバック</button></a>
          </div>

          <div className="work">
            <div className="work-title">Blenderを用いてオリジナルキャラクター制作</div>
            <img src={work2} className="work2"></img>
            <div className="work-a">オリジナル性を出すためにBlenderを勉強し、オリジナルキャラクターを制作した。<br></br>いろいろな色で使い分けたいため、虹色のビスマス鉱石をモデルに制作。</div>
          </div>

          <div className="work">
            <div className="work-title">AR空間での英語学習ゲームアプリ<br></br>～Listeningモード～</div>
            <img src={work3} className="work3"></img>
            <div className="work-a">個別指導塾のアルバイト中、英語が身についていない中学生が多く<br></br>効率よく楽しく学習できる英語学習ゲームを制作。<br></br>AR空間での運動を取り入れ、学習の効率を向上する工夫を行った。<br></br>Listeningモードでは1分間で読まれる英単語の物体をタッチして得点を競うゲームです。<br></br></div>
            <a href="https://youtu.be/rg_QvEbn9NI"><button class="button">Demo動画</button></a>
            <a href="https://drive.google.com/file/d/1BFj4U2ehf9Xvzae860qtZ54z5J9So1q4/view?usp=sharing"><button class="button">フィードバック</button></a>
          </div>

          <div className="work">
            <div className="work-title">AR空間での英語学習ゲームアプリ<br></br>～Speakingモード～</div>
            <img src={work4} className="work4"></img>
            <div className="work-a">左記と同様の制作物のSpeakingモード<br></br>Speakingモードでは1分間でboxから出てくる物体を英語で発声し<br></br>得点を競うゲームです。<br></br></div>
            <a href="https://youtu.be/NGzw6G9kUS4"><button class="button">Demo動画</button></a>
            <a href="https://drive.google.com/file/d/1BFj4U2ehf9Xvzae860qtZ54z5J9So1q4/view?usp=sharing"><button class="button">フィードバック</button></a>
          </div>

          <div className="work">
            <div className="work-title">Portfolio</div>
            <img src={work5} className="work5"></img>
            <div className="work-a">Reactとntlifyを使って制作した現在のサイト</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
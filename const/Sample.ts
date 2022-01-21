import {PostInfo} from "../model/PostInfo";
import {BlogListEntity} from "../model/BlogListPage";
import {BlogContentEntity} from "../model/BlogContentEntity";
import {ArticleEditorItem} from "../model/ArticleInfo";

export const SampleBlogRelation:PostInfo[] = [
    {
        postId: "a", postName: "【新入生ブログリレー】うぇいるです！(自己紹介兼色変記事)"
    },{
        postId: "b", postName: "俺がAtcoderをやめた理由"
    },{
        postId: "c", postName: "部内競プロランキングをつくってみた"
    },{
        postId: "d", postName: "【ブログリレー】競技プログラミングしませんか？"
    },{
        postId: "e", postName: "AtCoder ABC 145 C – Average Length(300 点)"
    },{
        postId: "f", postName: "AtCoder 169 (ABC 169 C) のかけ算問題に苦戦した話"
    },{
        postId: "g", postName: "プログラミング苦手な人へ"
    }
]

export const SampleBlogRanking:PostInfo[] = [
    {
        postId: "h", postName: "ポケモン剣盾乱数で6Vメタモンが乱獲したかった。"
    },{
        postId: "i", postName: "やろう！NEUTRINO (AIきりたん)"
    },{
        postId: "j", postName: "【完全攻略】スーパー英語(E-learning)の効率の良い進め方"
    },{
        postId: "k", postName: "C++ ゲームライブラリについて"
    },{
        postId: "l", postName: "【Python】簡単！ミニゲーム製作！【CUI】"
    }
]



export const SampleBlogList:BlogListEntity[] = [
    {
        title:"私的おすすめChrome拡張機能",
        date:"2021/11/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/11/Chrome-Web-Store-apps-300x169.jpeg',
        id:'fd97fadf-7e3f-44e3-aa5f-a7c98bab574d',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ],
        author:{
            avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
            bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
            name: "うぇいる",
            id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
        },
    },{
        title:"【色変】AtCoder水色になりました！",
        date:"2021/10/31",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg',
        id:'a6cdac03-1a33-42c2-8b4b-8430884958b1',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"俺がAtcoderをやめた理由",
        "date":"2021/10/28",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/ダウンロード.png',
        id:'ecb73126-898a-495b-a557-18bd13c619b7',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"ポケモンで芝浦工大を表示する",
        "date":"2021/10/23",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/toyosu.jpg',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"エンジニアが死滅シタ世界～アンドロイドとふたりぼっちで生きろ～　レビュー"
        ,"date":"2021/10/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/スクリーンショット-2021-10-10-000838-300x143.png',
        id:'',
        topics:[]
    },{
        "title":"CMakeの使い方 for Windows",
        "date":"2021/10/7",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/06/120px-ISO_C_Logo.svg_.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"アクションゲームに使う衝突判定を作りました",
        "date":"2021/10/1",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/paint_eyecatch.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"WindowsでReactの開発環境構築は一癖あった話",
        "date":"2021/9/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2020/11/lfVWBmiW_400x400-300x300.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"DiscordのチャットボットをPythonで実装してみた",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/bluebird_robot_bot-300x300.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"英語のドキュメントを読むのにおすすめの本！",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/イラストや_禁止本-257x300.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"PGGANを実装してanimefaceを生成したい",
        "date":"2021/9/24",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"[iOS]Twitterを開いたとき任意の確率で英単語アプリを開くようにするオートメーション",
        "date":"2021/9/18",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/03/twitter-300x300.png',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"RECRUIT 日本橋ハーフマラソン 2021〜増刊号〜 に参加した話　",
        "date":"2021/9/15",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/whilerecharfmara-300x159.jpg',
        id:'',
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        "title":"Unity1週間ゲームジャムに参加してきました",
        "date":"2021/9/13",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/unityroom-300x161.png',
        id:'',
        topics:[]
    }, {
        "title": "WebAssemblyで立体モデルの描画",
        "date": "2021/8/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png',
        id:'',
        topics:[]
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
        title: "なんかかっこいい名前の資格取ったよ^_^！",
        topics:[]
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/スクリーンショット-180-1-300x163.png",
        title: "初心者、電卓アプリ作りに挑戦！",
        topics:[]
    },{
        date: "2021/8/27",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png",
        title: "SAGAN(Self-Attention GAN)でAnimefaceの生成",
        topics:[]
    },{
        date: "2021/8/25",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/03/go-300x95.jpg",
        title: "Go言語 のお作法(?)について",
        topics:[]
    },{
        date: "2021/8/20",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/p1-300x300.jpg",
        title: "arduino cli が利用できるようになるまで",
        topics:[]
    },{
        date: "2021/8/17",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/whileESP-271x300.jpg",
        title: "ESP32とGoogleアシスタントを使って声で部屋の照明をオンオフできるようにした話",
        topics:[]
    }
]

export const SampleMarkdown2:string = `
## そういえばバイト辞めました

塾講大変すぎて涙出たし時間外労働の宝庫だったので逃げたよ～・・。
カフェバイト超楽しくておすすめだよ
画像処理はまかせて！

7月11日にCG-ARTSが主催する画像処理エンジニア検定を受けてきました
レベル別に2種類、「ベーシック」と「エキスパート」があって、暇を持て余していたので両方受けてみました。
[詳細(気になる人はどうぞ)](https://www.cgarts.or.jp/kentei/about/img_engineer/index.html)

## 数理科学科って画像処理屋さんだっけ？

A.ちがいます。他の人は数学をちゃんとやってます(多分)
私は情報の教職課程を取っている世にも珍しい子 なのですが、ある必修科目がこの資格を持ってるとなんかいいこと起きるみたいな、そんな、”良い”情報を小耳にはさんだ　っていうのが主な受験動機です。あとはまじで暇だったから。

## 誰でも取れるの？

ベーシックは、そこそこ勉強すれば取れるはず。(合格率：66.5%)
エキスパートは知りません。時の運もあると思います。好きな問題が出れば受かるしそうじゃなきゃ落ちる。そもそも範囲がベーシックとは比べ物にならないぐらい広いので勉強が大変。根気強く勉強し続けるのも大事な気がする。(合格率：32.6%)
ラスタスキャン！！

この単語、テキストで何回見たか分からない。超書いてある。結局どういう意味？
ベーシックの範囲では、カメラのこととか、モデリング、フィルタリングなど基礎的なことを学びます。言葉を覚えるのがメインな印象。(ちがうかも)
エキスパートの範囲では、ベーシックの内容のより詳細な部分とか、データ圧縮の話とかを学びます。割と計算とかもたくさんあった。暗記だけではできない問題も出題されてたよ(数理科学科の腕の見せ所だね！)

## 猫飼いたい。ﾆｬﾝ。

もちまる日記を見なければ死ぬという病気にかかってしまったので、もち様と下僕様の素敵な日常を見守る毎日が続いております。もち様かわいい。かわいい。かわい、い。。。（全員見て→[「もちまる日記」](https://www.youtube.com/c/%E3%82%82%E3%81%A1%E3%81%BE%E3%82%8B%E6%97%A5%E8%A8%98/featured)）

「猫飼いたい欲」は日に日に高まっていくばかりの今日この頃。しかし、猫を飼うには相当な経済力が必要で、バイトあんま行きたくない系女子大生には厳しいのです。現実。将来に期待大。

話が大幅にそれてしまいましたが、つい最近合否の発表がありました。
手ごたえは「ベーシックは固いけどエキスパートは微妙」な感じでした。が、どちらも合格することが出来ました（ここで拍手喝采）！上手にマークシートを塗れてよかった。マークシートを塗るバイトあったら紹介してください。結構きれいに塗れると思うよ。

## フォトショ芸人までの道のりはまだ長そうです

結構ちゃんと勉強したけど割と難しい内容も多かった気がします。普通に興味ある内容だった。かも。でも専攻にはしないかな、て感じ。やっぱり数字で遊ぶ方が性に合ってる。
加工バレかわいい女の子yamiちゃんの裏方になりたくてフォトショのプロを目指した時期もあったけど、あれやってる人ほんとすごいよ。たぶん。ここで残念な情報ですが、この資格を取ってもフォトショ芸人にはなれません。

## 次回作に期待です！

5月から教習所に通って、やっと仮免許を手に入れました。遅。免許取ったら免許取ったブログ書く。嘘かも。
`

export const SampleMarkdown = `
## はじめに
お久しぶりです、うぇいるです。　ブログを書くのをサボっていたのですが、AtCoderの色が変わったのでさすがに書かないとな…ということで色変記事を書きます。

## 水色になるまで
新入生ブログリレーの際に入緑の記事を書きました。そこから大体4か月くらいで水色になれました。

初めて参加したコンテストが4/24だったので半年＋一週間で入水することができました～

入緑直後まではPythonで参加していたのですが、夏休みにC++を勉強しそれ以降はC++で参加しています。ACLが使えてとても楽です。(Pythonが書けなくなりました)

水になるまでのAccepted数は638でした。緑になるまでのAccepted数が196だったので442問新たに解いたことになります。大体一か月に100問ペースくらい？で過去問埋めをしていたことになりますね。来年四月までにはAccepted数4桁行きたいです。

## やったこと
典型90の☆4以下全埋めをしました。めちゃくちゃ勉強になりました、おすすめです。

あとはAtCoder problemsのRecommendationをひたすら解いていった感じです。

![](http://den3.net/wp-content/uploads/2021/10/whileirohen2-1024x277.jpg) 

こんな感じです。青はほぼ埋めてません＞＜

## 終わりに
競技プログラミングは合う人と合わない人がいると思います。

問題を解くよりゲームとかアプリを開発したい！みたいな人にはなかなか難しいですよね。



そんな人でも、ヒューリスティックコンテストなら楽しめるのではないでしょうか？

ヒューリスティックコンテストは、出題される問題に対してより良いスコアを出せるプログラムを書くコンテストです。ビジュアライザが用意されているのでどういう手順でスコアを稼いでいるかの過程が眺められたりしてゲーム要素が強いコンテストだと僕は思っています。

AtCoderを辞めよう…なんて思ってる人！　もしかしたらヒューリスティックコンテストはハマるかもしれませんよ？

直近だと…

- [HACK TO THE FUTURE 2022 予選](https://atcoder.jp/contests/future-contest-2022-qual)

- [Hitachi Hokudai Lab. & Hokkaido University Contest 2021](https://atcoder.jp/contests/hokudai-hitachi2021)

- [AtCoder Heuristic Contest 006](https://atcoder.jp/contests/ahc006)

などがあります。

興味を持ったらぜひ参加してみてください！
`

export const SampleMarkdownCode:string = `
## なぜか

タイトルに書いてる通り, 車輪の再発明をしてしまいました.

しかし深いわけがありました.

というのも大学の授業で, Javaを使った成果物を提出する必要があったのですが, Java 16標準API以外のライブラリが使用できないというルールでした.

私はJavalinというWebフレームワークを使って5chみたいなWebアプリを作ると声高に宣言していたので, ここから逃げちゃダメだ！という思いでしこしこフレームワークから作り始めることにしました.

## できたもの

NginJ(nginxのJava版 というネーミングセンスのかけらもないなにか)
NginJ Github

・GET/POST/PUT/UPDATE/DELETEリクエスト受付
・パスパラメーター受け取り
・フォームパラメーター受け取り
・Javaのインスタンス変数をJSONに変換

コード例

このHttpServerクラスの後ろ側で動いている処理をすべて実装しました

`+'```java \nimport jp.toufu3.nginj.http.HttpServer;\nimport java.util.Map;\nimport java.util.List;\n\n//Path param name is \'id\'\nHttpServer.get("/route/:id",(ctx)->{\n    String pathParam = ctx.req.getPathParams().getOrDefault("id","empty");\n    ctx.res.setBody(pathParam);\n});\n\nHttpServer.post("/",(ctx)->{\n    ctx.res.setJSON(Map.of("A",List.of(1,2,3)));\n});\n//TCP 80 port receive\nHttpServer.get().start(80);\n```\n'
+`
こんな感じでパスパラメータの取得やフォームパラメータの取得といったWebフレームワークに標準搭載されているものや, Javaのリフレクションをフル活用したJavaObject->JSONコンバートまでやってくれるようになってます.

またこのWebフレームワークは, リクエストのたびにスレッドを立ち上げるApache方式ではなく, 1つのスレッドを無限ループにして, ひたすらリクエストを受け付けて, リクエストパスに関連付けたコールバックを呼び出す方式ですので, クライアントが10万接続してきても耐えられます！()

## 感想

短い間でしたが, 個人的なハッカソンみたいで楽しかったです(KONAMI感)

また, パスパラメータやパスに関連付けて登録された処理を呼び出す際のルートマッチの処理などのWebフレームワークの裏側を自分で実装したことでより深くWebフレームワークに必要な機能を理解でき(たような気がし)ました.

またJavaでノンブロッキングIOを実装する際, あまりに日本語の参考資料が少なく, かろうじて存在していたコードをコピペしてしまいました. ごめんなさい.

時間がかかったのはやはりJSON化でした.
GSONやJacksonってどうやって動いてるんですか？

次はJSON→JavaObjectあたりを実装したり, HTTPリクエストヘッダ改ざん攻撃に対処する機能あたりが欲しいかもしれません

もしくはリバースプロキシみたいな機能も欲しかったり〜〜？
あとCPUのコア数文のスレッドだけ立ち上げてそこでノンブロッキングIOな処理をさせることでNode.jsの上位互換を目指してもいいかもしれない.

次回のお楽しみ.
`

const SampleMarkdown1:string = `
前回はSAGANでやったので今回はPGGANを実装したいと思います．

実装したものは [ここ](https://github.com/Ren634/GAN_zoo)

## 環境
- python 3.8.0
- pytorch 1.9.0
- GPU GTX1080

## どんな工夫がされているの？
### Progressive Growing
生成したい画像のまま学習するのではなく段階的に学習させていきます．
論文中では4×4のサイズから学習を初めており．80k枚の画像を使用してサイズを遷移させ，その後80k枚の画像を使用して遷移後のサイズでの学習を行います．(今回は1サイズの半分のエポックで遷移させ残りのエポックで学習をさせました．)．

### Pixelwise Normalization

PGGANの論文[^1]によるとBatch Normalizationの代わりにPixelwise Normalizationを使用しGeneratorの3×3の畳み込み層の後で使用するとのことです．また式は下記のようになります．
[^1]: Tero Karras, Timo Aila, Samuli Laine, and Jaakko Lehtinen. 2017.
Progressive Growing of GANs for Improved Quality, Stability, and Variation. arXiv preprint arXiv:1710.10196

$$
 b_{x,y}=\\frac{a_{x,y}}{\\sqrt{\\frac{1}{N}\\sum_{j=0}^{N-1}(a_{x,y}^j)^2+\\epsilon}}　(\\epsilon=10^{-8})
$$

x,yは画像ピクセルの座標であり，変数jは各特徴量マップを表します．
式の通りに実装するとこんなかんじ？

\`\`\`python
class PixelNorm2d(nn.Module):
    def __init__(self,epsilon=1e-8):
        super().__init__()
        self.epsilon = epsilon

    def forward(self,inputs):
        denominator = torch.rsqrt(torch.mean(inputs**2,dim=1,dtype=inputs.dtype,keepdim=True) + self.epsilon)
        output = inputs * denominator
        return output
\`\`\`

### Equalized Leaning Rate
重み$w$を$N(0,1)$で初期化その後各層が実行される度に$w=\\frac{w}{c}$の演算を行います

\`\`\`python
class EqualizedLRConv2d(nn.Conv2d):
    def __init__(self,in_channels,out_channels,kernel_size,stride=1,padding=0,bias=True,**kwargs):
        super().__init__(
            in_channels=in_channels,
            out_channels=out_channels,
            kernel_size=kernel_size,
            stride=stride,
            padding=padding,
            bias=bias,
            **kwargs
            ) 
        nn.init.normal_(self.weight,mean=0,std=1)
        nn.init.constant_(self.bias,val=0.0)
        if(not isinstance(kernel_size,tuple)):
            kernel_size = (kernel_size,kernel_size)
        f_in = torch.prod(torch.tensor([in_channels,*kernel_size],dtype=self.weight.dtype,device=self.weight.device))
        self.scale_factor = torch.sqrt(2/f_in)
    def forward(self,inputs):
        inputs = self.scale_factor *inputs
        output = F.conv2d(inputs,self.weight,self.bias,self.stride,self.padding,self.dilation,self.groups)
        return output
\`\`\`

上のself.scale_factorがcに該当します．また畳み込み演算は1次変換であるため，重みではなく入力値との演算に変更してあります．
Minibatch Standard Deviation
ミニバッチ内の特徴量マップすべての標準偏差を計算し平均をとったスカラーを入力値の特徴量に付け加えます．(言葉で説明するより実装を見たほうが早いと思う)

\`\`\`python
class MiniBatchStddev(nn.Module):
    def __init__(self):
        super().__init__()

    def forward(self,inputs):
        b,_,h,w = inputs.shape
        std = torch.std(inputs,unbiased=False,dim=0)
        v = torch.mean(std)
        output = torch.cat((inputs,torch.full(size=(b,1,h,w),fill_value=v.item(),dtype=inputs.dtype,device=inputs.device)),dim=1)
        return output
\`\`\`

### Wasserstein loss with gradient penalty
工夫ではないですが一応損失関数の実装も載せておきます．

\`\`\`python
class WassersteinGP(nn.Module):
    def __init__(self,net,penalty_coef=10):
        super().__init__()
        self.penalty_coef = penalty_coef
        self.net = net

    def forward(self,real,fake,*imgs):
        real_img,fake_img = imgs
        coef = torch.tensor(
            np.random.uniform(size=(real.shape[0],1,1,1)),
            requires_grad=True,
            device=real.device,
            dtype=real.dtype
            )
        penalty_input = fake_img * coef + (1 - coef)*real_img
        penalty_output = self.net(penalty_input)
        gradient = torch.autograd.grad(penalty_output,penalty_input,create_graph=True)[0]
        penalty = torch.square(torch.norm(gradient,dim=1)-1)
        output = fake.mean() - real.mean() + self.penalty_coef * penalty.mean()
        return output
\`\`\`

## 学習結果
今回はSAGANのときと同じデータセットを使用して256×256の画像を生成しました．
バッチサイズ:4 ~ 64 16 ,128:8，256:5
画像サイズが小さいので16×16のサイズから載せます．

16×16 エポック0 ~ 5

![](http://den3.net/wp-content/uploads/2021/09/2021-09-19_size_16epoch0_step576.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-19_size_16epoch4_step5760.png)

32×32 エポック0~5

![](http://den3.net/wp-content/uploads/2021/09/2021-09-19_size_32epoch0_step576.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-19_size_32epoch4_step5760.png)

64×64 エポック0~5

![](http://den3.net/wp-content/uploads/2021/09/2021-09-19_size_64epoch0_step576.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-20_size_64epoch4_step5760.png)

128×128 エポック0~5

![](http://den3.net/wp-content/uploads/2021/09/2021-09-20_size_128epoch0_step1152.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-21_size_128epoch4_step11520.png)

256×256ファイルサイズ大きくてグリットされたやつ貼れなかった（泣）
![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step15088_check0.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step13432_check3.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step5336_check2.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step7360_check0.png)

## 失敗例
![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step14536_check2.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step14720_check4.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step12144_check1.png) ![](http://den3.net/wp-content/uploads/2021/09/2021-09-24_size_256epoch3_step10304_check3.png)

## 感想
128×128までのサイズはカラーバリエーションもよく比較的に生成された画像を見ていて面白かった．しかし，256×256のサイズはバッチサイズが小さかったためか同じヘアカラーの画像が多く生成されるようになってしまった(原因は定かではないが多分バッチサイズ)．それに画像のノイズが他のサイズと比べて目立つ気がする．しかしそれを除けばわりかし大丈夫そう．

## 終わりに
今回は，PGGANを自分で実装してみました．今回実装するにあたって，クラス設計の大事さを学ぶことができました(GANとは関係ないけど)．Githubに上がっているコード(Pytorchの実装とか)を読んでいると自分のクラス設計の汚さに気が付きます(オブジェクト指向勉強しなきゃ…)．基本的に人に書いたコードを見せる機会がないので煩雑なコードを書きがちになってしまっている気がする．部内の人にコードレビューしてもらうのもいいかもしれないですね．次は発展型であるStyleGANやStyleGAN2，LightWeightGANを実装していきたいと思います．
`

export const SampleBlogArticle:BlogContentEntity[] = [
    // {
    //     id:'e6a16b0e-d9f0-4677-954f-b8ceaf9ccb7b',
    //     author:{
    //         avatar: "http://den3.net/wp-content/uploads/2021/06/l-150x150.png",
    //         bio: "音楽を愛してやまない大学生。最近カフェバイトを始めたがコーヒーを作り間違え続けて無限に飲んでいる。おいしい！わ、わざとじゃないもん(><)(AtCoderで競技プログラミングもやってます。)",
    //         name: "せちゃん",
    //         id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
    //     },
    //     comment: [
    //         {
    //             author:{
    //                 avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
    //                 bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
    //                 name: "うぇいる",
    //                 id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
    //             },
    //             body: "それってあなたの感想ですよね?",
    //             date: "2021/02/11 08:10:11"
    //         },{
    //             author:{
    //                 avatar: "den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
    //                 bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
    //                 name: "うぇいる",
    //                 id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
    //             },
    //             body: "それってあなたの感想ですよね?",
    //             date: "2021/02/11 08:10:11"
    //         }
    //     ],
    //     header_img: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
    //     markdown: SampleMarkdown2,
    //     title: "なんかかっこいい名前の資格取ったよ^_^！",
    //     topics:[
    //         {
    //             avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
    //             id: "atcoder",
    //             name: "AtCoder"
    //         },
    //         {
    //             avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
    //             id: "atcoder",
    //             name: "AtCoder"
    //         },
    //         {
    //             avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
    //             id: "atcoder",
    //             name: "AtCoder"
    //         }
    //     ]
    // },
    {
        id:'0bcdacca-9f54-47d1-8cb9-94beb2a913d6',
        author:{
            avatar: "http://den3.net/wp-content/uploads/2020/05/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-05-30-22.52.18-150x150.png",
            bio: "アプリ作ったり競プロしてる2年生 アニメとか声優・アニソンも好き TrySailって知ってる〜？",
            name: "tofu",
            id: '84a30db9-616a-4ea1-be3d-3819ffbbb39b'
        },
        comment: [
            {
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            },{
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2020/05/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-05-30-22.52.18-150x150.png",
                    bio: "アプリ作ったり競プロしてる2年生 アニメとか声優・アニソンも好き TrySailって知ってる〜？",
                    name: "tofu",
                    id: '84a30db9-616a-4ea1-be3d-3819ffbbb39b'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            }
        ],
        header_img: "http://den3.net/wp-content/uploads/2021/07/GitHub-Mark-300x300.png",
        markdown: SampleMarkdownCode,
        title: "ノンブロッキングIOなHttp Web フレームワークを作った【車輪の再発明】",
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "AAAAAAAAAAAAAAAAAAAAAAAAA"
            }
        ]
    },{
        id:'f6f8a3c4-3b6a-4a8c-a475-ce1fb5c2f504',
        author:{
            avatar: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-150x150.png",
            bio: "",
            name: "Ren",
            id: '84a30db9-616a-4ea1-be3d-3819ffbbb39b'
        },
        comment: [

        ],
        header_img: "http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png",
        markdown: SampleMarkdown1,
        title: " PGGANを実装してanimefaceを生成したい",
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-topics/deep-learning.png",
                id: "machine-learning",
                name: "機械学習"
            },{
                avatar: "https://storage.googleapis.com/zenn-topics/ai.png",
                id: "AI",
                name: "AI"
            }
        ]
    }
]

export const SampleArticleEditorItems:ArticleEditorItem[] = [
    {
        public: false,
        avatar: "http://den3.net/wp-content/uploads/2021/10/%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89.png",
        date: "2021/11/03",
        id: "0bcdacca-9f54-47d1-8cb9-94beb2a913d6",
        title: "Go言語 のお作法(?)について"
    },
    {
        public: true,
        avatar: "http://den3.net/wp-content/uploads/2021/10/toyosu.jpg",
        date: "2021/10/08",
        id: "f6f8a3c4-3b6a-4a8c-a475-ce1fb5c2f504",
        title: "ポケモンで芝浦工大を表示する"
    }
    // ,{
    //     public: true,
    //     avatar: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
    //     date: "2021/9/8",
    //     id: "e6a16b0e-d9f0-4677-954f-b8ceaf9ccb7b",
    //     title: "なんかかっこいい名前の資格取ったよ^_^！"
    // }
]

import './styles/App.css';
import Header from "./components/Header";
import {useMemo, useState} from "react";
import AnimeList from "./components/AnimeList";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import Modal from "./components/UI/Modal";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import AnimePage from "./components/AnimePage";

function App() {

    const [anime, setAnime] = useState([
        {id: 1, title: 'Naruto', img: 'https://nyaa.shikimori.one/system/animes/preview/20.jpg?1633690219', year: 2002, type: 'TV Serial', body: 'Naruto is generally a very simple minded, easy going, cheerful person. He often rushes things, and misses obvious things such as Hinata\'s constant shyness around him. In the beginning of the series, Naruto is very fun loving, often pulling pranks on fellow villagers. This usually ends in a scolding from Iruka Umino'},
        {id: 2, title: 'Hunter x Hunter', img: 'https://kawai.shikimori.one/system/animes/preview/11061.jpg?1633690306', year: 2011, type: 'TV Serial', body: 'The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...'},
        {id: 3, title: 'Gintama', img: 'https://dere.shikimori.one/system/animes/preview/9969.jpg?1633691719', year: 2011, type: 'TV Serial', body: 'Gintama is a story of a handyman named Gintoki, a samurai with no respect for rules set by the invaders, who\'s ready to take any job to survive. He and his gang, however, are also among the very few who have not forgotten the morale of a swordsman. Wherever they go, all they do is to create troubles.'},
        {id: 4, title: 'Death Note', img: 'https://nyaa.shikimori.one/system/animes/preview/1535.jpg?1633874494', year: 2006, type: 'TV Serial', body: 'Based on the famous Japanese manga written by Tsugumi Ohba and Takeshi Obata, Death Note follows a high school student who comes across a supernatural notebook, realizing it holds within it a great power; if the owner inscribes someone\'s name into it while picturing their face, he or she will die.'},
        {id: 5, title: 'Shingeki no Kyojin', img: 'https://desu.shikimori.one/system/animes/preview/16498.jpg?1633700939', year: 2013, type: 'TV Serial', body: 'It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his .'},
        {id: 6, title: 'One Punch Man', img: 'https://kawai.shikimori.one/system/animes/preview/30276.jpg?1635243755', year: 2015, type: 'TV Serial', body: 'One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength.'},
        {id: 7, title: 'Boku No Hero Academia', img: 'https://dere.shikimori.one/system/animes/preview/31964.jpg?1633701619', year: 2016, type: 'TV Serial', body: 'My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia) is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. The story follows Izuku Midoriya, a boy born without superpowers in a world where they have become commonplace, but who still dreams of becoming a superhero himself.'},
        {id: 8, title: 'Tokyo Ghoul', img: 'https://dere.shikimori.one/system/animes/preview/22319.jpg?1633701393', year: 2014, type: 'TV Serial', body: 'Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities.'},
        {id: 9, title: 'No Game No Life', img: 'https://nyaa.shikimori.one/system/animes/preview/19815.jpg?1635232047', year: 2014, type: 'TV Serial', body: 'Amid the chaos and destruction of the Ancient War, a young man leads humanity toward the tomorrow his heart believes in.'},
        {id: 10, title: 'Steins;Gate', img: 'https://desu.shikimori.one/system/animes/preview/9253.jpg?1650921326', year: 2011, type: 'TV Serial', body: 'Steins;Gate is an adaptation of the visual novel of the same name. It is set in 2010 in Akihabara, Tokyo, and follows Rintaro Okabe, a self-proclaimed "mad scientist", who runs the "Future Gadget Laboratory" in an apartment together with his friends Mayuri Shiina and Itaru "Daru" Hashida.'},
        {id: 11, title: 'Noragami', img: 'https://moe.shikimori.one/system/animes/preview/20507.jpg?1635232805', year: 2014, type: 'TV Serial', body: 'A minor god seeking to gain widespread worship teams up with a human girl he saved to gain fame, recognition and at least one shrine dedicated to him. A minor god seeking to gain widespread worship teams up with a human girl he saved to gain fame, recognition and at least one shrine dedicated to him.'},
        {id: 12, title: 'Haikyuu!!', img: 'https://desu.shikimori.one/system/animes/preview/20583.jpg?1633701415', year: 2014, type: 'TV Serial', body: 'Haikyu!! (ハイキュー!!, Haikyū!!, from the kanji 排球 "volleyball") is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shoyo Hinata, a boy determined to become a great volleyball player despite his small stature.'},
        {id: 13, title: 'Jujutsu Kaisen', img: 'https://desu.shikimori.one/system/animes/preview/40748.jpg?1637070108', year: 2020, type: 'TV Serial', body: 'Jujutsu Kaisen is the story of Yuji Itadori, an easygoing high school student who joins the occult club at school. When they accidentally summon grotesque creatures by messing with a cursed object, Itadori fights to save his friends\' lives.'},
        {id: 14, title: 'Bleach', img: 'https://dere.shikimori.one/system/animes/preview/269.jpg?1633689949', year: 2004, type: 'TV Serial', body: 'Bleach is the generic name for any chemical product that is used industrially or domestically to remove color from a fabric or fiber or to clean or to remove stains in a process called bleaching. It often refers, specifically, to a dilute solution of sodium hypochlorite, also called "liquid bleach".'},
        {id: 15, title: 'Fairy Tail', img: 'https://moe.shikimori.one/system/animes/preview/6702.jpg?1633697717', year: 2009, type: 'TV Serial', body: 'FAIRY TAIL is an anime series about a teen named Lucy (voiced by Cherami Leigh) who runs away with her new friend, Natsu (Todd Haberkorn), to join the well-known wizards guild, Fairy Tail.'},
        {id: 16, title: 'Death Parade', img: 'https://desu.shikimori.one/system/animes/preview/28223.jpg?1633870924', year: 2015, type: 'TV Serial', body: 'Death Parade (デス・パレード Desu Parēdo) is an anime series created by Yuzuru Tachikawa, a producer from Madhouse. It is based off of the 2013 animated short film Death Billiards, also created by Yuzuru Tachikawa. It started airing on January 10, 2015. The series has 12 episodes in total.'},
        {id: 17, title: 'Kuroko No Basket', img: 'https://kawai.shikimori.one/system/animes/preview/11771.jpg?1635224237', year: 2012, type: 'TV Serial', body: 'A legendary 6th player. An up-and-coming power player, Taiga Kagami, is just back from America. When he comes to Seirin High School, he meets the super-ordinary boy, Tetsuya Kuroko. Kagami is shocked to find that Kuroko isn\'t good at basketball, in fact, he\'s bad!'},
        {id: 18, title: 'Dragon Ball', img: 'https://desu.shikimori.one/system/animes/preview/223.jpg?1633691828', year: 1986, type: 'TV Serial', body: 'Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice.'},
        {id: 19, title: 'Kimi no Na wa.', img: 'https://kawai.shikimori.one/system/animes/preview/32281.jpg?1635248948', year: 2016, type: 'Movie', body: 'Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa.) is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and distributed by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies.'},
        {id: 20, title: 'Toradora!', img: 'https://dere.shikimori.one/system/animes/preview/4224.jpg?1635210593', year: 2008, type: 'TV Serial', body: 'Toradora! revolves around Ryuuji Takasu, despite his gentle personality, his eyes make him look like an intimidating delinquent. Class rearrangements on his second high school year put him together with his best friend, Yusaku Kitamura, and his hidden crush, Minori Kushieda.'},
        {id: 21, title: 'One Piece', img: 'https://kawai.shikimori.one/system/animes/preview/21.jpg?1470452690', year: 1999, type: 'TV Serial', body: 'Premise. The series focuses on Monkey D. Luffy, a young man made of rubber, whom, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates.'},
        {id: 22, title: 'Another', img: 'https://kawai.shikimori.one/system/animes/preview/11111.jpg?1633875505', year: 2012, type: 'TV Serial', body: ' Japanese adult animated horror television series produced by P.A. Works and directed by Tsutomu Mizushima that aired twelve episodes from 10 January to 27 March 2012.[1] Based on the 2009 novel of the same name by Yukito Ayatsuji, the series is set in 1998 and focuses on a boy named Kōichi Sakakibara who, upon transferring into Yomiyama Middle School and meeting the curious Mei Misaki, finds himself in a mystery revolving around students and people related to his class facing gruesome and senseless deaths. Another was directed by Tsutomu Mizushima and produced by P.A. Works, with character designs by Yuriko Ishii, the chief animation director of the series, based on Noizi Ito\'s original concepts for the novel.'},
    ]);
    const [search, setSearch] = useState('');
    const [animeCopy, setAnimeCopy] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');

    const arr = useMemo(() => {
        return anime.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, anime])

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const lastIndex = currentPage * limit;
    const firstIndex = lastIndex - limit;
    const currentAnime = arr.slice(firstIndex, lastIndex);

    const pagination = pageNumber => {
        setCurrentPage(pageNumber);
    }

    const createCopy = anime => {
        if(!animeCopy.find(item => item.id === anime.id)){
            setAnimeCopy([...animeCopy, anime])
        } else{
            alert('Already added!!')
        }
    }

    const removeCopy = anime => {
        setAnimeCopy(animeCopy.filter(a => a.id !== anime.id))
    }

    const openModal = (item) => {
        setModal(true)
        setModalText(item.body)
    }

  return (
    <div>
        <Modal active={modal} setActive={setModal} text={modalText} />
      <Header
          search={search}
          setSearch={setSearch}
      />
        <div className={'wrapper'} >
          <main>
              <Routes>
                  <Route path={'/home'} element={<Home anime={anime} />} />
                  <Route path={'/anime'} element={<AnimePage
                      currentAnime={currentAnime}
                      createCopy={createCopy}
                      openModal={openModal}
                      limit={limit}
                      arr={arr}
                      pagination={pagination}
                  />} />
              </Routes>
          </main>
          <Sidebar remove={removeCopy} animeCopy={animeCopy} />
        </div>
    </div>
  );
}

export default App;

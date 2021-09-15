const startGame = 'start-game';
const musicContainer = 'music-container';
const trackGame = 'track-game';
const playBtn = 'play';
const audio = 'audio';
const progress = 'progress';
const progressContainer = 'progress-container';
const cover = 'cover';
const currTime = '#currTime';
const durTime = '#durTime';

const popup_box = ".popup_box";
const popup_title = ".popup-title > span";
const popup_content = ".popup-content";
const tip_button = "tip-button";
const popup_buttons = ".popup_box .buttons";
const restartButton = "restart";
const nextSongButton = "nextsong";

const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

const bottom_ques_counter = "footer .total_que";

const info_box = ".info_box";
const quiz_box = ".quiz_box";
const result_box = ".result_box";
const option_list = ".option_list";
const time_line = "header .time_line";
const timeText = ".timer .time_left_txt";
const timeCount = ".timer .timer_sec";

const quiz_title = ".quiz_box > header > div.title"

const next_btn = "footer .next_btn";

const upperButton = 'upper-buttons';

let lastWindow = 'quiz';

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let totalScore = 0;
let counter;
let counterLine;
let widthValue = 0;

let currentTime = 15;
let currentLineTime = 0;
let numSongs = 3;
let numEasy = 2;

const easyAnswers = 
[
  [
    "Breaking Ice", 
    "War of the Video Game Worlds", 
    "Suburban Skating", 
    "Ninja Baseball Bat Man Arcade", 
    "Spaghetti Zone", 
    "Swamp Boater", 
    "Crash of Deception", 
    "Blockcraze", 
    "Resist of Campaigns", 
    "Rule of Privilige", 
    "Evocraft",
    "Geocore" 
  ],
  [
    "Trash can",
    "Brick",
    "Paradise",
    "House plant",
    "Keyboard",
    "Mug",
    "Lamp",
    "Bed",
    "Cable"
  ],
  [
    "Elon Musk",
    "Kim Kardashian",
    "Katy Perry",
    "Keanu Reeves",
    "Adam Sandler",
    "Elvis Presley",
    "Elen DeGeneres",
    "Britney Spears",
    "Julia Roberts",
    "Dwayne Johnson",
    "Leonardo DiCaprio"
  ],
  [
    "2079",
    "1884",
    "3333",
    "2851",
    "1682",
    "1704",
    "3001",
    "1698",
    "1374",
    "1505"
  ],
  [
    "Frédéric Chopin",
    "Wolfgang Amadeus Mozart",
    "Ludwig van Beethoven",
    "Justin Bieber",
    "Michael Jackson",
    "John Lennon",
    "Madonna",
    "Bob Marley",
    "Lady Gaga",
    "Freddie Mercury",
    "Bruno Mars"
  ]
]

const songsList =
[
  {
    name: "San Andreas Theme Song",
    file: "san_andreas",
    tip: "You are a former gangster returning home to attend to your mother's funeral",
    answers: [
      "Grand Theft Auto: San Andreas",
      "Action-Adventure",
      "CJ",
      "2004",
      "Michael Hunter"
    ]
  },
  {
    name: "Drowning",
    file: "drowning",
    tip: "You are blue and run very fast",
    answers: [
      "Sonic 1",
      "Platform",
      "Doctor Eggman",
      "1991",
      "Yukifumi Makino"
    ]
  },
  {
    name: "Dracula's Castle",
    file: "draculas_castle",
    tip: '"What is a man? A miserable little pile of secrets!"',
    answers: [
      "Castlevania: Symphony of the Night",
      "Action-RPG",
      "Alucard",
      "1997",
      "Michiru Yamane"
    ]
  },
  {
    name: "Overworld",
    file: "overworld_zelda",
    tip: '“IT’S DANGEROUS TO GO ALONE! TAKE THIS”',
    answers: [
      "Legend of Zelda",
      "Action-Adventure",
      "Ganon",
      "1986",
      "Koji Kondo"
    ]
  },
  {
    name: "Opening Theme",
    tip: "You gotta catch 'em all!",
    file: "opening_theme",
    answers: [
      "Pokémon Red and Blue",
      "RPG",
      "Mewtwo",
      "1998",
      "Junichi Masuda"
    ]
  },
  {
    name: "Overworld Theme",
    file: "overworld_theme",
    tip: "Your objective is to save the Princess!",
    answers: [
      "Super Mario Bros.",
      "Platform",
      "Mario",
      "1985",
      "Koji Kondo"
    ]
  },
  {
    name: "Not Tomorrow",
    file: "not_tomorrow",
    tip: "You are looking for your missing adopted daughter in a mysterious town",
    answers: [
      "Silent Hill",
      "Survival Horror",
      "Cheryl Mason",
      "1999",
      "Akira Yamaoka"
    ]
  },
  {
    name: "Main Theme",
    file: "main_theme",
    tip: "You are the mayor in a town full of anthropomorphic animals",
    answers: [
      "Animal Crossing: New Leaf",
      "Life Simulation",
      "Isabelle",
      "2012",
      "Kazumi Totaka"
    ]
  },
  {
    name: "Title Screen",
    file: "title_screen",
    tip: "You are recovering your stolen banana hoard",
    answers: [
      "Donkey Kong Country",
      "Platform",
      "Donkey Kong",
      "1994",
      "David Wise"
    ]
  },
  {
    name: "Dr. Wily's Castle",
    file: "dr_wilys_castle",
    tip: "You are on your way to defeat a evil Dr. and his rogue robots",
    answers: [
      "Mega Man 2",
      "Platform",
      "Dr. Wily",
      "1988",
      "Takashi Tateishi"
    ]
  },
  {
    name: "Scattered and Lost",
    file: "scattered_and_lost",
    tip: "You are trying to reach the top of a mountain, fighting your inner demons along the way",
    answers: [
      "Celeste",
      "Platform",
      "Granny",
      "2018",
      "Lena Raine"
    ]
  },
  {
    name: "Megalovania",
    file: "megalovania",
    tip: "You feel like you're going to have a bad time",
    answers: [
      "Undertale",
      "RPG",
      "Toriel",
      "2015",
      "Toby Fox"
    ]
  },
  {
    name: "Theme",
    file: "theme_crash",
    tip: "You want to prevent Cortex's plans for world domination and rescue your girlfriend",
    answers: [
      "Crash Bandicoot",
      "Platform",
      "Doctor Neo Cortex",
      "1996",
      "Josh Mancell"
    ]
  },
  {
    name: "Prelude",
    file: "prelude",
    tip: "You are the Light Warriors, who carry the world's four elemental crystals",
    answers: [
      "Final Fantasy I",
      "RPG",
      "Garland",
      "1987",
      "Nobuo Uematsu"
    ]
  },
  {
    name: "Brinstar Theme",
    file: "brinstar_theme",
    tip: "You are a bounty hunter exploring the planet Zebes",
    answers: [
      "Metroid",
      "Action-Adventure",
      "Ridley",
      "1986",
      "Hirokazu Tanaka"
    ]
  }

]

let questions = [
    "Which game does it come from?",
    "What is the main game's genre?",
    "The name of one character",
    "Which year did the game was first released?",
    "Who composed this track?"
];

let started = false;
let playedTrack = false;

let playedSongs = []

let songIndex = Math.floor(Math.random() * songsList.length);

const loadSong = (song) => 
{
  document.getElementById(audio).src = `music/${song}.mp3`;
}

const playSong = () => 
{
	document.getElementById(musicContainer).classList.add('play');
	document.getElementById(playBtn).querySelector('i.fas').classList.remove('fa-play');
	document.getElementById(playBtn).querySelector('i.fas').classList.add('fa-pause');
	document.getElementById(audio).play();
}

const pauseSong = () => 
{
	document.getElementById(musicContainer).classList.remove('play');
	document.getElementById(playBtn).querySelector('i.fas').classList.add('fa-play');
	document.getElementById(playBtn).querySelector('i.fas').classList.remove('fa-pause');
	document.getElementById(audio).pause();
}

const nextSong = () =>
{
  while (playedSongs.includes(songIndex = Math.floor(Math.random() * songsList.length)));
  playedSongs.push(songIndex);
  loadSong(songsList[songIndex].file);
  playSong();
}

const updateProgress = (e) => 
{
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	document.getElementById(progress).style.width = `${progressPercent}%`;
}

const setProgress = (e) => 
{
	const width = document.getElementById(progressContainer).clientWidth;
	const clickX = e.offsetX;
	const duration = document.getElementById(audio).duration;
	document.getElementById(audio).currentTime = (clickX / width) * duration;
}

const DurTime = (e) => 
{
	const {duration,currentTime} = e.srcElement;
	let sec;
	let sec_d;

	let min = (currentTime==null) ? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	function get_sec (x) 
  {
		if(Math.floor(x) >= 60)
    {
			
			for (let i = 1; i<=60; i++)
      {
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) 
        {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}
    else
    {
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		}
	} 

	get_sec (currentTime,sec);

	if (document.querySelector(currTime))
		document.querySelector(currTime).innerHTML = min +':'+ sec;

	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if (Math.floor(x) >= 60)
    {
			for (let i = 1; i<=60; i++)
      {
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) 
        {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}
    else
    {
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 
	
	get_sec_d (duration);

	if (document.querySelector(durTime))
		document.querySelector(durTime).innerHTML = min_d +':'+ sec_d;
		
};

const musicPlayer = () =>
{
	const isPlaying = document.getElementById(musicContainer).classList.contains('play');
	if (isPlaying) 
  {
		pauseSong();
	} 
  else 
  {
		playSong();
	}
}

const startPlayTrack = () =>
{
	if (!started)
	{
		started = true;
		document.getElementById(trackGame).style.display = '';
    playedSongs.push(songIndex);
		loadSong(songsList[songIndex].file);
		playSong();
		document.getElementById(startGame).style.display = 'none';
	}
}


const afterPlayTrack = () =>
{
	if (!playedTrack)
	{
		playedTrack = true;
		if (document.getElementById(musicContainer).classList.contains('play'))
			pauseSong();
		document.getElementById(trackGame).style.display = 'none';
    activateQuiz();
	}
}

const activateQuiz = () => 
{
	document.querySelector(info_box).classList.add("activeInfo");
}

const startQuiz = () => 
{
	document.querySelector(info_box).classList.remove("activeInfo"); 
  document.querySelector(quiz_box).classList.add("activeQuiz"); 
  showQuetions(0); 
  queCounter(1); 
  startTimer(15);
  startTimerLine(0);
  document.querySelector(quiz_title).textContent = `Quiz - ${(numSongs * -1 + 4)}º song out of 3`;
}

const clearResults = () =>
{
  document.querySelector(result_box).classList.remove("activeResult");
  timeValue = 15; 
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); 
  queCounter(que_numb); 
  clearInterval(counter); 
  clearInterval(counterLine); 
  document.querySelector(timeText).textContent = "Time Left";
  document.querySelector(next_btn).classList.remove("show");
}

const playNextSongQuiz = () =>
{
  document.getElementById(trackGame).style.display = '';
  playedTrack = false;
  nextSong();
  clearResults();
}

const quitReloadQuiz = () =>
{
  window.location.reload();
}

const nextQuestion = () =>
{
	if (que_count < questions.length - 1)
  {
    que_count++;
    que_numb++; 
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    document.querySelector(timeText).textContent = "Time Left"; 
    document.querySelector(next_btn).classList.remove("show"); 
  }
  else
  {
    clearInterval(counter); 
    clearInterval(counterLine); 
    showResult(); 
  }
}

const showQuetions = (index) => 
{
  const que_text = document.querySelector(".que_text");
  const options = shuffle(selectAnswers(index));
  const que_tag = `<span> ${(index + 1)}.${questions[index]} </span>`;
  const option_tag = `<div class="option"><span>${options[0]}</span></div> 
  <div class="option"><span>${options[1]}</span></div>
  <div class="option"><span>${options[2]}</span></div>
  <div class="option"><span>${options[3]}</span></div>`;
  que_text.innerHTML = que_tag; 
  document.querySelector(option_list).innerHTML = option_tag; 
  
  const option = document.querySelector(option_list).querySelectorAll(".option");
  for (let i=0; i < option.length; i++)
  {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

const optionSelected = (answer) =>
{
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns =  songsList[songIndex].answers[que_count]; 
    const allOptions = document.querySelector(option_list).children.length; 
    
    if (userAns == correcAns)
    { 
      userScore += 1; 
      answer.classList.add("correct"); 
      answer.insertAdjacentHTML("beforeend", tickIconTag); 
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    }
    else
    {
      answer.classList.add("incorrect"); 
      answer.insertAdjacentHTML("beforeend", crossIconTag);
      console.log("Wrong Answer");
      for (let i=0; i < allOptions; i++)
      {
          if (document.querySelector(option_list).children[i].textContent == correcAns)
          { 
            document.querySelector(option_list).children[i].setAttribute("class", "option correct"); 
            document.querySelector(option_list).children[i].insertAdjacentHTML("beforeend", tickIconTag); 
            console.log("Auto selected correct answer.");
          }
      }
    }
    for (let i = 0; i < allOptions; i++)
    {
        document.querySelector(option_list).children[i].classList.add("disabled"); 
    }
    document.querySelector(next_btn).classList.add("show"); 
}

const showResult = () =>
{
  const scoreText = document.querySelector(result_box).querySelector(".score_text");
  let scoreTag = `<span><p><i> ${songsList[songIndex].answers[0]} </i> - ${songsList[songIndex].name} </br> Composed by ${songsList[songIndex].answers[4]} </p></span>`;
  totalScore += userScore;
  numSongs--;
  document.querySelector(info_box).classList.remove("activeInfo"); 
  document.querySelector(quiz_box).classList.remove("activeQuiz"); 
  document.querySelector(result_box).classList.add("activeResult");
  if (userScore > 2)
  { 
    scoreTag += `<span>Good job, you got <p> ${userScore} </p> out of <p> ${questions.length} </p></span>`;
  }
  else
  { 
    scoreTag += `<span>Sorry, you got only <p> ${userScore} </p> out of <p> ${questions.length} </p></span>`;
  }
  if (numSongs == 0)
  {
    scoreTag += `<span> Total score: <p> ${totalScore} </p> out of <p> ${(questions.length * playedSongs.length)} </p></span>`;
    document.getElementById(nextSongButton).style.display = 'none';
    document.getElementById(restartButton).style.display = 'block';
    document.getElementById(upperButton).style.display = 'none';
    
    if ((questions.length * playedSongs.length) * 0.6 <= totalScore)
    {
      scoreTag += "<span>Wow, you are a soundtrack genius!</br>Good Job, you've completed the game!</span>";
    }
    else
    {
      scoreTag += "<span>Oops, looks like soundtracks aren't your thing. </br>You can try again at any time.</span>";
    }
  }    
  scoreText.innerHTML = scoreTag;
}

const startTimer = (time) => 
{
    counter = setInterval(timer, 1000);
    function timer ()
    {
      currentTime = time;
      document.querySelector(timeCount).textContent = time; 
      time--; 
      if (time < 9)
      { 
          let addZero = document.querySelector(timeCount).textContent; 
          document.querySelector(timeCount).textContent = "0" + addZero;
      }
      if (time < 0)
      { 
        nextQuestion();
      }
    }
}

const startTimerLine = (time) => 
{
  counterLine = setInterval(timer, 29);
  function timer () 
  {
    currentLineTime = time;
    time += 1; 
    document.querySelector(time_line).style.width = time + "px"; 
    if (time > 549)
    {  
      clearInterval(counterLine); 
    }
  }
}

const queCounter = (index) => 
{
  let totalQueCounTag = `<span><p> ${index} </p> of <p> ${questions.length} </p> Questions</span>`;
  document.querySelector(bottom_ques_counter).innerHTML = totalQueCounTag;  
}

const shuffle = (array) => 
{
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) 
  {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const selectAnswers = (index) => 
{
  let answers = [songsList[songIndex].answers[index]];
  let currentEasyAnswers = easyAnswers[index];

  answers = addAnswer(answers, currentEasyAnswers, (numEasy + 1));

  let allAnswers = songsList.map((song) => {return song.answers[index]});
  answers = addAnswer(answers, allAnswers, 4);

  return answers;
}

const addAnswer = (answers, list, size) =>
{
  let randomIndex;
  while (answers.length != size)
  {
    randomIndex = Math.floor(Math.random() * list.length);
    if (answers.indexOf(list[randomIndex]) < 0)
    {
      answers.push(list[randomIndex]);
    }
  }
  return answers;
}


const showPopup = (title, content, buttons) =>
{
  clearInterval(counterLine);
  clearInterval(counter); 
  switch (lastWindow)
  {
    case 'quiz':
      document.querySelector(quiz_box).classList.remove("activeQuiz");
      break;
    case 'result':
      document.querySelector(result_box).classList.remove("activeResult");
      break;
  }
  document.querySelector(popup_box).classList.add("activePopup");
  document.querySelector(popup_title).textContent = title;
  document.querySelector(popup_content).textContent = content;
  document.querySelector(popup_buttons).style.display = 
  buttons ? 'flex' : 'none';
  
}

const closeButtonPopup = () => 
{
  startTimer(currentTime);
  startTimerLine(currentLineTime); 
  document.querySelector(popup_box).classList.remove("activePopup");
  switch (lastWindow)
  {
    case 'quiz':
      document.querySelector(quiz_box).classList.add("activeQuiz");
      break;
    case 'result':
      document.querySelector(result_box).classList.add("activeResult");
      break;
  }
}

const openPopupReset = (window) => 
{
  let title = "Are you sure?";
  let content = "You will return to the home screen";
  lastWindow = window;
  showPopup(title, content, true);
}

const openPopupTip = () => 
{
  let title = "Tip";
  let content = songsList[songIndex].tip;
  document.getElementById(tip_button).style.display = 'none';
  showPopup(title, content, false);
}
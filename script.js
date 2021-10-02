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
const quizButton = "quiz-button";

const popup_box = ".popup_box";
const popup_title = ".popup-title > span";
const popup_content = ".popup-content";
const popup_buttons = ".popup_box .buttons";

const bottom_ques_counter = "footer .total_que";

const quiz_box = ".quiz_box";
const result_box = ".result_box";
const option_list = ".option_list";

const quiz_title = ".quiz_box > header > div.title"

const next_btn = "footer .next_btn";

const quote = "quote";

const answer_input = 'answer_input';

let numSongs = 5;

const songsList =
[
  "bee", "roar", "ghost", "madonna", "understand"
]

const quotations = ["Shakespeare (Hamlet)", "Wole Soyinka (Tigritude)", "Marie Clements (Accidental Women)", "the singer Madonna", "Akutagawa Ryunosuke (Rashomon)"]

let songIndex = 0;

let started = false;
let playedTrack = false;
let correctAnswer = false;

const loadSong = (song) => 
{
  document.getElementById(audio).src = `audio/${song}.m4a`;
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
  songIndex++;
  loadSong(songIndex);
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
		loadSong(songIndex);
		playSong();
    document.getElementById(quizButton).focus(); 
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
    startQuiz();
	}
}


const startQuiz = () => 
{
  document.querySelector(quiz_box).classList.add("activeQuiz"); 
  document.querySelector(quiz_title).textContent = `Quiz - ${(numSongs * -1 + 6)}º recording out of 5`;
  document.getElementById(quote).textContent = `Quote by ${quotations[(numSongs * -1 + 5)]}`
  document.getElementById(answer_input).focus(); 
  document.getElementById(answer_input).value = '';
  document.querySelector(next_btn).textContent = "Submit";
  document.getElementById(answer_input).classList.remove("correct"); 
}


const playNextSongQuiz = () =>
{
  document.getElementById(trackGame).style.display = '';
  nextSong();
  document.querySelector(quiz_box).classList.remove("activeQuiz");
  playedTrack = false;
  
}

const quitReloadQuiz = () =>
{
  window.location.reload();
}

const openTipWebsite = () =>
{
  window.open('https://sites.google.com/ualberta.ca/tips-interactive-project/')
}

const submit = (e) =>
{
  if (document.querySelector(quiz_box).classList.contains("activeQuiz"))
  {
    if (e.keyCode == 13)
    {
      optionSelected();
    }
  }
  
}

const optionSelected = () =>
{
    let answer = document.getElementById(answer_input);
    if (correctAnswer)
    {
      correctAnswer = false;
      if (numSongs == 0)
      {
        showResult();
      }
      else
      {
        playNextSongQuiz();
        
      }
      
    }
    else 
    {
      let userAns = answer.value.toLowerCase().replace(/\s+$/, ''); 
      let correcAns =  songsList[songIndex]; 
      
      if (userAns == correcAns)
      { 
        answer.classList.add("correct"); 
        answer.classList.remove("incorrect"); 
        console.log("Correct Answer");
        numSongs--;
        correctAnswer = true;
        document.querySelector(next_btn).textContent =  numSongs == 0 ? "Finish" : "Next";
      }
      else
      {
        answer.classList.add("incorrect"); 
        console.log("Wrong Answer");
      }
    }
}

const showResult = () =>
{
  document.querySelector(quiz_box).classList.remove("activeQuiz"); 
  document.querySelector(result_box).classList.add("activeResult");
}

const showPopup = (title, content) =>
{
  document.querySelector(quiz_box).classList.remove("activeQuiz");
  document.querySelector(popup_box).classList.add("activePopup");
  document.querySelector(popup_title).textContent = title;
  document.querySelector(popup_content).textContent = content;
  document.querySelector(popup_buttons).style.display = 'flex';
  
}

const closeButtonPopup = () => 
{
  document.querySelector(popup_box).classList.remove("activePopup");
  document.querySelector(quiz_box).classList.add("activeQuiz");
}

const openPopupReset = (window) => 
{
  let title = "Are you sure?";
  let content = "You will return to the home screen";
  lastWindow = window;
  showPopup(title, content);
}

const musicContainer = 'music-container';
const trackGame = 'track-game';
const playBtn = 'play';
const prevBtn = 'prev';
const nextBtn = 'next';
const audio = 'audio';
const progress = 'progress';
const progressContainer = 'progress-container';
const title = 'title';
const cover = 'cover';
const currTime = '#currTime';
const durTime = '#durTime';
const quizGame = 'quiz-game';

// Variables
const quizContainer = 'quiz';
const resultsContainer = 'results';
const submitButton = 'submitQuiz';
const previousButton = "previous";
const nextButton = "buttonNextQuiz";

let numSongs = 3;

let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

let started = false;
let playedTrack = false;

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

let playedSongs = []
// Keep track of song
let songIndex = Math.floor(Math.random() * songs.length);

// Update song details
loadSong = (song) => 
{
  document.getElementById(audio).src = `music/${song}.mp3`;
  document.getElementById(cover).src = `images/${song}.jpg`;
}

// Play song
playSong = () => 
{
	document.getElementById(musicContainer).classList.add('play');
	document.getElementById(playBtn).querySelector('i.fas').classList.remove('fa-play');
	document.getElementById(playBtn).querySelector('i.fas').classList.add('fa-pause');
	document.getElementById(audio).play();
}

// Pause song
pauseSong = () => 
{
	document.getElementById(musicContainer).classList.remove('play');
	document.getElementById(playBtn).querySelector('i.fas').classList.add('fa-play');
	document.getElementById(playBtn).querySelector('i.fas').classList.remove('fa-pause');
	document.getElementById(audio).pause();
}

nextSong = () =>
{
  while (playedSongs.includes(songIndex = Math.floor(Math.random() * songs.length)));
  playedSongs.push(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// Update progress bar
updateProgress = (e) => 
{
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	document.getElementById(progress).style.width = `${progressPercent}%`;
}

// Set progress bar
setProgress = (e) => 
{
	const width = document.getElementById(progressContainer).clientWidth;
	const clickX = e.offsetX;
	const duration = document.getElementById(audio).duration;
	
	document.getElementById(audio).currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
DurTime =  (e) => 
{
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	if (document.querySelector(currTime))
		document.querySelector(currTime).innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	if (document.querySelector(durTime))
		document.querySelector(durTime).innerHTML = min_d +':'+ sec_d;
		
};

const musicPlayer = () =>
{
	const isPlaying = document.getElementById(musicContainer).classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
}

const startPlayTrack = (element) =>
{
	if (!started)
	{
		started = true;
		document.getElementById(trackGame).style.display = '';
    playedSongs.push(songIndex);
		loadSong(songs[songIndex]);
		playSong();
		element.style.display = 'none';
	}
};


const afterPlayTrack = () =>
{
	if (!playedTrack)
	{
		playedTrack = true;
		if (document.getElementById(musicContainer).classList.contains('play'))
			pauseSong();
		document.getElementById(trackGame).style.display = 'none';
		activateQuiz();
    restartQuiz();
	}
	
};

const info_box = ".info_box";
const quiz_box = ".quiz_box";
const result_box = ".result_box";
const option_list = ".option_list";
const time_line = "header .time_line";
const timeText = ".timer .time_left_txt";
const timeCount = ".timer .timer_sec";
// if startQuiz button clicked


const activateQuiz = () => 
{
	document.querySelector(info_box).classList.add("activeInfo");
}

const startQuiz = () => 
{
	document.querySelector(info_box).classList.remove("activeInfo"); //hide info box
    document.querySelector(quiz_box).classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}


let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


const next_btn = "footer .next_btn";

const restartQuiz = () =>
{
	document.querySelector(quiz_box).classList.add("activeQuiz"); //show quiz box
    document.querySelector(result_box).classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    document.querySelector(timeText).textContent = "Time Left"; //change the text of timeText to Time Left
    document.querySelector(next_btn).classList.remove("show"); //hide the next button
}

const playNextSongQuiz = () =>
{
  document.getElementById(trackGame).style.display = '';
  playedTrack = false;
  nextSong();
  document.querySelector(result_box).classList.remove("activeResult");
}

const quitReloadQuiz = () =>
{
    window.location.reload();
}

const bottom_ques_counter = "footer .total_que";
// if Next Que button clicked

const nextQuestion = () =>
{
	if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        document.querySelector(timeText).textContent = "Time Left"; //change the timeText to Time Left
        document.querySelector(next_btn).classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    document.querySelector(option_list).innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = document.querySelector(option_list).querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = document.querySelector(option_list).children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(document.querySelector(option_list).children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                document.querySelector(option_list).children[i].setAttribute("class", "option correct"); //adding green color to matched option
                document.querySelector(option_list).children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        document.querySelector(option_list).children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    document.querySelector(next_btn).classList.add("show"); //show the next button if user selected any option
}
function showResult(){
  numSongs--;
  if (numSongs == 0)
  {
    document.getElementById("nextsong").style.display = 'none';
  }

    document.querySelector(info_box).classList.remove("activeInfo"); //hide info box
    document.querySelector(quiz_box).classList.remove("activeQuiz"); //hide quiz box
    document.querySelector(result_box).classList.add("activeResult"); //show result box
    const scoreText = document.querySelector(result_box).querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        document.querySelector(timeCount).textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = document.querySelector(timeCount).textContent; 
            document.querySelector(timeCount).textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
			    nextQuestion();
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        document.querySelector(time_line).style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    document.querySelector(bottom_ques_counter).innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
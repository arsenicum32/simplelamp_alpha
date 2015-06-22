rI = function(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
};

shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

interval = [setInterval(function(){
$('.insr').each(function(){
  $(this).attr('src','footer/b'+rI(1,5)+'.png');
});
var DATA = new Date();
if(DATA - interval[1] > 1000){
  interval[1] = new Date();
  clearInterval(interval[0]);
}
},10),new Date()];

PLACEHOLDERS = [];



for (var n=0;n<rI(100,200);n++){
  PLACEHOLDERS.push({image: 'randomgen/'+rI(1,40)+'.png', size: rI(12,400), super: 'Empty', trust: {pl:true,pr:false,des:false,vid:false,us:false} });
}
for (var n=0;n<10;n++){
  // text = max letters  = 30 !!!!!! very  impotant
  var letters = [
    'люверсы на майке',
    'иновационная пытка',
    'а попе горячо!',
    'первая запись',
    'китай',
    'ещё больше',
    'поиски лучшего',
    'в стране чудес',
    'ТЫК ТЫК',
    'полезности'
  ];
  PLACEHOLDERS.push({ text: letters[n], super: 'two', color: 'hotpink', trust: {pl:false,pr:false,des:true,vid:false,us:false} });
}

// for (var n=0;n<10;n++){
//   PLACEHOLDERS.push({name: 'rotate', prewName: '10' , trust: {pl:false,pr:false,des:false,vid:true,us:false} });
// }

PLACEHOLDERS.push({name: 'rotate', prewName: 'rotate' , trust: {pl:false,pr:false,des:false,vid:true,us:false} });
PLACEHOLDERS.push({name: 'anyone', prewName: '10' , trust: {pl:false,pr:false,des:false,vid:true,us:false} });
PLACEHOLDERS.push({name: 'create', prewName: 'create' , trust: {pl:false,pr:false,des:false,vid:true,us:false} });
PLACEHOLDERS.push({name: 'movie-HD', prewName: '849613' , trust: {pl:false,pr:false,des:false,vid:true,us:false} });


for (var n=0;n<4;n++){
  PLACEHOLDERS.push({image:'product/prod1.gif',text: 'description', prData: '000:9' ,trust: {pl:false,pr:true,des:false,vid:false,us:false}});
}

PLACEHOLDERS = shuffle(PLACEHOLDERS);

COLORS = {
	"gray": "font-weight: bold; color: #1B2B34;",
	"red": "font-weight: bold; color: #EC5f67;",
	"orange": "font-weight: bold; color: #F99157;",
	"yellow": "font-weight: bold; color: #FAC863;",
	"green": "font-weight: bold; color: #99C794;",
	"teal": "font-weight: bold; color: #5FB3B3;",
	"blue": "font-weight: bold; color: #6699CC;",
	"purple": "font-weight: bold; color: #C594C5;",
	"brown": "font-weight: bold; color: #AB7967;"
};


landingContent = {mainImage: 'landing/main.png',
pre:'Сообщество любителей собирать электронные устройства. Разделим эту фразу на три части, что-бы понять, что же это значит',
first:'это группа людей, имеющих общий интерес, пускай будет community, более глобальный термин. В основе сообщества лежит какая-то мелкая забавная плюшка...',
firstN:'На сегоднящний день сообщество node насчитывает 8,238 разработчиков платформы и более 36,000 продуктовых разработчиков. Каждый месяц выходит по несколько версий продукта, на котором построенно более 500 приложний.',
firstNN: 'После конференции siggraph 1999 NaN получила 45м евро венчурных инвестиций. Летом того же года колличество активных пользователей платформы превысило четверть миллиона. Более половины пользователей blender дорабатывают платформу.',
any:''
};

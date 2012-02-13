smalltalk.addPackage('Presentation-IAE', {});
smalltalk.addClass('IAEPresentation', smalltalk.Presentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
category: 'accessing',
fn: function (){
var self=this;
return "Laurent Laffont";
return self;},
args: [],
source: unescape('author%0A%09%5E%20%27Laurent%20Laffont%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPresentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("laurent.laffont@gmail.com");
return self;},
args: [],
source: unescape('email%0A%09%5E%27laurent.laffont@gmail.com%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPresentation);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("http%3A//lolgzs.free.fr/iae-course/");
return self;},
args: [],
source: unescape('url%0A%09%5E%27http%3A//lolgzs.free.fr/iae-course/%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPresentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%202em%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%23WhatIsJtalk%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/balloon.jpg%22%29%20650px%2050px%20no-repeat%3B%0A%7D%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A.slide%20.huge%20%7B%0A%20%20font-size%3A%204em%3B%0A%20%20line-height%3A%201.5em%3B%0A%7D%0A%0A.slide%20.big%20%7B%0A%20%20font-size%3A%203em%3B%0A%20%20line-height%3A%201.1em%3B%0A%7D%0A%0A%0A.slide%20.center%20%7B%0A%20%20text-align%3A%20center%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23tools%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23tools%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A.slide%20iframe%20%7B%0A%20%20height%3A%2090%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%201px%20solid%20white%3B%0A%7D%0A%0A.slide%20.left-column%20%7B%0A%09width%3A%2050%25%3B%0A%09position%3A%20absolute%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.right-column%20%7B%0A%09width%3A%2050%25%3B%0A%09float%3A%20right%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.nobullet%20%7B%0A%09list-style%3A%20none%3B%0A%7D%0A%0A%23tools%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23IAECourseContent%20%7B%0A%09background%3A%20white%20url%28iae/images/planning.png%29%20no-repeat%20right%20bottom%3B%0A%7D%0A%0A%23IAEPractices%20%7B%0A%09background%3A%20rgb%28170%2C170%2C180%29%20url%28iae/images/martialart.jpg%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAELearn%20%7B%0A%09background%3A%20url%28iae/images/books.jpg%29%20no-repeat%20center%20center%3B%0A%09color%3A%20white%3B%0A%09font-size%3A%203em%3B%0A%09text-shadow%3A%200px%200px%2020px%20red%3B%0A%7D%0A%0A%23IAEPharocasts%20%7B%0A%09background-color%3A%20rgb%2828%2C32%2C%2035%29%3B%0A%7D%0A%0A%23IAECara74%20%7B%0A%09background-color%3A%20rgb%28127%2C116%2C%20105%29%3B%0A%7D%0A%0A%0A%23IAEContinuousIntegration%20%7B%0A%09font-size%3A%202em%3B%0A%09background%3A%20rgb%28216%2C216%2C216%29%20url%28iae/images/ci.png%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAETracker%20%7B%0A%09background%3A%20rgb%28235%2C239%2C249%29%3B%0A%7D%0A%0A%23IAEScrum%20%7B%0A%09background%3A%20white%20url%28iae/images/scrum.png%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAESummary%20%7B%0A%09background%3A%20white%20url%28iae/images/success.jpg%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A.slide%20.codemirror%20%7B%0A%09width%3A%20100%25%3B%0A%09border%3A%205px%20solid%20rgba%2850%2C%2050%2C%2050%2C%200.8%29%3B%0A%09border-radius%3A%205px%3B%0A%09background%3A%20white%3B%0A%09height%3A%20auto%3B%0A%7D%0A%0A.slide%20.codemirror-scroll%20%7B%0A%09height%3A%20auto%3B%0A%09overflow%3A%20visible%3B%0A%7D%0A%0A%23IAETDDStackExercise%20%20.codemirror%20%7B%0A%09height%3A%20350px%3B%0A%09font-size%3A%2015px%3B%0A%7D%0A%0A%23IAETDDStackExercise%20%20.codemirror-scroll%20%7B%0A%09height%3A%20350px%3B%0A%09overflow%3A%20auto%3B%0A%7D%0A");
return self;},
args: [],
source: unescape('style%0A%09%5E%27%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%202em%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%23WhatIsJtalk%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/balloon.jpg%22%29%20650px%2050px%20no-repeat%3B%0A%7D%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A.slide%20.huge%20%7B%0A%20%20font-size%3A%204em%3B%0A%20%20line-height%3A%201.5em%3B%0A%7D%0A%0A.slide%20.big%20%7B%0A%20%20font-size%3A%203em%3B%0A%20%20line-height%3A%201.1em%3B%0A%7D%0A%0A%0A.slide%20.center%20%7B%0A%20%20text-align%3A%20center%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23tools%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23tools%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A.slide%20iframe%20%7B%0A%20%20height%3A%2090%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%201px%20solid%20white%3B%0A%7D%0A%0A.slide%20.left-column%20%7B%0A%09width%3A%2050%25%3B%0A%09position%3A%20absolute%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.right-column%20%7B%0A%09width%3A%2050%25%3B%0A%09float%3A%20right%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.nobullet%20%7B%0A%09list-style%3A%20none%3B%0A%7D%0A%0A%23tools%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23IAECourseContent%20%7B%0A%09background%3A%20white%20url%28iae/images/planning.png%29%20no-repeat%20right%20bottom%3B%0A%7D%0A%0A%23IAEPractices%20%7B%0A%09background%3A%20rgb%28170%2C170%2C180%29%20url%28iae/images/martialart.jpg%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAELearn%20%7B%0A%09background%3A%20url%28iae/images/books.jpg%29%20no-repeat%20center%20center%3B%0A%09color%3A%20white%3B%0A%09font-size%3A%203em%3B%0A%09text-shadow%3A%200px%200px%2020px%20red%3B%0A%7D%0A%0A%23IAEPharocasts%20%7B%0A%09background-color%3A%20rgb%2828%2C32%2C%2035%29%3B%0A%7D%0A%0A%23IAECara74%20%7B%0A%09background-color%3A%20rgb%28127%2C116%2C%20105%29%3B%0A%7D%0A%0A%0A%23IAEContinuousIntegration%20%7B%0A%09font-size%3A%202em%3B%0A%09background%3A%20rgb%28216%2C216%2C216%29%20url%28iae/images/ci.png%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAETracker%20%7B%0A%09background%3A%20rgb%28235%2C239%2C249%29%3B%0A%7D%0A%0A%23IAEScrum%20%7B%0A%09background%3A%20white%20url%28iae/images/scrum.png%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAESummary%20%7B%0A%09background%3A%20white%20url%28iae/images/success.jpg%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A.slide%20.codemirror%20%7B%0A%09width%3A%20100%25%3B%0A%09border%3A%205px%20solid%20rgba%2850%2C%2050%2C%2050%2C%200.8%29%3B%0A%09border-radius%3A%205px%3B%0A%09background%3A%20white%3B%0A%09height%3A%20auto%3B%0A%7D%0A%0A.slide%20.codemirror-scroll%20%7B%0A%09height%3A%20auto%3B%0A%09overflow%3A%20visible%3B%0A%7D%0A%0A%23IAETDDStackExercise%20%20.codemirror%20%7B%0A%09height%3A%20350px%3B%0A%09font-size%3A%2015px%3B%0A%7D%0A%0A%23IAETDDStackExercise%20%20.codemirror-scroll%20%7B%0A%09height%3A%20350px%3B%0A%09overflow%3A%20auto%3B%0A%7D%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPresentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPresentation.klass);


smalltalk.addClass('IAESlide', smalltalk.Slide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_name", []);
return self;},
args: [],
source: unescape('id%0A%09%5E%20self%20class%20name'),
messageSends: ["name", "class"],
referencedClasses: []
}),
smalltalk.IAESlide);

smalltalk.addMethod(
unescape('_renderJava_on_'),
smalltalk.method({
selector: unescape('renderJava%3Aon%3A'),
category: 'rendering',
fn: function (aString, html){
var self=this;
var aTextArea=nil;
aTextArea=smalltalk.send(smalltalk.send(html, "_textarea", []), "_element", []);
smalltalk.send(aTextArea, "_value_", [aString]);
 CodeMirror.fromTextArea( aTextArea, {
                lineNumbers: true,
		mode: 'text/x-java',
                enterMode: 'classic',
		theme: 'neat',
                matchBrackets: true,
                electricChars: false }) ;
return self;},
args: ["aString", "html"],
source: unescape('renderJava%3A%20aString%20on%3A%20html%0A%09%7CaTextArea%7C%0A%09aTextArea%20%3A%3D%20html%20textarea%20element.%0A%09aTextArea%20value%3A%20aString.%0A%20%20%20%20%20%20%20%20%0A%09%3C%20CodeMirror.fromTextArea%28%20aTextArea%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineNumbers%3A%20true%2C%0A%09%09mode%3A%20%27text/x-java%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enterMode%3A%20%27classic%27%2C%0A%09%09theme%3A%20%27neat%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20matchBrackets%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20electricChars%3A%20false%20%7D%29%20%3E'),
messageSends: ["element", "textarea", "value:"],
referencedClasses: []
}),
smalltalk.IAESlide);



smalltalk.addClass('IAETDDBookBeck', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide green3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDBookBeck);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("TDD%20By%20Example%20-%20Kent%20Beck")]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/beck_tdd_book.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27TDD%20By%20Example%20-%20Kent%20Beck%27.%0A%09html%20div%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%20html%20img%3A%20%27iae/images/beck_tdd_book.jpg%27%20%5D'),
messageSends: ["h1:", "class:", "with:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAETDDBookBeck);



smalltalk.addClass('IAEAgileResources', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Resources"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.crisp.se/henrik.kniberg/presentations/agile-tour-grenoble-2009-keynote-what-is-agile.pdf")]);return smalltalk.send($rec, "_with_", ["What is agile"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//henrik-kniberg.developpez.com/livre/scrum-xp/")]);return smalltalk.send($rec, "_with_", [unescape("Scrum%20et%20XP%20depuis%20les%20tranch%E9es")]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//agilemanifesto.org/iso/fr/")]);return smalltalk.send($rec, "_with_", ["Manifeste agile"]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Resources%27.%0A%09html%20%20ul%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//www.crisp.se/henrik.kniberg/presentations/agile-tour-grenoble-2009-keynote-what-is-agile.pdf%27%3B%0A%09%09%09with%3A%20%27What%20is%20agile%27%5D.%0A%0A%09%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//henrik-kniberg.developpez.com/livre/scrum-xp/%27%3B%0A%09%09%09with%3A%20%27Scrum%20et%20XP%20depuis%20les%20tranch%E9es%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%0A%09%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//agilemanifesto.org/iso/fr/%27%3B%0A%09%09%09with%3A%20%27Manifeste%20agile%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["h1:", "ul:", "li:", "href:", "with:", "a"],
referencedClasses: []
}),
smalltalk.IAEAgileResources);



smalltalk.addClass('IAETDDBookThomas', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDBookThomas);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("Pragmatic%20Unit%20Testing%20-%20Dave%20Thomas")]);return smalltalk.send(html, "_img_", [unescape("iae/images/prag_unit_test_book.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%20%0A%09%09%09html%20h1%3A%20%27Pragmatic%20Unit%20Testing%20-%20Dave%20Thomas%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%20html%20img%3A%20%27iae/images/prag_unit_test_book.jpg%27%20%5D'),
messageSends: ["class:", "with:", "h1:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAETDDBookThomas);



smalltalk.addClass('IAEMovieApplicationPresentation', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Swing%20application%20with%20TDD");
return self;},
args: [],
source: unescape('description%0A%09%5E%27IAE%20-%20M1%20MTI%20-%202011.%20Swing%20application%20with%20TDD%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMovieApplicationPresentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEMovieApplication || IAEMovieApplication),(smalltalk.IAEMVC || IAEMVC),(smalltalk.IAEMovieList || IAEMovieList)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0A%09%09IAEIntroSlide.%0A%09%09IAEMovieApplication.%0A%09%09IAEMVC.%0A%09%09IAEMovieList%0A%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAEMovieApplication", "IAEMVC", "IAEMovieList"]
}),
smalltalk.IAEMovieApplicationPresentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'accessing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMovieApplicationPresentation.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20Movie%20application");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27IAE%20-%20Movie%20application%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMovieApplicationPresentation.klass);


smalltalk.addClass('IAEIntroSlide', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEIntroSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_title", [])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", [])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])]);return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send("mailto:", "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])])]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20self%20presentation%20title.%0A%09%09html%20p%3A%20self%20presentation%20author.%0A%20%20%20%20%20%20%20%20%20%20%09html%20p%3A%20self%20presentation%20description.%0A%09%09html%20p%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09with%3A%20self%20presentation%20email%3B%0A%09%09%09%09href%3A%20%27mailto%3A%27%2C%20self%20presentation%20email%5D%5D.'),
messageSends: ["class:", "with:", "h1:", "title", "presentation", "p:", "author", "description", "email", "href:", unescape("%2C"), "a", "div"],
referencedClasses: []
}),
smalltalk.IAEIntroSlide);



smalltalk.addClass('IAEMovieApplication', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMovieApplication);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/MoviesEditor.png")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%20html%20img%3A%20%27iae/images/MoviesEditor.png%27%20%5D'),
messageSends: ["class:", "with:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAEMovieApplication);



smalltalk.addClass('IAEPharocasts', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPharocasts);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.pharocasts.com")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("iae/images/pharocasts.png")]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09href%3A%20%27http%3A//www.pharocasts.com%27%3B%0A%09%09%09with%3A%20%5Bhtml%20img%20src%3A%20%27iae/images/pharocasts.png%27%5D%20%5D'),
messageSends: ["class:", "with:", "href:", "src:", "img", "a", "div"],
referencedClasses: []
}),
smalltalk.IAEPharocasts);



smalltalk.addClass('IAETDDStackExerciseVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDStackExerciseVideo);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["Stack exercise"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(400)]);smalltalk.send($rec, "_height_", [(300)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/29788542%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h3%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%27Stack%20exercise%27.%0A%09html%20iframe%20%0A%09%09width%3A400%3B%0A%09%09height%3A300%3B%0A%09%09src%3A%27http%3A//player.vimeo.com/video/29788542%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0%27'),
messageSends: ["class:", "with:", "h3", "width:", "height:", "src:", "iframe"],
referencedClasses: []
}),
smalltalk.IAETDDStackExerciseVideo);



smalltalk.addClass('IAEWhatIsSoftwareDevelopment', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide center";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20center%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEWhatIsSoftwareDevelopment);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["What is"]);(function($rec){smalltalk.send($rec, "_class_", ["huge red"]);return smalltalk.send($rec, "_with_", ["Software Development"]);})(smalltalk.send(html, "_h1", []));return (function($rec){smalltalk.send($rec, "_class_", ["huge"]);return smalltalk.send($rec, "_with_", [unescape("%3F")]);})(smalltalk.send(html, "_h1", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27What%20is%27.%0A%09%09html%20h1%20class%3A%20%27huge%20red%27%3B%20with%3A%20%27Software%20Development%27.%0A%09%09html%20h1%20class%3A%20%27huge%27%3B%20with%3A%20%27%3F%27.%0A%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["class:", "with:", "h1:", "h1", "div"],
referencedClasses: []
}),
smalltalk.IAEWhatIsSoftwareDevelopment);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("%23ddf");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27%23ddf%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEWhatIsSoftwareDevelopment);



smalltalk.addClass('IAEMVC', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return "black";
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMVC);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_style_", [unescape("%0A%23IAEMVC%20%7B%0A%20%20background%3A%20url%28iae/images/mvc.jpg%29%20%20no-repeat%20center%20center%3B%0A%20%20background-color%3A%20%23333%3B%20%0A%7D")]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20style%3A%20%27%0A%23IAEMVC%20%7B%0A%20%20background%3A%20url%28iae/images/mvc.jpg%29%20%20no-repeat%20center%20center%3B%0A%20%20background-color%3A%20%23333%3B%20%0A%7D%27'),
messageSends: ["style:"],
referencedClasses: []
}),
smalltalk.IAEMVC);



smalltalk.addClass('IAECourseContent', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Content"]);
smalltalk.send(html, "_ol_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["Software Development overview"]);smalltalk.send($rec, "_li_", ["Test Driven Development"]);return smalltalk.send($rec, "_li_", ["Agile practices"]);})(html);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Content%27.%0A%20%0A%09html%20ol%3A%20%5B%0A%09%09html%0A%20%20%20%20%20%20%20%20%20%20%09%09li%3A%20%27Software%20Development%20overview%27%3B%0A%09%09%09li%3A%20%27Test%20Driven%20Development%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09%09li%3A%20%27Agile%20practices%27%0A%20%20%20%20%20%20%20%5D'),
messageSends: ["h1:", "ol:", "li:"],
referencedClasses: []
}),
smalltalk.IAECourseContent);



smalltalk.addClass('IAEMovieList', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_slideClass'),
smalltalk.method({
selector: unescape('slideClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('slideClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMovieList);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Classes MovieList et Movie"]);
smalltalk.send(html, "_ol_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["un film a un titre"]);smalltalk.send($rec, "_li_", ["on peut rajouter et retirer un film de la liste"]);smalltalk.send($rec, "_li_", [unescape("on%20peut%20renommer%20le%20titre%20d%27un%20film.")]);smalltalk.send($rec, "_li_", [unescape("le%20titre%20ne%20peut%20etre%20%28null%29%20ou%20une%20cha%EEne%20vide%20-%20IllegalArgumentException")]);return smalltalk.send($rec, "_li_", [unescape("on%20ne%20peut%20pas%20ajouter%20deux%20films%20avec%20le%20m%EAme%20titre%20dans%20la%20liste%20-%20DuplicateMovieException%20%28note%20%3A%20ArrayList.contains%20appelle%20Movie.equals%29")]);})(html);})]);
(function($rec){smalltalk.send($rec, "_class_", ["right"]);smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip")]);return smalltalk.send($rec, "_with_", [unescape("T%E9l%E9charger%20la%20correction")]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Classes%20MovieList%20et%20Movie%27.%0A%09html%20ol%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20html%20%0A%20%20%20%20%20%20%20%20%20%20%09li%3A%20%27un%20film%20a%20un%20titre%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09li%3A%20%27on%20peut%20rajouter%20et%20retirer%20un%20film%20de%20la%20liste%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09li%3A%20%27on%20peut%20renommer%20le%20titre%20d%27%27un%20film.%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09li%3A%20%27le%20titre%20ne%20peut%20etre%20%28null%29%20ou%20une%20cha%EEne%20vide%20-%20IllegalArgumentException%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09li%3A%20%27on%20ne%20peut%20pas%20ajouter%20deux%20films%20avec%20le%20m%EAme%20titre%20dans%20la%20liste%20-%20DuplicateMovieException%20%28note%20%3A%20ArrayList.contains%20appelle%20Movie.equals%29%27%0A%20%20%20%20%20%20%20%20%5D.%0A%0A%09html%20a%0A%09%09class%3A%20%27right%27%3B%0A%09%09href%3A%20%27http%3A//lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip%27%3B%0A%09%09with%3A%20%27T%E9l%E9charger%20la%20correction%27'),
messageSends: ["h1:", "ol:", "li:", "class:", "href:", "with:", "a"],
referencedClasses: []
}),
smalltalk.IAEMovieList);



smalltalk.addClass('IAECara74', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%28157%2C%20145%2C%20131%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%28157%2C%20145%2C%20131%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECara74);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECara74);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//cara74.alpha.smallharbour.org/")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/cara74.png")]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20a%20%0A%20%20%20%20%20%20%20%20%20%20%09%09%09%09href%3A%20%27http%3A//cara74.alpha.smallharbour.org/%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%09%09%09%09with%3A%20%5Bhtml%20img%3A%20%27iae/images/cara74.png%27%20%5D%20%5D'),
messageSends: ["class:", "with:", "href:", "img:", "a", "div"],
referencedClasses: []
}),
smalltalk.IAECara74);



smalltalk.addClass('IAEJavaSwing', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011");
return self;},
args: [],
source: unescape('description%0A%09%5E%27IAE%20-%20M1%20MTI%20-%202011%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJavaSwing);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEJFrame || IAEJFrame),(smalltalk.IAEJFrameSnapshot || IAEJFrameSnapshot),(smalltalk.IAEJLabel || IAEJLabel),(smalltalk.IAEJLabelSnapshot || IAEJLabelSnapshot),(smalltalk.IAEJFramePack || IAEJFramePack),(smalltalk.IAEJFramePackSnapshot || IAEJFramePackSnapshot),(smalltalk.IAEGridLayout || IAEGridLayout),(smalltalk.IAEGridLayoutSnapshot || IAEGridLayoutSnapshot),(smalltalk.IAEFlowLayoutSnapshot || IAEFlowLayoutSnapshot),(smalltalk.IAEActionListener || IAEActionListener),(smalltalk.IAEActionListenerGetSource || IAEActionListenerGetSource),(smalltalk.IAEMouseListener || IAEMouseListener),(smalltalk.IAEJTextField || IAEJTextField),(smalltalk.IAETextFieldSnapshot || IAETextFieldSnapshot),(smalltalk.IAEJComboBox || IAEJComboBox),(smalltalk.IAEComboBoxSnapshot || IAEComboBoxSnapshot),(smalltalk.IAEJList || IAEJList),(smalltalk.IAEJListSnapshot || IAEJListSnapshot),(smalltalk.IAEModelView || IAEModelView),(smalltalk.IAEJListModelSnapshot || IAEJListModelSnapshot),(smalltalk.IAEUISpec || IAEUISpec),(smalltalk.IAEJavaSwingResources || IAEJavaSwingResources),(smalltalk.IAESectionExercises || IAESectionExercises),(smalltalk.IAEFrameTPSnapshot || IAEFrameTPSnapshot),(smalltalk.IAEUISpecVideo || IAEUISpecVideo)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0AIAEIntroSlide.%0AIAEJFrame.%0AIAEJFrameSnapshot.%0AIAEJLabel.%0AIAEJLabelSnapshot.%0AIAEJFramePack.%0AIAEJFramePackSnapshot.%0AIAEGridLayout.%0AIAEGridLayoutSnapshot.%0AIAEFlowLayoutSnapshot.%0AIAEActionListener.%0AIAEActionListenerGetSource.%0AIAEMouseListener.%0AIAEJTextField.%0AIAETextFieldSnapshot.%0AIAEJComboBox.%0AIAEComboBoxSnapshot.%0AIAEJList.%0AIAEJListSnapshot.%0AIAEModelView.%0AIAEJListModelSnapshot.%0AIAEUISpec.%0AIAEJavaSwingResources.%0AIAESectionExercises.%0AIAEFrameTPSnapshot.%0AIAEUISpecVideo%0A%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAEJFrame", "IAEJFrameSnapshot", "IAEJLabel", "IAEJLabelSnapshot", "IAEJFramePack", "IAEJFramePackSnapshot", "IAEGridLayout", "IAEGridLayoutSnapshot", "IAEFlowLayoutSnapshot", "IAEActionListener", "IAEActionListenerGetSource", "IAEMouseListener", "IAEJTextField", "IAETextFieldSnapshot", "IAEJComboBox", "IAEComboBoxSnapshot", "IAEJList", "IAEJListSnapshot", "IAEModelView", "IAEJListModelSnapshot", "IAEUISpec", "IAEJavaSwingResources", "IAESectionExercises", "IAEFrameTPSnapshot", "IAEUISpecVideo"]
}),
smalltalk.IAEJavaSwing);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20Java%20Swing");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27IAE%20-%20Java%20Swing%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJavaSwing.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJavaSwing.klass);


smalltalk.addClass('IAETeamWork', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%2880%2C90%2C130%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%2880%2C90%2C130%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETeamWork);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["Team Work"]);})(smalltalk.send(html, "_h1", []));
(function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/team.JPG")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20%0A%09%09class%3A%20%27red%27%3B%0A%09%09with%3A%27Team%20Work%27.%0A%09html%20div%20%0A%09%09class%3A%20%27right%27%3B%20%0A%09%09with%3A%20%5Bhtml%20img%3A%20%27iae/images/team.JPG%27%5D.'),
messageSends: ["class:", "with:", "h1", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAETeamWork);



smalltalk.addClass('IAEAbstractCodeSnippetSlide', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return nil;
return self;},
args: [],
source: unescape('title%0A%09%5E%20nil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAbstractCodeSnippetSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(($receiver = smalltalk.send(self, "_title", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(html, "_h1_", [smalltalk.send(self, "_title", [])]);})() : nil;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09self%20title%20ifNotNil%3A%20%5Bhtml%20h1%3A%20self%20title%5D.%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%20self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["ifNotNil:", "title", "h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAEAbstractCodeSnippetSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'rendering',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAbstractCodeSnippetSlide);



smalltalk.addClass('IAEProject', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%2829%2C%2051%2C%2013%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%2829%2C%2051%2C%2013%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEProject);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEProject);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_h1_", ["Project"]);return smalltalk.send($rec, "_img_", [unescape("iae/images/project.jpg")]);})(html);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09h1%3A%20%27Project%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09img%3A%20%27iae/images/project.jpg%27%5D'),
messageSends: ["class:", "with:", "h1:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAEProject);



smalltalk.addClass('IAEJFrame', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("import%20javax.swing.*%3B%0A%0A%20%20%20%20public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20setSize%28200%2C%20200%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20MyFirstFrame%20f%20%3D%20new%20MyFirstFrame%28%29%3B%0A%20%20%20%20%20%20%20%20f.setVisible%28true%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%0A%27import%20javax.swing.*%3B%0A%0A%20%20%20%20public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20setSize%28200%2C%20200%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20MyFirstFrame%20f%20%3D%20new%20MyFirstFrame%28%29%3B%0A%20%20%20%20%20%20%20%20f.setVisible%28true%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJFrame);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return "A simple window";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27A%20simple%20window%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJFrame);



smalltalk.addClass('IAELearn', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23F55");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27%23F55%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAELearn);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", ["LEARN"]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%27LEARN%27.'),
messageSends: ["class:", "with:", "div"],
referencedClasses: []
}),
smalltalk.IAELearn);



smalltalk.addClass('IAEJLabel', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20setSize%28200%2C%20200%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20JLabel%20lblHello%20%3D%20new%20JLabel%28%22Hello%20world%20%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28lblHello%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20setSize%28200%2C%20200%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20JLabel%20lblHello%20%3D%20new%20JLabel%28%22Hello%20world%20%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28lblHello%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJLabel);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Add a label inside";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Add%20a%20label%20inside%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJLabel);



smalltalk.addClass('IAEContinuousIntegration', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%2821%2C%2042%2C%2014%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%2821%2C%2042%2C%2014%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEContinuousIntegration);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["blue center"]);return smalltalk.send($rec, "_with_", ["Continuous Integration"]);})(smalltalk.send(html, "_h1", []));return smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["Get source"]);smalltalk.send($rec, "_li_", ["Build"]);return smalltalk.send($rec, "_li_", ["Test"]);})(html);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09%09html%20h1%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09class%3A%20%27blue%20center%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09with%3A%20%27Continuous%20Integration%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09html%20ol%20with%3A%20%5B%09%09html%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09li%3A%20%27Get%20source%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09li%3A%20%27Build%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09li%3A%20%27Test%27%09%5D%20%09%09%09%09%09%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%5D'),
messageSends: ["class:", "with:", "h1", "ol", "li:", "div"],
referencedClasses: []
}),
smalltalk.IAEContinuousIntegration);



smalltalk.addClass('IAEJFramePack', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("%20public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20JLabel%20lblHello%20%3D%20new%20JLabel%28%22Hello%20world%20%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28lblHello%29%3B%0A%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27%20public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20JLabel%20lblHello%20%3D%20new%20JLabel%28%22Hello%20world%20%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28lblHello%29%3B%0A%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJFramePack);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("%20Resize%20container%20automatically%20with%20pack%28%29");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27%20Resize%20container%20automatically%20with%20pack%28%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJFramePack);



smalltalk.addClass('IAETracker', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Issue tracker"]);
smalltalk.send(html, "_img_", [unescape("iae/images/issues.png")]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%09%20h1%3A%20%27Issue%20tracker%27.%0A%0A%09html%20img%3A%20%27iae/images/issues.png%27.'),
messageSends: ["h1:", "img:"],
referencedClasses: []
}),
smalltalk.IAETracker);



smalltalk.addClass('IAEGridLayout', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20MySecondFrame%20extends%20JFrame%20%7B%0A%20%20%20%20public%20MySecondFrame%28%29%7B%0A%20%20%20%20%20%20initLayout%28%29%3B%0A%20%20%20%20%20%20initWidgets%28%29%3B%0A%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20private%20void%20initLayout%28%29%7B%0A%20%20%20%20%20%20//%203%20rows%2C%202%20colums%0A%20%20%20%20%20%20setLayout%28new%20GridLayout%283%2C2%29%29%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20private%20void%20initWidgets%28%29%7B%0A%20%20%20%20%20%20for%20%28int%20i%3D0%3B%20i%3C5%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20JButton%20btn%20%3D%20new%20JButton%28%22Button%20n%22%20+%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Integer.toString%28i%29%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28btn%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20MySecondFrame%20extends%20JFrame%20%7B%0A%20%20%20%20public%20MySecondFrame%28%29%7B%0A%20%20%20%20%20%20initLayout%28%29%3B%0A%20%20%20%20%20%20initWidgets%28%29%3B%0A%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20private%20void%20initLayout%28%29%7B%0A%20%20%20%20%20%20//%203%20rows%2C%202%20colums%0A%20%20%20%20%20%20setLayout%28new%20GridLayout%283%2C2%29%29%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20private%20void%20initWidgets%28%29%7B%0A%20%20%20%20%20%20for%20%28int%20i%3D0%3B%20i%3C5%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20JButton%20btn%20%3D%20new%20JButton%28%22Button%20n%22%20+%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Integer.toString%28i%29%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28btn%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEGridLayout);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Arrange widgets";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Arrange%20widgets%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEGridLayout);



smalltalk.addClass('IAEContinuousDelivery', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEContinuousDelivery);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/continuousDelivery.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%20html%20img%3A%20%27iae/images/continuousDelivery.jpg%27%20%5D.'),
messageSends: ["class:", "with:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAEContinuousDelivery);



smalltalk.addClass('IAEActionListener', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("import%20javax.swing.*%3B%0Aimport%20java.awt.event.*%3B%0A%0Apublic%20class%20MyThirdFrame%20extends%20JFrame%20%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20JButton%20sayHelloButton%3B%0A%20%20%20%20%20%20%0A%20%20public%20MyThirdFrame%28%29%7B%0A%20%20%20%20%20%20%20%20sayHelloButton%20%3D%20new%20JButton%28%22Hello%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28sayHelloButton%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20sayHelloButton.addActionListener%28this%29%3B%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20event%29%20%7B%0A%20%20%20%20%20%20%20%20System.out.println%28%22Hello%20%21%21%21%22%29%3B%0A%20%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%0A%27import%20javax.swing.*%3B%0Aimport%20java.awt.event.*%3B%0A%0Apublic%20class%20MyThirdFrame%20extends%20JFrame%20%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20JButton%20sayHelloButton%3B%0A%20%20%20%20%20%20%0A%20%20public%20MyThirdFrame%28%29%7B%0A%20%20%20%20%20%20%20%20sayHelloButton%20%3D%20new%20JButton%28%22Hello%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28sayHelloButton%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20sayHelloButton.addActionListener%28this%29%3B%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20event%29%20%7B%0A%20%20%20%20%20%20%20%20System.out.println%28%22Hello%20%21%21%21%22%29%3B%0A%20%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEActionListener);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Generic event handling";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Generic%20event%20handling%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEActionListener);



smalltalk.addClass('IAEScrum', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%28197%2C%20226%2C%20236%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%28197%2C%20226%2C%20236%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEScrum);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["SCRUM"]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27SCRUM%27.'),
messageSends: ["h1:"],
referencedClasses: []
}),
smalltalk.IAEScrum);



smalltalk.addClass('IAEActionListenerGetSource', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20MyThirdFrame%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20public%20MyThirdFrame%28%29%7B%0A%20%20%20%20setLayout%28new%20FlowLayout%28%29%29%3B%0A%20%20%20%20addButton%28%22Hello%20%21%22%29%3B%0A%20%20%20%20addButton%28%22Good%20Bye%20%21%22%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%20%20%20%20%20%20%0A%20%20public%20void%20addButton%28String%20label%29%20%7B%0A%20%20%20%20JButton%20buttonToAdd%20%3D%20new%20JButton%28label%29%3B%0A%20%20%20%20getContentPane%28%29.add%28buttonToAdd%29%3B%0A%20%20%20%20buttonToAdd.addActionListener%28this%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20event%29%20%7B%0A%20%20%20%20JButton%20clickedButton%20%3D%20%28JButton%29event.getSource%28%29%3B%0A%20%20%20%20System.out.println%28clickedButton.getText%28%29%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20MyThirdFrame%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20public%20MyThirdFrame%28%29%7B%0A%20%20%20%20setLayout%28new%20FlowLayout%28%29%29%3B%0A%20%20%20%20addButton%28%22Hello%20%21%22%29%3B%0A%20%20%20%20addButton%28%22Good%20Bye%20%21%22%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%20%20%20%20%20%20%0A%20%20public%20void%20addButton%28String%20label%29%20%7B%0A%20%20%20%20JButton%20buttonToAdd%20%3D%20new%20JButton%28label%29%3B%0A%20%20%20%20getContentPane%28%29.add%28buttonToAdd%29%3B%0A%20%20%20%20buttonToAdd.addActionListener%28this%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20event%29%20%7B%0A%20%20%20%20JButton%20clickedButton%20%3D%20%28JButton%29event.getSource%28%29%3B%0A%20%20%20%20System.out.println%28clickedButton.getText%28%29%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEActionListenerGetSource);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Get source of event";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Get%20source%20of%20event%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEActionListenerGetSource);



smalltalk.addClass('IAETDDIntroduction', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAETDDCycle || IAETDDCycle),(smalltalk.IAECalculatorTest || IAECalculatorTest),(smalltalk.IAECalculatorFirstImplementation || IAECalculatorFirstImplementation),(smalltalk.IAECalculatorSecondTest || IAECalculatorSecondTest),(smalltalk.IAECalculatorSecondImplementation || IAECalculatorSecondImplementation),(smalltalk.IAECalculatorRefactor || IAECalculatorRefactor),(smalltalk.IAECalculatorTestJUnit4 || IAECalculatorTestJUnit4),(smalltalk.IAESectionExercises || IAESectionExercises),(smalltalk.IAETDDLargestExercise || IAETDDLargestExercise),(smalltalk.IAETDDLargestExerciseFirstTest || IAETDDLargestExerciseFirstTest),(smalltalk.IAETDDLargestVideo || IAETDDLargestVideo),(smalltalk.IAETDDStackExercise || IAETDDStackExercise),(smalltalk.IAETDDStackFixtures || IAETDDStackFixtures),(smalltalk.IAETDDTestExceptionThrown || IAETDDTestExceptionThrown),(smalltalk.IAETDDTestExceptionNotThrown || IAETDDTestExceptionNotThrown),(smalltalk.IAETDDStackExerciseVideo || IAETDDStackExerciseVideo),(smalltalk.IAETDDBookAstels || IAETDDBookAstels),(smalltalk.IAETDDBookBeck || IAETDDBookBeck),(smalltalk.IAETDDBookThomas || IAETDDBookThomas)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0A%09IAEIntroSlide.%0A%09IAETDDCycle.%0A%09IAECalculatorTest.%0A%09IAECalculatorFirstImplementation.%0A%09IAECalculatorSecondTest.%0A%09IAECalculatorSecondImplementation.%0A%09IAECalculatorRefactor.%0A%09IAECalculatorTestJUnit4.%0A%09IAESectionExercises.%0A%09IAETDDLargestExercise.%0A%09IAETDDLargestExerciseFirstTest.%0A%09IAETDDLargestVideo.%0A%09IAETDDStackExercise.%0A%09IAETDDStackFixtures.%0A%09IAETDDTestExceptionThrown.%0A%09IAETDDTestExceptionNotThrown.%0A%09IAETDDStackExerciseVideo.%0A%09IAETDDBookAstels.%0A%09IAETDDBookBeck.%0A%09IAETDDBookThomas%0A%09%0A%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAETDDCycle", "IAECalculatorTest", "IAECalculatorFirstImplementation", "IAECalculatorSecondTest", "IAECalculatorSecondImplementation", "IAECalculatorRefactor", "IAECalculatorTestJUnit4", "IAESectionExercises", "IAETDDLargestExercise", "IAETDDLargestExerciseFirstTest", "IAETDDLargestVideo", "IAETDDStackExercise", "IAETDDStackFixtures", "IAETDDTestExceptionThrown", "IAETDDTestExceptionNotThrown", "IAETDDStackExerciseVideo", "IAETDDBookAstels", "IAETDDBookBeck", "IAETDDBookThomas"]
}),
smalltalk.IAETDDIntroduction);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Test%20Driven%20Development%20cycle%2C%20coding%20basis");
return self;},
args: [],
source: unescape('description%0A%09%5E%20%27IAE%20-%20M1%20MTI%20-%202011.%20Test%20Driven%20Development%20cycle%2C%20coding%20basis%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDIntroduction);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20TDD%20Introduction");
return self;},
args: [],
source: unescape('title%0A%09%5E%27IAE%20-%20TDD%20Introduction%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDIntroduction.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDIntroduction.klass);


smalltalk.addClass('IAEMouseListener', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20AnotherFrame%20implements%20MouseListener%20%7B%0A%20%20%20%20%20%20public%20AnotheFrame%28%29%7B%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%20%20aComponent.addMouseListener%28this%29%3B%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20public%20void%20mousePressed%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseReleased%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseEntered%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseExited%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseClicked%28MouseEvent%20e%29%20%7B...%7D%0A%20%20%20%20%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%0A%27public%20class%20AnotherFrame%20implements%20MouseListener%20%7B%0A%20%20%20%20%20%20public%20AnotheFrame%28%29%7B%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%20%20aComponent.addMouseListener%28this%29%3B%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20public%20void%20mousePressed%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseReleased%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseEntered%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseExited%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseClicked%28MouseEvent%20e%29%20%7B...%7D%0A%20%20%20%20%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMouseListener);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Handling mouse events";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Handling%20mouse%20events%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMouseListener);



smalltalk.addClass('IAECalculatorFirstImplementation', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide green3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorFirstImplementation);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20Calculator%20%20%7B%20%0A%20%20public%20int%20power%28int%20firstNumber%2C%20int%20secondNumber%29%20%7B%0A%09return%204%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%20%0A%27public%20class%20Calculator%20%20%7B%20%0A%20%20public%20int%20power%28int%20firstNumber%2C%20int%20secondNumber%29%20%7B%0A%09return%204%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorFirstImplementation);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Make it pass"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Make%20it%20pass%27.%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%20self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAECalculatorFirstImplementation);



smalltalk.addClass('IAEJTextField', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20FrameWithTextField%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20KeyListener%20%7B%0A%20%20%20%20%20%20JTextField%20nameInput%3B%20%0A%0A%20%20%20%20%20%20public%20FrameWithTextField%28%29%7B%0A%20%20%20%20%20%20%20%20nameInput%20%3D%20new%20JTextField%2820%29%3B%0A%20%20%20%20%20%20%20%20nameInput.addKeyListener%28this%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28nameInput%29%3B%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20@Override%0A%20%20%20%20%20%20public%20void%20keyPressed%28KeyEvent%20event%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28event.getKeyCode%28%29%20%3D%3D%20KeyEvent.VK_ENTER%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28nameInput.getText%28%29%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20FrameWithTextField%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20KeyListener%20%7B%0A%20%20%20%20%20%20JTextField%20nameInput%3B%20%0A%0A%20%20%20%20%20%20public%20FrameWithTextField%28%29%7B%0A%20%20%20%20%20%20%20%20nameInput%20%3D%20new%20JTextField%2820%29%3B%0A%20%20%20%20%20%20%20%20nameInput.addKeyListener%28this%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28nameInput%29%3B%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20@Override%0A%20%20%20%20%20%20public%20void%20keyPressed%28KeyEvent%20event%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28event.getKeyCode%28%29%20%3D%3D%20KeyEvent.VK_ENTER%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28nameInput.getText%28%29%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJTextField);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Keyboard events";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Keyboard%20events%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJTextField);



smalltalk.addClass('IAECalculatorSecondImplementation', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide green3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorSecondImplementation);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20Calculator%20%20%7B%20%0A%20%20public%20int%20power%28int%20firstNumber%2C%20int%20secondNumber%29%20%7B%0A%09return%20%28int%29%20Math.pow%28%09firstNumber%2C%20%0A%09%09%09%09secondNumber%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%20%0A%27public%20class%20Calculator%20%20%7B%20%0A%20%20public%20int%20power%28int%20firstNumber%2C%20int%20secondNumber%29%20%7B%0A%09return%20%28int%29%20Math.pow%28%09firstNumber%2C%20%0A%09%09%09%09secondNumber%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorSecondImplementation);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Make it pass"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Make%20it%20pass%27.%20%20%20%20%20%20%20%20%20%20%09%09%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%09self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAECalculatorSecondImplementation);



smalltalk.addClass('IAEJComboBox', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20FrameWithComboBox%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20JComboBox%20movieSelect%3B%20%20%20%20%20%20%20%0A%20%20public%20FrameWithComboBox%28%29%7B%0A%20%20%20%20movieSelect%20%3D%20new%20JComboBox%28%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Dr%20No%22%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Goldfinger%22%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Die%20another%20day%22%29%3B%0A%20%20%20%20movieSelect.addActionListener%28this%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20getContentPane%28%29.add%28movieSelect%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20e%29%20%7B%0A%20%20%20%20String%20selectedMovie%20%3D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28String%29movieSelect.getSelectedItem%28%29%3B%0A%20%20%20%20System.out.println%28selectedMovie%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20FrameWithComboBox%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20JComboBox%20movieSelect%3B%20%20%20%20%20%20%20%0A%20%20public%20FrameWithComboBox%28%29%7B%0A%20%20%20%20movieSelect%20%3D%20new%20JComboBox%28%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Dr%20No%22%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Goldfinger%22%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Die%20another%20day%22%29%3B%0A%20%20%20%20movieSelect.addActionListener%28this%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20getContentPane%28%29.add%28movieSelect%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20e%29%20%7B%0A%20%20%20%20String%20selectedMovie%20%3D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28String%29movieSelect.getSelectedItem%28%29%3B%0A%20%20%20%20System.out.println%28selectedMovie%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJComboBox);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "JComboBox";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27JComboBox%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJComboBox);



smalltalk.addClass('IAECalculatorTestJUnit4', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorTestJUnit4);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20TestCalculator%20%7B%0A%20%20protected%20Calculator%20calc%3B%0A%09%0A%20%20@Before%0A%20%20public%20void%20createCalculator%20%28%29%7B%0A%20%20%20%20this.calc%20%3D%20new%20Calculator%28%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20twoPowerTwoShouldReturnFour%28%29%20%7B%0A%20%20%20%20assertEquals%284%2C%20this.calc.power%282%2C2%29%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20threePowerFourShouldReturnEightyOne%28%29%20%7B%0A%20%20%20%20assertEquals%2881%2C%20this.calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%0A%27public%20class%20TestCalculator%20%7B%0A%20%20protected%20Calculator%20calc%3B%0A%09%0A%20%20@Before%0A%20%20public%20void%20createCalculator%20%28%29%7B%0A%20%20%20%20this.calc%20%3D%20new%20Calculator%28%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20twoPowerTwoShouldReturnFour%28%29%20%7B%0A%20%20%20%20assertEquals%284%2C%20this.calc.power%282%2C2%29%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20threePowerFourShouldReturnEightyOne%28%29%20%7B%0A%20%20%20%20assertEquals%2881%2C%20this.calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorTestJUnit4);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h2_", ["JUnit 4 annotations"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h2%3A%20%27JUnit%204%20annotations%27.%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%20%20self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["h2:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAECalculatorTestJUnit4);



smalltalk.addClass('IAEJList', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20Hero%20%7B%0A%20%20%20%20String%20name%3B%0A%20%20%20%20public%20Hero%28String%20name%29%20%7B%20this.name%20%3D%20name%3B%20%7D%0A%7D%0A%0Apublic%20class%20FrameWithList%20extends%20JFrame%20%7B%0A%20%20JList%20namesList%3B%0A%20%20DefaultListModel%20heroes%3B%0A%20%20%20%20%20%20%0A%20%20public%20FrameWithList%28%29%7B%0A%20%20%20%20heroes%20%3D%20new%20DefaultListModel%28%29%3B%0A%20%20%20%20heroes.addElement%28new%20Hero%28%22Spiderman%22%29%29%3B%0A%20%20%20%20heroes.addElement%28new%20Hero%28%22Batman%22%29%29%3B%0A%20%20%20%20%0A%20%20%20%20namesList%20%3D%20new%20JList%28heroes%29%3B%0A%20%20%20%20getContentPane%28%29.add%28namesList%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20Hero%20%7B%0A%20%20%20%20String%20name%3B%0A%20%20%20%20public%20Hero%28String%20name%29%20%7B%20this.name%20%3D%20name%3B%20%7D%0A%7D%0A%0Apublic%20class%20FrameWithList%20extends%20JFrame%20%7B%0A%20%20JList%20namesList%3B%0A%20%20DefaultListModel%20heroes%3B%0A%20%20%20%20%20%20%0A%20%20public%20FrameWithList%28%29%7B%0A%20%20%20%20heroes%20%3D%20new%20DefaultListModel%28%29%3B%0A%20%20%20%20heroes.addElement%28new%20Hero%28%22Spiderman%22%29%29%3B%0A%20%20%20%20heroes.addElement%28new%20Hero%28%22Batman%22%29%29%3B%0A%20%20%20%20%0A%20%20%20%20namesList%20%3D%20new%20JList%28heroes%29%3B%0A%20%20%20%20getContentPane%28%29.add%28namesList%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJList);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "JList with Objects";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27JList%20with%20Objects%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJList);



smalltalk.addClass('IAESectionExercises', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23ffdddd");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27%23ffdddd%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAESectionExercises);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center huge fancy"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["EXERCICES"]);})(smalltalk.send(html, "_h2", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%20huge%20fancy%27%3B%0A%09%09with%3A%20%5B%09html%20h2%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09class%3A%20%27red%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09with%3A%20%27EXERCICES%27%09%5D.'),
messageSends: ["class:", "with:", "h2", "div"],
referencedClasses: []
}),
smalltalk.IAESectionExercises);



smalltalk.addClass('IAEModelView', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("%20public%20class%20Hero%20%7B%0A%20%20%20%20%20%20String%20name%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20Hero%28String%20name%29%7B%0A%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20String%20toString%28%29%7B%0A%20%20%20%20%20%20%20%20return%20%22I%27m%22%20+%20this.name%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27%20public%20class%20Hero%20%7B%0A%20%20%20%20%20%20String%20name%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20Hero%28String%20name%29%7B%0A%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20String%20toString%28%29%7B%0A%20%20%20%20%20%20%20%20return%20%22I%27%27m%22%20+%20this.name%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEModelView);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Defining object string representation";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Defining%20object%20string%20representation%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEModelView);



smalltalk.addClass('IAETDDStackExercise', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("import%20java.util.ArrayList%3B%0A%0Apublic%20class%20Stack%20%7B%0A%20%20ArrayList%3CString%3E%20items%20%3D%20new%20ArrayList%3CString%20%3E%28%29%3B%0A%0A%20%20public%20boolean%20isEmpty%28%29%20%7B%20%0A%20%20%20%20return%20items.isEmpty%28%29%3B%0A%20%20%7D%0A%0A%20%20public%20String%20pop%28%29%20throws%20StackEmptyException%20%7B%0A%20%20%20%20if%20%28this.isEmpty%28%29%29%20%7B%0A%20%20%20%20%20%20throw%20new%20StackEmptyException%28%29%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20return%20items.remove%280%29%3B%20%0A%20%20%7D%0A%0A%20%20public%20void%20push%28%20String%20item%29%20%7B%20%0A%20%20%20%20items.add%28item%29%3B%0A%20%20%7D%0A%20%20%20%20%0A%20%20public%20String%20top%20%28%29%20throws%20StackEmptyException%20%7B%0A%20%20%20%20if%20%28this.isEmpty%28%29%29%20%7B%0A%20%20%20%20%20%20throw%20new%20StackEmptyException%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20items.get%280%29%3B%20%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27import%20java.util.ArrayList%3B%0A%0Apublic%20class%20Stack%20%7B%0A%20%20ArrayList%3CString%3E%20items%20%3D%20new%20ArrayList%3CString%20%3E%28%29%3B%0A%0A%20%20public%20boolean%20isEmpty%28%29%20%7B%20%0A%20%20%20%20return%20items.isEmpty%28%29%3B%0A%20%20%7D%0A%0A%20%20public%20String%20pop%28%29%20throws%20StackEmptyException%20%7B%0A%20%20%20%20if%20%28this.isEmpty%28%29%29%20%7B%0A%20%20%20%20%20%20throw%20new%20StackEmptyException%28%29%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20return%20items.remove%280%29%3B%20%0A%20%20%7D%0A%0A%20%20public%20void%20push%28%20String%20item%29%20%7B%20%0A%20%20%20%20items.add%28item%29%3B%0A%20%20%7D%0A%20%20%20%20%0A%20%20public%20String%20top%20%28%29%20throws%20StackEmptyException%20%7B%0A%20%20%20%20if%20%28this.isEmpty%28%29%29%20%7B%0A%20%20%20%20%20%20throw%20new%20StackEmptyException%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20items.get%280%29%3B%20%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDStackExercise);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide red3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20red3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDStackExercise);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("Stack%20exercise%3A%20fix%20it%20%21")]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Stack%20exercise%3A%20fix%20it%20%21%27.%0A%09html%20div%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%09self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAETDDStackExercise);



smalltalk.addClass('IAEAbstractImageSlide', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [smalltalk.send(unescape("iae/images/"), "__comma", [smalltalk.send(self, "_imageFile", [])])]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20img%3A%20%27iae/images/%27%2C%20self%20imageFile%5D'),
messageSends: ["class:", "with:", "img:", unescape("%2C"), "imageFile", "div"],
referencedClasses: []
}),
smalltalk.IAEAbstractImageSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide green3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAbstractImageSlide);



smalltalk.addClass('IAETDDLargestVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDLargestVideo);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["Largest number in a list exercise"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(450)]);smalltalk.send($rec, "_height_", [(250)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/29681165%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h3%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%27Largest%20number%20in%20a%20list%20exercise%27.%0A%09html%20iframe%20%0A%09%09width%3A450%3B%0A%09%09height%3A250%3B%0A%09%09src%3A%27http%3A//player.vimeo.com/video/29681165%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0%27'),
messageSends: ["class:", "with:", "h3", "width:", "height:", "src:", "iframe"],
referencedClasses: []
}),
smalltalk.IAETDDLargestVideo);



smalltalk.addClass('IAEJFrameSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/first_frame.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/first_frame.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJFrameSnapshot);



smalltalk.addClass('IAETDDTestExceptionThrown', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDTestExceptionThrown);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20EmptyStackTest%20%7B%0A%0A%20%20@Test%28expected%3DStackEmptyException.class%29%0A%20%20public%20void%20popShouldThrowStackEmptyException%28%29%20%0A%09%09%09throws%20StackEmptyException%20%7B%0A%0A%20%20%20%20Stack%20stack%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20stack.pop%28%29%3B%0A%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%0A%27public%20class%20EmptyStackTest%20%7B%0A%0A%20%20@Test%28expected%3DStackEmptyException.class%29%0A%20%20public%20void%20popShouldThrowStackEmptyException%28%29%20%0A%09%09%09throws%20StackEmptyException%20%7B%0A%0A%20%20%20%20Stack%20stack%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20stack.pop%28%29%3B%0A%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDTestExceptionThrown);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Test exception is thrown"]);return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%09html%20h1%3A%20%27Test%20exception%20is%20thrown%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%09%5D'),
messageSends: ["class:", "with:", "h1:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAETDDTestExceptionThrown);



smalltalk.addClass('IAEJLabelSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/frame_label.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/frame_label.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJLabelSnapshot);



smalltalk.addClass('IAETDDBookAstels', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDBookAstels);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("TDD%3A%20A%20practical%20guide%20-%20Dave%20Astels")]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/astels_tdd_book.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27TDD%3A%20A%20practical%20guide%20-%20Dave%20Astels%27.%0A%09html%20div%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%20html%20img%3A%20%27iae/images/astels_tdd_book.jpg%27%20%5D'),
messageSends: ["h1:", "class:", "with:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAETDDBookAstels);



smalltalk.addClass('IAEJFramePackSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/frame_pack.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/frame_pack.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJFramePackSnapshot);



smalltalk.addClass('IAEParcours', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23dfd");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27%23dfd%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEParcours);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("iae/images/parcours.png")]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20img%20src%3A%20%27iae/images/parcours.png%27'),
messageSends: ["src:", "img"],
referencedClasses: []
}),
smalltalk.IAEParcours);



smalltalk.addClass('IAEGridLayoutSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/grid_layout_3_2.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/grid_layout_3_2.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEGridLayoutSnapshot);



smalltalk.addClass('IAEProgramming', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23333");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27%23333%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEProgramming);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", ["Programming"]);})(smalltalk.send(html, "_h1", []));
smalltalk.send(html, "_img_", [unescape("iae/images/human_evolution.jpg")]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20%0A%09%09h1%20%0A%09%09%09class%3A%20%27center%20big%27%3B%0A%09%09%09with%3A%20%27Programming%27.%0A%09html%20img%3A%20%27iae/images/human_evolution.jpg%27'),
messageSends: ["class:", "with:", "h1", "img:"],
referencedClasses: []
}),
smalltalk.IAEProgramming);



smalltalk.addClass('IAEFlowLayoutSnapshot', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Flow layout"]);return (function($rec){smalltalk.send($rec, "_p_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/swing/flow_layout1.png")]);})]);return smalltalk.send($rec, "_p_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/swing/flow_layout2.png")]);})]);})(html);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09%0A%09%09%09%09html%20h1%3A%20%27Flow%20layout%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09html%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09p%3A%20%5B%20%20html%20img%3A%20%27iae/images/swing/flow_layout1.png%27%20%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09p%3A%20%5B%20%20html%20img%3A%20%27iae/images/swing/flow_layout2.png%27%5D%20%5D'),
messageSends: ["class:", "with:", "h1:", "p:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAEFlowLayoutSnapshot);



smalltalk.addClass('IAEGitHub', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.github.com")]);return smalltalk.send($rec, "_with_", ["github"]);})(smalltalk.send(html, "_a", []));
smalltalk.send(html, "_img_", [unescape("iae/images/github_network.png")]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%20%20%20%20%20%20%20%20%20%20html%20a%20%0A%20%20%20%20%20%20%20%20%20%20%09href%3A%20%27http%3A//www.github.com%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%09with%3A%20%27github%27%20.%0A%20%20%20%20%20%20%20%20%20%20%0A%09%20html%20img%3A%20%27iae/images/github_network.png%27.'),
messageSends: ["href:", "with:", "a", "img:"],
referencedClasses: []
}),
smalltalk.IAEGitHub);



smalltalk.addClass('IAETextFieldSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/text_field.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/text_field.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETextFieldSnapshot);



smalltalk.addClass('IAEPractices', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["big"]);return smalltalk.send($rec, "_with_", ["Practices"]);})(smalltalk.send(html, "_h1", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20%0A%09%09class%3A%20%27big%27%3B%0A%09%09with%3A%20%27Practices%27.'),
messageSends: ["class:", "with:", "h1"],
referencedClasses: []
}),
smalltalk.IAEPractices);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("background%3A%20rgb%28170%2C170%2C180%29%20url%28iae/images/martialart.jpg%29%20no-repeat%20center%20center%3B%20box-shadow%3A%20none");
return self;},
args: [],
source: unescape('style%0A%09%5E%20%27background%3A%20rgb%28170%2C170%2C180%29%20url%28iae/images/martialart.jpg%29%20no-repeat%20center%20center%3B%20box-shadow%3A%20none%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPractices);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("rgb%28170%2C170%2C180%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%28170%2C170%2C180%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPractices);



smalltalk.addClass('IAEComboBoxSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/combo_box.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/combo_box.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEComboBoxSnapshot);



smalltalk.addClass('IAEExtremeProgramming', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEExtremeProgramming);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["eXtreme Programming"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(560)]);smalltalk.send($rec, "_height_", [(315)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//www.youtube.com/embed/Ytu1Hxzr_Bs")]);})(smalltalk.send(html, "_iframe", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h3%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%27eXtreme%20Programming%27.%0A%09html%20iframe%20%0A%09%09width%3A560%3B%0A%09%09height%3A315%3B%0A%09%09src%3A%27http%3A//www.youtube.com/embed/Ytu1Hxzr_Bs%27'),
messageSends: ["class:", "with:", "h3", "width:", "height:", "src:", "iframe"],
referencedClasses: []
}),
smalltalk.IAEExtremeProgramming);



smalltalk.addClass('IAEJListSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/jlist1.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/jlist1.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJListSnapshot);



smalltalk.addClass('IAETDDCycle', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%283%2C%20146%2C%20187%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%283%2C%20146%2C%20187%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDCycle);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/tdd_cycle.gif")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09img%3A%20%27iae/images/tdd_cycle.gif%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["class:", "with:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAETDDCycle);



smalltalk.addClass('IAEJListModelSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/jlist2.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/jlist2.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEJListModelSnapshot);



smalltalk.addClass('IAECalculatorTest', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%20%20assertEquals%284%2C%20calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%20%0A%27import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%20%20assertEquals%284%2C%20calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorTest);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide red3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20red3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorTest);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Write a test"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Write%20a%20test%27.%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%09%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAECalculatorTest);



smalltalk.addClass('IAEFrameTPSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("swing/tp_gui.png");
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27swing/tp_gui.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEFrameTPSnapshot);



smalltalk.addClass('IAECalculatorRefactor', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorRefactor);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20protected%20Calculator%20calc%3B%0A%0A%20%20public%20void%20setUp%28%29%20%7B%0A%20%20%20%20this.calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%7D%0A%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20assertEquals%284%2C%20this.calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20void%20testThreePowerFourEqualsEightyOne%28%29%20%7B%20%0A%20%20%20%20assertEquals%2881%2C%20this.calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%20%0A%27import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20protected%20Calculator%20calc%3B%0A%0A%20%20public%20void%20setUp%28%29%20%7B%0A%20%20%20%20this.calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%7D%0A%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20assertEquals%284%2C%20this.calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20void%20testThreePowerFourEqualsEightyOne%28%29%20%7B%20%0A%20%20%20%20assertEquals%2881%2C%20this.calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorRefactor);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Refactor"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Refactor%27.%0A%20%20%20%20%20%20%20%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%09self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAECalculatorRefactor);



smalltalk.addClass('IAEJavaSwingResources', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Resources"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//download.oracle.com/javase/tutorial/uiswing/")]);return smalltalk.send($rec, "_with_", [unescape("Trail%3A%20Creating%20a%20GUI%20With%20JFC/Swing")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.uispec4j.org/")]);return smalltalk.send($rec, "_with_", ["Testing GUI with UISpec4J"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp2/ToDoList.zip")]);return smalltalk.send($rec, "_with_", ["Download correction on Swing Exercise"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp2/ToDoList_Correction.zip")]);return smalltalk.send($rec, "_with_", ["Download correction on UISpec Exercise"]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Resources%27.%0A%09html%20%20ul%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//download.oracle.com/javase/tutorial/uiswing/%27%3B%0A%09%09%09with%3A%20%27Trail%3A%20Creating%20a%20GUI%20With%20JFC/Swing%27%5D.%0A%0A%09%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//www.uispec4j.org/%27%3B%0A%09%09%09with%3A%20%27Testing%20GUI%20with%20UISpec4J%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20html%20li%3A%20%5B%09html%20a%0A%09%09%09href%3A%20%27http%3A//lolgzs.free.fr/iae-course/iae/tp2/ToDoList.zip%27%3B%0A%09%09%09with%3A%20%27Download%20correction%20on%20Swing%20Exercise%27%5D.%0A%0A%09html%20li%3A%20%5B%09html%20a%0A%09%09%09href%3A%20%27http%3A//lolgzs.free.fr/iae-course/iae/tp2/ToDoList_Correction.zip%27%3B%0A%09%09%09with%3A%20%27Download%20correction%20on%20UISpec%20Exercise%27%5D.%0A%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["h1:", "ul:", "li:", "href:", "with:", "a"],
referencedClasses: []
}),
smalltalk.IAEJavaSwingResources);



smalltalk.addClass('IAETDDLargestExerciseFirstTest', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20TestLargest%20%20%7B%20%0A%20%20@Test%0A%20%20public%20void%20testOrder%20%28%29%20%7B%0A%20%20%20%20assertEquals%289%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Largest.largest%28new%20int%5B%5D%20%7B8%2C9%2C7%7D%29%29%3B%20%0A%20%20%7D%0A%uFFFC%uFFFC%uFFFC%uFFFC%uFFFC%uFFFC%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20TestLargest%20%20%7B%20%0A%20%20@Test%0A%20%20public%20void%20testOrder%20%28%29%20%7B%0A%20%20%20%20assertEquals%289%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Largest.largest%28new%20int%5B%5D%20%7B8%2C9%2C7%7D%29%29%3B%20%0A%20%20%7D%0A%uFFFC%uFFFC%uFFFC%uFFFC%uFFFC%uFFFC%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDLargestExerciseFirstTest);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide red3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20red3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDLargestExerciseFirstTest);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["First test"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27First%20test%27.%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%09self%20renderJava%3A%20self%20snippet%20on%3A%20html%09%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAETDDLargestExerciseFirstTest);



smalltalk.addClass('IAEUISpec', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Test with UISpec";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Test%20with%20UISpec%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEUISpec);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("public%20class%20EmptyToDoEditor%20%7B%0A%20%20protected%20ToDoEditor%20editor%3B%0A%20%20protected%20Window%20editorSpec%3B%0A%0A%20%20@Before%0A%20%20public%20void%20setUpEditor%28%29%20%7B%0A%20%20%20%20this.editor%20%3D%20new%20ToDoEditor%28%29%3B%0A%20%20%20%20this.editorSpec%20%3D%20new%20Window%28this.editor%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20listBoxShouldBeEmpty%28%29%20%7B%0A%20%20%20%20assertThat%28this.editorSpec.getListBox%28%29.isEmpty%28%29%29%3B%0A%20%20%7D%0A");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20EmptyToDoEditor%20%7B%0A%20%20protected%20ToDoEditor%20editor%3B%0A%20%20protected%20Window%20editorSpec%3B%0A%0A%20%20@Before%0A%20%20public%20void%20setUpEditor%28%29%20%7B%0A%20%20%20%20this.editor%20%3D%20new%20ToDoEditor%28%29%3B%0A%20%20%20%20this.editorSpec%20%3D%20new%20Window%28this.editor%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20listBoxShouldBeEmpty%28%29%20%7B%0A%20%20%20%20assertThat%28this.editorSpec.getListBox%28%29.isEmpty%28%29%29%3B%0A%20%20%7D%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEUISpec);



smalltalk.addClass('IAETDDStackFixtures', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("One%20class%20per%20context%20/%20fixture")]);
(function($rec){smalltalk.send($rec, "_class_", [""]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_ul_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["EmptyStackTest"]);smalltalk.send($rec, "_li_", ["StackWithStringMilesTest"]);return smalltalk.send($rec, "_li_", ["StackWithStringsMilesMarcusHerbieTest"]);})(html);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27One%20class%20per%20context%20/%20fixture%27.%0A%09html%20div%0A%09%09class%3A%20%27%27%3B%0A%09%09with%3A%20%5B%09html%20ul%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09%09%09html%20%0A%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27EmptyStackTest%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27StackWithStringMilesTest%27%3B%0A%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27StackWithStringsMilesMarcusHerbieTest%27%09%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["h1:", "class:", "with:", "ul:", "li:", "div"],
referencedClasses: []
}),
smalltalk.IAETDDStackFixtures);



smalltalk.addClass('IAEUISpecVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["TDD with UISpec"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(400)]);smalltalk.send($rec, "_height_", [(300)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/30958504%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h3%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%27TDD%20with%20UISpec%27.%0A%09html%20iframe%20%0A%09%09width%3A400%3B%0A%09%09height%3A300%3B%0A%09%09src%3A%27http%3A//player.vimeo.com/video/30958504%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0%27'),
messageSends: ["class:", "with:", "h3", "width:", "height:", "src:", "iframe"],
referencedClasses: []
}),
smalltalk.IAEUISpecVideo);



smalltalk.addClass('IAESoftwareDevPresentation', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Software%20development%20tools%20and%20practices%20overview");
return self;},
args: [],
source: unescape('description%0A%09%5E%27IAE%20-%20M1%20MTI%20-%202011.%20Software%20development%20tools%20and%20practices%20overview%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAESoftwareDevPresentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEParcours || IAEParcours),(smalltalk.IAEPharocasts || IAEPharocasts),(smalltalk.IAEAmber || IAEAmber),(smalltalk.IAECara74 || IAECara74),(smalltalk.IAECourseContent || IAECourseContent),(smalltalk.IAEAgileGrenoble || IAEAgileGrenoble),(smalltalk.IAEWhatIsSoftwareDevelopment || IAEWhatIsSoftwareDevelopment),(smalltalk.IAEProject || IAEProject),(smalltalk.IAEProgramming || IAEProgramming),(smalltalk.IAETeamWork || IAETeamWork),(smalltalk.IAETools || IAETools),(smalltalk.IAEToolMisused || IAEToolMisused),(smalltalk.IAEPractices || IAEPractices),(smalltalk.IAETracker || IAETracker),(smalltalk.IAEVCS || IAEVCS),(smalltalk.IAEGitHub || IAEGitHub),(smalltalk.IAETDDCycle || IAETDDCycle),(smalltalk.IAEContinuousIntegration || IAEContinuousIntegration),(smalltalk.IAEContinuousDelivery || IAEContinuousDelivery),(smalltalk.IAEExtremeProgramming || IAEExtremeProgramming),(smalltalk.IAEScrum || IAEScrum),(smalltalk.IAESummary || IAESummary),(smalltalk.IAELearn || IAELearn)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0A%09IAEIntroSlide.%20%0A%09IAEParcours.%0A%09IAEPharocasts.%0A%09IAEAmber.%0A%09IAECara74.%0A%09IAECourseContent.%0A%09IAEAgileGrenoble.%0A%09IAEWhatIsSoftwareDevelopment.%0A%09IAEProject.%0A%09IAEProgramming.%0A%09IAETeamWork.%0A%09IAETools.%0A%09IAEToolMisused.%0A%09IAEPractices.%0A%09IAETracker.%0A%09IAEVCS.%0A%09IAEGitHub.%0A%09IAETDDCycle.%0A%09IAEContinuousIntegration.%0A%09IAEContinuousDelivery.%0A%09IAEExtremeProgramming.%0A%09IAEScrum.%0A%09IAESummary.%0A%09IAELearn%0A%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAEParcours", "IAEPharocasts", "IAEAmber", "IAECara74", "IAECourseContent", "IAEAgileGrenoble", "IAEWhatIsSoftwareDevelopment", "IAEProject", "IAEProgramming", "IAETeamWork", "IAETools", "IAEToolMisused", "IAEPractices", "IAETracker", "IAEVCS", "IAEGitHub", "IAETDDCycle", "IAEContinuousIntegration", "IAEContinuousDelivery", "IAEExtremeProgramming", "IAEScrum", "IAESummary", "IAELearn"]
}),
smalltalk.IAESoftwareDevPresentation);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20Software%20Development");
return self;},
args: [],
source: unescape('title%0A%09%5E%27IAE%20-%20Software%20Development%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAESoftwareDevPresentation.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAESoftwareDevPresentation.klass);


smalltalk.addClass('IAEMocks', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20How%20to%20isolate%20tested%20objects%20with%20Mocks");
return self;},
args: [],
source: unescape('description%0A%09%5E%20%27IAE%20-%20M1%20MTI%20-%202011.%20How%20to%20isolate%20tested%20objects%20with%20Mocks%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMocks);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'not yet classified',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAETestDependencies || IAETestDependencies),(smalltalk.IAEMockMovieEditor || IAEMockMovieEditor),(smalltalk.IAEEasyMockVideo || IAEEasyMockVideo),(smalltalk.IAEMockResources || IAEMockResources),(smalltalk.IAESectionExercises || IAESectionExercises),(smalltalk.IAEMovieApplication || IAEMovieApplication),(smalltalk.IAEMovieApplicationMVC || IAEMovieApplicationMVC)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0A%09IAEIntroSlide.%0A%09IAETestDependencies.%0A%09IAEMockMovieEditor.%0A%09IAEEasyMockVideo.%0A%09IAEMockResources.%0A%09IAESectionExercises.%0A%09IAEMovieApplication.%0A%09IAEMovieApplicationMVC%0A%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAETestDependencies", "IAEMockMovieEditor", "IAEEasyMockVideo", "IAEMockResources", "IAESectionExercises", "IAEMovieApplication", "IAEMovieApplicationMVC"]
}),
smalltalk.IAEMocks);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMocks.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("IAE%20-%20Mocks");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27IAE%20-%20Mocks%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMocks.klass);


smalltalk.addClass('IAEAgileGrenoble', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//agile-grenoble.org/")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/ag2011.png")]);})]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", ["jeudi 24 novembre"]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20a%20%0A%09%09%09%09%09href%3A%20%20%27http%3A//agile-grenoble.org/%27%3B%20%0A%09%09%09%09%09with%3A%A0%5Bhtml%20img%3A%20%27iae/images/ag2011.png%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20html%20div%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3A%20%27right%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27jeudi%2024%20novembre%27%5D'),
messageSends: ["class:", "with:", "href:", "img:", "a", "div"],
referencedClasses: []
}),
smalltalk.IAEAgileGrenoble);



smalltalk.addClass('IAETestDependencies', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return "Isolate objects";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Isolate%20objects%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETestDependencies);

smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'accessing',
fn: function (){
var self=this;
return "test_dependencies.png";
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27test_dependencies.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETestDependencies);



smalltalk.addClass('IAEToolMisused', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center section"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/blame_tool.png")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27center%20section%27%3B%0A%09%09with%3A%20%5Bhtml%20img%3A%20%27iae/images/blame_tool.png%27%5D'),
messageSends: ["class:", "with:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAEToolMisused);



smalltalk.addClass('IAEMockMovieEditor', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return "Mock MovieEditor object";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Mock%20MovieEditor%20object%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMockMovieEditor);

smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'accessing',
fn: function (){
var self=this;
return "mock_movies.png";
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20%27mock_movies.png%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMockMovieEditor);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMockMovieEditor);



smalltalk.addClass('IAESummary', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Summary"]);})(smalltalk.send(html, "_h1", []));
(function($rec){smalltalk.send($rec, "_class_", ["center big red"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("left-column%20nobullet")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["Tracker"]);smalltalk.send($rec, "_li_", ["VCS"]);smalltalk.send($rec, "_li_", ["Manager"]);return smalltalk.send($rec, "_li_", ["TDD"]);})(html);})]);})(smalltalk.send(html, "_ul", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("right-column%20nobullet")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["XP"]);smalltalk.send($rec, "_li_", ["CI"]);smalltalk.send($rec, "_li_", ["CD"]);return smalltalk.send($rec, "_li_", ["Scrum"]);})(html);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%20%20%20%20%20%20%20%20html%20h1%0A%09%09class%3A%20%27blue%27%3B%0A%09%09with%3A%20%27Summary%27.%0A%09html%20div%0A%09%09class%3A%20%27center%20big%20red%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20ul%0A%09%09%09%09class%3A%20%27left-column%20nobullet%27%3B%0A%09%09%09%09with%3A%20%5B%09html%20%0A%20%20%20%20%20%20%20%20%09%20%20%20%20%20%20%20%20%09%20%20%20%20%20%20%09%09%09li%3A%20%27Tracker%27%3B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09li%3A%20%27VCS%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%20%20%20%20%20%20%09%09%09%09li%3A%20%27Manager%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27TDD%27%09%5D.%0A%09%09%09html%20ul%0A%09%09%09%09class%3A%20%27right-column%20nobullet%27%3B%0A%09%09%09%09with%3A%20%5B%09html%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09li%3A%20%27XP%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27CI%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27CD%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09li%3A%20%27Scrum%27%09%5D%20%5D.'),
messageSends: ["class:", "with:", "h1", "li:", "ul", "div"],
referencedClasses: []
}),
smalltalk.IAESummary);



smalltalk.addClass('IAEEasyMockVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["EasyMock"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(400)]);smalltalk.send($rec, "_height_", [(300)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/31692069%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h3%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%27EasyMock%27.%0A%09html%20iframe%20%0A%09%09width%3A400%3B%0A%09%09height%3A300%3B%0A%09%09src%3A%27http%3A//player.vimeo.com/video/31692069%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0%27'),
messageSends: ["class:", "with:", "h3", "width:", "height:", "src:", "iframe"],
referencedClasses: []
}),
smalltalk.IAEEasyMockVideo);



smalltalk.addClass('IAETDDLargestExercise', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20Largest%20%7B%0A%20%20public%20static%20int%20largest%28int%20%5B%5D%20list%20%29%20%7B%0A%20%20%20%20int%20index%2C%20max%20%3D%20Integer.MAX_VALUE%3B%0A%0A%20%20%20%20for%20%28index%20%3D%200%3B%20index%20%3C%20list.length%u22121%3B%20index++%29%20%7B%0A%20%20%20%20%20%20if%20%28list%5Bindex%5D%3Emax%29%20%7B%0A%20%20%20%20%20%20%20%20max%3D%20list%5Bindex%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20max%3B%20%0A%20%20%20%20%7D%0A%20%20%7D%20%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%0A%27public%20class%20Largest%20%7B%0A%20%20public%20static%20int%20largest%28int%20%5B%5D%20list%20%29%20%7B%0A%20%20%20%20int%20index%2C%20max%20%3D%20Integer.MAX_VALUE%3B%0A%0A%20%20%20%20for%20%28index%20%3D%200%3B%20index%20%3C%20list.length%u22121%3B%20index++%29%20%7B%0A%20%20%20%20%20%20if%20%28list%5Bindex%5D%3Emax%29%20%7B%0A%20%20%20%20%20%20%20%20max%3D%20list%5Bindex%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20max%3B%20%0A%20%20%20%20%7D%0A%20%20%7D%20%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDLargestExercise);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDLargestExercise);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Largest number in a list"]);smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);return (function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("fix%20it%20%21")]);})(smalltalk.send(html, "_h1", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%09html%20h1%3A%20%27Largest%20number%20in%20a%20list%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20renderJava%3A%20self%20snippet%20on%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09html%20h1%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09class%3A%20%27red%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09with%3A%20%27fix%20it%20%21%27%5D.'),
messageSends: ["class:", "with:", "h1:", "renderJava:on:", "snippet", "h1", "div"],
referencedClasses: []
}),
smalltalk.IAETDDLargestExercise);



smalltalk.addClass('IAEMockResources', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Resources"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.easymock.org/")]);return smalltalk.send($rec, "_with_", ["EasyMock"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//code.google.com/p/mockito/")]);return smalltalk.send($rec, "_with_", ["Mockito"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//code.google.com/p/powermock/")]);return smalltalk.send($rec, "_with_", ["PowerMock"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp3/ToDoListEasyMock.zip")]);return smalltalk.send($rec, "_with_", [unescape("Download%20correction%20on%20MVC%20+%20EasyMock%20Exercise")]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Resources%27.%0A%09html%20%20ul%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//www.easymock.org/%27%3B%0A%09%09%09with%3A%20%27EasyMock%27%5D.%0A%0A%09%20%20html%20li%3A%20%5Bhtml%20a%0A%09%09%09href%3A%20%27http%3A//code.google.com/p/mockito/%27%3B%0A%09%09%09with%3A%20%27Mockito%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20html%20li%3A%20%5B%09html%20a%0A%09%09%09href%3A%20%27http%3A//code.google.com/p/powermock/%27%3B%0A%09%09%09with%3A%20%27PowerMock%27%5D.%0A%0A%09html%20li%3A%20%5B%09html%20a%0A%09%09%09href%3A%20%27http%3A//lolgzs.free.fr/iae-course/iae/tp3/ToDoListEasyMock.zip%27%3B%0A%09%09%09with%3A%20%27Download%20correction%20on%20MVC%20+%20EasyMock%20Exercise%27%5D.%0A%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["h1:", "ul:", "li:", "href:", "with:", "a"],
referencedClasses: []
}),
smalltalk.IAEMockResources);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide blue3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMockResources);



smalltalk.addClass('IAETDDTestExceptionNotThrown', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("public%20class%20StackWithStringMilesTest%20%7B%0A%20%20protected%20Stack%20stack%3B%0A%0A%20%20@Before%0A%20%20public%20void%20setupStack%28%29%20%7B%0A%20%20%20%20this.stack%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20this.stack.push%28%22Miles%22%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20popShouldNotThrowStackEmptyException%28%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throws%20StackEmptyException%20%7B%0A%20%20%20%20this.stack.pop%28%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%5E%0A%27public%20class%20StackWithStringMilesTest%20%7B%0A%20%20protected%20Stack%20stack%3B%0A%0A%20%20@Before%0A%20%20public%20void%20setupStack%28%29%20%7B%0A%20%20%20%20this.stack%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20this.stack.push%28%22Miles%22%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20popShouldNotThrowStackEmptyException%28%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throws%20StackEmptyException%20%7B%0A%20%20%20%20this.stack.pop%28%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETDDTestExceptionNotThrown);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [(function(){smalltalk.send(html, "_span_", ["Test exception is"]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [" NOT "]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", ["thrown"]);})]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%5B%20%20%09html%20span%3A%20%27Test%20exception%20is%27.%20%0A%20%20%20%20%09%09%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%20NOT%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09%09html%20span%3A%20%27thrown%27.%09%09%09%09%5D.%0A%09html%20div%20%0A%09%09class%3A%20%27center%27%3B%0A%09%09with%3A%20%5B%20self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%09%5D'),
messageSends: ["h1:", "span:", "class:", "with:", "span", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAETDDTestExceptionNotThrown);



smalltalk.addClass('IAETools', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%28150%2C%2060%2C%2060%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%28150%2C%2060%2C%2060%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETools);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAETools);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_img_", [unescape("iae/images/tools.jpg")]);return smalltalk.send(html, "_h1_", ["TOOLS"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20img%3A%20%27iae/images/tools.jpg%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09html%20h1%3A%20%27TOOLS%27%09%09%09%09%5D'),
messageSends: ["class:", "with:", "img:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.IAETools);



smalltalk.addClass('IAEAgileIntro', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return "Agile practices introduction";
return self;},
args: [],
source: unescape('description%0A%09%5E%20%27Agile%20practices%20introduction%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAgileIntro);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEAgileResources || IAEAgileResources)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7BIAEIntroSlide.%20IAEAgileResources%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAEAgileResources"]
}),
smalltalk.IAEAgileIntro);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'not yet classified',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAgileIntro.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("IAE%20-%20Agile%20practices");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27IAE%20-%20Agile%20practices%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAgileIntro.klass);


smalltalk.addClass('IAECustomImageSlide', smalltalk.IAEAbstractImageSlide, ['imageFile', 'title'], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile_'),
smalltalk.method({
selector: unescape('imageFile%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
self['@imageFile']=aString;
return self;},
args: ["aString"],
source: unescape('imageFile%3A%20aString%0A%09imageFile%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@imageFile'];
return self;},
args: [],
source: unescape('imageFile%0A%09%5E%20imageFile'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@title'];
return self;},
args: [],
source: unescape('title%0A%09%5E%20title'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_title_'),
smalltalk.method({
selector: unescape('title%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
self['@title']=aString;
return self;},
args: ["aString"],
source: unescape('title%3A%20aString%0A%09title%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@title'];
return self;},
args: [],
source: unescape('id%0A%09%5E%20title'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", ["height: 500px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(unescape("iae/images/"), "__comma", [smalltalk.send(self, "_imageFile", [])])]);})(smalltalk.send(html, "_img", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20img%0A%09%09%09%09%09style%3A%20%27height%3A%20500px%27%3B%0A%09%09%09%09%09src%3A%20%27iae/images/%27%2C%20self%20imageFile%5D'),
messageSends: ["class:", "with:", "style:", "src:", unescape("%2C"), "imageFile", "img", "div"],
referencedClasses: []
}),
smalltalk.IAECustomImageSlide);



smalltalk.addClass('IAEPomodoro', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Pomodoro%20technique");
return self;},
args: [],
source: unescape('description%0A%09%5E%27IAE%20-%20M1%20MTI%20-%202011.%20Pomodoro%20technique%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPomodoro);

smalltalk.addMethod(
unescape('_initSlides'),
smalltalk.method({
selector: unescape('initSlides'),
category: 'not yet classified',
fn: function (){
var self=this;
self['@slides']=smalltalk.send(["title", "interruptions", "25mn", "break", "4_pomodoro_break", "unbreakable_pomodoro", "brain", "inventory", "daily_activities", "keep_small_tasks", "daily_activities_done", "inventory_done", "urgent", "manage_interruptions", "new_inventory", "symbols", "report", "retrospective"], "_collect_", [(function(name){return (function($rec){smalltalk.send($rec, "_title_", [name]);return smalltalk.send($rec, "_imageFile_", [smalltalk.send(smalltalk.send(unescape("pomodoro/pt_"), "__comma", [name]), "__comma", [".JPG"])]);})(smalltalk.send((smalltalk.IAECustomImageSlide || IAECustomImageSlide), "_on_", [self]));})]);
smalltalk.send(self['@slides'], "_addAll_", [smalltalk.send(["pomodoro_technique", "pomodoro_illustrated", "pragmatic_thinking", unescape("your-brain-at-work")], "_collect_", [(function(name){return (function($rec){smalltalk.send($rec, "_title_", [name]);return smalltalk.send($rec, "_imageFile_", [smalltalk.send(smalltalk.send(unescape("pomodoro/"), "__comma", [name]), "__comma", [".jpg"])]);})(smalltalk.send((smalltalk.IAECustomImageSlide || IAECustomImageSlide), "_on_", [self]));})])]);
return self;},
args: [],
source: unescape('initSlides%0A%20slides%20%3A%3D%20%0A%20%23%28%20%20%20%27title%27%0A%20%20%20%20%20%20%20%20%27interruptions%27%0A%20%20%20%20%20%20%20%20%2725mn%27%0A%20%20%20%20%20%20%20%20%27break%27%0A%20%20%20%20%20%20%20%20%274_pomodoro_break%27%0A%20%20%20%20%20%20%20%20%27unbreakable_pomodoro%27%0A%20%20%20%20%20%20%20%20%27brain%27%0A%20%20%20%20%20%20%20%20%27inventory%27%0A%20%20%20%20%20%20%20%20%27daily_activities%27%0A%20%20%20%20%20%20%20%20%27keep_small_tasks%27%0A%20%20%20%20%20%20%20%20%27daily_activities_done%27%0A%20%20%20%20%20%20%20%20%27inventory_done%27%0A%20%20%20%20%20%20%20%20%27urgent%27%0A%20%20%20%20%20%20%20%20%27manage_interruptions%27%0A%20%20%20%20%20%20%20%20%27new_inventory%27%0A%20%20%20%20%20%20%20%20%27symbols%27%0A%20%20%20%20%20%20%20%20%27report%27%0A%20%20%20%20%20%20%20%20%27retrospective%27%29%20collect%3A%20%5B%3Aname%7C%0A%09%09%28IAECustomImageSlide%20on%3A%20self%29%20%0A%09%09%09title%3A%20name%3B%0A%09%09%09imageFile%3A%20%27pomodoro/pt_%27%2C%20name%2C%20%27.JPG%27%5D.%0A%0A%20%20slides%20addAll%3A%20%20%28%23%28%20%20%27pomodoro_technique%27%0A%20%20%09%09%09%09%20%20%20%27pomodoro_illustrated%27%0A%20%20%20%20%20%09%09%09%09%20%20%20%27pragmatic_thinking%27%0A%20%20%20%20%20%09%09%09%09%20%20%20%27your-brain-at-work%27%20%29%20%20collect%3A%20%5B%3Aname%7C%20%28IAECustomImageSlide%20on%3A%20self%29%20%0A%09%09%09%09%09%09%09%09%09%09%09%09%09%09title%3A%20name%3B%0A%09%09%09%09%09%09%09%09%09%09%09%09%09%09imageFile%3A%20%27pomodoro/%27%2C%20name%2C%27.jpg%27%5D%29'),
messageSends: ["collect:", "title:", "imageFile:", unescape("%2C"), "on:", "addAll:"],
referencedClasses: ["IAECustomImageSlide"]
}),
smalltalk.IAEPomodoro);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'not yet classified',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPomodoro.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("IAE%20-%20The%20Pomodoro%20Technique");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27IAE%20-%20The%20Pomodoro%20Technique%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEPomodoro.klass);


smalltalk.addClass('IAEMovieApplicationMVC', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("iMovies%2C%20MVC%2C%20TDD%2C%20Mocks")]);
smalltalk.send(html, "_ol_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip")]);return smalltalk.send($rec, "_with_", [unescape("Download%20iMovies%20%28model%29")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send($rec, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [unescape("Develop%20%22Add%20a%20Movie%22")]);return smalltalk.send($rec, "_ul_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["use TDD and mocking techniques"]);smalltalk.send($rec, "_li_", ["first controller"]);return smalltalk.send($rec, "_li_", ["then view"]);})(html);})]);})(html);})]);smalltalk.send($rec, "_li_", ["Delete a Movie"]);smalltalk.send($rec, "_li_", ["Modify a Movie"]);return smalltalk.send($rec, "_li_", ["A movie has a note"]);})(html);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27iMovies%2C%20MVC%2C%20TDD%2C%20Mocks%27.%0A%0A%09html%20ol%3A%20%5B%09html%20%0A%09%09%09%09li%3A%20%5Bhtml%20a%0A%09%09%09%09%09href%3A%20%27http%3A//lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip%27%3B%0A%09%09%09%09%09with%3A%20%27Download%20iMovies%20%28model%29%27%5D%20%3B%0A%09%09%09%09li%3A%20%5B%20html%20%0A%09%09%09%09%09%09with%3A%20%27Develop%20%22Add%20a%20Movie%22%27%3B%0A%09%09%09%09%09%20%09ul%3A%20%5B%20html%20%0A%09%09%09%09%09%09%09%20%20li%3A%20%27use%20TDD%20and%20mocking%20techniques%27%3B%0A%09%09%09%09%09%09%09%20%20li%3A%20%27first%20controller%27%3B%0A%09%09%09%09%09%09%09%20%20li%3A%20%27then%20view%27%20%5D%20%5D%3B%0A%09%09%09%09li%3A%20%27Delete%20a%20Movie%27%3B%0A%09%09%09%09li%3A%20%27Modify%20a%20Movie%27%3B%0A%09%09%09%09li%3A%20%27A%20movie%20has%20a%20note%27%20%5D.'),
messageSends: ["h1:", "ol:", "li:", "href:", "with:", "a", "ul:"],
referencedClasses: []
}),
smalltalk.IAEMovieApplicationMVC);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide green3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEMovieApplicationMVC);



smalltalk.addClass('IAEVCS', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide black";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEVCS);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("rgb%28234%2C%20242%2C%20245%29");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%20%27rgb%28234%2C%20242%2C%20245%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEVCS);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_h1_", ["Version Control System"]);return smalltalk.send($rec, "_img_", [unescape("iae/images/vcs.png")]);})(html);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%0A%09%09%09%09h1%3A%20%27Version%20Control%20System%27%3B%0A%09%09%09%09img%3A%20%27iae/images/vcs.png%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["class:", "with:", "h1:", "img:", "div"],
referencedClasses: []
}),
smalltalk.IAEVCS);



smalltalk.addClass('IAEAmber', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.amber-lang.net")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/amber.png")]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20a%0A%09%09%09%09%09href%3A%20%27http%3A//www.amber-lang.net%27%3B%0A%09%09%09%09%09with%3A%20%5Bhtml%20img%3A%20%27iae/images/amber.png%27%5D%5D'),
messageSends: ["class:", "with:", "href:", "img:", "a", "div"],
referencedClasses: []
}),
smalltalk.IAEAmber);



smalltalk.addClass('IAEAllSlides', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return "Used to browse all slides";
return self;},
args: [],
source: unescape('description%0A%09%5E%20%27Used%20to%20browse%20all%20slides%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAllSlides);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.IAESlide || IAESlide), "_allSubclasses", []), "_select_", [(function(aSlideClass){return smalltalk.send(smalltalk.send(aSlideClass, "_subclasses", []), "_isEmpty", []);})]), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]));})]);
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%28IAESlide%20allSubclasses%20select%3A%20%5B%3AaSlideClass%7C%20aSlideClass%20subclasses%20isEmpty%5D%29%20sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20name%20%3C%20b%20name%5D.'),
messageSends: ["sort:", "select:", "allSubclasses", "isEmpty", "subclasses", unescape("%3C"), "name"],
referencedClasses: ["IAESlide"]
}),
smalltalk.IAEAllSlides);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'accessing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAEAllSlides.klass);


smalltalk.addClass('IAECalculatorSecondTest', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide red3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20red3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorSecondTest);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%20%20assertEquals%284%2C%20calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20void%20testThreePowerFourEqualsEightyOne%28%29%20%7B%20%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%0A%20%20%20%20assertEquals%2881%2C%20calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D");
return self;},
args: [],
source: unescape('snippet%0A%09%5E%20%20%0A%27import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%20%20assertEquals%284%2C%20calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20void%20testThreePowerFourEqualsEightyOne%28%29%20%7B%20%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%0A%20%20%20%20assertEquals%2881%2C%20calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IAECalculatorSecondTest);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Write another test"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Write%20another%20test%27.%0A%09html%20div%0A%09%09class%3A%A0%27center%27%3B%0A%09%09with%3A%20%5B%20%20self%20renderJava%3A%20self%20snippet%20on%3A%20html%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderJava:on:", "snippet", "div"],
referencedClasses: []
}),
smalltalk.IAECalculatorSecondTest);




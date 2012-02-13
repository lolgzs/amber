smalltalk.addPackage('Presentation-IAE', {});
smalltalk.addClass('IAEPresentation', smalltalk.Presentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
fn: function (){
var self=this;
return "Laurent Laffont";
return self;}
}),
smalltalk.IAEPresentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
fn: function (){
var self=this;
return unescape("laurent.laffont@gmail.com");
return self;}
}),
smalltalk.IAEPresentation);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function (){
var self=this;
return unescape("http%3A//lolgzs.free.fr/iae-course/");
return self;}
}),
smalltalk.IAEPresentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
fn: function (){
var self=this;
return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%202em%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%23WhatIsJtalk%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/balloon.jpg%22%29%20650px%2050px%20no-repeat%3B%0A%7D%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A.slide%20.huge%20%7B%0A%20%20font-size%3A%204em%3B%0A%20%20line-height%3A%201.5em%3B%0A%7D%0A%0A.slide%20.big%20%7B%0A%20%20font-size%3A%203em%3B%0A%20%20line-height%3A%201.1em%3B%0A%7D%0A%0A%0A.slide%20.center%20%7B%0A%20%20text-align%3A%20center%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23tools%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23tools%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A.slide%20iframe%20%7B%0A%20%20height%3A%2090%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%201px%20solid%20white%3B%0A%7D%0A%0A.slide%20.left-column%20%7B%0A%09width%3A%2050%25%3B%0A%09position%3A%20absolute%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.right-column%20%7B%0A%09width%3A%2050%25%3B%0A%09float%3A%20right%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.nobullet%20%7B%0A%09list-style%3A%20none%3B%0A%7D%0A%0A%23tools%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23IAECourseContent%20%7B%0A%09background%3A%20white%20url%28iae/images/planning.png%29%20no-repeat%20right%20bottom%3B%0A%7D%0A%0A%23IAEPractices%20%7B%0A%09background%3A%20rgb%28170%2C170%2C180%29%20url%28iae/images/martialart.jpg%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAELearn%20%7B%0A%09background%3A%20url%28iae/images/books.jpg%29%20no-repeat%20center%20center%3B%0A%09color%3A%20white%3B%0A%09font-size%3A%203em%3B%0A%09text-shadow%3A%200px%200px%2020px%20red%3B%0A%7D%0A%0A%23IAEPharocasts%20%7B%0A%09background-color%3A%20rgb%2828%2C32%2C%2035%29%3B%0A%7D%0A%0A%23IAECara74%20%7B%0A%09background-color%3A%20rgb%28127%2C116%2C%20105%29%3B%0A%7D%0A%0A%0A%23IAEContinuousIntegration%20%7B%0A%09font-size%3A%202em%3B%0A%09background%3A%20rgb%28216%2C216%2C216%29%20url%28iae/images/ci.png%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAETracker%20%7B%0A%09background%3A%20rgb%28235%2C239%2C249%29%3B%0A%7D%0A%0A%23IAEScrum%20%7B%0A%09background%3A%20white%20url%28iae/images/scrum.png%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A%23IAESummary%20%7B%0A%09background%3A%20white%20url%28iae/images/success.jpg%29%20no-repeat%20center%20center%3B%0A%7D%0A%0A.slide%20.codemirror%20%7B%0A%09width%3A%20100%25%3B%0A%09border%3A%205px%20solid%20rgba%2850%2C%2050%2C%2050%2C%200.8%29%3B%0A%09border-radius%3A%205px%3B%0A%09background%3A%20white%3B%0A%09height%3A%20auto%3B%0A%7D%0A%0A.slide%20.codemirror-scroll%20%7B%0A%09height%3A%20auto%3B%0A%09overflow%3A%20visible%3B%0A%7D%0A%0A%23IAETDDStackExercise%20%20.codemirror%20%7B%0A%09height%3A%20350px%3B%0A%09font-size%3A%2015px%3B%0A%7D%0A%0A%23IAETDDStackExercise%20%20.codemirror-scroll%20%7B%0A%09height%3A%20350px%3B%0A%09overflow%3A%20auto%3B%0A%7D%0A");
return self;}
}),
smalltalk.IAEPresentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.IAEPresentation.klass);


smalltalk.addClass('IAESlide', smalltalk.Slide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_name", []);
return self;}
}),
smalltalk.IAESlide);

smalltalk.addMethod(
unescape('_renderJava_on_'),
smalltalk.method({
selector: unescape('renderJava%3Aon%3A'),
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
return self;}
}),
smalltalk.IAESlide);



smalltalk.addClass('IAETDDBookBeck', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide green3d";
return self;}
}),
smalltalk.IAETDDBookBeck);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("TDD%20By%20Example%20-%20Kent%20Beck")]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/beck_tdd_book.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDBookBeck);



smalltalk.addClass('IAEAgileResources', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Resources"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.crisp.se/henrik.kniberg/presentations/agile-tour-grenoble-2009-keynote-what-is-agile.pdf")]);return smalltalk.send($rec, "_with_", ["What is agile"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//henrik-kniberg.developpez.com/livre/scrum-xp/")]);return smalltalk.send($rec, "_with_", [unescape("Scrum%20et%20XP%20depuis%20les%20tranch%E9es")]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//agilemanifesto.org/iso/fr/")]);return smalltalk.send($rec, "_with_", ["Manifeste agile"]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;}
}),
smalltalk.IAEAgileResources);



smalltalk.addClass('IAETDDBookThomas', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAETDDBookThomas);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("Pragmatic%20Unit%20Testing%20-%20Dave%20Thomas")]);return smalltalk.send(html, "_img_", [unescape("iae/images/prag_unit_test_book.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDBookThomas);



smalltalk.addClass('IAEMovieApplicationPresentation', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Swing%20application%20with%20TDD");
return self;}
}),
smalltalk.IAEMovieApplicationPresentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEMovieApplication || IAEMovieApplication),(smalltalk.IAEMVC || IAEMVC),(smalltalk.IAEMovieList || IAEMovieList)];
return self;}
}),
smalltalk.IAEMovieApplicationPresentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAEMovieApplicationPresentation.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20Movie%20application");
return self;}
}),
smalltalk.IAEMovieApplicationPresentation.klass);


smalltalk.addClass('IAEIntroSlide', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAEIntroSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_title", [])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", [])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])]);return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send("mailto:", "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])])]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEIntroSlide);



smalltalk.addClass('IAEMovieApplication', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAEMovieApplication);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/MoviesEditor.png")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEMovieApplication);



smalltalk.addClass('IAEPharocasts', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide";
return self;}
}),
smalltalk.IAEPharocasts);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.pharocasts.com")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("iae/images/pharocasts.png")]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEPharocasts);



smalltalk.addClass('IAETDDStackExerciseVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAETDDStackExerciseVideo);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["Stack exercise"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(400)]);smalltalk.send($rec, "_height_", [(300)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/29788542%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;}
}),
smalltalk.IAETDDStackExerciseVideo);



smalltalk.addClass('IAEWhatIsSoftwareDevelopment', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide center";
return self;}
}),
smalltalk.IAEWhatIsSoftwareDevelopment);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["What is"]);(function($rec){smalltalk.send($rec, "_class_", ["huge red"]);return smalltalk.send($rec, "_with_", ["Software Development"]);})(smalltalk.send(html, "_h1", []));return (function($rec){smalltalk.send($rec, "_class_", ["huge"]);return smalltalk.send($rec, "_with_", [unescape("%3F")]);})(smalltalk.send(html, "_h1", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEWhatIsSoftwareDevelopment);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("%23ddf");
return self;}
}),
smalltalk.IAEWhatIsSoftwareDevelopment);



smalltalk.addClass('IAEMVC', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return "black";
return self;}
}),
smalltalk.IAEMVC);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_style_", [unescape("%0A%23IAEMVC%20%7B%0A%20%20background%3A%20url%28iae/images/mvc.jpg%29%20%20no-repeat%20center%20center%3B%0A%20%20background-color%3A%20%23333%3B%20%0A%7D")]);
return self;}
}),
smalltalk.IAEMVC);



smalltalk.addClass('IAECourseContent', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Content"]);
smalltalk.send(html, "_ol_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["Software Development overview"]);smalltalk.send($rec, "_li_", ["Test Driven Development"]);return smalltalk.send($rec, "_li_", ["Agile practices"]);})(html);})]);
return self;}
}),
smalltalk.IAECourseContent);



smalltalk.addClass('IAEMovieList', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_slideClass'),
smalltalk.method({
selector: unescape('slideClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAEMovieList);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Classes MovieList et Movie"]);
smalltalk.send(html, "_ol_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["un film a un titre"]);smalltalk.send($rec, "_li_", ["on peut rajouter et retirer un film de la liste"]);smalltalk.send($rec, "_li_", [unescape("on%20peut%20renommer%20le%20titre%20d%27un%20film.")]);smalltalk.send($rec, "_li_", [unescape("le%20titre%20ne%20peut%20etre%20%28null%29%20ou%20une%20cha%EEne%20vide%20-%20IllegalArgumentException")]);return smalltalk.send($rec, "_li_", [unescape("on%20ne%20peut%20pas%20ajouter%20deux%20films%20avec%20le%20m%EAme%20titre%20dans%20la%20liste%20-%20DuplicateMovieException%20%28note%20%3A%20ArrayList.contains%20appelle%20Movie.equals%29")]);})(html);})]);
(function($rec){smalltalk.send($rec, "_class_", ["right"]);smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip")]);return smalltalk.send($rec, "_with_", [unescape("T%E9l%E9charger%20la%20correction")]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.IAEMovieList);



smalltalk.addClass('IAECara74', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%28157%2C%20145%2C%20131%29");
return self;}
}),
smalltalk.IAECara74);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide";
return self;}
}),
smalltalk.IAECara74);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//cara74.alpha.smallharbour.org/")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/cara74.png")]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECara74);



smalltalk.addClass('IAEJavaSwing', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011");
return self;}
}),
smalltalk.IAEJavaSwing);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEJFrame || IAEJFrame),(smalltalk.IAEJFrameSnapshot || IAEJFrameSnapshot),(smalltalk.IAEJLabel || IAEJLabel),(smalltalk.IAEJLabelSnapshot || IAEJLabelSnapshot),(smalltalk.IAEJFramePack || IAEJFramePack),(smalltalk.IAEJFramePackSnapshot || IAEJFramePackSnapshot),(smalltalk.IAEGridLayout || IAEGridLayout),(smalltalk.IAEGridLayoutSnapshot || IAEGridLayoutSnapshot),(smalltalk.IAEFlowLayoutSnapshot || IAEFlowLayoutSnapshot),(smalltalk.IAEActionListener || IAEActionListener),(smalltalk.IAEActionListenerGetSource || IAEActionListenerGetSource),(smalltalk.IAEMouseListener || IAEMouseListener),(smalltalk.IAEJTextField || IAEJTextField),(smalltalk.IAETextFieldSnapshot || IAETextFieldSnapshot),(smalltalk.IAEJComboBox || IAEJComboBox),(smalltalk.IAEComboBoxSnapshot || IAEComboBoxSnapshot),(smalltalk.IAEJList || IAEJList),(smalltalk.IAEJListSnapshot || IAEJListSnapshot),(smalltalk.IAEModelView || IAEModelView),(smalltalk.IAEJListModelSnapshot || IAEJListModelSnapshot),(smalltalk.IAEUISpec || IAEUISpec),(smalltalk.IAEJavaSwingResources || IAEJavaSwingResources),(smalltalk.IAESectionExercises || IAESectionExercises),(smalltalk.IAEFrameTPSnapshot || IAEFrameTPSnapshot),(smalltalk.IAEUISpecVideo || IAEUISpecVideo)];
return self;}
}),
smalltalk.IAEJavaSwing);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20Java%20Swing");
return self;}
}),
smalltalk.IAEJavaSwing.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAEJavaSwing.klass);


smalltalk.addClass('IAETeamWork', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%2880%2C90%2C130%29");
return self;}
}),
smalltalk.IAETeamWork);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["Team Work"]);})(smalltalk.send(html, "_h1", []));
(function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/team.JPG")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETeamWork);



smalltalk.addClass('IAEAbstractCodeSnippetSlide', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return nil;
return self;}
}),
smalltalk.IAEAbstractCodeSnippetSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(($receiver = smalltalk.send(self, "_title", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(html, "_h1_", [smalltalk.send(self, "_title", [])]);})() : nil;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEAbstractCodeSnippetSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAEAbstractCodeSnippetSlide);



smalltalk.addClass('IAEProject', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%2829%2C%2051%2C%2013%29");
return self;}
}),
smalltalk.IAEProject);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAEProject);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_h1_", ["Project"]);return smalltalk.send($rec, "_img_", [unescape("iae/images/project.jpg")]);})(html);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEProject);



smalltalk.addClass('IAEJFrame', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("import%20javax.swing.*%3B%0A%0A%20%20%20%20public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20setSize%28200%2C%20200%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20MyFirstFrame%20f%20%3D%20new%20MyFirstFrame%28%29%3B%0A%20%20%20%20%20%20%20%20f.setVisible%28true%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;}
}),
smalltalk.IAEJFrame);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "A simple window";
return self;}
}),
smalltalk.IAEJFrame);



smalltalk.addClass('IAELearn', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("%23F55");
return self;}
}),
smalltalk.IAELearn);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", ["LEARN"]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAELearn);



smalltalk.addClass('IAEJLabel', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20setSize%28200%2C%20200%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20JLabel%20lblHello%20%3D%20new%20JLabel%28%22Hello%20world%20%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28lblHello%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;}
}),
smalltalk.IAEJLabel);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Add a label inside";
return self;}
}),
smalltalk.IAEJLabel);



smalltalk.addClass('IAEContinuousIntegration', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%2821%2C%2042%2C%2014%29");
return self;}
}),
smalltalk.IAEContinuousIntegration);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["blue center"]);return smalltalk.send($rec, "_with_", ["Continuous Integration"]);})(smalltalk.send(html, "_h1", []));return smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["Get source"]);smalltalk.send($rec, "_li_", ["Build"]);return smalltalk.send($rec, "_li_", ["Test"]);})(html);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEContinuousIntegration);



smalltalk.addClass('IAEJFramePack', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("%20public%20class%20MyFirstFrame%20extends%20JFrame%20%7B%0A%20%20%20%20%20%20public%20MyFirstFrame%28%29%7B%0A%20%20%20%20%20%20%20%20setTitle%28%22My%20first%20GUI%20application%22%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20JLabel%20lblHello%20%3D%20new%20JLabel%28%22Hello%20world%20%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28lblHello%29%3B%0A%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;}
}),
smalltalk.IAEJFramePack);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("%20Resize%20container%20automatically%20with%20pack%28%29");
return self;}
}),
smalltalk.IAEJFramePack);



smalltalk.addClass('IAETracker', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Issue tracker"]);
smalltalk.send(html, "_img_", [unescape("iae/images/issues.png")]);
return self;}
}),
smalltalk.IAETracker);



smalltalk.addClass('IAEGridLayout', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20MySecondFrame%20extends%20JFrame%20%7B%0A%20%20%20%20public%20MySecondFrame%28%29%7B%0A%20%20%20%20%20%20initLayout%28%29%3B%0A%20%20%20%20%20%20initWidgets%28%29%3B%0A%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20private%20void%20initLayout%28%29%7B%0A%20%20%20%20%20%20//%203%20rows%2C%202%20colums%0A%20%20%20%20%20%20setLayout%28new%20GridLayout%283%2C2%29%29%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20private%20void%20initWidgets%28%29%7B%0A%20%20%20%20%20%20for%20%28int%20i%3D0%3B%20i%3C5%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20JButton%20btn%20%3D%20new%20JButton%28%22Button%20n%22%20+%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Integer.toString%28i%29%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28btn%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAEGridLayout);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Arrange widgets";
return self;}
}),
smalltalk.IAEGridLayout);



smalltalk.addClass('IAEContinuousDelivery', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAEContinuousDelivery);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/continuousDelivery.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEContinuousDelivery);



smalltalk.addClass('IAEActionListener', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("import%20javax.swing.*%3B%0Aimport%20java.awt.event.*%3B%0A%0Apublic%20class%20MyThirdFrame%20extends%20JFrame%20%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20JButton%20sayHelloButton%3B%0A%20%20%20%20%20%20%0A%20%20public%20MyThirdFrame%28%29%7B%0A%20%20%20%20%20%20%20%20sayHelloButton%20%3D%20new%20JButton%28%22Hello%21%22%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28sayHelloButton%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20sayHelloButton.addActionListener%28this%29%3B%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20event%29%20%7B%0A%20%20%20%20%20%20%20%20System.out.println%28%22Hello%20%21%21%21%22%29%3B%0A%20%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAEActionListener);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Generic event handling";
return self;}
}),
smalltalk.IAEActionListener);



smalltalk.addClass('IAEScrum', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%28197%2C%20226%2C%20236%29");
return self;}
}),
smalltalk.IAEScrum);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["SCRUM"]);
return self;}
}),
smalltalk.IAEScrum);



smalltalk.addClass('IAEActionListenerGetSource', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20MyThirdFrame%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20public%20MyThirdFrame%28%29%7B%0A%20%20%20%20setLayout%28new%20FlowLayout%28%29%29%3B%0A%20%20%20%20addButton%28%22Hello%20%21%22%29%3B%0A%20%20%20%20addButton%28%22Good%20Bye%20%21%22%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%20%20%20%20%20%20%0A%20%20public%20void%20addButton%28String%20label%29%20%7B%0A%20%20%20%20JButton%20buttonToAdd%20%3D%20new%20JButton%28label%29%3B%0A%20%20%20%20getContentPane%28%29.add%28buttonToAdd%29%3B%0A%20%20%20%20buttonToAdd.addActionListener%28this%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20event%29%20%7B%0A%20%20%20%20JButton%20clickedButton%20%3D%20%28JButton%29event.getSource%28%29%3B%0A%20%20%20%20System.out.println%28clickedButton.getText%28%29%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAEActionListenerGetSource);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Get source of event";
return self;}
}),
smalltalk.IAEActionListenerGetSource);



smalltalk.addClass('IAETDDIntroduction', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAETDDCycle || IAETDDCycle),(smalltalk.IAECalculatorTest || IAECalculatorTest),(smalltalk.IAECalculatorFirstImplementation || IAECalculatorFirstImplementation),(smalltalk.IAECalculatorSecondTest || IAECalculatorSecondTest),(smalltalk.IAECalculatorSecondImplementation || IAECalculatorSecondImplementation),(smalltalk.IAECalculatorRefactor || IAECalculatorRefactor),(smalltalk.IAECalculatorTestJUnit4 || IAECalculatorTestJUnit4),(smalltalk.IAESectionExercises || IAESectionExercises),(smalltalk.IAETDDLargestExercise || IAETDDLargestExercise),(smalltalk.IAETDDLargestExerciseFirstTest || IAETDDLargestExerciseFirstTest),(smalltalk.IAETDDLargestVideo || IAETDDLargestVideo),(smalltalk.IAETDDStackExercise || IAETDDStackExercise),(smalltalk.IAETDDStackFixtures || IAETDDStackFixtures),(smalltalk.IAETDDTestExceptionThrown || IAETDDTestExceptionThrown),(smalltalk.IAETDDTestExceptionNotThrown || IAETDDTestExceptionNotThrown),(smalltalk.IAETDDStackExerciseVideo || IAETDDStackExerciseVideo),(smalltalk.IAETDDBookAstels || IAETDDBookAstels),(smalltalk.IAETDDBookBeck || IAETDDBookBeck),(smalltalk.IAETDDBookThomas || IAETDDBookThomas)];
return self;}
}),
smalltalk.IAETDDIntroduction);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Test%20Driven%20Development%20cycle%2C%20coding%20basis");
return self;}
}),
smalltalk.IAETDDIntroduction);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20TDD%20Introduction");
return self;}
}),
smalltalk.IAETDDIntroduction.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAETDDIntroduction.klass);


smalltalk.addClass('IAEMouseListener', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20AnotherFrame%20implements%20MouseListener%20%7B%0A%20%20%20%20%20%20public%20AnotheFrame%28%29%7B%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%20%20aComponent.addMouseListener%28this%29%3B%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20public%20void%20mousePressed%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseReleased%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseEntered%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseExited%28MouseEvent%20e%29%20%7B...%7D%0A%0A%20%20%20%20%20%20public%20void%20mouseClicked%28MouseEvent%20e%29%20%7B...%7D%0A%20%20%20%20%7D");
return self;}
}),
smalltalk.IAEMouseListener);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Handling mouse events";
return self;}
}),
smalltalk.IAEMouseListener);



smalltalk.addClass('IAECalculatorFirstImplementation', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide green3d";
return self;}
}),
smalltalk.IAECalculatorFirstImplementation);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20Calculator%20%20%7B%20%0A%20%20public%20int%20power%28int%20firstNumber%2C%20int%20secondNumber%29%20%7B%0A%09return%204%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAECalculatorFirstImplementation);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Make it pass"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECalculatorFirstImplementation);



smalltalk.addClass('IAEJTextField', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20FrameWithTextField%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20KeyListener%20%7B%0A%20%20%20%20%20%20JTextField%20nameInput%3B%20%0A%0A%20%20%20%20%20%20public%20FrameWithTextField%28%29%7B%0A%20%20%20%20%20%20%20%20nameInput%20%3D%20new%20JTextField%2820%29%3B%0A%20%20%20%20%20%20%20%20nameInput.addKeyListener%28this%29%3B%0A%20%20%20%20%20%20%20%20getContentPane%28%29.add%28nameInput%29%3B%0A%20%20%20%20%20%20%20%20pack%28%29%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20@Override%0A%20%20%20%20%20%20public%20void%20keyPressed%28KeyEvent%20event%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28event.getKeyCode%28%29%20%3D%3D%20KeyEvent.VK_ENTER%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28nameInput.getText%28%29%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;}
}),
smalltalk.IAEJTextField);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Keyboard events";
return self;}
}),
smalltalk.IAEJTextField);



smalltalk.addClass('IAECalculatorSecondImplementation', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide green3d";
return self;}
}),
smalltalk.IAECalculatorSecondImplementation);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20Calculator%20%20%7B%20%0A%20%20public%20int%20power%28int%20firstNumber%2C%20int%20secondNumber%29%20%7B%0A%09return%20%28int%29%20Math.pow%28%09firstNumber%2C%20%0A%09%09%09%09secondNumber%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAECalculatorSecondImplementation);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Make it pass"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECalculatorSecondImplementation);



smalltalk.addClass('IAEJComboBox', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20FrameWithComboBox%20extends%20JFrame%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20implements%20ActionListener%20%7B%0A%20%20JComboBox%20movieSelect%3B%20%20%20%20%20%20%20%0A%20%20public%20FrameWithComboBox%28%29%7B%0A%20%20%20%20movieSelect%20%3D%20new%20JComboBox%28%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Dr%20No%22%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Goldfinger%22%29%3B%0A%20%20%20%20movieSelect.addItem%28%22Die%20another%20day%22%29%3B%0A%20%20%20%20movieSelect.addActionListener%28this%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20getContentPane%28%29.add%28movieSelect%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%0A%20%20@Override%0A%20%20public%20void%20actionPerformed%28ActionEvent%20e%29%20%7B%0A%20%20%20%20String%20selectedMovie%20%3D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28String%29movieSelect.getSelectedItem%28%29%3B%0A%20%20%20%20System.out.println%28selectedMovie%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAEJComboBox);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "JComboBox";
return self;}
}),
smalltalk.IAEJComboBox);



smalltalk.addClass('IAECalculatorTestJUnit4', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAECalculatorTestJUnit4);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20TestCalculator%20%7B%0A%20%20protected%20Calculator%20calc%3B%0A%09%0A%20%20@Before%0A%20%20public%20void%20createCalculator%20%28%29%7B%0A%20%20%20%20this.calc%20%3D%20new%20Calculator%28%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20twoPowerTwoShouldReturnFour%28%29%20%7B%0A%20%20%20%20assertEquals%284%2C%20this.calc.power%282%2C2%29%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20threePowerFourShouldReturnEightyOne%28%29%20%7B%0A%20%20%20%20assertEquals%2881%2C%20this.calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAECalculatorTestJUnit4);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h2_", ["JUnit 4 annotations"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECalculatorTestJUnit4);



smalltalk.addClass('IAEJList', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20Hero%20%7B%0A%20%20%20%20String%20name%3B%0A%20%20%20%20public%20Hero%28String%20name%29%20%7B%20this.name%20%3D%20name%3B%20%7D%0A%7D%0A%0Apublic%20class%20FrameWithList%20extends%20JFrame%20%7B%0A%20%20JList%20namesList%3B%0A%20%20DefaultListModel%20heroes%3B%0A%20%20%20%20%20%20%0A%20%20public%20FrameWithList%28%29%7B%0A%20%20%20%20heroes%20%3D%20new%20DefaultListModel%28%29%3B%0A%20%20%20%20heroes.addElement%28new%20Hero%28%22Spiderman%22%29%29%3B%0A%20%20%20%20heroes.addElement%28new%20Hero%28%22Batman%22%29%29%3B%0A%20%20%20%20%0A%20%20%20%20namesList%20%3D%20new%20JList%28heroes%29%3B%0A%20%20%20%20getContentPane%28%29.add%28namesList%29%3B%0A%20%20%20%20pack%28%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAEJList);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "JList with Objects";
return self;}
}),
smalltalk.IAEJList);



smalltalk.addClass('IAESectionExercises', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("%23ffdddd");
return self;}
}),
smalltalk.IAESectionExercises);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center huge fancy"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["EXERCICES"]);})(smalltalk.send(html, "_h2", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAESectionExercises);



smalltalk.addClass('IAEModelView', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("%20public%20class%20Hero%20%7B%0A%20%20%20%20%20%20String%20name%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20Hero%28String%20name%29%7B%0A%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20String%20toString%28%29%7B%0A%20%20%20%20%20%20%20%20return%20%22I%27m%22%20+%20this.name%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D");
return self;}
}),
smalltalk.IAEModelView);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Defining object string representation";
return self;}
}),
smalltalk.IAEModelView);



smalltalk.addClass('IAETDDStackExercise', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("import%20java.util.ArrayList%3B%0A%0Apublic%20class%20Stack%20%7B%0A%20%20ArrayList%3CString%3E%20items%20%3D%20new%20ArrayList%3CString%20%3E%28%29%3B%0A%0A%20%20public%20boolean%20isEmpty%28%29%20%7B%20%0A%20%20%20%20return%20items.isEmpty%28%29%3B%0A%20%20%7D%0A%0A%20%20public%20String%20pop%28%29%20throws%20StackEmptyException%20%7B%0A%20%20%20%20if%20%28this.isEmpty%28%29%29%20%7B%0A%20%20%20%20%20%20throw%20new%20StackEmptyException%28%29%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20return%20items.remove%280%29%3B%20%0A%20%20%7D%0A%0A%20%20public%20void%20push%28%20String%20item%29%20%7B%20%0A%20%20%20%20items.add%28item%29%3B%0A%20%20%7D%0A%20%20%20%20%0A%20%20public%20String%20top%20%28%29%20throws%20StackEmptyException%20%7B%0A%20%20%20%20if%20%28this.isEmpty%28%29%29%20%7B%0A%20%20%20%20%20%20throw%20new%20StackEmptyException%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20items.get%280%29%3B%20%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAETDDStackExercise);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide red3d";
return self;}
}),
smalltalk.IAETDDStackExercise);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("Stack%20exercise%3A%20fix%20it%20%21")]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDStackExercise);



smalltalk.addClass('IAEAbstractImageSlide', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [smalltalk.send(unescape("iae/images/"), "__comma", [smalltalk.send(self, "_imageFile", [])])]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEAbstractImageSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide green3d";
return self;}
}),
smalltalk.IAEAbstractImageSlide);



smalltalk.addClass('IAETDDLargestVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAETDDLargestVideo);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["Largest number in a list exercise"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(450)]);smalltalk.send($rec, "_height_", [(250)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/29681165%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;}
}),
smalltalk.IAETDDLargestVideo);



smalltalk.addClass('IAEJFrameSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/first_frame.png");
return self;}
}),
smalltalk.IAEJFrameSnapshot);



smalltalk.addClass('IAETDDTestExceptionThrown', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAETDDTestExceptionThrown);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20EmptyStackTest%20%7B%0A%0A%20%20@Test%28expected%3DStackEmptyException.class%29%0A%20%20public%20void%20popShouldThrowStackEmptyException%28%29%20%0A%09%09%09throws%20StackEmptyException%20%7B%0A%0A%20%20%20%20Stack%20stack%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20stack.pop%28%29%3B%0A%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAETDDTestExceptionThrown);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Test exception is thrown"]);return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDTestExceptionThrown);



smalltalk.addClass('IAEJLabelSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/frame_label.png");
return self;}
}),
smalltalk.IAEJLabelSnapshot);



smalltalk.addClass('IAETDDBookAstels', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAETDDBookAstels);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("TDD%3A%20A%20practical%20guide%20-%20Dave%20Astels")]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/astels_tdd_book.jpg")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDBookAstels);



smalltalk.addClass('IAEJFramePackSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/frame_pack.png");
return self;}
}),
smalltalk.IAEJFramePackSnapshot);



smalltalk.addClass('IAEParcours', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("%23dfd");
return self;}
}),
smalltalk.IAEParcours);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("iae/images/parcours.png")]);
return self;}
}),
smalltalk.IAEParcours);



smalltalk.addClass('IAEGridLayoutSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/grid_layout_3_2.png");
return self;}
}),
smalltalk.IAEGridLayoutSnapshot);



smalltalk.addClass('IAEProgramming', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("%23333");
return self;}
}),
smalltalk.IAEProgramming);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", ["Programming"]);})(smalltalk.send(html, "_h1", []));
smalltalk.send(html, "_img_", [unescape("iae/images/human_evolution.jpg")]);
return self;}
}),
smalltalk.IAEProgramming);



smalltalk.addClass('IAEFlowLayoutSnapshot', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Flow layout"]);return (function($rec){smalltalk.send($rec, "_p_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/swing/flow_layout1.png")]);})]);return smalltalk.send($rec, "_p_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/swing/flow_layout2.png")]);})]);})(html);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEFlowLayoutSnapshot);



smalltalk.addClass('IAEGitHub', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.github.com")]);return smalltalk.send($rec, "_with_", ["github"]);})(smalltalk.send(html, "_a", []));
smalltalk.send(html, "_img_", [unescape("iae/images/github_network.png")]);
return self;}
}),
smalltalk.IAEGitHub);



smalltalk.addClass('IAETextFieldSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/text_field.png");
return self;}
}),
smalltalk.IAETextFieldSnapshot);



smalltalk.addClass('IAEPractices', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["big"]);return smalltalk.send($rec, "_with_", ["Practices"]);})(smalltalk.send(html, "_h1", []));
return self;}
}),
smalltalk.IAEPractices);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
fn: function (){
var self=this;
return unescape("background%3A%20rgb%28170%2C170%2C180%29%20url%28iae/images/martialart.jpg%29%20no-repeat%20center%20center%3B%20box-shadow%3A%20none");
return self;}
}),
smalltalk.IAEPractices);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%28170%2C170%2C180%29");
return self;}
}),
smalltalk.IAEPractices);



smalltalk.addClass('IAEComboBoxSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/combo_box.png");
return self;}
}),
smalltalk.IAEComboBoxSnapshot);



smalltalk.addClass('IAEExtremeProgramming', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAEExtremeProgramming);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["eXtreme Programming"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(560)]);smalltalk.send($rec, "_height_", [(315)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//www.youtube.com/embed/Ytu1Hxzr_Bs")]);})(smalltalk.send(html, "_iframe", []));
return self;}
}),
smalltalk.IAEExtremeProgramming);



smalltalk.addClass('IAEJListSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/jlist1.png");
return self;}
}),
smalltalk.IAEJListSnapshot);



smalltalk.addClass('IAETDDCycle', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%283%2C%20146%2C%20187%29");
return self;}
}),
smalltalk.IAETDDCycle);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/tdd_cycle.gif")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDCycle);



smalltalk.addClass('IAEJListModelSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/jlist2.png");
return self;}
}),
smalltalk.IAEJListModelSnapshot);



smalltalk.addClass('IAECalculatorTest', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%20%20assertEquals%284%2C%20calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAECalculatorTest);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide red3d";
return self;}
}),
smalltalk.IAECalculatorTest);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Write a test"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECalculatorTest);



smalltalk.addClass('IAEFrameTPSnapshot', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return unescape("swing/tp_gui.png");
return self;}
}),
smalltalk.IAEFrameTPSnapshot);



smalltalk.addClass('IAECalculatorRefactor', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAECalculatorRefactor);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20protected%20Calculator%20calc%3B%0A%0A%20%20public%20void%20setUp%28%29%20%7B%0A%20%20%20%20this.calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%7D%0A%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20assertEquals%284%2C%20this.calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20void%20testThreePowerFourEqualsEightyOne%28%29%20%7B%20%0A%20%20%20%20assertEquals%2881%2C%20this.calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAECalculatorRefactor);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Refactor"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECalculatorRefactor);



smalltalk.addClass('IAEJavaSwingResources', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Resources"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//download.oracle.com/javase/tutorial/uiswing/")]);return smalltalk.send($rec, "_with_", [unescape("Trail%3A%20Creating%20a%20GUI%20With%20JFC/Swing")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.uispec4j.org/")]);return smalltalk.send($rec, "_with_", ["Testing GUI with UISpec4J"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp2/ToDoList.zip")]);return smalltalk.send($rec, "_with_", ["Download correction on Swing Exercise"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp2/ToDoList_Correction.zip")]);return smalltalk.send($rec, "_with_", ["Download correction on UISpec Exercise"]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;}
}),
smalltalk.IAEJavaSwingResources);



smalltalk.addClass('IAETDDLargestExerciseFirstTest', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20TestLargest%20%20%7B%20%0A%20%20@Test%0A%20%20public%20void%20testOrder%20%28%29%20%7B%0A%20%20%20%20assertEquals%289%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Largest.largest%28new%20int%5B%5D%20%7B8%2C9%2C7%7D%29%29%3B%20%0A%20%20%7D%0A%uFFFC%uFFFC%uFFFC%uFFFC%uFFFC%uFFFC%7D");
return self;}
}),
smalltalk.IAETDDLargestExerciseFirstTest);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide red3d";
return self;}
}),
smalltalk.IAETDDLargestExerciseFirstTest);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["First test"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDLargestExerciseFirstTest);



smalltalk.addClass('IAEUISpec', smalltalk.IAEAbstractCodeSnippetSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Test with UISpec";
return self;}
}),
smalltalk.IAEUISpec);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20EmptyToDoEditor%20%7B%0A%20%20protected%20ToDoEditor%20editor%3B%0A%20%20protected%20Window%20editorSpec%3B%0A%0A%20%20@Before%0A%20%20public%20void%20setUpEditor%28%29%20%7B%0A%20%20%20%20this.editor%20%3D%20new%20ToDoEditor%28%29%3B%0A%20%20%20%20this.editorSpec%20%3D%20new%20Window%28this.editor%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20listBoxShouldBeEmpty%28%29%20%7B%0A%20%20%20%20assertThat%28this.editorSpec.getListBox%28%29.isEmpty%28%29%29%3B%0A%20%20%7D%0A");
return self;}
}),
smalltalk.IAEUISpec);



smalltalk.addClass('IAETDDStackFixtures', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("One%20class%20per%20context%20/%20fixture")]);
(function($rec){smalltalk.send($rec, "_class_", [""]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_ul_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["EmptyStackTest"]);smalltalk.send($rec, "_li_", ["StackWithStringMilesTest"]);return smalltalk.send($rec, "_li_", ["StackWithStringsMilesMarcusHerbieTest"]);})(html);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDStackFixtures);



smalltalk.addClass('IAEUISpecVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["TDD with UISpec"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(400)]);smalltalk.send($rec, "_height_", [(300)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/30958504%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;}
}),
smalltalk.IAEUISpecVideo);



smalltalk.addClass('IAESoftwareDevPresentation', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Software%20development%20tools%20and%20practices%20overview");
return self;}
}),
smalltalk.IAESoftwareDevPresentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEParcours || IAEParcours),(smalltalk.IAEPharocasts || IAEPharocasts),(smalltalk.IAEAmber || IAEAmber),(smalltalk.IAECara74 || IAECara74),(smalltalk.IAECourseContent || IAECourseContent),(smalltalk.IAEAgileGrenoble || IAEAgileGrenoble),(smalltalk.IAEWhatIsSoftwareDevelopment || IAEWhatIsSoftwareDevelopment),(smalltalk.IAEProject || IAEProject),(smalltalk.IAEProgramming || IAEProgramming),(smalltalk.IAETeamWork || IAETeamWork),(smalltalk.IAETools || IAETools),(smalltalk.IAEToolMisused || IAEToolMisused),(smalltalk.IAEPractices || IAEPractices),(smalltalk.IAETracker || IAETracker),(smalltalk.IAEVCS || IAEVCS),(smalltalk.IAEGitHub || IAEGitHub),(smalltalk.IAETDDCycle || IAETDDCycle),(smalltalk.IAEContinuousIntegration || IAEContinuousIntegration),(smalltalk.IAEContinuousDelivery || IAEContinuousDelivery),(smalltalk.IAEExtremeProgramming || IAEExtremeProgramming),(smalltalk.IAEScrum || IAEScrum),(smalltalk.IAESummary || IAESummary),(smalltalk.IAELearn || IAELearn)];
return self;}
}),
smalltalk.IAESoftwareDevPresentation);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20Software%20Development");
return self;}
}),
smalltalk.IAESoftwareDevPresentation.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAESoftwareDevPresentation.klass);


smalltalk.addClass('IAEMocks', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20How%20to%20isolate%20tested%20objects%20with%20Mocks");
return self;}
}),
smalltalk.IAEMocks);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAETestDependencies || IAETestDependencies),(smalltalk.IAEMockMovieEditor || IAEMockMovieEditor),(smalltalk.IAEEasyMockVideo || IAEEasyMockVideo),(smalltalk.IAEMockResources || IAEMockResources),(smalltalk.IAESectionExercises || IAESectionExercises),(smalltalk.IAEMovieApplication || IAEMovieApplication),(smalltalk.IAEMovieApplicationMVC || IAEMovieApplicationMVC)];
return self;}
}),
smalltalk.IAEMocks);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAEMocks.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20Mocks");
return self;}
}),
smalltalk.IAEMocks.klass);


smalltalk.addClass('IAEAgileGrenoble', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//agile-grenoble.org/")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/ag2011.png")]);})]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", ["jeudi 24 novembre"]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEAgileGrenoble);



smalltalk.addClass('IAETestDependencies', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Isolate objects";
return self;}
}),
smalltalk.IAETestDependencies);

smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return "test_dependencies.png";
return self;}
}),
smalltalk.IAETestDependencies);



smalltalk.addClass('IAEToolMisused', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center section"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/blame_tool.png")]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEToolMisused);



smalltalk.addClass('IAEMockMovieEditor', smalltalk.IAEAbstractImageSlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return "Mock MovieEditor object";
return self;}
}),
smalltalk.IAEMockMovieEditor);

smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return "mock_movies.png";
return self;}
}),
smalltalk.IAEMockMovieEditor);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAEMockMovieEditor);



smalltalk.addClass('IAESummary', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Summary"]);})(smalltalk.send(html, "_h1", []));
(function($rec){smalltalk.send($rec, "_class_", ["center big red"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("left-column%20nobullet")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["Tracker"]);smalltalk.send($rec, "_li_", ["VCS"]);smalltalk.send($rec, "_li_", ["Manager"]);return smalltalk.send($rec, "_li_", ["TDD"]);})(html);})]);})(smalltalk.send(html, "_ul", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("right-column%20nobullet")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["XP"]);smalltalk.send($rec, "_li_", ["CI"]);smalltalk.send($rec, "_li_", ["CD"]);return smalltalk.send($rec, "_li_", ["Scrum"]);})(html);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAESummary);



smalltalk.addClass('IAEEasyMockVideo', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", ["EasyMock"]);})(smalltalk.send(html, "_h3", []));
(function($rec){smalltalk.send($rec, "_width_", [(400)]);smalltalk.send($rec, "_height_", [(300)]);return smalltalk.send($rec, "_src_", [unescape("http%3A//player.vimeo.com/video/31692069%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")]);})(smalltalk.send(html, "_iframe", []));
return self;}
}),
smalltalk.IAEEasyMockVideo);



smalltalk.addClass('IAETDDLargestExercise', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20Largest%20%7B%0A%20%20public%20static%20int%20largest%28int%20%5B%5D%20list%20%29%20%7B%0A%20%20%20%20int%20index%2C%20max%20%3D%20Integer.MAX_VALUE%3B%0A%0A%20%20%20%20for%20%28index%20%3D%200%3B%20index%20%3C%20list.length%u22121%3B%20index++%29%20%7B%0A%20%20%20%20%20%20if%20%28list%5Bindex%5D%3Emax%29%20%7B%0A%20%20%20%20%20%20%20%20max%3D%20list%5Bindex%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20max%3B%20%0A%20%20%20%20%7D%0A%20%20%7D%20%0A%7D");
return self;}
}),
smalltalk.IAETDDLargestExercise);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAETDDLargestExercise);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Largest number in a list"]);smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);return (function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("fix%20it%20%21")]);})(smalltalk.send(html, "_h1", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDLargestExercise);



smalltalk.addClass('IAEMockResources', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Resources"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.easymock.org/")]);return smalltalk.send($rec, "_with_", ["EasyMock"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//code.google.com/p/mockito/")]);return smalltalk.send($rec, "_with_", ["Mockito"]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//code.google.com/p/powermock/")]);return smalltalk.send($rec, "_with_", ["PowerMock"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp3/ToDoListEasyMock.zip")]);return smalltalk.send($rec, "_with_", [unescape("Download%20correction%20on%20MVC%20+%20EasyMock%20Exercise")]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;}
}),
smalltalk.IAEMockResources);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide blue3d";
return self;}
}),
smalltalk.IAEMockResources);



smalltalk.addClass('IAETDDTestExceptionNotThrown', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("public%20class%20StackWithStringMilesTest%20%7B%0A%20%20protected%20Stack%20stack%3B%0A%0A%20%20@Before%0A%20%20public%20void%20setupStack%28%29%20%7B%0A%20%20%20%20this.stack%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20this.stack.push%28%22Miles%22%29%3B%0A%20%20%7D%0A%09%0A%20%20@Test%0A%20%20public%20void%20popShouldNotThrowStackEmptyException%28%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throws%20StackEmptyException%20%7B%0A%20%20%20%20this.stack.pop%28%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAETDDTestExceptionNotThrown);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [(function(){smalltalk.send(html, "_span_", ["Test exception is"]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [" NOT "]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", ["thrown"]);})]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETDDTestExceptionNotThrown);



smalltalk.addClass('IAETools', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%28150%2C%2060%2C%2060%29");
return self;}
}),
smalltalk.IAETools);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAETools);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_img_", [unescape("iae/images/tools.jpg")]);return smalltalk.send(html, "_h1_", ["TOOLS"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAETools);



smalltalk.addClass('IAEAgileIntro', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return "Agile practices introduction";
return self;}
}),
smalltalk.IAEAgileIntro);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEAgileResources || IAEAgileResources)];
return self;}
}),
smalltalk.IAEAgileIntro);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAEAgileIntro.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20Agile%20practices");
return self;}
}),
smalltalk.IAEAgileIntro.klass);


smalltalk.addClass('IAECustomImageSlide', smalltalk.IAEAbstractImageSlide, ['imageFile', 'title'], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_imageFile_'),
smalltalk.method({
selector: unescape('imageFile%3A'),
fn: function (aString){
var self=this;
self['@imageFile']=aString;
return self;}
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_imageFile'),
smalltalk.method({
selector: unescape('imageFile'),
fn: function (){
var self=this;
return self['@imageFile'];
return self;}
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return self['@title'];
return self;}
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_title_'),
smalltalk.method({
selector: unescape('title%3A'),
fn: function (aString){
var self=this;
self['@title']=aString;
return self;}
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
fn: function (){
var self=this;
return self['@title'];
return self;}
}),
smalltalk.IAECustomImageSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", ["height: 500px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(unescape("iae/images/"), "__comma", [smalltalk.send(self, "_imageFile", [])])]);})(smalltalk.send(html, "_img", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECustomImageSlide);



smalltalk.addClass('IAEPomodoro', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return unescape("IAE%20-%20M1%20MTI%20-%202011.%20Pomodoro%20technique");
return self;}
}),
smalltalk.IAEPomodoro);

smalltalk.addMethod(
unescape('_initSlides'),
smalltalk.method({
selector: unescape('initSlides'),
fn: function (){
var self=this;
self['@slides']=smalltalk.send(["title", "interruptions", "25mn", "break", "4_pomodoro_break", "unbreakable_pomodoro", "brain", "inventory", "daily_activities", "keep_small_tasks", "daily_activities_done", "inventory_done", "urgent", "manage_interruptions", "new_inventory", "symbols", "report", "retrospective"], "_collect_", [(function(name){return (function($rec){smalltalk.send($rec, "_title_", [name]);return smalltalk.send($rec, "_imageFile_", [smalltalk.send(smalltalk.send(unescape("pomodoro/pt_"), "__comma", [name]), "__comma", [".JPG"])]);})(smalltalk.send((smalltalk.IAECustomImageSlide || IAECustomImageSlide), "_on_", [self]));})]);
smalltalk.send(self['@slides'], "_addAll_", [smalltalk.send(["pomodoro_technique", "pomodoro_illustrated", "pragmatic_thinking", unescape("your-brain-at-work")], "_collect_", [(function(name){return (function($rec){smalltalk.send($rec, "_title_", [name]);return smalltalk.send($rec, "_imageFile_", [smalltalk.send(smalltalk.send(unescape("pomodoro/"), "__comma", [name]), "__comma", [".jpg"])]);})(smalltalk.send((smalltalk.IAECustomImageSlide || IAECustomImageSlide), "_on_", [self]));})])]);
return self;}
}),
smalltalk.IAEPomodoro);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAEPomodoro.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return unescape("IAE%20-%20The%20Pomodoro%20Technique");
return self;}
}),
smalltalk.IAEPomodoro.klass);


smalltalk.addClass('IAEMovieApplicationMVC', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", [unescape("iMovies%2C%20MVC%2C%20TDD%2C%20Mocks")]);
smalltalk.send(html, "_ol_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip")]);return smalltalk.send($rec, "_with_", [unescape("Download%20iMovies%20%28model%29")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send($rec, "_li_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [unescape("Develop%20%22Add%20a%20Movie%22")]);return smalltalk.send($rec, "_ul_", [(function(){return (function($rec){smalltalk.send($rec, "_li_", ["use TDD and mocking techniques"]);smalltalk.send($rec, "_li_", ["first controller"]);return smalltalk.send($rec, "_li_", ["then view"]);})(html);})]);})(html);})]);smalltalk.send($rec, "_li_", ["Delete a Movie"]);smalltalk.send($rec, "_li_", ["Modify a Movie"]);return smalltalk.send($rec, "_li_", ["A movie has a note"]);})(html);})]);
return self;}
}),
smalltalk.IAEMovieApplicationMVC);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide green3d";
return self;}
}),
smalltalk.IAEMovieApplicationMVC);



smalltalk.addClass('IAEVCS', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide black";
return self;}
}),
smalltalk.IAEVCS);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function (){
var self=this;
return unescape("rgb%28234%2C%20242%2C%20245%29");
return self;}
}),
smalltalk.IAEVCS);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_h1_", ["Version Control System"]);return smalltalk.send($rec, "_img_", [unescape("iae/images/vcs.png")]);})(html);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEVCS);



smalltalk.addClass('IAEAmber', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.amber-lang.net")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_img_", [unescape("iae/images/amber.png")]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAEAmber);



smalltalk.addClass('IAEAllSlides', smalltalk.IAEPresentation, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return "Used to browse all slides";
return self;}
}),
smalltalk.IAEAllSlides);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.IAESlide || IAESlide), "_allSubclasses", []), "_select_", [(function(aSlideClass){return smalltalk.send(smalltalk.send(aSlideClass, "_subclasses", []), "_isEmpty", []);})]), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]));})]);
return self;}
}),
smalltalk.IAEAllSlides);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IAEAllSlides.klass);


smalltalk.addClass('IAECalculatorSecondTest', smalltalk.IAESlide, [], 'Presentation-IAE');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function (){
var self=this;
return "slide red3d";
return self;}
}),
smalltalk.IAECalculatorSecondTest);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function (){
var self=this;
return unescape("import%20junit.framework.TestCase%3B%0A%0Apublic%20class%20TestCalculator%20extends%20TestCase%20%7B%20%0A%20%20public%20void%20testTwoPowerTwoEqualsFour%20%28%29%7B%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%20%0A%20%20%20%20assertEquals%284%2C%20calc.power%282%2C%202%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20void%20testThreePowerFourEqualsEightyOne%28%29%20%7B%20%0A%20%20%20%20Calculator%20calc%20%3D%20new%20Calculator%20%28%29%3B%0A%20%20%20%20assertEquals%2881%2C%20calc.power%283%2C%204%29%29%3B%0A%20%20%7D%0A%7D");
return self;}
}),
smalltalk.IAECalculatorSecondTest);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Write another test"]);
(function($rec){smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderJava_on_", [smalltalk.send(self, "_snippet", []), html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IAECalculatorSecondTest);




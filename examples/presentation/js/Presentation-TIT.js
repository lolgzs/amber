smalltalk.addPackage('Presentation-TIT', {});
smalltalk.addClass('TITPresentation', smalltalk.Presentation, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("http%3A//lolgzs.free.fr/tit-course/");
return self;},
args: [],
source: unescape('url%0A%09%5E%27http%3A//lolgzs.free.fr/tit-course/%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TITPresentation);

smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("Laurent%20Laffont%20-%20Patrick%20Barroca");
return self;},
args: [],
source: unescape('author%0A%09%5E%20%27Laurent%20Laffont%20-%20Patrick%20Barroca%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TITPresentation);

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
smalltalk.TITPresentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%202em%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%20.green%20%7B%0A%20%20%20%20color%3A%20green%3B%0A%7D%0A.slide%20.huge%20%7B%0A%20%20font-size%3A%204em%3B%0A%20%20line-height%3A%201.5em%3B%0A%7D%0A%0A.slide%20.big%20%7B%0A%20%20font-size%3A%202em%3B%0A%20%20line-height%3A%201.1em%3B%0A%7D%0A%0A%0A.slide%20.center%20%7B%0A%20%20text-align%3A%20center%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23tools%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23tools%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A.slide%20iframe%20%7B%0A%20%20height%3A%2090%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%201px%20solid%20white%3B%0A%7D%0A%0A.slide%20.left-column%20%7B%0A%09width%3A%2050%25%3B%0A%09position%3A%20absolute%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.right-column%20%7B%0A%09width%3A%2050%25%3B%0A%09float%3A%20right%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.nobullet%20%7B%0A%09list-style%3A%20none%3B%0A%7D%0A%0A%23tools%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%0A%23IAEPharocasts%20%7B%0A%09background-color%3A%20rgb%2828%2C32%2C%2035%29%3B%0A%7D%0A%0A%23IAECara74%20%7B%0A%09background-color%3A%20rgb%28127%2C116%2C%20105%29%3B%0A%7D");
return self;},
args: [],
source: unescape('style%0A%09%5E%27%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%202em%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%20.green%20%7B%0A%20%20%20%20color%3A%20green%3B%0A%7D%0A.slide%20.huge%20%7B%0A%20%20font-size%3A%204em%3B%0A%20%20line-height%3A%201.5em%3B%0A%7D%0A%0A.slide%20.big%20%7B%0A%20%20font-size%3A%202em%3B%0A%20%20line-height%3A%201.1em%3B%0A%7D%0A%0A%0A.slide%20.center%20%7B%0A%20%20text-align%3A%20center%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23tools%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23tools%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A.slide%20iframe%20%7B%0A%20%20height%3A%2090%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%201px%20solid%20white%3B%0A%7D%0A%0A.slide%20.left-column%20%7B%0A%09width%3A%2050%25%3B%0A%09position%3A%20absolute%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.right-column%20%7B%0A%09width%3A%2050%25%3B%0A%09float%3A%20right%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.nobullet%20%7B%0A%09list-style%3A%20none%3B%0A%7D%0A%0A%23tools%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%0A%23IAEPharocasts%20%7B%0A%09background-color%3A%20rgb%2828%2C32%2C%2035%29%3B%0A%7D%0A%0A%23IAECara74%20%7B%0A%09background-color%3A%20rgb%28127%2C116%2C%20105%29%3B%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TITPresentation);


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
smalltalk.TITPresentation.klass);


smalltalk.addClass('TITManipulatingObjects', smalltalk.TITPresentation, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return "Introduction to object oriented paradigm";
return self;},
args: [],
source: unescape('description%0A%09%5E%20%27Introduction%20to%20object%20oriented%20paradigm%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TITManipulatingObjects);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEPharocasts || IAEPharocasts),(smalltalk.IAEAmber || IAEAmber),(smalltalk.IAECara74 || IAECara74),(smalltalk.TITUnaryMessageSyntax || TITUnaryMessageSyntax),(smalltalk.TITBinaryMessageSyntax || TITBinaryMessageSyntax)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0A%09IAEIntroSlide.%0A%09IAEPharocasts.%0A%09IAEAmber.%0A%09IAECara74.%0A%09TITUnaryMessageSyntax.%0A%09TITBinaryMessageSyntax%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAEPharocasts", "IAEAmber", "IAECara74", "TITUnaryMessageSyntax", "TITBinaryMessageSyntax"]
}),
smalltalk.TITManipulatingObjects);


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
smalltalk.TITManipulatingObjects.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function (){
var self=this;
return "Manipulating Objects";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Manipulating%20Objects%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TITManipulatingObjects.klass);


smalltalk.addClass('TITUnaryMessageSyntax', smalltalk.Slide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Unary messages"]);
(function($rec){smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_renderReceiver_message_on_", ["receiver ", "message", html]);smalltalk.send($rec, "_renderReceiver_message_on_", ["3 ", "squared", html]);return smalltalk.send($rec, "_renderReceiver_message_on_", [unescape("%27TETRAS%27%20"), "asLowercase", html]);})(self);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Unary%20messages%27.%0A%09html%20div%20%0A%09%09class%3A%20%27center%20big%27%3B%0A%09%09with%3A%20%5B%20self%20%0A%09%09%09%09renderReceiver%3A%20%27receiver%20%27%20message%3A%20%27message%27%20on%3A%20html%3B%09%09%0A%09%09%09%09renderReceiver%3A%20%273%20%27%20message%3A%20%27squared%27%20on%3A%20html%3B%0A%09%09%09%09renderReceiver%3A%20%27%27%27TETRAS%27%27%20%27%20message%3A%20%27asLowercase%27%20on%3A%20html.%20%5D.'),
messageSends: ["h1:", "class:", "with:", "renderReceiver:message:on:", "div"],
referencedClasses: []
}),
smalltalk.TITUnaryMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Aon%3A'),
category: 'rendering',
fn: function (aString, anotherString, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aString]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [anotherString]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);})(html);
return self;},
args: ["aString", "anotherString", "html"],
source: unescape('renderReceiver%3A%20aString%20message%3A%20anotherString%20on%3A%20html%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20aString.%0A%09%09html%20span%20class%3A%20%27red%27%3B%09with%3A%20anotherString.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27.%27.%0A%09%09html%20br%3Bbr%0A%09%0A%0A%09%09'),
messageSends: ["class:", "with:", "span", "br"],
referencedClasses: []
}),
smalltalk.TITUnaryMessageSyntax);

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
smalltalk.TITUnaryMessageSyntax);



smalltalk.addClass('TITBinaryMessageSyntax', smalltalk.Slide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_h1_", ["Binary messages"]);
(function($rec){smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_renderReceiver_message_argument_on_", ["receiver ", "message", "argument", html]);smalltalk.send($rec, "_renderReceiver_message_argument_on_", ["5", unescape("%20+%20"), "2", html]);return smalltalk.send($rec, "_renderReceiver_message_argument_on_", ["12", unescape("%20%3E%20"), "5", html]);})(self);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Binary%20messages%27.%0A%09html%20div%20%0A%09%09class%3A%20%27center%20big%27%3B%0A%09%09with%3A%20%5B%20self%20%0A%09%09%09%09renderReceiver%3A%20%27receiver%20%27%20message%3A%20%27message%27%20%20argument%3A%20%27argument%27%20on%3A%20html%3B%09%09%0A%09%09%09%09renderReceiver%3A%20%275%27%20message%3A%20%27%20+%20%27%20argument%3A%20%272%27%20on%3A%20html%3B%09%0A%09%09%09%09renderReceiver%3A%20%2712%27%20message%3A%20%27%20%3E%20%27%20argument%3A%20%275%27%20on%3A%20html%5D.'),
messageSends: ["h1:", "class:", "with:", "renderReceiver:message:argument:on:", "div"],
referencedClasses: []
}),
smalltalk.TITBinaryMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_argument_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Aargument%3Aon%3A'),
category: 'rendering',
fn: function (aReceiver, aMessage, anArgument, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aReceiver]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(" ", "__comma", [aMessage]), "__comma", [" "])]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_class_", ["green"]);return smalltalk.send($rec, "_with_", [anArgument]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);})(smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);})(html);
return self;},
args: ["aReceiver", "aMessage", "anArgument", "html"],
source: unescape('renderReceiver%3A%20aReceiver%20message%3A%20aMessage%20argument%3A%20anArgument%20on%3A%20html%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20aReceiver.%0A%09%09html%20span%20class%3A%20%27red%27%3B%09with%3A%20%27%20%27%2C%20aMessage%2C%20%27%20%27.%0A%09%09html%20span%20class%3A%20%27green%27%3B%20with%3A%20anArgument.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27.%27.%0A%09%09html%20br%3Bbr'),
messageSends: ["class:", "with:", "span", unescape("%2C"), "br"],
referencedClasses: []
}),
smalltalk.TITBinaryMessageSyntax);

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
smalltalk.TITBinaryMessageSyntax);




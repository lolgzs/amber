smalltalk.addPackage('Presentation-TIT', {});
smalltalk.addClass('TITSlide', smalltalk.Slide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSmalltalk_on_'),
smalltalk.method({
selector: unescape('renderSmalltalk%3Aon%3A'),
fn: function (aString, html) {
    var self = this;
    var aTextArea = nil;
    aTextArea = smalltalk.send(smalltalk.send(html, "_textarea", []), "_element", []);
    smalltalk.send(aTextArea, "_value_", [aString]);
    CodeMirror.fromTextArea(aTextArea, {lineNumbers: true, theme: "jtalk", enterMode: "flat", theme: "neat", width: "700px", lineWrapping: false, matchBrackets: true, electricChars: false});
    return self;
}
}),
smalltalk.TITSlide);

smalltalk.addMethod(
unescape('_renderImage_on_'),
smalltalk.method({
selector: unescape('renderImage%3Aon%3A'),
fn: function (filename, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_width_", ["700px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(unescape("tit/images/"), "__comma", [filename])]);}(smalltalk.send(html, "_img", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITSlide);

smalltalk.addMethod(
unescape('_renderVimeo_on_'),
smalltalk.method({
selector: unescape('renderVimeo%3Aon%3A'),
fn: function (aNumber, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_width_", [640]);smalltalk.send($rec, "_height_", [480]);return smalltalk.send($rec, "_src_", [smalltalk.send(smalltalk.send(unescape("http%3A//player.vimeo.com/video/"), "__comma", [smalltalk.send(aNumber, "_asString", [])]), "__comma", [unescape("%3Ftitle%3D0%26amp%3Bbyline%3D0%26amp%3Bportrait%3D0")])]);}(smalltalk.send(html, "_iframe", [])));
    return self;
}
}),
smalltalk.TITSlide);



smalltalk.addClass('TITPresentation', smalltalk.Presentation, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function () {
    var self = this;
    return unescape("http%3A//lolgzs.free.fr/tit-course/");
    return self;
}
}),
smalltalk.TITPresentation);

smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
fn: function () {
    var self = this;
    return unescape("Laurent%20Laffont%20-%20Patrick%20Barroca");
    return self;
}
}),
smalltalk.TITPresentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
fn: function () {
    var self = this;
    return unescape("laurent.laffont@gmail.com");
    return self;
}
}),
smalltalk.TITPresentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
fn: function () {
    var self = this;
    return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A.slide.wax3d%20%7B%0A%20%20background%3A%20%23feffe8%3B%20/*%20Old%20browsers%20*/%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%20%23feffe8%200%25%2C%20%23d6dbbf%20100%25%29%3B%20/*%20FF3.6+%20*/%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffe8%29%2C%20color-stop%28100%25%2C%23d6dbbf%29%29%3B%20/*%20Chrome%2CSafari4+%20*/%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%20%23feffe8%200%25%2C%23d6dbbf%20100%25%29%3B%20/*%20Chrome10+%2CSafari5.1+%20*/%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%20%23feffe8%200%25%2C%23d6dbbf%20100%25%29%3B%20/*%20Opera%2011.10+%20*/%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%20%23feffe8%200%25%2C%23d6dbbf%20100%25%29%3B%20/*%20IE10+%20*/%0A%20%20background%3A%20linear-gradient%28top%2C%20%20%23feffe8%200%25%2C%23d6dbbf%20100%25%29%3B%20/*%20W3C%20*/%0A%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%27%23feffe8%27%2C%20endColorstr%3D%27%23d6dbbf%27%2CGradientType%3D0%20%29%3B%20/*%20IE6-9%20*/%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%202em%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%20.green%20%7B%0A%20%20%20%20color%3A%20green%3B%0A%7D%0A.slide%20.huge%20%7B%0A%20%20font-size%3A%204em%3B%0A%20%20line-height%3A%201.5em%3B%0A%7D%0A%0A.slide%20.big%20%7B%0A%20%20font-size%3A%202em%3B%0A%20%20line-height%3A%201.1em%3B%0A%7D%0A%0A%0A.slide%20.center%20%7B%0A%20%20text-align%3A%20center%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23tools%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23tools%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A.slide%20iframe%20%7B%0A%20%20height%3A%2090%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%201px%20solid%20white%3B%0A%7D%0A%0A.slide%20.left-column%20%7B%0A%09width%3A%2050%25%3B%0A%09position%3A%20absolute%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.right-column%20%7B%0A%09width%3A%2050%25%3B%0A%09float%3A%20right%3B%0A%09display%3A%20block%3B%0A%7D%0A%0A.slide%20.nobullet%20%7B%0A%09list-style%3A%20none%3B%0A%7D%0A%0A%23tools%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%0A.slide%20.codemirror%20%7B%0A%09border%3A%205px%20solid%20rgba%2850%2C%2050%2C%2050%2C%200.8%29%3B%0A%09border-radius%3A%205px%3B%0A%09background%3A%20white%3B%0A%09width%3A%20100%25%3B%0A%7D%0A%0A%0A%23IAEPharocasts%20%7B%0A%09background-color%3A%20rgb%2828%2C32%2C%2035%29%3B%0A%7D%0A%0A%23IAECara74%20%7B%0A%09background-color%3A%20rgb%28127%2C116%2C%20105%29%3B%0A%7D");
    return self;
}
}),
smalltalk.TITPresentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.TITPresentation.klass);


smalltalk.addClass('TITManipulatingObjects', smalltalk.TITPresentation, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function () {
    var self = this;
    return "Introduction to object oriented paradigm";
    return self;
}
}),
smalltalk.TITManipulatingObjects);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function () {
    var self = this;
    return [smalltalk.IAEIntroSlide || IAEIntroSlide, smalltalk.IAEPharocasts || IAEPharocasts, smalltalk.IAEAmber || IAEAmber, smalltalk.IAECara74 || IAECara74, smalltalk.TITRoadmap || TITRoadmap, smalltalk.TITInstallPharoWindows || TITInstallPharoWindows, smalltalk.TITVMImageSources || TITVMImageSources, smalltalk.TITBouncingAtomsMorphVideo || TITBouncingAtomsMorphVideo, smalltalk.TITUnaryMessageSyntax || TITUnaryMessageSyntax, smalltalk.TITBinaryMessageSyntax || TITBinaryMessageSyntax, smalltalk.TITKeywordsMessageSyntax || TITKeywordsMessageSyntax, smalltalk.TITCascadingMessagesSyntax || TITCascadingMessagesSyntax, smalltalk.TITSelfMessage || TITSelfMessage, smalltalk.TITBasicCodeSnippets || TITBasicCodeSnippets, smalltalk.TITPharoHelp || TITPharoHelp, smalltalk.TITProfStefHelp || TITProfStefHelp, smalltalk.TITProfStef || TITProfStef, smalltalk.IAESectionExercises || IAESectionExercises, smalltalk.TITBouncingAtomMorphsExercise ||
        TITBouncingAtomMorphsExercise];
    return self;
}
}),
smalltalk.TITManipulatingObjects);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function () {
    var self = this;
    return unescape("TIT%20-%20Manipulating%20Objects");
    return self;
}
}),
smalltalk.TITManipulatingObjects.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.TITManipulatingObjects.klass);


smalltalk.addClass('TITKeywordsMessageSyntax', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITKeywordsMessageSyntax);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Keywords messages"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_renderReceiver_message_keyword_argument_on_", ["receiver ", "message", "Keyword", "argument", html]);smalltalk.send($rec, "_renderReceiver_message_keyword_argument_on_", ["guitar ", "play", "String", "4", html]);return smalltalk.send($rec, "_renderReceiver_message_keyword_argument_keyword2_argument2_on_", ["guitar ", "play", "String", "4", "onFret", "2", html]);}(self);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITKeywordsMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_argument_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Aargument%3Aon%3A'),
fn: function (aReceiver, aMessage, anArgument, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aReceiver]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(" ", "__comma", [aMessage]), "__comma", [" "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["green"]);return smalltalk.send($rec, "_with_", [anArgument]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITKeywordsMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_keyword_argument_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Akeyword%3Aargument%3Aon%3A'),
fn: function (aReceiver, aMessage, keyword, anArgument, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [aReceiver]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [smalltalk.send(" ", "__comma", [aMessage])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["white"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [smalltalk.send(keyword, "__comma", [": "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["green"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [anArgument]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITKeywordsMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_keyword_argument_keyword2_argument2_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Akeyword%3Aargument%3Akeyword2%3Aargument2%3Aon%3A'),
fn: function (aReceiver, aMessage, keyword, anArgument, keyword2, anArgument2, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [aReceiver]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [smalltalk.send(" ", "__comma", [aMessage])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["white"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [smalltalk.send(keyword, "__comma", [": "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["green"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [smalltalk.send(anArgument, "__comma", [" "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["white"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [smalltalk.send(keyword2, "__comma", [": "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["green"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", [anArgument2]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);smalltalk.send($rec, "_style_", [unescape("font-size%3A0.8em")]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITKeywordsMessageSyntax);



smalltalk.addClass('TITBinaryMessageSyntax', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
}
}),
smalltalk.TITBinaryMessageSyntax);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Binary messages"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_renderReceiver_message_argument_on_", ["receiver ", "message", "argument", html]);smalltalk.send($rec, "_renderReceiver_message_argument_on_", ["5", unescape("%20+%20"), "2", html]);return smalltalk.send($rec, "_renderReceiver_message_argument_on_", ["12", unescape("%20%3E%20"), "5", html]);}(self);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITBinaryMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_argument_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Aargument%3Aon%3A'),
fn: function (aReceiver, aMessage, anArgument, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aReceiver]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(" ", "__comma", [aMessage]), "__comma", [" "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["green"]);return smalltalk.send($rec, "_with_", [anArgument]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITBinaryMessageSyntax);



smalltalk.addClass('TITProfStefHelp', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITProfStefHelp);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["ProfStef tutorials"]);
    smalltalk.send(self, "_renderImage_on_", ["profstef.png", html]);
    return self;
}
}),
smalltalk.TITProfStefHelp);



smalltalk.addClass('TITVMImageSources', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide";
    return self;
}
}),
smalltalk.TITVMImageSources);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function () {
    var self = this;
    return unescape("%23ddf");
    return self;
}
}),
smalltalk.TITVMImageSources);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_renderImage_on_", ["vm_image_sources.png", html]);
    return self;
}
}),
smalltalk.TITVMImageSources);



smalltalk.addClass('TITBouncingAtomsMorphVideo', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide black";
    return self;
}
}),
smalltalk.TITBouncingAtomsMorphVideo);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//www.pharocasts.com/2012/01/manipulating-objects.html")]);return smalltalk.send($rec, "_with_", ["BouncingAtomsMorph"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", [])));
    smalltalk.send(self, "_renderVimeo_on_", [34810463, html]);
    return self;
}
}),
smalltalk.TITBouncingAtomsMorphVideo);



smalltalk.addClass('TITProfStef', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TrySmalltalkWidget || TrySmalltalkWidget, "_new", []), "_renderOn_", [html]);
    return self;
}
}),
smalltalk.TITProfStef);



smalltalk.addClass('TITBasicCodeSnippets', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide red3d";
    return self;
}
}),
smalltalk.TITBasicCodeSnippets);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function () {
    var self = this;
    return unescape("Morph%20new%20%0A%09width%3A%20100%3B%0A%09color%3A%20Color%20red%3B%0A%09openInWorld.%0A%0A10%20atRandom.%0A%0A%7B%27one%27.%20%20%27two%27%7D%20at%3A%201.%0A%0A%7BColor%20red.%20Color%20blue.%20Color%20yellow%7D%20atRandom.%0A%0A%28StringMorph%20contents%3A%20%27Hello%20%21%27%29%20openInWindow.%0A%0ABouncingAtomsMorph%20allInstances%20last%20delete.%0A");
    return self;
}
}),
smalltalk.TITBasicCodeSnippets);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Code examples"]);
    smalltalk.send(self, "_renderSmalltalk_on_", [smalltalk.send(self, "_snippet", []), html]);
    return self;
}
}),
smalltalk.TITBasicCodeSnippets);



smalltalk.addClass('TITBouncingAtomMorphsExercise', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_ol_", [function () {return function ($rec) {smalltalk.send($rec, "_li_", ["Make the BouncingAtomsMorph change color at every step"]);smalltalk.send($rec, "_li_", [unescape("Make%20the%20BouncingAtomsMorph%20change%20color%20every%202%20seconds%20%28but%20animated%20at%20full%20speed%29")]);smalltalk.send($rec, "_li_", [unescape("Every%20second%20the%20BouncingAtomsMorph%20remove%20an%20atom.%20When%20reach%200%2C%20add%20one%20every%20second.%20When%20reach%2030%2C%20remove%20one%20every%20second")]);return smalltalk.send($rec, "_li_", ["Draw on the BouncingAtomsMorph the number of its submorphs"]);}(html);}]);
    smalltalk.send(html, "_with_", ["Do ProfStef go then:"]);
    smalltalk.send(html, "_ol_", [function () {return function ($rec) {smalltalk.send($rec, "_li_", ["Create a button in a window that opens a new BouncingAtomsMorph"]);smalltalk.send($rec, "_li_", ["Create a button that deletes all BouncingAtomsMorph instances"]);return smalltalk.send($rec, "_li_", ["A button that pops up a window displaying the number of red AtomMorph of latest BouncingAtomsMorph instance"]);}(html);}]);
    return self;
}
}),
smalltalk.TITBouncingAtomMorphsExercise);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide black";
    return self;
}
}),
smalltalk.TITBouncingAtomMorphsExercise);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function () {
    var self = this;
    return unescape("%23aaa");
    return self;
}
}),
smalltalk.TITBouncingAtomMorphsExercise);



smalltalk.addClass('TITRoadmap', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Roadmap"]);
    smalltalk.send(html, "_ol_", [function () {return function ($rec) {smalltalk.send($rec, "_li_", ["Manipulating objects"]);smalltalk.send($rec, "_li_", ["Write and share code"]);smalltalk.send($rec, "_li_", ["Basic classes"]);smalltalk.send($rec, "_li_", ["Inheritance and polymorphism"]);smalltalk.send($rec, "_li_", ["Software lifecycle"]);smalltalk.send($rec, "_li_", ["Test Driven Development"]);return smalltalk.send($rec, "_li_", ["Compose GUI"]);}(html);}]);
    return self;
}
}),
smalltalk.TITRoadmap);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITRoadmap);



smalltalk.addClass('TITInstallPharoWindows', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide black";
    return self;
}
}),
smalltalk.TITInstallPharoWindows);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["center"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//www.pharocasts.com/2010/08/install-pharo-on-windows.html")]);return smalltalk.send($rec, "_with_", ["Install Pharo on Windows"]);}(smalltalk.send(html, "_a", [])));smalltalk.send(html, "_with_", [unescape("%20%28%20")]);(function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/tit/Pharo-CogVM-Windows.zip")]);return smalltalk.send($rec, "_with_", ["Cog VM"]);}(smalltalk.send(html, "_a", [])));smalltalk.send(html, "_with_", [unescape("%20-%20")]);(function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//lolgzs.free.fr/tit/Pharo-1.3-Tetras.zip")]);return smalltalk.send($rec, "_with_", ["Pharo 1.3"]);}(smalltalk.send(html, "_a", [])));return smalltalk.send(html, "_with_", [unescape("%20%29")]);}]);}(smalltalk.send(html, "_h3", [])));
    smalltalk.send(self, "_renderVimeo_on_", [14301726, html]);
    return self;
}
}),
smalltalk.TITInstallPharoWindows);



smalltalk.addClass('TITUnaryMessageSyntax', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITUnaryMessageSyntax);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Unary messages"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_renderReceiver_message_on_", ["receiver ", "message", html]);smalltalk.send($rec, "_renderReceiver_message_on_", ["3 ", "squared", html]);return smalltalk.send($rec, "_renderReceiver_message_on_", [unescape("%27TETRAS%27%20"), "asLowercase", html]);}(self);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITUnaryMessageSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Aon%3A'),
fn: function (aString, anotherString, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aString]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [anotherString]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITUnaryMessageSyntax);



smalltalk.addClass('TITPharoHelp', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide black";
    return self;
}
}),
smalltalk.TITPharoHelp);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Help in Pharo"]);
    smalltalk.send(self, "_renderImage_on_", ["pharo_help.png", html]);
    return self;
}
}),
smalltalk.TITPharoHelp);



smalltalk.addClass('TITSelfMessage', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITSelfMessage);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
fn: function () {
    var self = this;
    return unescape("%23faa");
    return self;
}
}),
smalltalk.TITSelfMessage);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Self"]);
    smalltalk.send(self, "_renderImage_on_", ["self.png", html]);
    return self;
}
}),
smalltalk.TITSelfMessage);



smalltalk.addClass('TITCascadingMessagesSyntax', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
}
}),
smalltalk.TITCascadingMessagesSyntax);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Cascading messages"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_renderCascade_onReceiver_on_", ["message", "receiver", html]);return smalltalk.send($rec, "_renderCascade_onReceiver_on_", ["increase", "counter", html]);}(self);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITCascadingMessagesSyntax);

smalltalk.addMethod(
unescape('_renderReceiver_message_argument_on_'),
smalltalk.method({
selector: unescape('renderReceiver%3Amessage%3Aargument%3Aon%3A'),
fn: function (aReceiver, aMessage, anArgument, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aReceiver]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(" ", "__comma", [aMessage]), "__comma", [" "])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["green"]);return smalltalk.send($rec, "_with_", [anArgument]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITCascadingMessagesSyntax);

smalltalk.addMethod(
unescape('_renderCascade_on_'),
smalltalk.method({
selector: unescape('renderCascade%3Aon%3A'),
fn: function (aMessage, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [smalltalk.send(" ", "__comma", [aMessage])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [unescape("%3B")]);}(smalltalk.send(html, "_span", [])));
    return self;
}
}),
smalltalk.TITCascadingMessagesSyntax);

smalltalk.addMethod(
unescape('_renderCascade_onReceiver_on_'),
smalltalk.method({
selector: unescape('renderCascade%3AonReceiver%3Aon%3A'),
fn: function (aMessage, aReceiver, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [aReceiver]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_renderCascade_on_", [aMessage, html]);return smalltalk.send($rec, "_renderCascade_on_", [aMessage, html]);}(self));
    (function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [smalltalk.send(" ", "__comma", [aMessage])]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));
    (function ($rec) {smalltalk.send($rec, "_br", []);return smalltalk.send($rec, "_br", []);}(html));
    return self;
}
}),
smalltalk.TITCascadingMessagesSyntax);



smalltalk.addClass('TITWriteAndShareCode', smalltalk.TITPresentation, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function () {
    var self = this;
    return "Write Smalltalk code and share it with the world";
    return self;
}
}),
smalltalk.TITWriteAndShareCode);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function () {
    var self = this;
    return [smalltalk.IAEIntroSlide || IAEIntroSlide, smalltalk.TITRoadmap || TITRoadmap, smalltalk.IAEPractices || IAEPractices, smalltalk.TITTemporaryVariable || TITTemporaryVariable, smalltalk.TITInstanceVariable || TITInstanceVariable, smalltalk.TITBasicCodeSnippets || TITBasicCodeSnippets, smalltalk.TITBasicCodeSnippets2 || TITBasicCodeSnippets2, smalltalk.IAESectionExercises || IAESectionExercises, smalltalk.TITBouncingAtomMorphsExercise ||
        TITBouncingAtomMorphsExercise, smalltalk.TITVersionControl || TITVersionControl, smalltalk.TITBlocks || TITBlocks, smalltalk.TITObjectModelRules || TITObjectModelRules, smalltalk.TITObjectInheritance || TITObjectInheritance, smalltalk.TITUMLCrossMorph || TITUMLCrossMorph, smalltalk.TITPolymorphism || TITPolymorphism, smalltalk.TITMemberOfKindOf || TITMemberOfKindOf, smalltalk.IAESectionExercises || IAESectionExercises, smalltalk.TITBouncingInheritanceExercise ||
        TITBouncingInheritanceExercise];
    return self;
}
}),
smalltalk.TITWriteAndShareCode);


smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function () {
    var self = this;
    return unescape("TIT%20-%20Write%20and%20Share%20Code");
    return self;
}
}),
smalltalk.TITWriteAndShareCode.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.TITWriteAndShareCode.klass);


smalltalk.addClass('TITObjectModelRules', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITObjectModelRules);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Object Model Rules"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(self, "_writeRule_on_", ["Everything is an object.", html]);smalltalk.send(self, "_writeRule_on_", ["Every object is an instance of a class.", html]);return smalltalk.send(self, "_writeRule_on_", ["Every class has a superclass.", html]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITObjectModelRules);

smalltalk.addMethod(
unescape('_writeRule_on_'),
smalltalk.method({
selector: unescape('writeRule%3Aon%3A'),
fn: function (aString, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", [unescape("text-align%3Aleft%3B")]);return smalltalk.send($rec, "_with_", [aString]);}(smalltalk.send(html, "_li", [])));
    return self;
}
}),
smalltalk.TITObjectModelRules);



smalltalk.addClass('TITObjectInheritance', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
}
}),
smalltalk.TITObjectInheritance);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Object Inheritance"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_img_", [unescape("tit/images/BooleanHierarchy.png")]);return smalltalk.send(html, "_img_", [unescape("tit/images/BooleanHierarchyUML.png")]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITObjectInheritance);



smalltalk.addClass('TITTemporaryVariable', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Temporary variables"]);
    smalltalk.send(html, "_h2_", [unescape("Scope%20%3D%3E%20method")]);
    smalltalk.send(self, "_renderSmalltalk_on_", [smalltalk.send(self, "_snippet", []), html]);
    return self;
}
}),
smalltalk.TITTemporaryVariable);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function () {
    var self = this;
    return unescape("AtomMorph%3E%3Estep%0A%20%20%7Csize%7C%0A%20%20size%20%3A%3D%2020%20atRandom.%0A%20%20self%20%0A%20%20%20%20width%3A%20size%3B%0A%20%20%20%20height%3A%20size");
    return self;
}
}),
smalltalk.TITTemporaryVariable);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
}
}),
smalltalk.TITTemporaryVariable);



smalltalk.addClass('TITInstanceVariable', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITInstanceVariable);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Instance variables"]);
    smalltalk.send(html, "_h2_", [unescape("Scope%20%3D%3E%20object")]);
    smalltalk.send(self, "_renderSmalltalk_on_", [smalltalk.send(self, "_snippet", []), html]);
    return self;
}
}),
smalltalk.TITInstanceVariable);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function () {
    var self = this;
    return unescape("Morph%20subclass%3A%20%23BouncingAtomsMorph%0A%09instanceVariableNames%3A%20%27stepTime%27%0A%09classVariableNames%3A%20%27%27%0A%09poolDictionaries%3A%20%27%27%0A%09category%3A%20%27MorphExamplesAndDemos%27%0A%0A%0ABouncingAtomsMorph%3E%3EstepTime%0A%20%20%5E%20stepTime%0A%0ABouncingAtomsMorph%3E%3EstepTime%3A%20anInteger%0A%20%20stepTime%20%3A%3D%20anInteger");
    return self;
}
}),
smalltalk.TITInstanceVariable);



smalltalk.addClass('TITBasicCodeSnippets2', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide wax3d";
    return self;
}
}),
smalltalk.TITBasicCodeSnippets2);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Code examples"]);
    smalltalk.send(self, "_renderSmalltalk_on_", [smalltalk.send(self, "_snippet", []), html]);
    return self;
}
}),
smalltalk.TITBasicCodeSnippets2);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function () {
    var self = this;
    return unescape("temperature%20%3C%200%0A%09ifTrue%3A%20%5BTranscipt%20show%3A%20%27frozen%27%5D%0A%09ifFalse%3A%20%5BTranscript%20show%3A%20%27liquid%27%5D.%0A%0A4%20max%3A%202.%0A%0At0%20%3A%3D%20DateAndTime%20now.%0A%28DateAndTime%20now%20-%20t0%29%20asSeconds.");
    return self;
}
}),
smalltalk.TITBasicCodeSnippets2);



smalltalk.addClass('TITBlocks', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
}
}),
smalltalk.TITBlocks);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Block syntax"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["big"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", [unescape("font-weight%3Abold")]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ared%3B")]);return smalltalk.send($rec, "_with_", [unescape("%5B")]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ablue%3B")]);return smalltalk.send($rec, "_with_", [" :param"]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Agreen%3B")]);return smalltalk.send($rec, "_with_", [unescape("%20%7C%20%7C")]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ablue%3B")]);return smalltalk.send($rec, "_with_", [" tempVar"]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Agreen%3B")]);return smalltalk.send($rec, "_with_", [unescape("%20%7C")]);}(smalltalk.send(html, "_span", [])));smalltalk.send(html, "_br", []);(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ablue%3B")]);return smalltalk.send($rec, "_with_", ["    tempVar"]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ared%3B")]);return smalltalk.send($rec, "_with_", [unescape("%20%3A%3D")]);}(smalltalk.send(html, "_span", [])));smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [" value"]);(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ared%3B")]);return smalltalk.send($rec, "_with_", ["."]);}(smalltalk.send(html, "_span", [])));smalltalk.send(html, "_br", []);(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ablue%3B")]);return smalltalk.send($rec, "_with_", ["    param"]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ared%3B")]);return smalltalk.send($rec, "_with_", [" message"]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ablue%3B")]);return smalltalk.send($rec, "_with_", [" tempVar"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_style_", [unescape("color%3Ared%3B")]);return smalltalk.send($rec, "_with_", [unescape("%5D")]);}(smalltalk.send(html, "_span", []));}]);}(smalltalk.send(html, "_pre", []));}]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(self, "_renderSmalltalk_on_", [smalltalk.send(self, "_snippet", []), html]);
    return self;
}
}),
smalltalk.TITBlocks);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function () {
    var self = this;
    return unescape("a%20%3A%3D%20%5B%201%20+%202%20%5D.%0Aa%20value.%0A%0Ab%3A%3D%20%5B%3Ax%20%7C%20x%20+%201%5D.%0Ab%20value%3A%204.%0A%0Ac%20%3A%3D%20%5B%3Ax%20%7C%20%7C%20y%20%7C%0A%20%20%20%20%20%20%20%20y%20%3A%3D%201.%0A%20%20%20%20%20%20%20%20x%20+%20y%20%20%20%20%5D.%0Ac%20value%3A%204.");
    return self;
}
}),
smalltalk.TITBlocks);



smalltalk.addClass('TITBouncingInheritanceExercise', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_ol_", [function () {return function ($rec) {smalltalk.send($rec, "_li_", ["Implement CrossMorph in category MorphExamplesAndDemo"]);smalltalk.send($rec, "_li_", [unescape("Push%20MorphExamplesAndDemos%20package%20to%20repository%20http%3A//ss3.gemstone.com/ss/TetrasTIT")]);return smalltalk.send($rec, "_li_", [unescape("Make%20CrossMorph%20a%20subclass%20of%20AtomMorph%20and%20adapt%20BouncingAtomsMorph%3E%3Estep")]);}(html);}]);
    return self;
}
}),
smalltalk.TITBouncingInheritanceExercise);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide black";
    return self;
}
}),
smalltalk.TITBouncingInheritanceExercise);



smalltalk.addClass('TITVersionControl', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Version Control System"]);
    (function ($rec) {smalltalk.send($rec, "_class_", ["center big"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(html, "_img_", [unescape("tit/images/vcs.png")]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TITVersionControl);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITVersionControl);



smalltalk.addClass('TITUMLCrossMorph', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["UML"]);
    smalltalk.send(self, "_renderImage_on_", ["crossmorph.png", html]);
    return self;
}
}),
smalltalk.TITUMLCrossMorph);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide wax3d";
    return self;
}
}),
smalltalk.TITUMLCrossMorph);



smalltalk.addClass('TITPolymorphism', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Polymorphism"]);
    smalltalk.send(self, "_renderImage_on_", ["boolean.png", html]);
    return self;
}
}),
smalltalk.TITPolymorphism);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
}
}),
smalltalk.TITPolymorphism);



smalltalk.addClass('TITMemberOfKindOf', smalltalk.TITSlide, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Testing object membership"]);
    smalltalk.send(self, "_renderSmalltalk_on_", [smalltalk.send(self, "_snippet", []), html]);
    return self;
}
}),
smalltalk.TITMemberOfKindOf);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
}
}),
smalltalk.TITMemberOfKindOf);

smalltalk.addMethod(
unescape('_snippet'),
smalltalk.method({
selector: unescape('snippet'),
fn: function () {
    var self = this;
    return unescape("%7Ca%7C%0Aa%20%3A%3D%20AtomMorph%20new.%0Aa%20isMemberOf%3A%20AtomMorph%20%22%3D%3E%20true%22.%0Aa%20isKindOf%3A%20AtomMorph%20%22%3D%3E%20true%22.%0A%0Aa%20isMemberOf%3A%20Morph%20%22%3D%3E%20false%22.%0Aa%20isKindOf%3A%20Morph%20%22%3D%3E%20true%22.");
    return self;
}
}),
smalltalk.TITMemberOfKindOf);



smalltalk.addClass('TITSoftwareLifeCycle', smalltalk.TITPresentation, [], 'Presentation-TIT');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function () {
    var self = this;
    return "Modern software development process";
    return self;
}
}),
smalltalk.TITSoftwareLifeCycle);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
fn: function () {
    var self = this;
    return [smalltalk.IAEIntroSlide || IAEIntroSlide, smalltalk.TITRoadmap || TITRoadmap, smalltalk.IAEWhatIsSoftwareDevelopment ||
        IAEWhatIsSoftwareDevelopment, smalltalk.IAETools || IAETools, smalltalk.IAEToolMisused || IAEToolMisused, smalltalk.IAETracker || IAETracker, smalltalk.TITVersionControl || TITVersionControl, smalltalk.IAETDDCycle || IAETDDCycle, smalltalk.IAEContinuousIntegration || IAEContinuousIntegration, smalltalk.IAEContinuousDelivery || IAEContinuousDelivery];
    return self;
}
}),
smalltalk.TITSoftwareLifeCycle);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.TITSoftwareLifeCycle.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function () {
    var self = this;
    return unescape("TIT%20-%20Software%20lifecycle");
    return self;
}
}),
smalltalk.TITSoftwareLifeCycle.klass);



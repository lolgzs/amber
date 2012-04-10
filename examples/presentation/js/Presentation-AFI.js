smalltalk.addPackage('Presentation-AFI', {});
smalltalk.addClass('OCNoGetterSetter', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["No "]);})(smalltalk.send(html, "_span", []));return (function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [unescape("Getters%20/%20Setters%20/%20Properties")]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27No%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27blue%27%3B%0A%09%09%09%09with%3A%20%27Getters%20/%20Setters%20/%20Properties%27%5D'),
messageSends: ["class:", "with:", "span", "div"],
referencedClasses: []
}),
smalltalk.OCNoGetterSetter);

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
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCNoGetterSetter);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "9";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%279%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCNoGetterSetter);



smalltalk.addClass('OCFirstClassCollections', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_span_", [" Use "]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("first-class")]);})(smalltalk.send(html, "_span", []));return (function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [" collections"]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%3A%20%27%20Use%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27first-class%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27blue%27%3B%0A%09%09%09%09with%3A%20%27%20collections%27%5D'),
messageSends: ["class:", "with:", "span:", "span", "div"],
referencedClasses: []
}),
smalltalk.OCFirstClassCollections);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "green3d slide";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27green3d%20slide%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCFirstClassCollections);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "8";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%278%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCFirstClassCollections);



smalltalk.addClass('OCNoMoreTwoInstVar', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [" no more than "]);})(smalltalk.send(html, "_span", []));(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["2"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", [" instance variables per class "]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27blue%27%3B%0A%09%09%09%09with%3A%20%27%20no%20more%20than%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%272%27.%0A%09%09%09html%20span%3A%20%27%20instance%20variables%20per%20class%20%27%5D'),
messageSends: ["class:", "with:", "span", "span:", "div"],
referencedClasses: []
}),
smalltalk.OCNoMoreTwoInstVar);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide wax3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20wax3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCNoMoreTwoInstVar);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "7";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%277%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCNoMoreTwoInstVar);



smalltalk.addClass('OCKeepAllEntitiesSmall', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_span_", ["Keep all entities "]);return (function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["small"]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%3A%20%27Keep%20all%20entities%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27small%27%5D'),
messageSends: ["class:", "with:", "span:", "span", "div"],
referencedClasses: []
}),
smalltalk.OCKeepAllEntitiesSmall);

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
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCKeepAllEntitiesSmall);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "6";
return self;},
args: [],
source: unescape('title%0A%20%09%5E%20%276%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCKeepAllEntitiesSmall);



smalltalk.addClass('OCDontAbbreviate', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_div_", [unescape("%28%20Do%20not%20abbreviate%20%29")]);
(function($rec){smalltalk.send($rec, "_class_", ["section huge center blue"]);return smalltalk.send($rec, "_with_", ["DNAbb"]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%3A%20%27%28%20Do%20not%20abbreviate%20%29%27.%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%20blue%27%3B%0A%09%09with%3A%20%27DNAbb%27.'),
messageSends: ["div:", "class:", "with:", "div"],
referencedClasses: []
}),
smalltalk.OCDontAbbreviate);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide red3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20red3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCDontAbbreviate);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "5";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%275%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCDontAbbreviate);



smalltalk.addClass('OCOnlyOneDotPerLine', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_span_", ["Only "]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["one"]);})(smalltalk.send(html, "_span", []));(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", [" dot "]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", [" per line"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%3A%20%27Only%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27one%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27blue%27%3B%0A%09%09%09%09with%3A%20%27%20dot%20%27.%0A%09%09%09html%20span%3A%27%20per%20line%27.%5D'),
messageSends: ["class:", "with:", "span:", "span", "div"],
referencedClasses: []
}),
smalltalk.OCOnlyOneDotPerLine);

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
source: unescape('cssClass%0A%09%5E%20%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCOnlyOneDotPerLine);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "4";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%274%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCOnlyOneDotPerLine);



smalltalk.addClass('OCWrapPrimitivesStrings', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["Wrap "]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", [" all primitives and strings"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27Wrap%20%27.%0A%09%09%09html%20span%3A%27%20all%20primitives%20and%20strings%27.%5D'),
messageSends: ["class:", "with:", "span", "span:", "div"],
referencedClasses: []
}),
smalltalk.OCWrapPrimitivesStrings);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'not yet classified',
fn: function (){
var self=this;
return "slide wax3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20wax3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCWrapPrimitivesStrings);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "3";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%273%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCWrapPrimitivesStrings);



smalltalk.addClass('OCNoElse', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["No "]);})(smalltalk.send(html, "_span", []));(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["else"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", [" keyword"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27No%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27blue%27%3B%0A%09%09%09%09with%3A%20%27else%27.%0A%09%09%09html%20span%3A%27%20keyword%27.%5D'),
messageSends: ["class:", "with:", "span", "span:", "div"],
referencedClasses: []
}),
smalltalk.OCNoElse);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "2";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%272%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCNoElse);

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
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCNoElse);



smalltalk.addClass('OCOneLevelIndentation', smalltalk.IAESlide, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section huge center"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", ["One"]);})(smalltalk.send(html, "_span", []));smalltalk.send(html, "_span_", [" level of "]);(function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["indentation"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_span_", [" per method"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20huge%20center%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27red%27%3B%0A%09%09%09%09with%3A%20%27One%27.%0A%09%09%09html%20span%3A%20%27%20level%20of%20%27.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27blue%27%3B%0A%09%09%09%09with%3A%20%27indentation%27.%0A%09%09%09html%20span%3A%27%20per%20method%27.%5D'),
messageSends: ["class:", "with:", "span", "span:", "div"],
referencedClasses: []
}),
smalltalk.OCOneLevelIndentation);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'rendering',
fn: function (){
var self=this;
return "slide green3d";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCOneLevelIndentation);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'rendering',
fn: function (){
var self=this;
return "1";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%271%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.OCOneLevelIndentation);



smalltalk.addClass('AFIObjectCalisthenics', smalltalk.IAEPresentation, [], 'Presentation-AFI');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return "Nine Steps to Better Software Design";
return self;},
args: [],
source: unescape('description%0A%09%5E%20%27Nine%20Steps%20to%20Better%20Software%20Design%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AFIObjectCalisthenics);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.IAEIntroSlide || IAEIntroSlide),(smalltalk.IAEPractices || IAEPractices),(smalltalk.OCOneLevelIndentation || OCOneLevelIndentation),(smalltalk.OCNoElse || OCNoElse),(smalltalk.OCWrapPrimitivesStrings || OCWrapPrimitivesStrings),(smalltalk.OCOnlyOneDotPerLine || OCOnlyOneDotPerLine),(smalltalk.OCDontAbbreviate || OCDontAbbreviate),(smalltalk.OCKeepAllEntitiesSmall || OCKeepAllEntitiesSmall),(smalltalk.OCNoMoreTwoInstVar || OCNoMoreTwoInstVar),(smalltalk.OCFirstClassCollections || OCFirstClassCollections),(smalltalk.OCNoGetterSetter || OCNoGetterSetter)];
return self;},
args: [],
source: unescape('slideClasses%0A%09%5E%20%7B%0AIAEIntroSlide.%20%0AIAEPractices.%0AOCOneLevelIndentation.%0AOCNoElse.%0AOCWrapPrimitivesStrings.%0AOCOnlyOneDotPerLine.%0AOCDontAbbreviate.%0AOCKeepAllEntitiesSmall.%0AOCNoMoreTwoInstVar.%0AOCFirstClassCollections.%0AOCNoGetterSetter%0A%7D'),
messageSends: [],
referencedClasses: ["IAEIntroSlide", "IAEPractices", "OCOneLevelIndentation", "OCNoElse", "OCWrapPrimitivesStrings", "OCOnlyOneDotPerLine", "OCDontAbbreviate", "OCKeepAllEntitiesSmall", "OCNoMoreTwoInstVar", "OCFirstClassCollections", "OCNoGetterSetter"]
}),
smalltalk.AFIObjectCalisthenics);


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
smalltalk.AFIObjectCalisthenics.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'testing',
fn: function (){
var self=this;
return unescape("AFI%20-%20Object%20Calisthenics");
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27AFI%20-%20Object%20Calisthenics%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AFIObjectCalisthenics.klass);



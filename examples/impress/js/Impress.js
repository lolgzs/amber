smalltalk.addPackage('Impress', {});
smalltalk.addClass('ImpressPresentation', smalltalk.Widget, ['canvas'], 'Impress');
smalltalk.addMethod(
unescape('_loadImpressOn_'),
smalltalk.method({
selector: unescape('loadImpressOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_rel_", ["stylesheet"]);return smalltalk.send($rec, "_href_", [unescape("lib/impress/css/impress-demo.css")]);})(smalltalk.send(html, "_link", []));
smalltalk.send(smalltalk.send(html, "_script", []), "_src_", [unescape("lib/impress/js/impress.js")]);
return self;},
args: ["html"],
source: unescape('loadImpressOn%3A%20html%0A%09html%20link%20%0A%09%09rel%3A%20%27stylesheet%27%3B%20%0A%09%09href%3A%20%27lib/impress/css/impress-demo.css%27.%0A%09html%20script%20src%3A%20%27lib/impress/js/impress.js%27.%0A%0A%09'),
messageSends: ["rel:", "href:", "link", "src:", "script"],
referencedClasses: []
}),
smalltalk.ImpressPresentation);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["impress"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderSlidesOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_loadImpressOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20%0A%09%09id%3A%20%27impress%27%3B%0A%09%09with%3A%20%5B%20self%20renderSlidesOn%3A%20html%20%5D.%0A%0A%0A%09self%20loadImpressOn%3A%20html.'),
messageSends: ["id:", "with:", "renderSlidesOn:", "div", "loadImpressOn:"],
referencedClasses: []
}),
smalltalk.ImpressPresentation);

smalltalk.addMethod(
unescape('_renderSlidesOn_'),
smalltalk.method({
selector: unescape('renderSlidesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(0)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((1500), "_negated", [])])]), (function(){return smalltalk.send(html, "_p_", ["slide one"]);})]);smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(1000)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((1500), "_negated", [])])]), (function(){return smalltalk.send(html, "_p_", ["slide two"]);})]);smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(0)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((500), "_negated", [])]),smalltalk.send("z", "__minus_gt", [(2000)]),smalltalk.send("scale", "__minus_gt", [(1)]),smalltalk.send("rotate", "__minus_gt", [(90)])]), (function(){return smalltalk.send(html, "_p_", ["slide three"]);})]);smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(500)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((1500), "_negated", [])]),smalltalk.send(unescape("rotate-x"), "__minus_gt", [(0)]),smalltalk.send(unescape("rotate-y"), "__minus_gt", [(90)]),smalltalk.send("scale", "__minus_gt", [(3)])]), (function(){return smalltalk.send(html, "_p_", ["slide four"]);})]);return smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(0)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((0), "_negated", [])]),smalltalk.send("scale", "__minus_gt", [(10)])]), (function(){return smalltalk.send(html, "_p_", ["slide five"]);})]);})(self);
return self;},
args: ["html"],
source: unescape('renderSlidesOn%3A%20html%0A%09self%20%0A%09%09renderSlideOn%3A%20html%20effects%3A%20%23%7B%27x%27%20-%3E%200.%20%27y%27%20-%3E%201500%20negated%7D%20with%3A%20%5B%20html%20p%3A%20%27slide%20one%27%20%5D%3B%0A%09%09renderSlideOn%3A%20html%20effects%3A%20%23%7B%27x%27%20-%3E%201000.%20%27y%27%20-%3E%201500%20negated%7D%20with%3A%20%5B%20html%20p%3A%20%27slide%20two%27%20%5D%3B%0A%09%09renderSlideOn%3A%20html%20effects%3A%20%23%7B%27x%27%20-%3E%200.%20%27y%27%20-%3E%20500%20negated.%20%27z%27%20-%3E%202000.%20%27scale%27%20-%3E%201.%20%27rotate%27%20-%3E%2090%7D%20with%3A%20%5B%20html%20p%3A%20%27slide%20three%27%20%5D%3B%0A%09%09renderSlideOn%3A%20html%20effects%3A%20%23%7B%27x%27%20-%3E%20500.%20%27y%27%20-%3E%201500%20negated.%20%27rotate-x%27%20-%3E%200.%20%27rotate-y%27%20-%3E%2090.%27scale%27%20-%3E%203%7D%20with%3A%20%5B%20html%20p%3A%20%27slide%20four%27%20%5D%3B%0A%09%09renderSlideOn%3A%20html%20effects%3A%20%23%7B%27x%27%20-%3E%200.%20%27y%27%20-%3E%200%20negated.%20%27scale%27%20-%3E%2010%7D%20with%3A%20%5B%20html%20p%3A%20%27slide%20five%27%20%5D.'),
messageSends: ["renderSlideOn:effects:with:", unescape("-%3E"), "negated", "p:"],
referencedClasses: []
}),
smalltalk.ImpressPresentation);

smalltalk.addMethod(
unescape('_renderSlideOn_effects_with_'),
smalltalk.method({
selector: unescape('renderSlideOn%3Aeffects%3Awith%3A'),
category: 'rendering',
fn: function (html, aHashedCollection, aBlock){
var self=this;
var slide=nil;
(slide=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["step"]));
smalltalk.send(aHashedCollection, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(slide, "_at_put_", [smalltalk.send(unescape("data-"), "__comma", [key]), value]);})]);
smalltalk.send(slide, "_with_", [aBlock]);
return self;},
args: ["html", "aHashedCollection", "aBlock"],
source: unescape('renderSlideOn%3A%20html%20effects%3A%20aHashedCollection%20with%3A%20aBlock%0A%09%7Cslide%7C%0A%09slide%20%3A%3D%20html%20div%20class%3A%20%27step%27.%0A%09aHashedCollection%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%7C%20%20%20slide%20at%3A%20%27data-%27%2C%20key%20put%3A%20value%5D.%0A%09slide%20with%3A%20aBlock.'),
messageSends: ["class:", "div", "keysAndValuesDo:", "at:put:", unescape("%2C"), "with:"],
referencedClasses: []
}),
smalltalk.ImpressPresentation);



smalltalk.addClass('ImpressWorkspace', smalltalk.Widget, [], 'Impress');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var button=nil;
var workspace=nil;
(button=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Load presentation"]));
(workspace=smalltalk.send(smalltalk.send(html, "_div", []), "_id_", [unescape("impress-workspace")]));
smalltalk.send(button, "_onClick_", [(function(){return smalltalk.send(workspace, "_contents_", [(function(aCanvas){return smalltalk.send(smalltalk.send((smalltalk.ImpressPresentation || ImpressPresentation), "_new", []), "_renderOn_", [aCanvas]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7Cbutton%20workspace%7C%0A%09button%20%3A%3D%20html%20button%20with%3A%20%27Load%20presentation%27.%0A%09workspace%20%3A%3D%20html%20div%20id%3A%20%27impress-workspace%27.%0A%0A%09button%20onClick%3A%20%5Bworkspace%20contents%3A%20%5B%3AaCanvas%7C%20%20ImpressPresentation%20new%20%20renderOn%3A%20aCanvas%20%5D%5D.%0A%09'),
messageSends: ["with:", "button", "id:", "div", "onClick:", "contents:", "renderOn:", "new"],
referencedClasses: ["ImpressPresentation"]
}),
smalltalk.ImpressWorkspace);


smalltalk.addMethod(
unescape('_load'),
smalltalk.method({
selector: unescape('load'),
category: 'loading',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ImpressWorkspace || ImpressWorkspace), "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('load%0A%09ImpressWorkspace%20new%20appendToJQuery%3A%20%27body%27%20asJQuery'),
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: ["ImpressWorkspace"]
}),
smalltalk.ImpressWorkspace.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_load", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20load'),
messageSends: ["load"],
referencedClasses: []
}),
smalltalk.ImpressWorkspace.klass);



smalltalk.addPackage('Impress', {});
smalltalk.addClass('ImpressPresentation', smalltalk.Widget, ['canvas'], 'Impress');
smalltalk.addMethod(
unescape('_loadImpressOn_'),
smalltalk.method({
selector: unescape('loadImpressOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_rel_", ["stylesheet"]);return smalltalk.send($rec, "_href_", [unescape("lib/impress/css/impress-demo.css")]);})(smalltalk.send(html, "_link", []));
smalltalk.send(smalltalk.send(html, "_script", []), "_src_", [unescape("lib/impress/js/impress.js")]);
return self;}
}),
smalltalk.ImpressPresentation);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["impress"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderSlidesOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_loadImpressOn_", [html]);
return self;}
}),
smalltalk.ImpressPresentation);

smalltalk.addMethod(
unescape('_renderSlidesOn_'),
smalltalk.method({
selector: unescape('renderSlidesOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(0)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((1500), "_negated", [])])]), (function(){return smalltalk.send(html, "_p_", ["slide one"]);})]);smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(1000)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((1500), "_negated", [])])]), (function(){return smalltalk.send(html, "_p_", ["slide two"]);})]);smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(0)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((500), "_negated", [])]),smalltalk.send("z", "__minus_gt", [(2000)]),smalltalk.send("scale", "__minus_gt", [(1)]),smalltalk.send("rotate", "__minus_gt", [(90)])]), (function(){return smalltalk.send(html, "_p_", ["slide three"]);})]);smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(500)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((1500), "_negated", [])]),smalltalk.send(unescape("rotate-x"), "__minus_gt", [(0)]),smalltalk.send(unescape("rotate-y"), "__minus_gt", [(90)]),smalltalk.send("scale", "__minus_gt", [(3)])]), (function(){return smalltalk.send(html, "_p_", ["slide four"]);})]);return smalltalk.send($rec, "_renderSlideOn_effects_with_", [html, smalltalk.HashedCollection._fromPairs_([smalltalk.send("x", "__minus_gt", [(0)]),smalltalk.send("y", "__minus_gt", [smalltalk.send((0), "_negated", [])]),smalltalk.send("scale", "__minus_gt", [(10)])]), (function(){return smalltalk.send(html, "_p_", ["slide five"]);})]);})(self);
return self;}
}),
smalltalk.ImpressPresentation);

smalltalk.addMethod(
unescape('_renderSlideOn_effects_with_'),
smalltalk.method({
selector: unescape('renderSlideOn%3Aeffects%3Awith%3A'),
fn: function (html, aHashedCollection, aBlock){
var self=this;
var slide=nil;
(slide=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["step"]));
smalltalk.send(aHashedCollection, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(slide, "_at_put_", [smalltalk.send(unescape("data-"), "__comma", [key]), value]);})]);
smalltalk.send(slide, "_with_", [aBlock]);
return self;}
}),
smalltalk.ImpressPresentation);



smalltalk.addClass('ImpressWorkspace', smalltalk.Widget, [], 'Impress');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var button=nil;
var workspace=nil;
(button=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Load presentation"]));
(workspace=smalltalk.send(smalltalk.send(html, "_div", []), "_id_", [unescape("impress-workspace")]));
smalltalk.send(button, "_onClick_", [(function(){return smalltalk.send(workspace, "_contents_", [(function(aCanvas){return smalltalk.send(smalltalk.send((smalltalk.ImpressPresentation || ImpressPresentation), "_new", []), "_renderOn_", [aCanvas]);})]);})]);
return self;}
}),
smalltalk.ImpressWorkspace);


smalltalk.addMethod(
unescape('_load'),
smalltalk.method({
selector: unescape('load'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ImpressWorkspace || ImpressWorkspace), "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.ImpressWorkspace.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_load", []);
return self;}
}),
smalltalk.ImpressWorkspace.klass);



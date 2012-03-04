smalltalk.addPackage('Presentation', {});
smalltalk.addClass('Presentation', smalltalk.Widget, ['currentSlide', 'slides'], 'Presentation');
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "_title", []);
    return self;
},
args: [],
source: unescape('title%0A%09%5E%20self%20class%20title.'),
messageSends: ["title", "class"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
category: 'accessing',
fn: function () {
    var self = this;
    return "John Smith";
    return self;
},
args: [],
source: unescape('author%0A%09%5E%27John%20Smith%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("http%3A//jtalk-project.org");
    return self;
},
args: [],
source: unescape('url%0A%09%5E%27http%3A//jtalk-project.org%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function () {
    var self = this;
    return "A presentation written in Jtalk";
    return self;
},
args: [],
source: unescape('description%0A%09%5E%27A%20presentation%20written%20in%20Jtalk%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("john@smith.com");
    return self;
},
args: [],
source: unescape('email%0A%09%5E%27john@smith.com%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_slides'),
smalltalk.method({
selector: unescape('slides'),
category: 'accessing',
fn: function () {
    var self = this;
    ($receiver = self['@slides']) == nil || $receiver == undefined ? function () {return smalltalk.send(self, "_initSlides", []);}() : $receiver;
    return self['@slides'];
    return self;
},
args: [],
source: unescape('slides%0A%09slides%20ifNil%3A%20%5Bself%20initSlides%5D.%0A%09%5Eslides'),
messageSends: ["ifNil:", "initSlides"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: unescape('slideClasses%0A%09%5Eself%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_currentSlide'),
smalltalk.method({
selector: unescape('currentSlide'),
category: 'accessing',
fn: function () {
    var self = this;
    return self['@currentSlide'];
    return self;
},
args: [],
source: unescape('currentSlide%0A%09%5EcurrentSlide'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_currentSlide_'),
smalltalk.method({
selector: unescape('currentSlide%3A'),
category: 'accessing',
fn: function (aSlide) {
    var self = this;
    self['@currentSlide'] = aSlide;
    return self;
},
args: ["aSlide"],
source: unescape('currentSlide%3A%20aSlide%0A%09currentSlide%20%3A%3D%20aSlide'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_slideTransition'),
smalltalk.method({
selector: unescape('slideTransition'),
category: 'accessing',
fn: function () {
    var self = this;
    return "fade";
    return self;
},
args: [],
source: unescape('slideTransition%0A%09%5E%27fade%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: unescape('style%0A%09%22Should%20return%20a%20CSS%20style%22%0A%09%5E%20%27%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_nextSlide'),
smalltalk.method({
selector: unescape('nextSlide'),
category: 'actions',
fn: function () {
    var self = this;
    var next = nil;
    ($receiver = smalltalk.send(self, "_currentSlide", [])) != nil &&
        $receiver != undefined ? function () {next = smalltalk.send(smalltalk.send(self, "_slides", []), "_at_ifAbsent_", [($receiver = smalltalk.send(self, "_currentSlideIndex", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), function () {return nil;}]);return ($receiver = next) != nil && $receiver != undefined ? function () {self['@currentSlide'] = next;return smalltalk.send(next, "_show", []);}() : nil;}() : nil;
    return self;
},
args: [],
source: unescape('nextSlide%0A%09%7C%20next%20%7C%0A%09self%20currentSlide%20ifNotNil%3A%20%5B%0A%09%09next%20%3A%3D%20self%20slides%20%0A%09%09%09at%3A%20%28self%20currentSlideIndex%29%20+%201%0A%09%09%09ifAbsent%3A%20%5Bnil%5D.%0A%09%09next%20ifNotNil%3A%20%5BcurrentSlide%20%3A%3D%20next.%20next%20show%5D%5D'),
messageSends: ["ifNotNil:", "currentSlide", "at:ifAbsent:", "slides", unescape("+"), "currentSlideIndex", "show"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_showCurrentSlide'),
smalltalk.method({
selector: unescape('showCurrentSlide'),
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_currentSlide", [])) != nil &&
        $receiver != undefined ? function () {smalltalk.send(smalltalk.send(".slide", "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(smalltalk.send(self, "_currentSlide", []), "_id", [])]), "_asJQuery", []), "_show", []);return smalltalk.send(smalltalk.send("title", "_asJQuery", []), "_text_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_title", []), "__comma", [unescape("%20-%20")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentSlide", []), "_id", [])])]);}() : nil;
    return self;
},
args: [],
source: unescape('showCurrentSlide%0A%09self%20currentSlide%20ifNotNil%3A%20%5B%0A%09%09%27.slide%27%20asJQuery%20hide.%0A%09%09%28%27%23%27%2C%20self%20currentSlide%20id%29%20asJQuery%20show.%0A%20%20%20%20%20%20%20%20%20%20%09%27title%27%20asJQuery%20text%3A%20self%20title%2C%20%27%20-%20%27%2C%20self%20currentSlide%20id.%0A%20%20%20%20%20%20%20%20%5D'),
messageSends: ["ifNotNil:", "currentSlide", "hide", "asJQuery", "show", unescape("%2C"), "id", "text:", "title"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_previousSlide'),
smalltalk.method({
selector: unescape('previousSlide'),
category: 'actions',
fn: function () {
    var self = this;
    var next = nil;
    ($receiver = smalltalk.send(self, "_currentSlide", [])) != nil &&
        $receiver != undefined ? function () {next = smalltalk.send(smalltalk.send(self, "_slides", []), "_at_ifAbsent_", [($receiver = smalltalk.send(self, "_currentSlideIndex", [])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), function () {return nil;}]);return ($receiver = next) != nil && $receiver != undefined ? function () {self['@currentSlide'] = next;return smalltalk.send(next, "_show", []);}() : nil;}() : nil;
    return self;
},
args: [],
source: unescape('previousSlide%0A%09%7C%20next%20%7C%0A%09self%20currentSlide%20ifNotNil%3A%20%5B%0A%09%09next%20%3A%3D%20self%20slides%20%0A%09%09%09at%3A%20%28self%20currentSlideIndex%29%20-%201%0A%09%09%09ifAbsent%3A%20%5Bnil%5D.%0A%09%09next%20ifNotNil%3A%20%5BcurrentSlide%20%3A%3D%20next.%20next%20show%5D%5D'),
messageSends: ["ifNotNil:", "currentSlide", "at:ifAbsent:", "slides", unescape("-"), "currentSlideIndex", "show"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_moveAt_'),
smalltalk.method({
selector: unescape('moveAt%3A'),
category: 'actions',
fn: function (anInteger) {
    var self = this;
    var next = nil;
    next = smalltalk.send(smalltalk.send(self, "_slides", []), "_at_ifAbsent_", [anInteger, function () {return nil;}]);
    ($receiver = next) != nil && $receiver != undefined ? function () {self['@currentSlide'] = next;return smalltalk.send(next, "_show", []);}() : nil;
    return self;
},
args: ["anInteger"],
source: unescape('moveAt%3A%20anInteger%0A%09%7C%20next%20%7C%0A%09next%20%3A%3D%20self%20slides%20%0A%09%09%09at%3A%20anInteger%0A%09%09%09ifAbsent%3A%20%5Bnil%5D.%0A%09next%20ifNotNil%3A%20%5BcurrentSlide%20%3A%3D%20next.%20next%20show%5D'),
messageSends: ["at:ifAbsent:", "slides", "ifNotNil:", "show"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_currentSlideIndex'),
smalltalk.method({
selector: unescape('currentSlideIndex'),
category: 'actions',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_slides", []), "_indexOf_ifAbsent_", [smalltalk.send(self, "_currentSlide", []), function () {return 1;}]);
    return self;
},
args: [],
source: unescape('currentSlideIndex%0A%09%5E%20self%20slides%20indexOf%3A%20self%20currentSlide%20ifAbsent%3A%20%5B1%5D'),
messageSends: ["indexOf:ifAbsent:", "slides", "currentSlide"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_slidesDo_'),
smalltalk.method({
selector: unescape('slidesDo%3A'),
category: 'enumerating',
fn: function (aBlockWithArg) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_slides", []), "_do_", [function (aSlide) {return smalltalk.send(aBlockWithArg, "_value_", [aSlide]);}]);
    return self;
},
args: ["aBlockWithArg"],
source: unescape('slidesDo%3A%20aBlockWithArg%0A%09self%20slides%20do%3A%20%5B%3AaSlide%7C%20aBlockWithArg%20value%3A%20aSlide%5D.'),
messageSends: ["do:", "slides", "value:"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_initSlides'),
smalltalk.method({
selector: unescape('initSlides'),
category: 'initialization',
fn: function () {
    var self = this;
    self['@slides'] = smalltalk.send(smalltalk.send(self, "_slideClasses", []), "_collect_", [function (each) {return smalltalk.send(each, "_on_", [self]);}]);
    return self;
},
args: [],
source: unescape('initSlides%0A%09slides%20%3A%3D%20self%20slideClasses%20collect%3A%20%5B%3Aeach%20%7C%20each%20on%3A%20self%5D'),
messageSends: ["collect:", "slideClasses", "on:"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_type_", [unescape("text/css")]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_style", [])]);}(smalltalk.send(html, "_style", [])));
    (function ($rec) {smalltalk.send($rec, "_id_", ["slides"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderSlidesOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20style%0A%09%09type%3A%20%27text/css%27%3B%0A%09%09with%3A%20self%20style.%0A%09html%20div%20%0A%09%09id%3A%20%27slides%27%3B%0A%09%09with%3A%20%5Bself%20renderSlidesOn%3A%20html%5D'),
messageSends: ["type:", "with:", "style", "id:", "renderSlidesOn:", "div"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
unescape('_renderSlidesOn_'),
smalltalk.method({
selector: unescape('renderSlidesOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_slides", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);
    ($receiver = self['@currentSlide']) == nil ||
        $receiver == undefined ? function () {return self['@currentSlide'] = smalltalk.send(smalltalk.send(self, "_slides", []), "_first", []);}() : $receiver;
    smalltalk.send(self, "_showCurrentSlide", []);
    return self;
},
args: ["html"],
source: unescape('renderSlidesOn%3A%20html%0A%09self%20slides%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09each%20renderOn%3A%20html%5D.%0A%09currentSlide%20ifNil%3A%20%5BcurrentSlide%20%3A%3D%20self%20slides%20first%5D.%0A%09self%20showCurrentSlide'),
messageSends: ["do:", "slides", "renderOn:", "ifNil:", "first", "showCurrentSlide"],
referencedClasses: []
}),
smalltalk.Presentation);


smalltalk.Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_concretePresentations'),
smalltalk.method({
selector: unescape('concretePresentations'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_allSubclasses", []), "_select_", [function (aPresentationClass) {return smalltalk.send(aPresentationClass, "_isConcrete", []);}]);
    return self;
},
args: [],
source: unescape('concretePresentations%0A%09%5E%20self%20allSubclasses%20select%3A%20%5B%3AaPresentationClass%7C%20aPresentationClass%20isConcrete%5D'),
messageSends: ["select:", "allSubclasses", "isConcrete"],
referencedClasses: []
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function () {
    var self = this;
    return "Slides";
    return self;
},
args: [],
source: unescape('title%0A%09%5E%20%27Slides%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
unescape('_concretePresentationsDo_'),
smalltalk.method({
selector: unescape('concretePresentationsDo%3A'),
category: 'enumerating',
fn: function (aBlockWithArg) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_concretePresentations", []), "_do_", [aBlockWithArg]);
    return self;
},
args: ["aBlockWithArg"],
source: unescape('concretePresentationsDo%3A%20aBlockWithArg%0A%09self%20concretePresentations%20do%3A%20aBlockWithArg.'),
messageSends: ["do:", "concretePresentations"],
referencedClasses: []
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: unescape('isConcrete%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation.klass);


smalltalk.addClass('PresentationNavigator', smalltalk.Widget, ['presentationBrush', 'currentPresentation', 'slideSelect'], 'Presentation');
smalltalk.addMethod(
unescape('_currentPresentation_'),
smalltalk.method({
selector: unescape('currentPresentation%3A'),
category: 'accessing',
fn: function (aPresentation) {
    var self = this;
    self['@currentPresentation'] = aPresentation;
    return self;
},
args: ["aPresentation"],
source: unescape('currentPresentation%3A%20aPresentation%0A%09currentPresentation%20%3A%3D%20aPresentation.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_currentPresentation'),
smalltalk.method({
selector: unescape('currentPresentation'),
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@currentPresentation']) == nil ||
        $receiver == undefined ? function () {return self['@currentPresentation'] = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Presentation || Presentation, "_concretePresentations", []), "_first", []), "_new", []);}() : $receiver;
    return self;
},
args: [],
source: unescape('currentPresentation%0A%09%5E%20%20currentPresentation%20ifNil%3A%20%5BcurrentPresentation%20%3A%3D%20Presentation%20concretePresentations%20first%20new%5D.'),
messageSends: ["ifNil:", "new", "first", "concretePresentations"],
referencedClasses: ["Presentation"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%0A%23navigator%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23navigator%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A%23navigator%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A");
    return self;
},
args: [],
source: unescape('style%0A%09%5E%20%27%0A%23navigator%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23navigator%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A%23navigator%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_selectPresentation_'),
smalltalk.method({
selector: unescape('selectPresentation%3A'),
category: 'callbacks',
fn: function (aPresentationClass) {
    var self = this;
    smalltalk.send(self, "_currentPresentation_", [smalltalk.send(aPresentationClass, "_new", [])]);
    smalltalk.send(self, "_renderCurrentPresentation", []);
    return self;
},
args: ["aPresentationClass"],
source: unescape('selectPresentation%3A%20aPresentationClass%0A%09self%20currentPresentation%3A%20aPresentationClass%20new.%0A%09self%20renderCurrentPresentation.'),
messageSends: ["currentPresentation:", "new", "renderCurrentPresentation"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_selectPresentationNamed_'),
smalltalk.method({
selector: unescape('selectPresentationNamed%3A'),
category: 'callbacks',
fn: function (aString) {
    var self = this;
    var presentationClass = nil;
    presentationClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);
    ($receiver = presentationClass) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_selectPresentation_", [presentationClass]);}() : nil;
    return self;
},
args: ["aString"],
source: unescape('selectPresentationNamed%3A%20aString%0A%09%7CpresentationClass%7C%0A%09presentationClass%20%3A%3D%20%20%28Smalltalk%20current%20at%3A%20aString%29.%0A%09presentationClass%20ifNotNil%3A%20%5B%20self%20selectPresentation%3A%20presentationClass%20%5D.'),
messageSends: ["at:", "current", "ifNotNil:", "selectPresentation:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_previousSlide'),
smalltalk.method({
selector: unescape('previousSlide'),
category: 'callbacks',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_previousSlide", []);
    smalltalk.send(self, "_updateHash", []);
    return self;
},
args: [],
source: unescape('previousSlide%0A%09self%20currentPresentation%20previousSlide.%0A%09self%20updateHash.'),
messageSends: ["previousSlide", "currentPresentation", "updateHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_nextSlide'),
smalltalk.method({
selector: unescape('nextSlide'),
category: 'callbacks',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_nextSlide", []);
    smalltalk.send(self, "_updateHash", []);
    return self;
},
args: [],
source: unescape('nextSlide%0A%09self%20currentPresentation%20nextSlide.%0A%09self%20updateHash.'),
messageSends: ["nextSlide", "currentPresentation", "updateHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_reload'),
smalltalk.method({
selector: unescape('reload'),
category: 'callbacks',
fn: function () {
    var self = this;
    var slideIndex = nil;
    slideIndex = smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_currentSlideIndex", []);
    smalltalk.send(self, "_currentPresentation_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_class", []), "_new", [])]);
    smalltalk.send(self, "_renderCurrentPresentation", []);
    smalltalk.send(self, "_selectSlideAt_", [slideIndex]);
    return self;
},
args: [],
source: unescape('reload%0A%09%7CslideIndex%7C%0A%09slideIndex%20%3A%3D%20self%20currentPresentation%20currentSlideIndex.%0A%09self%20currentPresentation%3A%20self%20currentPresentation%20class%20new.%0A%09self%20renderCurrentPresentation.%0A%09self%20selectSlideAt%3A%20slideIndex.'),
messageSends: ["currentSlideIndex", "currentPresentation", "currentPresentation:", "new", "class", "renderCurrentPresentation", "selectSlideAt:"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_selectSlideAt_'),
smalltalk.method({
selector: unescape('selectSlideAt%3A'),
category: 'callbacks',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_moveAt_", [anInteger]);
    smalltalk.send(self, "_updateHash", []);
    return self;
},
args: ["anInteger"],
source: unescape('selectSlideAt%3A%20anInteger%0A%09self%20currentPresentation%20moveAt%3A%20anInteger.%0A%09self%20updateHash.'),
messageSends: ["moveAt:", "currentPresentation", "updateHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_updateHash'),
smalltalk.method({
selector: unescape('updateHash'),
category: 'callbacks',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof document == "undefined" ? nil : document, "_location", []), "_hash_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_class", []), "_name", []), "__comma", [unescape("-")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_currentSlideIndex", [])])]);
    return self;
},
args: [],
source: unescape('updateHash%0A%09document%20location%20hash%3A%20self%20currentPresentation%20class%20name%2C%20%27-%27%2C%20self%20currentPresentation%20currentSlideIndex.'),
messageSends: ["hash:", "location", unescape("%2C"), "name", "class", "currentPresentation", "currentSlideIndex"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_checkHash'),
smalltalk.method({
selector: unescape('checkHash'),
category: 'hash',
fn: function () {
    var self = this;
    try {
        var hash = nil;
        var presentation = nil;
        hash = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(typeof document == "undefined" ? nil : document, "_location", []), "_hash", []), "_replace_with_", [unescape("%5E%23"), ""]), "_tokenize_", [unescape("-")]);
        presentation = smalltalk.send(smalltalk.send(smalltalk.Presentation || Presentation, "_concretePresentations", []), "_detect_ifNone_", [function (aPresentationClass) {return smalltalk.send(smalltalk.send(aPresentationClass, "_name", []), "__eq_eq", [smalltalk.send(hash, "_first", [])]);}, function () {return function () {throw {name: "stReturn", selector: "_checkHash", fn: function () {return self;}};}();}]);
        ($receiver = smalltalk.send(presentation, "__eq_eq", [smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_class", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {smalltalk.send(self, "_selectPresentationNamed_", [presentation]);return smalltalk.send(self, "_selectSlideAt_", [smalltalk.send(hash, "_last", [])]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {smalltalk.send(self, "_selectPresentationNamed_", [presentation]);return smalltalk.send(self, "_selectSlideAt_", [smalltalk.send(hash, "_last", [])]);}]);
        return self;
    } catch (e) {
        if (e.name === "stReturn" && e.selector === "_checkHash") {
            return e.fn();
        }
        throw e;
    }
},
args: [],
source: unescape('checkHash%0A%09%7C%20hash%20presentation%20%7C%0A%09hash%20%3A%3D%20%28document%20location%20hash%20%20replace%3A%20%27%5E%23%27%20with%3A%20%27%27%29%20tokenize%3A%20%27-%27.%20%0A%09presentation%20%3A%3D%20Presentation%20concretePresentations%20%0A%09%09%09%09detect%3A%20%5B%3AaPresentationClass%20%7C%20aPresentationClass%20name%20%3D%3D%20hash%20first%5D%0A%09%09%09%09ifNone%3A%20%5B%5E%20self%5D.%0A%09presentation%20%3D%3D%20self%20currentPresentation%20class%20ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09self%20selectPresentationNamed%3A%20presentation.%0A%20%20%20%20%20%20%20%20%20%20%09self%20selectSlideAt%3A%20hash%20last%0A%20%20%20%20%20%20%20%20%5D.'),
messageSends: ["tokenize:", "replace:with:", "hash", "location", "detect:ifNone:", "concretePresentations", unescape("%3D%3D"), "name", "first", "ifFalse:", "class", "currentPresentation", "selectPresentationNamed:", "selectSlideAt:", "last"],
referencedClasses: ["Presentation"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_checkHashChange'),
smalltalk.method({
selector: unescape('checkHashChange'),
category: 'hash',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof window == "undefined" ? nil : window]), "_bind_do_", ["hashchange", function () {return smalltalk.send(self, "_checkHash", []);}]);
    return self;
},
args: [],
source: unescape('checkHashChange%0A%09%28window%20jQuery%3A%20window%29%20bind%3A%20%27hashchange%27%20do%3A%20%5Bself%20checkHash%5D'),
messageSends: ["bind:do:", "jQuery:", "checkHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_setKeybindings'),
smalltalk.method({
selector: unescape('setKeybindings'),
category: 'keybindings',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof document == "undefined" ? nil : document]), "_keyup_", [function (e) {var node = nil;node = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(e, "_target", []), "_nodeName", []), "_asString", []), "_asLowercase", []);return ($receiver = smalltalk.send(smalltalk.send(node, "__eq", ["textarea"]), "_or_", [function () {return smalltalk.send(node, "__eq", ["input"]);}])).klass === smalltalk.Boolean ? !$receiver ? function () {($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [39])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_nextSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_nextSlide", []);}]);return ($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [37])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_previousSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_previousSlide", []);}]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [39])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_nextSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_nextSlide", []);}]);return ($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [37])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_previousSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_previousSlide", []);}]);}]);}]);
    return self;
},
args: [],
source: unescape('setKeybindings%0A%09%28window%20jQuery%3A%20document%29%20keyup%3A%20%5B%3Ae%20%7C%7C%20node%20%7C%0A%09%09node%20%3A%3D%20e%20target%20nodeName%20asString%20asLowercase.%0A%09%09%28node%20%3D%20%27textarea%27%20or%3A%20%5Bnode%20%3D%20%27input%27%5D%29%20ifFalse%3A%20%5B%0A%09%09%09e%20keyCode%20%3D%2039%20ifTrue%3A%20%5Bself%20nextSlide%5D.%0A%09%09%09e%20keyCode%20%3D%2037%20ifTrue%3A%20%5Bself%20previousSlide%5D%5D%5D'),
messageSends: ["keyup:", "jQuery:", "asLowercase", "asString", "nodeName", "target", "ifFalse:", "or:", unescape("%3D"), "ifTrue:", "keyCode", "nextSlide", "previousSlide"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_renderToolsOn_'),
smalltalk.method({
selector: unescape('renderToolsOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", ["IDE"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_open", []);}]);}(smalltalk.send(html, "_a", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", ["Reload"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_reload", []);}]);}(smalltalk.send(html, "_a", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", [unescape("%u2190")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_previousSlide", []);}]);}(smalltalk.send(html, "_a", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", [unescape("%u2192")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_nextSlide", []);}]);}(smalltalk.send(html, "_a", [])));
    return self;
},
args: ["html"],
source: unescape('renderToolsOn%3A%20html%0A%09html%20a%20%0A%09%09with%3A%20%27IDE%27%3B%0A%09%09onClick%3A%20%5BTabManager%20current%20open%5D.%0A%09html%20a%0A%09%09with%3A%20%27Reload%27%3B%0A%09%09onClick%3A%20%5Bself%20reload%5D.%0A%09html%20a%0A%09%09with%3A%20%27%u2190%27%3B%0A%09%09onClick%3A%20%5Bself%20previousSlide%5D.%0A%09html%20a%0A%09%09with%3A%20%27%u2192%27%3B%0A%09%09onClick%3A%20%5Bself%20nextSlide%5D.'),
messageSends: ["with:", "onClick:", "open", "current", "a", "reload", "previousSlide", "nextSlide"],
referencedClasses: ["TabManager"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_renderPresentationSelectOn_'),
smalltalk.method({
selector: unescape('renderPresentationSelectOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    var presentationSelect = nil;
    presentationSelect = smalltalk.send(html, "_select", []);
    (function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_selectPresentationNamed_", [smalltalk.send(smalltalk.send(presentationSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.Presentation || Presentation, "_concretePresentationsDo_", [function (aPresentationClass) {return function ($rec) {smalltalk.send($rec, "_value_", [smalltalk.send(aPresentationClass, "_name", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send(aPresentationClass, "_title", [])]);}(smalltalk.send(html, "_option", []));}]);}]);}(presentationSelect));
    return self;
},
args: ["html"],
source: unescape('renderPresentationSelectOn%3A%20html%0A%09%7CpresentationSelect%7C%0A%09presentationSelect%20%3A%3D%20html%20select.%0A%09presentationSelect%0A%09%09onChange%3A%20%5Bself%20%20selectPresentationNamed%3A%20%20presentationSelect%20asJQuery%20val%5D%3B%0A%09%09with%3A%20%5B%09Presentation%20concretePresentationsDo%3A%20%5B%3AaPresentationClass%20%7C%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09%09%09html%20option%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09%09%09%09value%3A%20aPresentationClass%20name%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09%09%09%09with%3A%20aPresentationClass%20title%20%5D%20%5D.'),
messageSends: ["select", "onChange:", "selectPresentationNamed:", "val", "asJQuery", "with:", "concretePresentationsDo:", "value:", "name", "title", "option"],
referencedClasses: ["Presentation"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof document == "undefined" ? nil : document]), "_ready_", [function () {return function ($rec) {smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);smalltalk.send($rec, "_setKeybindings", []);return smalltalk.send($rec, "_checkHashChange", []);}(self);}]);
    return self;
},
args: [],
source: unescape('open%0A%09%28window%20jQuery%3A%20document%29%20%20ready%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09self%20%0A%20%20%20%20%20%20%20%20%20%20%09%09appendToJQuery%3A%20%27body%27%20asJQuery%3B%0A%20%20%20%20%20%20%20%20%20%20%09%09setKeybindings%3B%0A%20%20%20%20%20%20%20%20%20%20%09%09checkHashChange.%0A%20%20%20%20%20%20%20%20%5D.'),
messageSends: ["ready:", "jQuery:", "appendToJQuery:", "asJQuery", "setKeybindings", "checkHashChange"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_type_", [unescape("text/css")]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_style", [])]);}(smalltalk.send(html, "_style", [])));
    (function ($rec) {smalltalk.send($rec, "_id_", ["navigator"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_renderToolsOn_", [html]);smalltalk.send($rec, "_renderPresentationSelectOn_", [html]);return smalltalk.send($rec, "_renderSlideSelectOn_", [html]);}(self);}]);}(smalltalk.send(html, "_div", [])));
    self['@presentationBrush'] = function ($rec) {smalltalk.send($rec, "_id_", ["presentation"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_div", []));
    smalltalk.send(self, "_checkHash", []);
    smalltalk.send(self, "_renderCurrentPresentation", []);
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20style%0A%09%09type%3A%20%27text/css%27%3B%0A%09%09with%3A%20self%20style.%0A%09html%20div%0A%09%09id%3A%20%27navigator%27%3B%0A%09%09with%3A%20%5B%09self%0A%09%09%09%09%09renderToolsOn%3A%20html%3B%0A%09%09%09%09%09renderPresentationSelectOn%3A%20html%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09renderSlideSelectOn%3A%20html%5D.%0A%0A%09presentationBrush%20%3A%3D%20html%20div%20%0A%09%09%09%09%09%09%09id%3A%20%27presentation%27%3B%0A%09%09%09%09%09%09%09yourself.%0A%0A%09self%20checkHash.%0A%09self%20renderCurrentPresentation.'),
messageSends: ["type:", "with:", "style", "id:", "renderToolsOn:", "renderPresentationSelectOn:", "renderSlideSelectOn:", "div", "yourself", "checkHash", "renderCurrentPresentation"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_renderCurrentPresentation'),
smalltalk.method({
selector: unescape('renderCurrentPresentation'),
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(self['@presentationBrush'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_renderOn_", [html]);}]);
    smalltalk.send(self, "_updateSlideSelect", []);
    return self;
},
args: [],
source: unescape('renderCurrentPresentation%0A%09presentationBrush%20contents%3A%20%5B%3Ahtml%20%7C%0A%20%20%20%20%20%20%20%20%09self%20currentPresentation%20renderOn%3A%20html.%0A%20%20%20%20%20%20%20%20%5D.%0A%09self%20updateSlideSelect.'),
messageSends: ["contents:", "renderOn:", "currentPresentation", "updateSlideSelect"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_renderSlideSelectOn_'),
smalltalk.method({
selector: unescape('renderSlideSelectOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@slideSelect'] = smalltalk.send(html, "_select", []);
    smalltalk.send(self['@slideSelect'], "_onChange_", [function () {return smalltalk.send(self, "_selectSlideAt_", [smalltalk.send(smalltalk.send(self['@slideSelect'], "_asJQuery", []), "_val", [])]);}]);
    smalltalk.send(self, "_updateSlideSelect", []);
    return self;
},
args: ["html"],
source: unescape('renderSlideSelectOn%3A%20html%0A%09slideSelect%20%3A%3D%20html%20select.%0A%09slideSelect%20onChange%3A%20%5B%20self%20%20selectSlideAt%3A%20%20slideSelect%20asJQuery%20val%20%5D.%0A%09self%20updateSlideSelect.'),
messageSends: ["select", "onChange:", "selectSlideAt:", "val", "asJQuery", "updateSlideSelect"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
unescape('_updateSlideSelect'),
smalltalk.method({
selector: unescape('updateSlideSelect'),
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(self['@slideSelect'], "_contents_", [function (html) {var index = nil;index = 0;return smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_slidesDo_", [function (aSlide) {index = ($receiver = index).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return function ($rec) {smalltalk.send($rec, "_value_", [index]);return smalltalk.send($rec, "_with_", [smalltalk.send(aSlide, "_title", [])]);}(smalltalk.send(html, "_option", []));}]);}]);
    return self;
},
args: [],
source: unescape('updateSlideSelect%0A%09slideSelect%20contents%3A%20%5B%3Ahtml%7C%20%7Cindex%7C%0A%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09index%20%3A%3D%200.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%20%20%20%20%20%20%20%09%09self%20currentPresentation%20slidesDo%3A%20%5B%20%3AaSlide%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09index%20%3A%3D%20index%20+%201.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09html%20option%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%20%20%20%20%09%09%09%09%09value%3A%20index%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09%09%09%09with%3A%20aSlide%20title%20%5D%20%5D.'),
messageSends: ["contents:", "slidesDo:", "currentPresentation", unescape("+"), "value:", "with:", "title", "option"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialize',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_open", []);
    return self;
},
args: [],
source: unescape('initialize%0A%09%5E%20self%20open'),
messageSends: ["open"],
referencedClasses: []
}),
smalltalk.PresentationNavigator.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'initialize',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
},
args: [],
source: unescape('open%0A%09%5E%20self%20new%20open'),
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.PresentationNavigator.klass);


smalltalk.addClass('Slide', smalltalk.Widget, ['presentation'], 'Presentation');
smalltalk.addMethod(
unescape('_presentation'),
smalltalk.method({
selector: unescape('presentation'),
category: 'accessing',
fn: function () {
    var self = this;
    return self['@presentation'];
    return self;
},
args: [],
source: unescape('presentation%0A%09%5Epresentation'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_presentation_'),
smalltalk.method({
selector: unescape('presentation%3A'),
category: 'accessing',
fn: function (aPresentation) {
    var self = this;
    self['@presentation'] = aPresentation;
    return self;
},
args: ["aPresentation"],
source: unescape('presentation%3A%20aPresentation%0A%09presentation%20%3A%3D%20aPresentation'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "_name", []);
    return self;
},
args: [],
source: unescape('id%0A%09%5E%20self%20class%20name'),
messageSends: ["name", "class"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%23555");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%23555%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_id", []);
    return self;
},
args: [],
source: unescape('title%0A%09%5E%20self%20id'),
messageSends: ["id"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: unescape('style%0A%09%5E%20%27%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_backgroundColor", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [unescape("%23slides")]), "_css_color_", ["background", smalltalk.send(self, "_backgroundColor", [])]);}() : nil;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [".slide"]), "_hide_options_duration_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_slideTransition", []), [], 300]);
    (function ($rec) {smalltalk.send($rec, "_attr_put_", ["style", smalltalk.send(self, "_style", [])]);return smalltalk.send($rec, "_show_options_duration_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_slideTransition", []), [], 300]);}(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_id", [])])])));
    return self;
},
args: [],
source: unescape('show%0A%09self%20backgroundColor%20ifNotNil%3A%20%5B%0A%09%09%28window%20jQuery%3A%20%27%23slides%27%29%20css%3A%20%27background%27%20color%3A%20self%20backgroundColor%5D.%0A%09%28window%20jQuery%3A%20%27.slide%27%29%20hide%3A%20self%20presentation%20slideTransition%20options%3A%20%23%28%29%20duration%3A%20300.%0A%09%28window%20jQuery%3A%20%27%23%27%2C%20self%20id%29%0A%09%09attr%3A%20%27style%27%20put%3A%20self%20style%3B%0A%09%09show%3A%20self%20presentation%20slideTransition%20options%3A%20%23%28%29%20duration%3A%20300.'),
messageSends: ["ifNotNil:", "backgroundColor", "css:color:", "jQuery:", "hide:options:duration:", "slideTransition", "presentation", "attr:put:", "style", "show:options:duration:", unescape("%2C"), "id"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", [smalltalk.send(self, "_cssClass", [])]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(self, "_renderSlideOn_", [html]);return smalltalk.send(self, "_renderMetaOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20class%3A%20self%20cssClass%3B%20id%3A%20self%20id%3B%20with%3A%20%5B%0A%09%09self%20renderSlideOn%3A%20html.%0A%09%09self%20renderMetaOn%3A%20html%5D'),
messageSends: ["class:", "cssClass", "id:", "id", "with:", "renderSlideOn:", "renderMetaOn:", "div"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
unescape('_renderMetaOn_'),
smalltalk.method({
selector: unescape('renderMetaOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["meta"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_title", [])]);}(smalltalk.send(html, "_p", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["description"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])]);}(smalltalk.send(html, "_p", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["author"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send("mailto:", "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])])]);}(smalltalk.send(html, "_a", [])));return function ($rec) {smalltalk.send($rec, "_class_", ["url"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_url", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_url", [])]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderMetaOn%3A%20html%0A%09html%20div%20%0A%09%09id%3A%20%27meta%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20p%20class%3A%20%27title%27%3B%20with%3A%20self%20presentation%20title.%0A%09%09%09html%20p%20class%3A%20%27description%27%3B%20with%3A%20self%20presentation%20description.%0A%09%09%09html%20a%20class%3A%20%27author%27%3B%20with%3A%20self%20presentation%20author%3B%20href%3A%20%27mailto%3A%27%2C%20self%20presentation%20email.%0A%09%09%09html%20a%20class%3A%20%27url%27%3B%20with%3A%20self%20presentation%20url%3B%20href%3A%20self%20presentation%20url%5D'),
messageSends: ["id:", "with:", "class:", "title", "presentation", "p", "description", "author", "href:", unescape("%2C"), "email", "a", "url", "div"],
referencedClasses: []
}),
smalltalk.Slide);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (aPresentation) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_presentation_", [aPresentation]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aPresentation"],
source: unescape('on%3A%20aPresentation%0A%09%5Eself%20new%0A%09%09presentation%3A%20aPresentation%3B%0A%09%09yourself'),
messageSends: ["presentation:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Slide.klass);


smalltalk.addClass('FOSDEMSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: unescape('codeSnippet%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.FOSDEMSlide);

smalltalk.addMethod(
unescape('_renderSnippet_on_'),
smalltalk.method({
selector: unescape('renderSnippet%3Aon%3A'),
category: 'rendering',
fn: function (aString, html) {
    var self = this;
    smalltalk.send(function ($rec) {smalltalk.send($rec, "_renderOn_", [html]);return smalltalk.send($rec, "_editor", []);}(smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", [])), "_setValue_", [aString]);
    return self;
},
args: ["aString", "html"],
source: unescape('renderSnippet%3A%20aString%20on%3A%20html%0A%09%28SourceArea%20new%20%0A%09%09%09renderOn%3A%20html%3B%0A%09%09%09editor%29%20%20setValue%3A%20aString.'),
messageSends: ["setValue:", "renderOn:", "editor", "new"],
referencedClasses: ["SourceArea"]
}),
smalltalk.FOSDEMSlide);

smalltalk.addMethod(
unescape('_renderCodeSnippetOn_'),
smalltalk.method({
selector: unescape('renderCodeSnippetOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(function ($rec) {smalltalk.send($rec, "_renderOn_", [html]);return smalltalk.send($rec, "_editor", []);}(smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", [])), "_setValue_", [smalltalk.send(self, "_codeSnippet", [])]);
    return self;
},
args: ["html"],
source: unescape('renderCodeSnippetOn%3A%20html%0A%09%28SourceArea%20new%20%0A%09%09%09renderOn%3A%20html%3B%0A%09%09%09editor%29%20%20setValue%3A%20self%20codeSnippet.'),
messageSends: ["setValue:", "renderOn:", "editor", "new", "codeSnippet"],
referencedClasses: ["SourceArea"]
}),
smalltalk.FOSDEMSlide);



smalltalk.addClass('FOSDEMREPLSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["REPL"]);
    smalltalk.send(self, "_renderCodeSnippetOn_", [html]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27REPL%27.%0A%09self%20renderCodeSnippetOn%3A%20html.'),
messageSends: ["h1:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
smalltalk.FOSDEMREPLSlide);

smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'rendering',
fn: function () {
    var self = this;
    return unescape("./bin/amber%0Afs%20%3A%3D%20require%20value%3A%20%27fs%27.%0Afs%20readdir%3A%20%27/tmp%27%20do%3A%20%5B%3Aerr%20%3Afile%7C%20console%20log%3A%20file%5D");
    return self;
},
args: [],
source: unescape('codeSnippet%0A%09%5E%20%0A%27./bin/amber%0Afs%20%3A%3D%20require%20value%3A%20%27%27fs%27%27.%0Afs%20readdir%3A%20%27%27/tmp%27%27%20do%3A%20%5B%3Aerr%20%3Afile%7C%20console%20log%3A%20file%5D%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMREPLSlide);



smalltalk.addClass('FOSDEMJSToSmalltalk', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("var%20counter%20%3D%20window.smalltalk.Counter._new%28%29%3B%0Acounter._appendToJQuery_%28%24%28%27%23jsToSmalltalk%27%29%29%3B");
    return self;
},
args: [],
source: unescape('codeSnippet%0A%09%5E%0A%27var%20counter%20%3D%20window.smalltalk.Counter._new%28%29%3B%0Acounter._appendToJQuery_%28%24%28%27%27%23jsToSmalltalk%27%27%29%29%3B%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Call Smalltalk from Javascript"]);
    (function ($rec) {smalltalk.send($rec, "_id_", ["jsToSmalltalk"]);return smalltalk.send($rec, "_style_", ["float: left"]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(self, "_renderCodeSnippetOn_", [html]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Call%20Smalltalk%20from%20Javascript%27.%0A%09html%20div%0A%09%09id%3A%20%27jsToSmalltalk%27%3B%0A%09%09style%3A%20%27float%3A%20left%27.%0A%09self%20renderCodeSnippetOn%3A%20html.'),
messageSends: ["h1:", "id:", "style:", "div", "renderCodeSnippetOn:"],
referencedClasses: []
}),
smalltalk.FOSDEMJSToSmalltalk);



smalltalk.addClass('FOSDEMCanvasSlide', smalltalk.FOSDEMSlide, ['c2d', 'canvas'], 'Presentation');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide red3d";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20red3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
unescape('_drawOnCanvas'),
smalltalk.method({
selector: unescape('drawOnCanvas'),
category: 'drawing',
fn: function () {
    var self = this;
    var c2d = nil;
    self['@c2d'] = smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_getContext_", ["2d"]);
    smalltalk.send(self['@c2d'], "_clearRect_y_width_height_", [0, 0, smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_width", []), smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_height", [])]);
    smalltalk.send(smalltalk.send(40, "_atRandom", []), "_timesRepeat_", [function () {var rgba = nil;rgba = smalltalk.send(unescape("%2C"), "_join_", [[smalltalk.send(255, "_atRandom", []), smalltalk.send(255, "_atRandom", []), smalltalk.send(255, "_atRandom", []), ($receiver = smalltalk.send(10, "_atRandom", [])).klass === smalltalk.Number ? $receiver / 10 : smalltalk.send($receiver, "__slash", [10])]]);smalltalk.send(self['@c2d'], "_at_put_", ["fillStyle", smalltalk.send(smalltalk.send(unescape("rgba%28"), "__comma", [rgba]), "__comma", [unescape("%29")])]);return smalltalk.send(self['@c2d'], "_fillRect_y_width_height_", [smalltalk.send(600, "_atRandom", []), smalltalk.send(300, "_atRandom", []), smalltalk.send(200, "_atRandom", []), smalltalk.send(200, "_atRandom", [])]);}]);
    return self;
},
args: [],
source: unescape('drawOnCanvas%0A%09%7Cc2d%7C%0A%09c2d%20%3A%3D%20canvas%20element%20getContext%3A%20%272d%27.%0A%09c2d%20%0A%09%09clearRect%3A%200%20%0A%09%09y%3A%200%20%0A%09%09width%3A%20canvas%20element%20width%20%0A%09%09height%3A%20canvas%20element%20height.%0A%09%0A%0940%20atRandom%20timesRepeat%3A%20%5B%20%7Crgba%7C%0A%09%09%09rgba%20%3A%3D%20%27%2C%27%20join%3A%20%7B255%20atRandom.%20255%20atRandom.%20255%20atRandom.%2010%20atRandom%20/%2010%7D.%0A%09%09%09c2d%09at%3A%20%27fillStyle%27%20put%3A%20%27rgba%28%27%2C%20rgba%2C%20%27%29%27.%0A%09%09%09c2d%0A%09%09%09%09fillRect%3A%20600%20atRandom%20%0A%09%09%09%09y%3A%20300%20atRandom%20%0A%09%09%09%09width%3A%20200%20atRandom%20%0A%09%09%09%09height%3A%20200%20atRandom%20%5D'),
messageSends: ["getContext:", "element", "clearRect:y:width:height:", "width", "height", "timesRepeat:", "atRandom", "join:", unescape("/"), "at:put:", unescape("%2C"), "fillRect:y:width:height:"],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Playing with canvas"]);
    self['@canvas'] = function ($rec) {smalltalk.send($rec, "_width_", [700]);return smalltalk.send($rec, "_height_", [400]);}(smalltalk.send(html, "_canvas", []));
    smalltalk.send(self, "_updateCanvas", []);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27Playing%20with%20canvas%27.%0A%09canvas%20%3A%3D%20html%20%20canvas%20%0A%09%09%09%09width%3A%20700%3B%0A%09%09%09%09height%3A%20400.%0A%0A%09self%20updateCanvas.'),
messageSends: ["h1:", "width:", "height:", "canvas", "updateCanvas"],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
unescape('_updateCanvas'),
smalltalk.method({
selector: unescape('updateCanvas'),
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self, "_drawOnCanvas", []);
    smalltalk.send(typeof window == "undefined" ? nil : window, "_setTimeout_delay_", [function () {return smalltalk.send(self, "_updateCanvas", []);}, 500]);
    return self;
},
args: [],
source: unescape('updateCanvas%0A%09self%20drawOnCanvas.%0A%09window%20setTimeout%3A%20%5Bself%20updateCanvas%5D%20delay%3A%20500.'),
messageSends: ["drawOnCanvas", "setTimeout:delay:", "updateCanvas"],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);



smalltalk.addClass('FOSDEMJSPlayGroundSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%7Clogo%7C%0Alogo%3A%3D%27img%23amberlogo%27%20asJQuery.%0A%0Alogo%0A%20%20css%3A%27-webkit-transition%27%20put%3A%27all%2010s%20ease-in-out%27.%0A%0A%3Clogo.css%28%27-webkit-transform%27%2C%20%27rotateY%28360deg%29%27%29%3B%3E.%0A%0Alogo%20click%3A%20%5Bwindow%20alert%3A%20%27This%20is%20cool%20%21%27%5D.%0A%0Alogo%20inspect");
    return self;
},
args: [],
source: unescape('codeSnippet%0A%5E%27%7Clogo%7C%0Alogo%3A%3D%27%27img%23amberlogo%27%27%20asJQuery.%0A%0Alogo%0A%20%20css%3A%27%27-webkit-transition%27%27%20put%3A%27%27all%2010s%20ease-in-out%27%27.%0A%0A%3Clogo.css%28%27%27-webkit-transform%27%27%2C%20%27%27rotateY%28360deg%29%27%27%29%3B%3E.%0A%0Alogo%20click%3A%20%5Bwindow%20alert%3A%20%27%27This%20is%20cool%20%21%27%27%5D.%0A%0Alogo%20inspect%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMJSPlayGroundSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(self, "_renderCodeSnippetOn_", [html]);return function ($rec) {smalltalk.send($rec, "_id_", ["amberlogo"]);return smalltalk.send($rec, "_src_", [unescape("fosdem2012/images/amber.png")]);}(smalltalk.send(html, "_img", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%20%0A%09%09with%3A%20%5B%0A%09%09%09self%20renderCodeSnippetOn%3A%20html.%0A%09%09%09html%20img%0A%09%09%09%09id%3A%20%27amberlogo%27%3B%20%0A%09%09%09%09src%3A%20%27fosdem2012/images/amber.png%27%09%5D'),
messageSends: ["class:", "with:", "renderCodeSnippetOn:", "id:", "src:", "img", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMJSPlayGroundSlide);



smalltalk.addClass('FOSDEMAmberBackend', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide green3d";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20green3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMAmberBackend);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_h1_", [unescape("Need%20a%20backend%20%3F")]);return smalltalk.send(["nodejs.png", "php.gif", "rails.png", "pharo.png", "ambrhino.jpg"], "_do_", [function (aString) {return smalltalk.send(html, "_img_", [smalltalk.send(unescape("fosdem2012/images/"), "__comma", [aString])]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%09html%20h1%3A%20%27Need%20a%20backend%20%3F%27.%0A%09%09%09%09%7B%27nodejs.png%27.%20%27php.gif%27.%20%27rails.png%27.%20%20%20%27pharo.png%27.%20%27ambrhino.jpg%27%7D%20do%3A%20%5B%3AaString%20%7C%0A%09%09%09%09%09%09html%20img%3A%20%27fosdem2012/images/%27%2C%20aString.%0A%09%09%09%09%5D%0A%09%09%5D'),
messageSends: ["class:", "with:", "h1:", "do:", "img:", unescape("%2C"), "div"],
referencedClasses: []
}),
smalltalk.FOSDEMAmberBackend);



smalltalk.addClass('FOSDEMBookletSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide blue3d";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20blue3d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'css',
fn: function () {
    var self = this;
    return unescape("%0A%23book%20%7B%20font-size%3A%201.4em%3B%20%7D%0A%23book%20.b-load%20.b-wrap-right%20%7B%20background-color%3A%20%23DEC3A9%3B%7D%0A%23book%20.b-load%20.b-wrap-left%20%7B%20background-color%3A%20%23DDD%3B%7D%20%0A");
    return self;
},
args: [],
source: unescape('style%0A%09%5E%20%27%0A%23book%20%7B%20font-size%3A%201.4em%3B%20%7D%0A%23book%20.b-load%20.b-wrap-right%20%7B%20background-color%3A%20%23DEC3A9%3B%7D%0A%23book%20.b-load%20.b-wrap-left%20%7B%20background-color%3A%20%23DDD%3B%7D%20%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_renderBookOn_", [html]);
    (function ($rec) {smalltalk.send($rec, "_rel_", ["stylesheet"]);return smalltalk.send($rec, "_href_", [unescape("fosdem2012/lib/booklet/jquery.booklet.1.2.0.css")]);}(smalltalk.send(html, "_link", [])));
    smalltalk.send(html, "_style_", [smalltalk.send(self, "_style", [])]);
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_getScript_do_", [unescape("fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js"), function () {return smalltalk.send(smalltalk.send(unescape("%23book"), "_asJQuery", []), "_booklet_", [smalltalk.send(self, "_bookletOptions", [])]);}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09self%20renderBookOn%3A%20html.%0A%09html%20link%20%0A%09%09rel%3A%27stylesheet%27%3B%0A%09%09href%3A%20%27fosdem2012/lib/booklet/jquery.booklet.1.2.0.css%27.%0A%09%0A%09html%20style%3A%20self%20style.%0A%09%0A%09jQuery%20%0A%09%09getScript%3A%20%27fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js%27%20%09%0A%09%09do%3A%20%5B%27%23book%27%20asJQuery%20booklet%3A%20self%20bookletOptions%5D.'),
messageSends: ["renderBookOn:", "rel:", "href:", "link", "style:", "style", "getScript:do:", "booklet:", "asJQuery", "bookletOptions"],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
unescape('_renderBookOn_'),
smalltalk.method({
selector: unescape('renderBookOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["book"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", [unescape("b-load")]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_div_", ["Amber makes it easy to plug existing javascript libraires"]);smalltalk.send($rec, "_div_", ["Here is an example with the jQuery Booklet plugin"]);smalltalk.send($rec, "_div_", [unescape("Want%20to%20see%20how%20%3F")]);return smalltalk.send($rec, "_div_", [function () {return function ($rec) {smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [smalltalk.FOSDEMBookletSlide || FOSDEMBookletSlide]);}]);return smalltalk.send($rec, "_with_", [unescape("Just%20browse%20the%20code%20%3A%29")]);}(smalltalk.send(html, "_button", []));}]);}(html);}]);}(smalltalk.send(html, "_div", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderBookOn%3A%20html%0A%09html%20div%20%0A%09%09id%3A%20%27book%27%3B%0A%09%09with%3A%20%5B%09html%20div%0A%09%09%09%09%09class%3A%20%27b-load%27%3B%0A%09%09%09%09%09with%3A%20%5B%09html%20%0A%09%09%09%09%09%09%09%09div%3A%20%27Amber%20makes%20it%20easy%20to%20plug%20existing%20javascript%20libraires%27%3B%0A%09%09%09%09%09%09%09%09div%3A%20%27Here%20is%20an%20example%20with%20the%20jQuery%20Booklet%20plugin%27%3B%0A%09%09%09%09%09%09%09%09div%3A%20%27Want%20to%20see%20how%20%3F%27%3B%0A%09%09%09%09%09%09%09%09div%3A%20%5B%20html%20button%0A%09%09%09%09%09%09%09%09%09%09onClick%3A%20%5BBrowser%20openOn%3A%20FOSDEMBookletSlide%20%5D%3B%0A%09%09%09%09%09%09%09%09%09%09with%3A%20%27Just%20browse%20the%20code%20%3A%29%27.%09%09%09%09%09%09%5D%20%09%0A%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%09%0A%09%09%09%09%09%5D%09%0A%09%09%5D.'),
messageSends: ["id:", "with:", "class:", "div:", "onClick:", "openOn:", "button", "div"],
referencedClasses: ["Browser", "FOSDEMBookletSlide"]
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
unescape('_bookletOptions'),
smalltalk.method({
selector: unescape('bookletOptions'),
category: 'rendering',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("arrows", "__minus_gt", [true]), smalltalk.send("keyboard", "__minus_gt", [false]), smalltalk.send("pageNumbers", "__minus_gt", [false]), smalltalk.send("closed", "__minus_gt", [true])]);
    return self;
},
args: [],
source: unescape('bookletOptions%0A%09%5E%20%23%7B%20%0A%09%09%27arrows%27%20-%3E%20true.%0A%09%09%27keyboard%27%20-%3E%20false.%0A%09%09%27pageNumbers%27%20-%3E%20false.%0A%09%09%27closed%27%20-%3E%20true%0A%09%7D'),
messageSends: [unescape("-%3E")],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);



smalltalk.addClass('FOSDEMIntroSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center animate"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("fosdem2012/images/amber.png")]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", [])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])]);return smalltalk.send(html, "_p_", [function () {return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%20animate%27%3B%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%27fosdem2012/images/amber.png%27.%0A%09%09html%20p%3A%20self%20presentation%20author.%0A%20%20%20%20%20%20%20%20%20%20%09html%20p%3A%20self%20presentation%20description.%0A%09%09html%20p%3A%20%5B%0A%09%09%09html%20with%3A%20self%20presentation%20email%5D%5D.'),
messageSends: ["class:", "with:", "src:", "img", "p:", "author", "presentation", "description", "email", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMIntroSlide);



smalltalk.addClass('ESUG2011Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.ESUG2011Presentation.comment=unescape('S%E9ance%201')
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("ESUG%202011%2C%20Edinburgh");
    return self;
},
args: [],
source: unescape('description%0A%09%5E%27ESUG%202011%2C%20Edinburgh%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
category: 'accessing',
fn: function () {
    var self = this;
    return "Nicolas Petton";
    return self;
},
args: [],
source: unescape('author%0A%09%5E%27Nicolas%20Petton%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("nico@objectfusion.fr");
    return self;
},
args: [],
source: unescape('email%0A%09%5E%27nico@objectfusion.fr%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("http%3A//jtalk-project.org");
    return self;
},
args: [],
source: unescape('url%0A%09%5E%27http%3A//jtalk-project.org%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_add_", [smalltalk.IntroSlide || IntroSlide]);smalltalk.send($rec, "_add_", [smalltalk.AboutSlide || AboutSlide]);smalltalk.send($rec, "_add_", [smalltalk.WhatIsJtalkSlide || WhatIsJtalkSlide]);smalltalk.send($rec, "_add_", [smalltalk.JtalkFeaturesSlide || JtalkFeaturesSlide]);smalltalk.send($rec, "_add_", [smalltalk.WorkspaceSlide || WorkspaceSlide]);smalltalk.send($rec, "_add_", [smalltalk.IDESlide || IDESlide]);smalltalk.send($rec, "_add_", [smalltalk.CountersSlide || CountersSlide]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide || JtalkAndJavascriptSlide]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide2 || JtalkAndJavascriptSlide2]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide3 || JtalkAndJavascriptSlide3]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide4 || JtalkAndJavascriptSlide4]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndCLI || JtalkAndCLI]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndNode || JtalkAndNode]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndNode2 || JtalkAndNode2]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndNode3 || JtalkAndNode3]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndWebOS || JtalkAndWebOS]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndEnyo || JtalkAndEnyo]);smalltalk.send($rec, "_add_", [smalltalk.ContributionsSlide || ContributionsSlide]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.Array || Array, "_new", []));
    return self;
},
args: [],
source: unescape('slideClasses%0A%09%5EArray%20new%0A%09%09add%3A%20IntroSlide%3B%0A%09%09add%3A%20AboutSlide%3B%0A%09%09add%3A%20WhatIsJtalkSlide%3B%0A%09%09add%3A%20JtalkFeaturesSlide%3B%0A%09%09add%3A%20WorkspaceSlide%3B%0A%09%09add%3A%20IDESlide%3B%0A%09%09add%3A%20CountersSlide%3B%0A%09%09add%3A%20JtalkAndJavascriptSlide%3B%0A%09%09add%3A%20JtalkAndJavascriptSlide2%3B%0A%09%09add%3A%20JtalkAndJavascriptSlide3%3B%0A%09%09add%3A%20JtalkAndJavascriptSlide4%3B%0A%09%09add%3A%20JtalkAndCLI%3B%0A%09%09add%3A%20JtalkAndNode%3B%0A%09%09add%3A%20JtalkAndNode2%3B%0A%09%09add%3A%20JtalkAndNode3%3B%0A%09%09add%3A%20JtalkAndWebOS%3B%0A%09%09add%3A%20JtalkAndEnyo%3B%0A%09%09add%3A%20ContributionsSlide%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: ["IntroSlide", "AboutSlide", "WhatIsJtalkSlide", "JtalkFeaturesSlide", "WorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide", "Array"]
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%23WhatIsJtalk%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/balloon.jpg%22%29%20650px%2050px%20no-repeat%3B%0A%7D%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndCLI%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/terminal.png%22%29%20620px%2020px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndNode%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A.slide%23JtalkAndNode2%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndNode3%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndWebOS%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/devices.jpg%22%29%20380px%20280px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndEnyo%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/enyo.png%22%29%20130px%20150px%20no-repeat%3B%0A%7D%0A%0A.slide%23links%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A");
    return self;
},
args: [],
source: unescape('style%0A%09%5E%27%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%23WhatIsJtalk%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/balloon.jpg%22%29%20650px%2050px%20no-repeat%3B%0A%7D%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndCLI%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/terminal.png%22%29%20620px%2020px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndNode%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A.slide%23JtalkAndNode2%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndNode3%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndWebOS%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/devices.jpg%22%29%20380px%20280px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndEnyo%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/enyo.png%22%29%20130px%20150px%20no-repeat%3B%0A%7D%0A%0A.slide%23links%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);


smalltalk.ESUG2011Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessing',
fn: function () {
    var self = this;
    return "Jtalk";
    return self;
},
args: [],
source: unescape('title%0A%09%5E%27Jtalk%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation.klass);

smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation.klass);


smalltalk.addClass('IntroSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "intro";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27intro%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IntroSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide black";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IntroSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [unescape("Jtalk%2C%20the%20Smalltalk%20for%20Web%20developers")]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", []), "__comma", [unescape("%20%26%20G%F6ran%20Krampe%20-%20")]), "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])])]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send("mailto:", "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])])]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", [unescape("goran@krampe.se")]);return smalltalk.send($rec, "_href_", [unescape("mailto%3Agoran@krampe.se")]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", ["objectfusion.fr"]);return smalltalk.send($rec, "_href_", [unescape("http%3A//www.objectfusion.fr")]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27Jtalk%2C%20the%20Smalltalk%20for%20Web%20developers%27.%0A%09%09html%20p%20with%3A%20self%20presentation%20author%2C%20%27%20%26%20G%F6ran%20Krampe%20-%20%27%2C%20self%20presentation%20description.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09with%3A%20self%20presentation%20email%3B%0A%09%09%09%09href%3A%20%27mailto%3A%27%2C%20self%20presentation%20email%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09with%3A%20%27goran@krampe.se%27%3B%0A%09%09%09%09href%3A%20%27mailto%3Agoran@krampe.se%27%5D.%0A%09%09%0A%20%20%20%20%20%20%20%20%20%20%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09with%3A%20%27objectfusion.fr%27%3B%0A%09%09%09%09href%3A%20%27http%3A//www.objectfusion.fr%27%5D%5D'),
messageSends: ["class:", "with:", "h1", "p", unescape("%2C"), "author", "presentation", "description", "email", "href:", "a", "div"],
referencedClasses: []
}),
smalltalk.IntroSlide);



smalltalk.addClass('WhatIsJtalkSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "WhatIsJtalk";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27WhatIsJtalk%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WhatIsJtalkSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Jtalk in a nutshell"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Jtalk is an implementation of Smalltalk"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Jtalk runs on top of the JavaScript runtime"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("Jtalk%20is%20an%20opensource%20project%20%28MIT%29")]);return function ($rec) {smalltalk.send($rec, "_class_", ["fancy"]);return smalltalk.send($rec, "_with_", [unescape("Jtalk%20is%20cool%21")]);}(smalltalk.send(html, "_h2", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27Jtalk%20in%20a%20nutshell%27.%0A%09%09html%20h2%20with%3A%20%27Jtalk%20is%20an%20implementation%20of%20Smalltalk%27.%0A%09%09html%20h2%20with%3A%20%27Jtalk%20runs%20on%20top%20of%20the%20JavaScript%20runtime%27.%0A%09%09html%20h2%20with%3A%20%27Jtalk%20is%20an%20opensource%20project%20%28MIT%29%27.%0A%09%09html%20h2%20class%3A%20%27fancy%27%3B%20with%3A%20%27Jtalk%20is%20cool%21%27%5D'),
messageSends: ["class:", "with:", "h1", "h2", "div"],
referencedClasses: []
}),
smalltalk.WhatIsJtalkSlide);



smalltalk.addClass('JtalkFeaturesSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "features";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27features%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkFeaturesSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Jtalk features"]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Jtalk%20is%20%28mostly%29%20written%20in%20itself%2C%20including%20the%20parser%20%26%20compiler")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Full%20Smalltalk%20object%20system%2C%20including%20classes%20%26%20metaclasses%2C%20etc")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Core%20libraries%20%28streams%2C%20collections%2C%20RegExp%2C%20etc%29")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Web%20related%20libraries%3A%20HTML%20Canvas%2C%20DOM%20manipulation")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Full featured IDE"]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [function () {smalltalk.send(html, "_with_", [unescape("Advanced%20Smalltalk%20features%2C%20including%20")]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%23doesNotUnderstand%3A")]);smalltalk.send(html, "_with_", [" support and "]);return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["thisContext"]);}]);}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%27Jtalk%20features%27.%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27Jtalk%20is%20%28mostly%29%20written%20in%20itself%2C%20including%20the%20parser%20%26%20compiler%27.%0A%09%09html%20li%20with%3A%20%27Full%20Smalltalk%20object%20system%2C%20including%20classes%20%26%20metaclasses%2C%20etc%27.%0A%09%09html%20li%20with%3A%20%27Core%20libraries%20%28streams%2C%20collections%2C%20RegExp%2C%20etc%29%27.%0A%09%09html%20li%20with%3A%20%27Web%20related%20libraries%3A%20HTML%20Canvas%2C%20DOM%20manipulation%27.%0A%09%09html%20li%20with%3A%20%27Full%20featured%20IDE%27.%0A%09%09html%20li%20with%3A%20%5B%0A%09%09%09html%20with%3A%27Advanced%20Smalltalk%20features%2C%20including%20%27.%0A%09%09%09html%20code%20with%3A%20%27%23doesNotUnderstand%3A%27.%0A%09%09%09html%20with%3A%20%27%20support%20and%20%27.%0A%09%09%09html%20code%20with%3A%20%27thisContext%27%5D%5D'),
messageSends: ["with:", "h1", "ul", "li", "code"],
referencedClasses: []
}),
smalltalk.JtalkFeaturesSlide);



smalltalk.addClass('AboutSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "about";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27about%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide transparent white";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20transparent%20white%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return "white";
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27white%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["About this presentation"]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [unescape("This%20presentation%20is%20entirely%20written%20in%20Jtalk%20and%20is%20licensed%20under%20CC%20BY-SA.")]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Press "]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%u2190")]);smalltalk.send(html, "_with_", [" to move backward and "]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%20%u2192")]);return smalltalk.send(html, "_with_", [" to move forward."]);}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Open a "]);(function ($rec) {smalltalk.send($rec, "_with_", ["browser"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [smalltalk.Presentation || Presentation]);}]);}(smalltalk.send(html, "_button", [])));return smalltalk.send(html, "_with_", [" to edit the source code."]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27About%20this%20presentation%27.%0A%09%09html%20p%20with%3A%20%27This%20presentation%20is%20entirely%20written%20in%20Jtalk%20and%20is%20licensed%20under%20CC%20BY-SA.%27.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20with%3A%20%27Press%20%27.%0A%09%09%09html%20code%20with%3A%20%27%u2190%27.%0A%09%09%09html%20with%3A%20%27%20to%20move%20backward%20and%20%27.%0A%09%09%09html%20code%20with%3A%20%27%20%u2192%27.%0A%09%09%09html%20with%3A%20%27%20to%20move%20forward.%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20with%3A%20%27Open%20a%20%27.%0A%09%09%09html%20button%20%0A%09%09%09%09with%3A%20%27browser%27%3B%0A%09%09%09%09onClick%3A%20%5BBrowser%20openOn%3A%20Presentation%5D.%0A%09%09%09html%20with%3A%20%27%20to%20edit%20the%20source%20code.%27%5D%5D'),
messageSends: ["class:", "with:", "h1", "p", "code", "onClick:", "openOn:", "button", "div"],
referencedClasses: ["Browser", "Presentation"]
}),
smalltalk.AboutSlide);



smalltalk.addClass('JtalkAndJavascriptSlide3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "jtalkAndJs3";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27jtalkAndJs3%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Smalltalk "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(html, "_with_", [" JavaScript"]);}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("Smalltalk%20%u21D2%20JavaScript")]);
    smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["Unary messages begin with an underscore: "]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["yourself"]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("_yourself%28%29")]);}]);}(smalltalk.send(html, "_li", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Binary messages are prefixed with 2 underscores: "]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("3@4")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%283%29.__at%284%29")]);}]);}(smalltalk.send(html, "_li", [])));return function ($rec) {smalltalk.send($rec, "_with_", [unescape("Keyword%20message%20follow%20the%20same%20rules%20as%20unary%20messages%2C%20with%20a%20final%20underscore%3A%20")]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["aDictionary at: 3 put: 4"]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("aDictionary._at_put_%283%2C%204%29")]);}]);}(smalltalk.send(html, "_li", []));}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Smalltalk%20%27.%0A%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09html%20with%3A%20%27%20JavaScript%27%5D.%0A%09html%20h2%20with%3A%20%27Smalltalk%20%u21D2%20JavaScript%27.%0A%09html%20ol%20with%3A%20%5B%0A%09%09html%20li%20%0A%09%09%09with%3A%20%27Unary%20messages%20begin%20with%20an%20underscore%3A%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27yourself%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27_yourself%28%29%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%27Binary%20messages%20are%20prefixed%20with%202%20underscores%3A%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%273@4%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27%283%29.__at%284%29%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%27Keyword%20message%20follow%20the%20same%20rules%20as%20unary%20messages%2C%20with%20a%20final%20underscore%3A%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27aDictionary%20at%3A%203%20put%3A%204%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27aDictionary._at_put_%283%2C%204%29%27%5D%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "code", "li"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide3);



smalltalk.addClass('JtalkAndJavascriptSlide2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "jtalkAndJs2";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27jtalkAndJs2%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Smalltalk "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(html, "_with_", [" JavaScript"]);}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Jtalk maps one to one with the JavaScript equivalent:"]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("String%20%u21D4%20String")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Number%20%u21D4%20Number")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("BlockClosure%20%u21D4%20function")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Dictionary%20%u21D4%20Object")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Error%20%u21D4%20Error")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["etc."]);}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Smalltalk%20%27.%0A%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09html%20with%3A%20%27%20JavaScript%27%5D.%0A%09html%20h2%20with%3A%20%27Jtalk%20maps%20one%20to%20one%20with%20the%20JavaScript%20equivalent%3A%27.%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27String%20%u21D4%20String%27.%0A%09%09html%20li%20with%3A%20%27Number%20%u21D4%20Number%27.%0A%09%09html%20li%20with%3A%20%27BlockClosure%20%u21D4%20function%27.%0A%09%09html%20li%20with%3A%20%27Dictionary%20%u21D4%20Object%27.%0A%09%09html%20li%20with%3A%20%27Error%20%u21D4%20Error%27.%0A%09%09html%20li%20with%3A%20%27etc.%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide2);



smalltalk.addClass('JtalkAndJavascriptSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "jtalkAndJs";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27jtalkAndJs%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide transparent";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20transparent%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Smalltalk "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(html, "_with_", [" JavaScript"]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%5B%0A%09%09%09html%20with%3A%20%27Smalltalk%20%27.%0A%09%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09%09html%20with%3A%20%27%20JavaScript%27%5D%5D'),
messageSends: ["class:", "with:", "h1", "span", "div"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);



smalltalk.addClass('WorkspaceSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "workspace";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27workspace%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%2318bd7d");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2318bd7d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'accessing',
fn: function (html) {
    var self = this;
    var workspace = nil;
    workspace = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [unescape("Give%20Jtalk%20a%20try%21")]);smalltalk.send(workspace, "_renderOn_", [html]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(workspace, "_doIt", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(workspace, "_printIt", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(workspace, "_inspectIt", []);}]);}(smalltalk.send(html, "_button", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09%7C%20workspace%20%7C%0A%09workspace%20%3A%3D%20SourceArea%20new.%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27Give%20Jtalk%20a%20try%21%27.%0A%09%09workspace%20renderOn%3A%20html.%0A%09%09html%20div%20with%3A%20%5B%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27DoIt%27%3B%0A%09%09%09%09onClick%3A%20%5Bworkspace%20doIt%5D.%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27PrintIt%27%3B%0A%09%09%09%09onClick%3A%20%5Bworkspace%20printIt%5D.%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27InspectIt%27%3B%0A%09%09%09%09onClick%3A%20%5Bworkspace%20inspectIt%5D%5D%5D'),
messageSends: ["new", "class:", "with:", "h1", "renderOn:", "div", "onClick:", "doIt", "button", "printIt", "inspectIt"],
referencedClasses: ["SourceArea"]
}),
smalltalk.WorkspaceSlide);



smalltalk.addClass('CountersSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "counters";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27counters%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CountersSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%2318bd7d");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2318bd7d%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CountersSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["The counter example"]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {return smalltalk.send(2, "_timesRepeat_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Counter || Counter, "_new", []), "_renderOn_", [html]);}]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27The%20counter%20example%27.%0A%09%09html%20div%20with%3A%20%5B%0A%09%09%092%20timesRepeat%3A%20%5BCounter%20new%20renderOn%3A%20html%5D%5D%5D'),
messageSends: ["class:", "with:", "h1", "div", "timesRepeat:", "renderOn:", "new"],
referencedClasses: ["Counter"]
}),
smalltalk.CountersSlide);



smalltalk.addClass('JtalkAndJavascriptSlide4', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "jtalkAndJs4";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27jtalkAndJs4%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["JavaScript "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_with_", [unescape("%20Smalltalk%20too%21%20")]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["comment"]);return smalltalk.send($rec, "_with_", [unescape("%28how%20cute%29")]);}(smalltalk.send(html, "_span", []));}]);}(html);}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("JavaScript%20%u21D2%20Smalltalk")]);
    smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["someUser.name"]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["someUser name"]);}]);}(smalltalk.send(html, "_li", [])));(function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("someUser%20name%20%3D%20%22John%22")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("someUser%20name%3A%20%27John%27")]);}]);}(smalltalk.send(html, "_li", [])));(function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("console.log%28%27hello%20world%27%29")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("console%20log%3A%20%27hello%20world%27")]);}]);}(smalltalk.send(html, "_li", [])));return function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("window.jQuery%28%27foo%27%29.css%28%27background%27%2C%20%27red%27%29")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(html, "_br", []);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%28window%20jQuery%3A%20%27foo%27%29%20css%3A%20%27background%27%20color%3A%20%27red%27")]);}]);}(smalltalk.send(html, "_li", []));}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27JavaScript%20%27.%0A%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09html%20with%3A%20%27%20Smalltalk%20too%21%20%27%3B%0A%09%09with%3A%20%5Bhtml%20span%20class%3A%20%27comment%27%3B%20with%3A%20%27%28how%20cute%29%27%5D%5D.%0A%09html%20h2%20with%3A%20%27JavaScript%20%u21D2%20Smalltalk%27.%0A%09html%20ol%20with%3A%20%5B%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser.name%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser%20name%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser%20name%20%3D%20%22John%22%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser%20name%3A%20%27%27John%27%27%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27console.log%28%27%27hello%20world%27%27%29%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27console%20log%3A%20%27%27hello%20world%27%27%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27window.jQuery%28%27%27foo%27%27%29.css%28%27%27background%27%27%2C%20%27%27red%27%27%29%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20br%5D%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27%28window%20jQuery%3A%20%27%27foo%27%27%29%20css%3A%20%27%27background%27%27%20color%3A%20%27%27red%27%27%27%5D%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "code", "li", "br"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide4);



smalltalk.addClass('IDESlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "ide";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27ide%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function () {
    var self = this;
    return "black";
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);

smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide transparent";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20transparent%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%22%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20%0A%09%09%09with%3A%20%27The%20wonderful%20Jtalk%20%27%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09html%20a%20%0A%09%09%09%09%09with%3A%20%27development%20tools%27%3B%0A%09%09%09%09%09onClick%3A%20%5BTabManager%20current%20open%5D%5D%3B%0A%09%09%09with%3A%20%27.%27%5D%0A%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);



smalltalk.addClass('ContributionsSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function () {
    var self = this;
    return "links";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27links%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ContributionsSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//jtalk-project.org")]);return smalltalk.send($rec, "_with_", [unescape("jtalk-project.org")]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("https%3A//github.com/NicolasPetton/jtalk")]);return smalltalk.send($rec, "_with_", [unescape("github.com/NicolasPetton/jtalk")]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//http%3A//groups.google.com/group/jtalk-project")]);return smalltalk.send($rec, "_with_", [unescape("groups.google.com/group/jtalk-project")]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%27%3B%20with%3A%20%5B%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27http%3A//jtalk-project.org%27%3B%20with%3A%20%27jtalk-project.org%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27https%3A//github.com/NicolasPetton/jtalk%27%3B%20with%3A%20%27github.com/NicolasPetton/jtalk%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27http%3A//http%3A//groups.google.com/group/jtalk-project%27%3B%20with%3A%20%27groups.google.com/group/jtalk-project%27%5D%5D'),
messageSends: ["class:", "with:", "p", "href:", "a", "div"],
referencedClasses: []
}),
smalltalk.ContributionsSlide);



smalltalk.addClass('JtalkAndCLI', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return "JtalkAndCLI";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27JtalkAndCLI%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["the command line"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("jtalkc%20-%20a%20fairly%20elaborate%20bash%20script%20that%3A")]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Uses Node.js to run the Jtalk Compiler"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Compiles .st files to .js"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Links .js files into a single one"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Adds%20class%20initilization%20and/or%20call%20to%20main")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Optionally runs Google Closure compiler"]);}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Jtalk%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27the%20command%20line%27%5D.%0A%0A%09html%20h2%20with%3A%20%27jtalkc%20-%20a%20fairly%20elaborate%20bash%20script%20that%3A%27.%0A%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27Uses%20Node.js%20to%20run%20the%20Jtalk%20Compiler%27.%0A%09%09html%20li%20with%3A%20%27Compiles%20.st%20files%20to%20.js%27.%0A%09%09html%20li%20with%3A%20%27Links%20.js%20files%20into%20a%20single%20one%27.%0A%09%09html%20li%20with%3A%20%27Adds%20class%20initilization%20and/or%20call%20to%20main%27.%0A%09%09html%20li%20with%3A%20%27Optionally%20runs%20Google%20Closure%20compiler%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
smalltalk.JtalkAndCLI);



smalltalk.addClass('JtalkAndNode', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return "JtalkAndNode";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27JtalkAndNode%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Hello.st:"]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("Object%20subclass%3A%20%23Hello%0A%20%20%20%20%20%20%20%20instanceVariableNames%3A%20%27%27%0A%20%20%20%20%20%20%20%20category%3A%20%27Hello%27%21%0A%0A%21Hello%20class%20methodsFor%3A%20%27main%27%21%0Amain%0A%09console%20log%3A%20%27Hello%20world%20from%20JTalk%20in%20Node.js%27%0A%21%20%21")]);}(smalltalk.send(html, "_div", []));}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Jtalk%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27Node.js%27%5D.%0A%0A%09html%20h2%20with%3A%20%27Hello.st%3A%27.%0A%09html%20pre%20with%3A%20%5B%0A%09%09html%20div%20class%3A%20%27code2%27%3B%20with%3A%20%20%27Object%20subclass%3A%20%23Hello%0A%20%20%20%20%20%20%20%20instanceVariableNames%3A%20%27%27%27%27%0A%20%20%20%20%20%20%20%20category%3A%20%27%27Hello%27%27%21%0A%0A%21Hello%20class%20methodsFor%3A%20%27%27main%27%27%21%0Amain%0A%09console%20log%3A%20%27%27Hello%20world%20from%20JTalk%20in%20Node.js%27%27%0A%21%20%21%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"],
referencedClasses: []
}),
smalltalk.JtalkAndNode);



smalltalk.addClass('JtalkAndNode2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return "JtalkAndNode2";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27JtalkAndNode2%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Makefile:"]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("Program.js%3A%20Hello.st%0A%09../../bin/jtalkc%20-N%20-m%20Hello%20Hello.st%20Program%0A%0Arun%3A%20Program.js%0A%09./hello%0A%0Aclean%3A%0A%09rm%20-f%20Program.js%20Hello.js%0A")]);}(smalltalk.send(html, "_div", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["hello:"]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("node%20Program.js%20%24@")]);}(smalltalk.send(html, "_div", []));}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Jtalk%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27Node.js%27%5D.%0A%0A%09html%20h2%20with%3A%20%27Makefile%3A%27.%0A%09html%20pre%20with%3A%20%5B%0A%09%09html%20div%20class%3A%20%27code2%27%3B%20with%3A%20%20%27Program.js%3A%20Hello.st%0A%09../../bin/jtalkc%20-N%20-m%20Hello%20Hello.st%20Program%0A%0Arun%3A%20Program.js%0A%09./hello%0A%0Aclean%3A%0A%09rm%20-f%20Program.js%20Hello.js%0A%27%5D.%0Ahtml%20h2%20with%3A%20%27hello%3A%27.%0A%09html%20pre%20with%3A%20%5B%0A%09%09html%20div%20class%3A%20%27code2%27%3B%20with%3A%20%20%27node%20Program.js%20%24@%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"],
referencedClasses: []
}),
smalltalk.JtalkAndNode2);



smalltalk.addClass('JtalkAndNode3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return "JtalkAndNode3";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27JtalkAndNode3%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("make%20clean%20%26%26%20make%20run%3A")]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("rm%20-f%20Program.js%20Hello.js%0A../../bin/jtalkc%20-N%20-m%20Hello%20Hello.st%20Program%0ALoading%20libraries%20%20/home/gokr/jtalk/js/boot.js%20/home/gokr/jtalk/js/Kernel.js%0A/home/gokr/jtalk/js/Parser.js%20/home/gokr/jtalk/js/Compiler.js%0A/home/gokr/jtalk/js/init.js%20/home/gokr/jtalk/nodejs/nodecompile.js%0Aand%20compiling%20...%0ACompiling%20in%20debugMode%3A%20false%0AReading%20file%20Hello.st%0AExporting%20category%20Hello%20as%20Hello.js%0AAdding%20libraries%20%20/home/gokr/jtalk/js/boot.js%20/home/gokr/jtalk/js/Kernel.js%20%20...%0AAdding%20Jtalk%20code%20Hello.js%20...%0AAdding%20initializer%20/home/gokr/jtalk/js/init.js%20...%0AAdding%20call%20to%20Hello%20class%20%3E%3E%20main%20...%0AWriting%20Program.js%20...%0ADone.%0A./hello")]);}(smalltalk.send(html, "_div", [])));return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Hello world from JTalk in Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Jtalk%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27Node.js%27%5D.%0A%0A%09html%20h2%20with%3A%20%27make%20clean%20%26%26%20make%20run%3A%27.%0A%0A%09html%20pre%20with%3A%20%5B%0A%09%09html%20div%20class%3A%20%27code2%27%3B%20with%3A%20%20%27rm%20-f%20Program.js%20Hello.js%0A../../bin/jtalkc%20-N%20-m%20Hello%20Hello.st%20Program%0ALoading%20libraries%20%20/home/gokr/jtalk/js/boot.js%20/home/gokr/jtalk/js/Kernel.js%0A/home/gokr/jtalk/js/Parser.js%20/home/gokr/jtalk/js/Compiler.js%0A/home/gokr/jtalk/js/init.js%20/home/gokr/jtalk/nodejs/nodecompile.js%0Aand%20compiling%20...%0ACompiling%20in%20debugMode%3A%20false%0AReading%20file%20Hello.st%0AExporting%20category%20Hello%20as%20Hello.js%0AAdding%20libraries%20%20/home/gokr/jtalk/js/boot.js%20/home/gokr/jtalk/js/Kernel.js%20%20...%0AAdding%20Jtalk%20code%20Hello.js%20...%0AAdding%20initializer%20/home/gokr/jtalk/js/init.js%20...%0AAdding%20call%20to%20Hello%20class%20%3E%3E%20main%20...%0AWriting%20Program.js%20...%0ADone.%0A./hello%27.%0Ahtml%20span%20class%3A%20%27blue%27%3B%20with%3A%27Hello%20world%20from%20JTalk%20in%20Node.js%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"],
referencedClasses: []
}),
smalltalk.JtalkAndNode3);



smalltalk.addClass('JtalkAndWebOS', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return "JtalkAndWebOS";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27JtalkAndWebOS%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["webOS"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["A really cool mobile OS based on Linux:"]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["The primary language in webOS is Javascript"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["The new UI framework for webOS 3.0 is called Enyo"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Regular%20apps%20run%20in%20V8%20+%20Webkit")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Background services run in Node.js"]);}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Jtalk%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27webOS%27%5D.%0A%0A%09html%20h2%20with%3A%20%27A%20really%20cool%20mobile%20OS%20based%20on%20Linux%3A%27.%0A%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27The%20primary%20language%20in%20webOS%20is%20Javascript%27.%0A%09%09html%20li%20with%3A%20%27The%20new%20UI%20framework%20for%20webOS%203.0%20is%20called%20Enyo%27.%0A%09%09html%20li%20with%3A%20%27Regular%20apps%20run%20in%20V8%20+%20Webkit%27.%0A%09%09html%20li%20with%3A%20%27Background%20services%20run%20in%20Node.js%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
smalltalk.JtalkAndWebOS);



smalltalk.addClass('JtalkAndEnyo', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return "JtalkAndEnyo";
    return self;
},
args: [],
source: unescape('id%0A%09%5E%27JtalkAndEnyo%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Enyo"]);}(smalltalk.send(html, "_span", []));}]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Jtalk%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27Enyo%27%5D.'),
messageSends: ["with:", "h1", "class:", "span"],
referencedClasses: []
}),
smalltalk.JtalkAndEnyo);



smalltalk.addClass('FOSDEM2012Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.FOSDEM2012Presentation.comment=unescape('S%E9ance%202')
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("FOSDEM%202012%2C%20Brussels");
    return self;
},
args: [],
source: unescape('description%0A%09%5E%27FOSDEM%202012%2C%20Brussels%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("Laurent%20Laffont%2C%20Johnny%20Thornton");
    return self;
},
args: [],
source: unescape('author%0A%09%5E%27Laurent%20Laffont%2C%20Johnny%20Thornton%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("laurent.laffont@gmail.com%2C%20%20johnnyt@xan.do");
    return self;
},
args: [],
source: unescape('email%0A%09%5E%27laurent.laffont@gmail.com%2C%20%20johnnyt@xan.do%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("http%3A//amber-lang.net");
    return self;
},
args: [],
source: unescape('url%0A%09%5E%27http%3A//amber-lang.net%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A@-webkit-keyframes%20rotate-horizontal%20%7B%0A%090%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%28-10deg%29%3B%7D%0A%09100%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%2810deg%29%3B%7D%0A%7D%0A%0A.animate%20p%7B%0A-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A%23FOSDEMAmberBackend%20img%20%7B%0A%09margin%3A%205px%3B%0A%09-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A%0A.tweet%20%7B%0A%09background-color%3A%20%23aaa%3B%0A%09color%3A%20black%3B%0A%09padding%3A%2010px%3B%0A%09border-radius%3A%2010px%3B%0A%09border%3A%205px%20solid%20%23eee%3B%0A%09margin%3A%2010px%3B%0A%7D%0A%0A.tweet%20img%20%7B%0A%09vertical-align%3A%20top%3B%0A%09margin-right%3A%2010px%3B%0A%7D%0A%0A.tweet%20span%3Afirst-child%20%7B%0A%09float%3A%20right%3B%0A%7D%0A");
    return self;
},
args: [],
source: unescape('style%0A%09%5E%27%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A@-webkit-keyframes%20rotate-horizontal%20%7B%0A%090%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%28-10deg%29%3B%7D%0A%09100%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%2810deg%29%3B%7D%0A%7D%0A%0A.animate%20p%7B%0A-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A%23FOSDEMAmberBackend%20img%20%7B%0A%09margin%3A%205px%3B%0A%09-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A%0A.tweet%20%7B%0A%09background-color%3A%20%23aaa%3B%0A%09color%3A%20black%3B%0A%09padding%3A%2010px%3B%0A%09border-radius%3A%2010px%3B%0A%09border%3A%205px%20solid%20%23eee%3B%0A%09margin%3A%2010px%3B%0A%7D%0A%0A.tweet%20img%20%7B%0A%09vertical-align%3A%20top%3B%0A%09margin-right%3A%2010px%3B%0A%7D%0A%0A.tweet%20span%3Afirst-child%20%7B%0A%09float%3A%20right%3B%0A%7D%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function () {
    var self = this;
    return [smalltalk.FOSDEMIntroSlide || FOSDEMIntroSlide, smalltalk.FOSDEMAmberZeroNine || FOSDEMAmberZeroNine, smalltalk.CountersSlide || CountersSlide, smalltalk.IDESlide || IDESlide, smalltalk.JtalkAndJavascriptSlide || JtalkAndJavascriptSlide, smalltalk.FOSDEMJSPlayGroundSlide || FOSDEMJSPlayGroundSlide, smalltalk.FOSDEMJSToSmalltalk || FOSDEMJSToSmalltalk, smalltalk.FOSDEMBookletSlide || FOSDEMBookletSlide, smalltalk.FOSDEMTwitter || FOSDEMTwitter, smalltalk.FOSDEMCanvasSlide || FOSDEMCanvasSlide, smalltalk.FOSDEMAmberBackend || FOSDEMAmberBackend, smalltalk.FOSDEMREPLSlide || FOSDEMREPLSlide, smalltalk.FOSDEMCLISlide || FOSDEMCLISlide, smalltalk.FOSDEMContributionsSlide || FOSDEMContributionsSlide];
    return self;
},
args: [],
source: unescape('slideClasses%0A%5E%20%7B%0A%09FOSDEMIntroSlide.%0A%09FOSDEMAmberZeroNine.%0A%09CountersSlide.%0A%09IDESlide.%0A%09JtalkAndJavascriptSlide.%0A%09FOSDEMJSPlayGroundSlide.%0A%09FOSDEMJSToSmalltalk.%0A%09FOSDEMBookletSlide.%0A%09FOSDEMTwitter.%0A%09FOSDEMCanvasSlide.%0A%09FOSDEMAmberBackend.%0A%09FOSDEMREPLSlide.%0A%09FOSDEMCLISlide.%0A%09FOSDEMContributionsSlide%0A%7D'),
messageSends: [],
referencedClasses: ["FOSDEMIntroSlide", "FOSDEMAmberZeroNine", "CountersSlide", "IDESlide", "JtalkAndJavascriptSlide", "FOSDEMJSPlayGroundSlide", "FOSDEMJSToSmalltalk", "FOSDEMBookletSlide", "FOSDEMTwitter", "FOSDEMCanvasSlide", "FOSDEMAmberBackend", "FOSDEMREPLSlide", "FOSDEMCLISlide", "FOSDEMContributionsSlide"]
}),
smalltalk.FOSDEM2012Presentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'testing',
fn: function () {
    var self = this;
    return "Amber";
    return self;
},
args: [],
source: unescape('title%0A%09%5E%27Amber%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation.klass);


smalltalk.addClass('FOSDEMTwitter', smalltalk.FOSDEMSlide, ['twitterDiv'], 'Presentation');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function () {
    var self = this;
    return "slide black";
    return self;
},
args: [],
source: unescape('cssClass%0A%09%5E%20%27slide%20black%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
unescape('_loadTweets'),
smalltalk.method({
selector: unescape('loadTweets'),
category: 'callback',
fn: function () {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [unescape("http%3A//search.twitter.com/search.json%3Frpp%3D3%26q%3D%2540AmberSmalltalk"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (json) {return smalltalk.send(self, "_renderTweets_", [smalltalk.send(json, "_results", [])]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
},
args: [],
source: unescape('loadTweets%0A%09jQuery%20%0A%09%09ajax%3A%20%27http%3A//search.twitter.com/search.json%3Frpp%3D3%26q%3D%2540AmberSmalltalk%27%0A%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%27success%27%20-%3E%20%5B%20%3Ajson%20%7C%20self%20renderTweets%3A%20%28json%20results%29%5D.%0A%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27%0A%09%09%09%7D.'),
messageSends: ["ajax:options:", unescape("-%3E"), "renderTweets:", "results"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_loadTweets", []);}]);return smalltalk.send($rec, "_with_", [unescape("What%20about%20@AmberSmalltalk%20on%20Twitter%20%3F")]);}(smalltalk.send(html, "_button", [])));
    self['@twitterDiv'] = smalltalk.send(html, "_div", []);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20button%0A%09%09onClick%3A%20%5Bself%20loadTweets%5D%3B%0A%09%09with%3A%20%27What%20about%20@AmberSmalltalk%20on%20Twitter%20%3F%27.%0A%09twitterDiv%20%3A%3D%20html%20div.'),
messageSends: ["onClick:", "loadTweets", "with:", "button", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
unescape('_renderTweets_'),
smalltalk.method({
selector: unescape('renderTweets%3A'),
category: 'rendering',
fn: function (tweets) {
    var self = this;
    smalltalk.send(self['@twitterDiv'], "_contents_", [function (html) {return smalltalk.send(tweets, "_do_", [function (tweet) {return smalltalk.send(self, "_renderTweet_on_", [tweet, html]);}]);}]);
    return self;
},
args: ["tweets"],
source: unescape('renderTweets%3A%20tweets%0A%09twitterDiv%20contents%3A%20%5B%09%3Ahtml%7C%0A%09%09%09%09%09%09tweets%20do%3A%20%5B%09%3Atweet%7C%20%20%0A%09%09%09%09%09%09%09%09%09self%20renderTweet%3A%20tweet%20on%3A%20html%5D%20%5D'),
messageSends: ["contents:", "do:", "renderTweet:on:"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
unescape('_renderTweet_on_'),
smalltalk.method({
selector: unescape('renderTweet%3Aon%3A'),
category: 'rendering',
fn: function (tweet, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["tweet"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_span_", [smalltalk.send(tweet, "_at_", ["created_at"])]);smalltalk.send($rec, "_img_", [smalltalk.send(tweet, "_at_", ["profile_image_url"])]);smalltalk.send($rec, "_span_", [smalltalk.send(tweet, "_at_", ["from_user"])]);return smalltalk.send($rec, "_div_", [smalltalk.send(tweet, "_at_", ["text"])]);}(html);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["tweet", "html"],
source: unescape('renderTweet%3A%20tweet%20on%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27tweet%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20%0A%09%09%09%09span%3A%20%28tweet%20at%3A%20%27created_at%27%29%3B%0A%09%09%09%09img%3A%20%28tweet%20at%3A%20%27profile_image_url%27%29%3B%0A%09%09%09%09span%3A%20%28tweet%20at%3A%20%27from_user%27%29%3B%0A%09%09%09%09div%3A%20%28tweet%20at%3A%20%27text%27%29.%20%0A%09%09%5D'),
messageSends: ["class:", "with:", "span:", "at:", "img:", "div:", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);



smalltalk.addClass('FOSDEMCLISlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["CLI"]);
    smalltalk.send(html, "_with_", [unescape("amberc%20compiles%20.st%20files%20into%20node%20programs%20%21")]);
    smalltalk.send(self, "_renderCodeSnippetOn_", [html]);
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%3A%20%27CLI%27.%0A%09html%20with%3A%20%20%27amberc%20compiles%20.st%20files%20into%20node%20programs%20%21%27.%0A%09self%20renderCodeSnippetOn%3A%20html.'),
messageSends: ["h1:", "with:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
smalltalk.FOSDEMCLISlide);

smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'rendering',
fn: function () {
    var self = this;
    return unescape("cd%20examples/nodejs/hello%0A../../../bin/amberc%20-m%20Hello%20Hello.st%20Program%0Anode%20Program.js%0A%0AHello%20world%20from%20Amber%20in%20Node.js");
    return self;
},
args: [],
source: unescape('codeSnippet%0A%09%5E%20%0A%27cd%20examples/nodejs/hello%0A../../../bin/amberc%20-m%20Hello%20Hello.st%20Program%0Anode%20Program.js%0A%0AHello%20world%20from%20Amber%20in%20Node.js%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMCLISlide);



smalltalk.addClass('FOSDEMContributionsSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("/documentation.html")]);return smalltalk.send($rec, "_with_", ["Documentation"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net")]);return smalltalk.send($rec, "_with_", [unescape("amber-lang.net")]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("https%3A//github.com/NicolasPetton/amber")]);return smalltalk.send($rec, "_with_", [unescape("github.com/NicolasPetton/amber")]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//groups.google.com/group/amber-lang")]);return smalltalk.send($rec, "_with_", [unescape("groups.google.com/group/amber-lang")]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%27%3B%20with%3A%20%5B%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27/documentation.html%27%3B%20with%3A%20%27Documentation%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27http%3A//amber-lang.net%27%3B%20with%3A%20%27amber-lang.net%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27https%3A//github.com/NicolasPetton/amber%27%3B%20with%3A%20%27github.com/NicolasPetton/amber%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27http%3A//groups.google.com/group/amber-lang%27%3B%20with%3A%20%27groups.google.com/group/amber-lang%27%5D%5D'),
messageSends: ["class:", "with:", "p", "href:", "a", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMContributionsSlide);



smalltalk.addClass('FOSDEMAmberZeroNine', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_h1_", [unescape("Amber%200.9.1%20is%20out%20%21")]);smalltalk.send($rec, "_div_", [function () {return smalltalk.send(smalltalk.send(html, "_cite", []), "_with_", [unescape("Now%20with%20over%2043%20forks%20on%20github%20and%20more%20than%20230%20followers%20the%20project%3A%20%20http%3A//www.amber-lang.net%20%20...is%20live%20and%20kicking%21")]);}]);return smalltalk.send($rec, "_div_", [function () {return smalltalk.send(smalltalk.send(html, "_cite", []), "_with_", [unescape("--%20Nicolas%20%26%20G%F6ran")]);}]);}(html);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27section%20center%27%3B%0A%09%09with%3A%20%5B%20%09html%20%0A%09%09%09%09%09h1%3A%20%27Amber%200.9.1%20is%20out%20%21%27%3B%0A%09%09%09%09%09div%3A%20%5Bhtml%20cite%20with%3A%20%27Now%20with%20over%2043%20forks%20on%20github%20and%20more%20than%20230%20followers%20the%20project%3A%20%20http%3A//www.amber-lang.net%20%20...is%20live%20and%20kicking%21%27%5D%3B%0A%09%09%09%09%09div%3A%20%5Bhtml%20cite%20with%3A%20%27--%20Nicolas%20%26%20G%F6ran%27%5D%20%5D'),
messageSends: ["class:", "with:", "h1:", "div:", "cite", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMAmberZeroNine);




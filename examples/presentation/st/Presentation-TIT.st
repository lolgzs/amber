Smalltalk current createPackage: 'Presentation-TIT' properties: #{}!
Slide subclass: #TITSlide
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITSlide methodsFor: 'rendering'!

renderSmalltalk: aString on: html
	|aTextArea|
	aTextArea := html textarea element.
	aTextArea value: aString.
        
	< CodeMirror.fromTextArea( aTextArea, {
                lineNumbers: true,
		theme: 'jtalk',
                enterMode: 'flat',
		theme: 'neat',
  		width: '700px',
		lineWrapping: false,
                matchBrackets: true,
                electricChars: false }) >
!

renderImage: filename on: html
	html div 
		class: 'center';
		with: [	html img
					width: '700px';
					src: 'tit/images/', filename]
!

renderVimeo: aNumber on: html
	html iframe 
		width:640;
		height:480;
		src:'http://player.vimeo.com/video/', aNumber asString, '?title=0&amp;byline=0&amp;portrait=0'.
! !

Presentation subclass: #TITPresentation
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITPresentation methodsFor: 'accessing'!

url
	^'http://lolgzs.free.fr/tit-course/'
!

author
	^ 'Laurent Laffont - Patrick Barroca'
!

email
	^'laurent.laffont@gmail.com'
!

style
	^'
body {
    font-family: Helvetica,Arial,sans;
}

#slides {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #555;
}

.slide {
    background: #fff;
    color: #444;
    text-align: left;
    font-size: 20px;
    line-height: 1.8em;
    height: 500px;
    width: 700px;
    padding: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -420px;
    margin-top: -320px;
    box-shadow: 0 0 20px #111;
    -moz-box-shadow: 0 0 20px #111;
    -webkit-box-shadow: 0 0 20px #111;
    overflow: hidden;
}

.slide.transparent {
    background: transparent;
    box-shadow: 0 0 0 none;
    -moz-box-shadow: 0 0 0 transparent;
    -webkit-box-shadow: 0 0 0 transparent;
    color: #fff !!important;
}

.slide.blue3d {
  background: #feffff;
  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));
  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);
  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);
  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#feffff", endColorstr="#d2ebf9",GradientType=0 );
  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);
}


.slide.red3d {
  background: #febbbb;
  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));
  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#febbbb", endColorstr="#ff5c5c",GradientType=0 );
  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
}


.slide.green3d {
  background: #cdeb8e;
  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));
  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#cdeb8e", endColorstr="#a5c956",GradientType=0 );
  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
}

.slide.wax3d {
  background: #feffe8; /* Old browsers */
  background: -moz-linear-gradient(top,  #feffe8 0%, #d6dbbf 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffe8), color-stop(100%,#d6dbbf)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #feffe8 0%,#d6dbbf 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #feffe8 0%,#d6dbbf 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #feffe8 0%,#d6dbbf 100%); /* IE10+ */
  background: linear-gradient(top,  #feffe8 0%,#d6dbbf 100%); /* W3C */
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=''#feffe8'', endColorstr=''#d6dbbf'',GradientType=0 ); /* IE6-9 */
}

.slide.black {
    background: black;
    background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0.38, rgb(79,79,79)),
	color-stop(0.69, rgb(33,33,33)),
	color-stop(0.86, rgb(4,4,4))
    );
    background-image: -moz-linear-gradient(
	center bottom,
	rgb(79,79,79) 38%,
	rgb(33,33,33) 69%,
	rgb(4,4,4) 86%
    );
    color: #fff !!important;
}

.slide.black h1, .slide.black h2, .slide.black h3,
.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {
    color: #fff;
    text-shadow: 0 1px 4px #aaa;
}

.slide.black a, .slide.transparent a {
    color: #ccc;
}

.slide.white {
    color: #333 !!important;
}

.slide.white h1, .slide.white h2, .slide.white h3 {
    color: #333;
}

.slide.white a {
    color: #333;
}


.slide h1, .slide h2, .slide h3 {
    color: #333;
    /* text-align: center; */
}

.slide h1 {
    font-family: "Droid Sans";
    font-size: 2em;
    text-shadow: 0 1px 4px #aaa;
    margin-top: 30px;
    margin-bottom: 50px;
}

/* .slide ul, .slide li { */
/*     padding: 0; */
/*     margin: 0; */
/* } */

.slide button {
    font-size: 18px;
}

.slide a {
    color: #555;
    text-decoration: none;
    cursor: pointer;
}

.slide a:hover {
    color: #fff;
    background: #555;
}

.slide .right {
    text-align: right;
}

.slide .section.center {
    display: table-cell;
    vertical-align: middle;
    width: 700px;
    height: 500px;
}

.slide code {
    font-family: "Droid Sans Mono";
    color: #444;
    border: 1px solid #ddd;
    background: #eee;
    border-radius: 4px;
    padding: 2px;
    font-size: 16px;
}

.slide .code2 {
    font-family: "Droid Sans Mono";
    line-height: 1.2em;
    color: #444;
    padding: 2px;
    font-size: 16px;
}


.slide .CodeMirror {
    width: 500px;
    height: 300px;
    text-align: left;
}

.slide .CodeMirror-scroll {
    text-align: left;
}

.slide .fancy {
    margin-top: 30px;
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
    color: red;
}

.slide .comment {
    opacity: 0.6;
    font-weight: normal;
}

.slide .red {
    color: red;
}

.slide .blue {
    color: blue;
}

.slide .green {
    color: green;
}
.slide .huge {
  font-size: 4em;
  line-height: 1.5em;
}

.slide .big {
  font-size: 2em;
  line-height: 1.1em;
}


.slide .center {
  text-align: center;
}

.slide#links .section {
    margin-left: 250px;
    margin-top: 200px;
    font-family: "Droid Sans";
    font-size: 26px;
    font-weight: bold;
}


#meta {
    position: absolute;
    font-size: 12px;
    opacity: 0.6;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: #333;
    text-align: right;
    padding: 0 10px;
    line-height: 1.8em;
    color: #eee;
    border-top-left-radius: 5px;
}

#meta:hover {
    opacity: 0.8;
}

#meta p {
    display: inline;
    padding: 0 5px;
}

#meta a {
    //background: #ccc;
    color: #ccc;
    text-decoration: none;
    padding: 0 5px;
}

#tools {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    padding: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    background: #333;
    opacity: 0.3;
    color: #eee;
}

#tools a {
    font-weight: bold;
    color: #eee;
    text-decoration: none;
    cursor: pointer;
    padding: 0 2px;
    font-size: 14px;
}

.slide iframe {
  height: 90%;
  width: 100%;
  border: 1px solid white;
}

.slide .left-column {
	width: 50%;
	position: absolute;
	display: block;
}

.slide .right-column {
	width: 50%;
	float: right;
	display: block;
}

.slide .nobullet {
	list-style: none;
}

#tools:hover {
    opacity: 0.8;
}


.slide .codemirror {
	border: 5px solid rgba(50, 50, 50, 0.8);
	border-radius: 5px;
	background: white;
	width: 100%;
}


#IAEPharocasts {
	background-color: rgb(28,32, 35);
}

#IAECara74 {
	background-color: rgb(127,116, 105);
}'
! !

!TITPresentation class methodsFor: 'testing'!

isConcrete
	^ false
! !

TITPresentation subclass: #TITManipulatingObjects
	instanceVariableNames: ''
	category: 'Presentation-TIT'!
!TITManipulatingObjects commentStamp!
Séance 1!

!TITManipulatingObjects methodsFor: 'accessing'!

description
	^ 'Introduction to object oriented paradigm'
!

slideClasses
	^ {
	IAEIntroSlide.
	IAEPharocasts.
	IAEAmber.
	IAECara74.
	TITRoadmap.
	TITInstallPharoWindows.
	TITVMImageSources.
	TITBouncingAtomsMorphVideo.
	TITUnaryMessageSyntax.
	TITBinaryMessageSyntax.
	TITKeywordsMessageSyntax.
	TITCascadingMessagesSyntax.
	TITSelfMessage.
	TITBasicCodeSnippets.
	TITPharoHelp.
	TITProfStefHelp.
	TITProfStef.
	IAESectionExercises.
	TITBouncingAtomMorphsExercise}
! !

!TITManipulatingObjects class methodsFor: 'accessing'!

title
	^ 'TIT - Manipulating Objects'
! !

!TITManipulatingObjects class methodsFor: 'testing'!

isConcrete
	^ true
! !

TITSlide subclass: #TITKeywordsMessageSyntax
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITKeywordsMessageSyntax methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
! !

!TITKeywordsMessageSyntax methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Keywords messages'.
	html div 
		class: 'center big';
		with: [ self 
				renderReceiver: 'receiver ' message: 'message'  keyword: 'Keyword' argument: 'argument' on: html;
				renderReceiver: 'guitar ' message: 'play'  keyword: 'String' argument: '4' on: html;
				renderReceiver: 'guitar ' message: 'play'  keyword: 'String' argument: '4' keyword2:'onFret' argument2: '2' on: html].
!

renderReceiver: aReceiver message: aMessage argument: anArgument on: html
		html span class: 'blue'; with: aReceiver.
		html span class: 'red';	with: ' ', aMessage, ' '.
		html span class: 'green'; with: anArgument.
		html span class: 'blue'; with: '.'.
		html br;br
!

renderReceiver: aReceiver message: aMessage keyword: keyword argument: anArgument on: html
		html span class: 'blue'; style:'font-size:0.8em'; with: aReceiver.
		html span class: 'red';	style:'font-size:0.8em'; with: ' ', aMessage.
		html span class: 'white'; style:'font-size:0.8em'; with: keyword, ': '.
		html span class: 'green'; style:'font-size:0.8em'; with: anArgument.
		html span class: 'blue'; style:'font-size:0.8em'; with: '.'.
		html br;br
!

renderReceiver: aReceiver message: aMessage keyword: keyword argument: anArgument keyword2: keyword2 argument2: anArgument2 on: html
		html span class: 'blue'; style:'font-size:0.8em'; with: aReceiver.
		html span class: 'red';	style:'font-size:0.8em'; with: ' ', aMessage.
		html span class: 'white'; style:'font-size:0.8em'; with: keyword, ': '.
		html span class: 'green'; style:'font-size:0.8em'; with: anArgument, ' '.
		html span class: 'white'; style:'font-size:0.8em'; with: keyword2, ': '.
		html span class: 'green'; style:'font-size:0.8em'; with: anArgument2.
		html span class: 'blue'; style:'font-size:0.8em'; with: '.'.
		html br;br
! !

TITSlide subclass: #TITBinaryMessageSyntax
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBinaryMessageSyntax methodsFor: 'accessing'!

cssClass
	^ 'slide green3d'
! !

!TITBinaryMessageSyntax methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Binary messages'.
	html div 
		class: 'center big';
		with: [ self 
				renderReceiver: 'receiver ' message: 'message'  argument: 'argument' on: html;		
				renderReceiver: '5' message: ' + ' argument: '2' on: html;	
				renderReceiver: '12' message: ' > ' argument: '5' on: html].
!

renderReceiver: aReceiver message: aMessage argument: anArgument on: html
		html span class: 'blue'; with: aReceiver.
		html span class: 'red';	with: ' ', aMessage, ' '.
		html span class: 'green'; with: anArgument.
		html span class: 'blue'; with: '.'.
		html br;br
! !

TITSlide subclass: #TITProfStefHelp
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITProfStefHelp methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
! !

!TITProfStefHelp methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'ProfStef tutorials'.
	self renderImage: 'profstef.png' on: html.
! !

TITSlide subclass: #TITVMImageSources
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITVMImageSources methodsFor: 'accessing'!

cssClass
	^ 'slide'
!

backgroundColor
	^ '#ddf'
! !

!TITVMImageSources methodsFor: 'rendering'!

renderSlideOn: html
	self renderImage: 'vm_image_sources.png' on: html
! !

TITSlide subclass: #TITBouncingAtomsMorphVideo
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBouncingAtomsMorphVideo methodsFor: 'accessing'!

cssClass
	^ 'slide black'
! !

!TITBouncingAtomsMorphVideo methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: [html a 
				href: 'http://www.pharocasts.com/2012/01/manipulating-objects.html'; 
				with:'BouncingAtomsMorph'].
	self renderVimeo: 34810463 on: html.
! !

TITSlide subclass: #TITProfStef
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITProfStef methodsFor: 'rendering'!

renderSlideOn: html
	TrySmalltalkWidget new renderOn: html.
! !

TITSlide subclass: #TITBasicCodeSnippets
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBasicCodeSnippets methodsFor: 'accessing'!

cssClass
	^ 'slide red3d'
! !

!TITBasicCodeSnippets methodsFor: 'code'!

snippet
	^ 
'Morph new 
	width: 100;
	color: Color red;
	openInWorld.

10 atRandom.

{''one''.  ''two''} at: 1.

{Color red. Color blue. Color yellow} atRandom.

(StringMorph contents: ''Hello !!'') openInWindow.

BouncingAtomsMorph allInstances last delete.
'
! !

!TITBasicCodeSnippets methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Code examples'.
	self renderSmalltalk: self snippet on: html
! !

TITSlide subclass: #TITBouncingAtomMorphsExercise
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBouncingAtomMorphsExercise methodsFor: 'rendering'!

renderSlideOn: html
	html ol: [
		html
			 li: 'Make the BouncingAtomsMorph change color at every step';
			 li: 'Make the BouncingAtomsMorph change color every 2 seconds (but animated at full speed)';
			 li: 'Every second the BouncingAtomsMorph remove an atom. When reach 0, add one every second. When reach 30, remove one every second';
			 li: 'Draw on the BouncingAtomsMorph the number of its submorphs'.
	].

	html with: 'Do ProfStef go then:'.
	html ol: [
		html
			li: 'Create a button in a window that opens a new BouncingAtomsMorph';
			li: 'Create a button that deletes all BouncingAtomsMorph instances';
			li: 'A button that pops up a window displaying the number of red AtomMorph of latest BouncingAtomsMorph instance'.
	].
!

cssClass
	^ 'slide black'
!

backgroundColor
	^  '#aaa'
! !

TITSlide subclass: #TITRoadmap
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITRoadmap methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Roadmap'.
	html ol: [
		html 
			li: 'Manipulating objects';
			li: 'Write and share code';
			li: 'Basic classes';
			li: 'Inheritance and polymorphism';
			li: 'Software lifecycle';
			li: 'Test Driven Development';
			li: 'Compose GUI'
	].
!

cssClass
	^ 'slide blue3d'
! !

TITSlide subclass: #TITInstallPharoWindows
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITInstallPharoWindows methodsFor: 'accessing'!

cssClass
	^ 'slide black'
! !

!TITInstallPharoWindows methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: [html a 
				href: 'http://www.pharocasts.com/2010/08/install-pharo-on-windows.html'; 
				with:'Install Pharo on Windows'.
			html with: ' ( '.
			html a 
				href: 'http://lolgzs.free.fr/tit/Pharo-CogVM-Windows.zip'; 
				with:'Cog VM'.
			html with: ' - '.
			html a 
				href: 'http://lolgzs.free.fr/tit/Pharo-1.3-Tetras.zip'; 
				with:'Pharo 1.3'.
			html with: ' )'.].
	self renderVimeo: 14301726 on: html.
! !

TITSlide subclass: #TITUnaryMessageSyntax
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITUnaryMessageSyntax methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
! !

!TITUnaryMessageSyntax methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Unary messages'.
	html div 
		class: 'center big';
		with: [ self 
				renderReceiver: 'receiver ' message: 'message' on: html;		
				renderReceiver: '3 ' message: 'squared' on: html;
				renderReceiver: '''TETRAS'' ' message: 'asLowercase' on: html. ].
!

renderReceiver: aString message: anotherString on: html
		html span class: 'blue'; with: aString.
		html span class: 'red';	with: anotherString.
		html span class: 'blue'; with: '.'.
		html br;br
! !

TITSlide subclass: #TITPharoHelp
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITPharoHelp methodsFor: 'accessing'!

cssClass
	^ 'slide black'
! !

!TITPharoHelp methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Help in Pharo'.
	self renderImage: 'pharo_help.png' on: html.
! !

TITSlide subclass: #TITSelfMessage
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITSelfMessage methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
!

backgroundColor
	^ '#faa'
! !

!TITSelfMessage methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Self'.
	self renderImage: 'self.png' on: html
! !

TITSlide subclass: #TITCascadingMessagesSyntax
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITCascadingMessagesSyntax methodsFor: 'accessing'!

cssClass
	^ 'slide green3d'
! !

!TITCascadingMessagesSyntax methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Cascading messages'.
	html div 
		class: 'center big';
		with: [ self
				renderCascade: 'message' onReceiver: 'receiver' on: html;
				renderCascade: 'increase' onReceiver: 'counter' on: html].
!

renderReceiver: aReceiver message: aMessage argument: anArgument on: html
		html span class: 'blue'; with: aReceiver.
		html span class: 'red';	with: ' ', aMessage, ' '.
		html span class: 'green'; with: anArgument.
		html span class: 'blue'; with: '.'.
		html br;br
!

renderCascade: aMessage on: html
		html span class: 'red';	with: ' ', aMessage.
		html span class: 'blue'; with: ';'.
!

renderCascade: aMessage onReceiver: aReceiver on: html
		html span class: 'blue'; with: aReceiver.
		self
			renderCascade: aMessage on: html;
			renderCascade: aMessage on: html.
		html span class: 'red';	with: ' ', aMessage.
		html span class: 'blue'; with: '.'.
		html br; br.
! !

TITPresentation subclass: #TITWriteAndShareCode
	instanceVariableNames: ''
	category: 'Presentation-TIT'!
!TITWriteAndShareCode commentStamp!
Séance 2!

!TITWriteAndShareCode methodsFor: 'accessing'!

description
	^ 'Write Smalltalk code and share it with the world'
!

slideClasses
	^ {
	IAEIntroSlide.
	TITRoadmap.
	IAEPractices.
	TITTemporaryVariable.
	TITInstanceVariable.
	TITBasicCodeSnippets.
	TITBasicCodeSnippets2.
	IAESectionExercises.
	TITBouncingAtomMorphsExercise.
	TITVersionControl.
	TITBlocks.
	TITObjectModelRules.
	TITObjectInheritance.
	TITUMLCrossMorph.
	TITPolymorphism.
	TITMemberOfKindOf.
	IAESectionExercises.
	TITBouncingInheritanceExercise}
! !

!TITWriteAndShareCode class methodsFor: 'accessing'!

title
	^ 'TIT - Write and Share Code'
! !

!TITWriteAndShareCode class methodsFor: 'testing'!

isConcrete
	^ true
! !

TITSlide subclass: #TITObjectModelRules
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITObjectModelRules methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
! !

!TITObjectModelRules methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Object Model Rules'.
	html div 
		class: 'center big';
		with: [ html ul with: [ 
				self writeRule: 'Everything is an object.' on: html.
				self writeRule: 'Every object is an instance of a class.' on: html.
				self writeRule: 'Every class has a superclass.' on: html]]
!

writeRule: aString on: html
	html li style:'text-align:left;'; with: aString.
! !

TITSlide subclass: #TITObjectInheritance
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITObjectInheritance methodsFor: 'accessing'!

cssClass
	^ 'slide green3d'
! !

!TITObjectInheritance methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Object Inheritance'.
	html div 
		class: 'center big';
		with:[
			'Boolean example'.
			html img: 'tit/images/BooleanHierarchy.png'.
			html img: 'tit/images/BooleanHierarchyUML.png']
! !

TITSlide subclass: #TITTemporaryVariable
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITTemporaryVariable methodsFor: 'not yet classified'!

renderSlideOn: html
	html h1: 'Temporary variables'.
	html h2: 'Scope => method'.
	
	self renderSmalltalk: self snippet on: html
!

snippet
	^
'AtomMorph>>step
  |size|
  size := 20 atRandom.
  self 
    width: size;
    height: size'
!

cssClass
	^ 'slide green3d'
! !

TITSlide subclass: #TITInstanceVariable
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITInstanceVariable methodsFor: 'not yet classified'!

cssClass
	^ 'slide blue3d'
!

renderSlideOn: html
	html h1: 'Instance variables'.
	html h2: 'Scope => object'.
	
	self renderSmalltalk: self snippet on: html
!

snippet
	^ 
'Morph subclass: #BouncingAtomsMorph
	instanceVariableNames: ''stepTime''
	classVariableNames: ''''
	poolDictionaries: ''''
	category: ''MorphExamplesAndDemos''


BouncingAtomsMorph>>stepTime
  ^ stepTime

BouncingAtomsMorph>>stepTime: anInteger
  stepTime := anInteger'
! !

TITSlide subclass: #TITBasicCodeSnippets2
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBasicCodeSnippets2 methodsFor: 'not yet classified'!

cssClass
	^ 'slide wax3d'
!

renderSlideOn: html
	html h1: 'Code examples'.
	self renderSmalltalk: self snippet on: html
!

snippet
	^
'temperature < 0
	ifTrue: [Transcipt show: ''frozen'']
	ifFalse: [Transcript show: ''liquid''].

4 max: 2.

t0 := DateAndTime now.
(DateAndTime now - t0) asSeconds.'
! !

TITSlide subclass: #TITBlocks
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBlocks methodsFor: 'accessing'!

cssClass
	^ 'slide green3d'
! !

!TITBlocks methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Block syntax'.
	html div 
		class: 'big';
		with: [ html pre style:'font-weight:bold'; with: [
				html span style:'color:red;'; with:'['.
				html span style:'color:blue;'; with:' :param'.
				html span style:'color:green;'; with:' | |'.
				html span style:'color:blue;'; with:' tempVar'.
				html span style:'color:green;'; with:' |'.
				html br.
				html span style:'color:blue;'; with:'    tempVar'.
				html span style:'color:red;'; with:' :='.
				html span with:' value'.
				html span style:'color:red;'; with:'.'.
				html br.
				html span style:'color:blue;'; with:'    param'.
				html span style:'color:red;'; with:' message'.
				html span style:'color:blue;'; with:' tempVar'.
				html span style:'color:red;'; with:']']].
	self renderSmalltalk: self snippet on: html
!

snippet
	^ 'a := [ 1 + 2 ].
a value.

b:= [:x | x + 1].
b value: 4.

c := [:x | | y |
        y := 1.
        x + y    ].
c value: 4.'
! !

TITSlide subclass: #TITBouncingInheritanceExercise
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITBouncingInheritanceExercise methodsFor: 'not yet classified'!

renderSlideOn: html
	html ol: [
		html
			li: 'Implement CrossMorph in category MorphExamplesAndDemo';
			li: 'Push MorphExamplesAndDemos package to repository http://ss3.gemstone.com/ss/TetrasTIT';
			li: 'Make CrossMorph a subclass of AtomMorph and adapt BouncingAtomsMorph>>step'
			
	]
!

cssClass
	^ 'slide black'
! !

TITSlide subclass: #TITVersionControl
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITVersionControl methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Version Control System'.
	html div 
		class: 'center big';
		with:[
			html img: 'tit/images/vcs.png']
!

cssClass
	^ 'slide blue3d'
! !

TITSlide subclass: #TITUMLCrossMorph
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITUMLCrossMorph methodsFor: 'accessing'!

cssClass
	^ 'slide wax3d'
! !

!TITUMLCrossMorph methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'UML'.
	self renderImage: 'crossmorph.png' on: html
! !

TITSlide subclass: #TITPolymorphism
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITPolymorphism methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
! !

!TITPolymorphism methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Polymorphism'.
	self renderImage: 'boolean.png' on: html
! !

TITSlide subclass: #TITMemberOfKindOf
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITMemberOfKindOf methodsFor: 'accessing'!

cssClass
	^ 'slide green3d'
!

snippet
 ^'|a|
a := AtomMorph new.
a isMemberOf: AtomMorph "=> true".
a isKindOf: AtomMorph "=> true".

a isMemberOf: Morph "=> false".
a isKindOf: Morph "=> true".'
! !

!TITMemberOfKindOf methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Testing object membership'.
	self renderSmalltalk: self snippet on: html
! !

TITPresentation subclass: #TITSoftwareLifeCycle
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITSoftwareLifeCycle methodsFor: 'accessing'!

description
	^ 'Modern software development process'
!

slideClasses
	^ {
	IAEIntroSlide.
	TITRoadmap.
	IAEWhatIsSoftwareDevelopment.
	IAETools.
	IAEToolMisused.
	IAETracker.
	TITVersionControl.
	IAETDDCycle.
	IAEContinuousIntegration.
	IAEContinuousDelivery.
	IAESectionExercises.
	TITOperationExercice1
}
! !

!TITSoftwareLifeCycle class methodsFor: 'accessing'!

title
	^ 'TIT - Software lifecycle'
! !

!TITSoftwareLifeCycle class methodsFor: 'testing'!

isConcrete
	^ true
! !

TITSlide subclass: #TITOperationExercice1
	instanceVariableNames: ''
	category: 'Presentation-TIT'!

!TITOperationExercice1 methodsFor: 'rendering'!

renderSlideOn: html
	html pre: 'Créez la catégorie ExercicesTIT dans le browser. 
Toutes les classes développées par la suite devront se trouver dans cette catégorie. 
Implémentez la classe Operation qui doit fonctionner comme suit (évaluez ce code dans un Workspace):

    a := Operation new.
    a result.

Doit retourner 0 (qui est la valeur initiale de l''opération).

    b := Operation new.
    b add: 2.
    b add: 3.
    b result.

Doit retourner 5 (0 + 2 + 3).

    Operation new
      add: 2;
      add: 4;
      divideBy: 2;
      result.

    Doit retourner 3. 

Les messages:

    #add: ajoute la valeur passée en paramètre à la valeur courante.
    #substract: soustraction
    #divideBy: division
    #multiplyBy: multiplication'
!

style
	^ '
	position: fixed;
	top: 0px;
	left: 0px;
	margin: 0px;
	padding: 5px;
	width: 100%;
	height: 100%;
	line-height: inherit;
	overflow: auto'
! !


Smalltalk current createPackage: 'Presentation-IAE' properties: #{}!
Presentation subclass: #IAEPresentation
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEPresentation methodsFor: 'accessing'!

author
	^ 'Laurent Laffont'
!

email
	^'laurent.laffont@gmail.com'
!

url
	^'http://lolgzs.free.fr/iae-course/'
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

.slide#WhatIsJtalk {
    background: white url("esug2011/images/balloon.jpg") 650px 50px no-repeat;
}

.slide#ide {
    background: black url("esug2011/images/ide_star_wars.png") center center no-repeat;
}

.slide .huge {
  font-size: 4em;
  line-height: 1.5em;
}

.slide .big {
  font-size: 3em;
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

#IAECourseContent {
	background: white url(iae/images/planning.png) no-repeat right bottom;
}

#IAEPractices {
	background: rgb(170,170,180) url(iae/images/martialart.jpg) no-repeat center center;
}

#IAELearn {
	background: url(iae/images/books.jpg) no-repeat center center;
	color: white;
	font-size: 3em;
	text-shadow: 0px 0px 20px red;
}

#IAEPharocasts {
	background-color: rgb(28,32, 35);
}

#IAECara74 {
	background-color: rgb(127,116, 105);
}


#IAEScrum {
	background: white url(iae/images/scrum.png) no-repeat center center;
}

#IAESummary {
	background: white url(iae/images/success.jpg) no-repeat center center;
}

.slide .codemirror {
	width: 100%;
	border: 5px solid rgba(50, 50, 50, 0.8);
	border-radius: 5px;
	background: white;
	height: auto;
}

.slide .codemirror-scroll {
	height: auto;
	overflow: visible;
}

#IAETDDStackExercise  .codemirror {
	height: 350px;
	font-size: 15px;
}

#IAETDDStackExercise  .codemirror-scroll {
	height: 350px;
	overflow: auto;
}
'
! !

!IAEPresentation class methodsFor: 'testing'!

isConcrete
	^ false
! !

Slide subclass: #IAESlide
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAESlide methodsFor: 'accessing'!

id
	^ self class name
! !

!IAESlide methodsFor: 'rendering'!

renderJava: aString on: html
	|aTextArea|
	aTextArea := html textarea element.
	aTextArea value: aString.
        
	< CodeMirror.fromTextArea( aTextArea, {
                lineNumbers: true,
		mode: 'text/x-java',
                enterMode: 'classic',
		theme: 'neat',
                matchBrackets: true,
                electricChars: false }) >
! !

IAESlide subclass: #IAETDDBookBeck
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDBookBeck methodsFor: 'accessing'!

cssClass
	^ 'slide green3d'
! !

!IAETDDBookBeck methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'TDD By Example - Kent Beck'.
	html div
		class: 'center';
		with: [ html img: 'iae/images/beck_tdd_book.jpg' ]
! !

IAESlide subclass: #IAEAgileResources
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAgileResources methodsFor: 'not yet classified'!

renderSlideOn: html
	html h1: 'Resources'.
	html  ul: [
          html li: [html a
			href: 'http://www.crisp.se/henrik.kniberg/presentations/agile-tour-grenoble-2009-keynote-what-is-agile.pdf';
			with: 'What is agile'].

	  html li: [html a
			href: 'http://henrik-kniberg.developpez.com/livre/scrum-xp/';
			with: 'Scrum et XP depuis les tranchées'].
          
	  html li: [html a
			href: 'http://agilemanifesto.org/iso/fr/';
			with: 'Manifeste agile'].
          
         ]
! !

IAESlide subclass: #IAETDDBookThomas
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDBookThomas methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
! !

!IAETDDBookThomas methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'center';
		with: [ 
			html h1: 'Pragmatic Unit Testing - Dave Thomas'.
                 	 html img: 'iae/images/prag_unit_test_book.jpg' ]
! !

IAEPresentation subclass: #IAEMovieApplicationPresentation
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMovieApplicationPresentation methodsFor: 'accessing'!

description
	^'IAE - M1 MTI - 2011. Swing application with TDD'
!

slideClasses
	^ {
		IAEIntroSlide.
		IAEMovieApplication.
		IAEMVC.
		IAEMovieList
}
! !

!IAEMovieApplicationPresentation class methodsFor: 'accessing'!

isConcrete
	^true
!

title
	^ 'IAE - Movie application'
! !

IAESlide subclass: #IAEIntroSlide
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEIntroSlide methodsFor: 'accessing'!

cssClass
	^'slide black'
! !

!IAEIntroSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: self presentation title.
		html p: self presentation author.
          	html p: self presentation description.
		html p: [
			html a
				with: self presentation email;
				href: 'mailto:', self presentation email]].
! !

IAESlide subclass: #IAEMovieApplication
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMovieApplication methodsFor: 'accessing'!

cssClass
	^ 'slide black'
! !

!IAEMovieApplication methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'center';
		with: [ html img: 'iae/images/MoviesEditor.png' ]
! !

IAESlide subclass: #IAEPharocasts
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEPharocasts methodsFor: 'accessing'!

cssClass
	^'slide'
! !

!IAEPharocasts methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center';
		with: [
			html a
			href: 'http://www.pharocasts.com';
			with: [html img src: 'iae/images/pharocasts.png'] ]
! !

IAESlide subclass: #IAETDDStackExerciseVideo
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDStackExerciseVideo methodsFor: 'accessing'!

cssClass
	^'slide black'
! !

!IAETDDStackExerciseVideo methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: 'Stack exercise'.
	html iframe 
		width:400;
		height:300;
		src:'http://player.vimeo.com/video/29788542?title=0&amp;byline=0&amp;portrait=0'
! !

IAESlide subclass: #IAEWhatIsSoftwareDevelopment
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEWhatIsSoftwareDevelopment methodsFor: 'not yet classified'!

cssClass
	^ 'slide center'
!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'What is'.
		html h1 class: 'huge red'; with: 'Software Development'.
		html h1 class: 'huge'; with: '?'.
          ]
!

backgroundColor
	^ '#ddf'
! !

IAESlide subclass: #IAEMVC
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMVC methodsFor: 'accessing'!

backgroundColor
	^ 'black'
! !

!IAEMVC methodsFor: 'rendering'!

renderSlideOn: html
	html style: '
#IAEMVC {
  background: url(iae/images/mvc.jpg)  no-repeat center center;
  background-color: #333; 
}'
! !

IAESlide subclass: #IAECourseContent
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECourseContent methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Content'.
 
	html ol: [
		html
          		li: 'Software Development overview';
			li: 'Test Driven Development';
          		li: 'Agile practices'
       ]
! !

IAESlide subclass: #IAEMovieList
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMovieList methodsFor: 'accessing'!

slideClass
	^ 'slide blue3d'
! !

!IAEMovieList methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Classes MovieList et Movie'.
	html ol: [
          html 
          	li: 'un film a un titre';
          	li: 'on peut rajouter et retirer un film de la liste';
          	li: 'on peut renommer le titre d''un film.';
          	li: 'le titre ne peut etre (null) ou une chaîne vide - IllegalArgumentException';
          	li: 'on ne peut pas ajouter deux films avec le même titre dans la liste - DuplicateMovieException (note : ArrayList.contains appelle Movie.equals)'
        ].

	html a
		class: 'right';
		href: 'http://lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip';
		with: 'Télécharger la correction'
! !

IAESlide subclass: #IAECara74
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECara74 methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(157, 145, 131)'
!

cssClass
	^'slide'
! !

!IAECara74 methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center';
		with: [	html a 
          				href: 'http://cara74.alpha.smallharbour.org/'; 
          				with: [html img: 'iae/images/cara74.png' ] ]
! !

IAEPresentation subclass: #IAEJavaSwing
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJavaSwing methodsFor: 'accessing'!

description
	^'IAE - M1 MTI - 2011'
!

slideClasses
	^ {
IAEIntroSlide.
IAEJFrame.
IAEJFrameSnapshot.
IAEJLabel.
IAEJLabelSnapshot.
IAEJFramePack.
IAEJFramePackSnapshot.
IAEGridLayout.
IAEGridLayoutSnapshot.
IAEFlowLayoutSnapshot.
IAEActionListener.
IAEActionListenerGetSource.
IAEMouseListener.
IAEJTextField.
IAETextFieldSnapshot.
IAEJComboBox.
IAEComboBoxSnapshot.
IAEJList.
IAEJListSnapshot.
IAEModelView.
IAEJListModelSnapshot.
IAEUISpec.
IAEJavaSwingResources.
IAESectionExercises.
IAEFrameTPSnapshot.
IAEUISpecVideo
}
! !

!IAEJavaSwing class methodsFor: 'accessing'!

title
	^ 'IAE - Java Swing'
! !

!IAEJavaSwing class methodsFor: 'testing'!

isConcrete
	^true
! !

IAESlide subclass: #IAETeamWork
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETeamWork methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(80,90,130)'
! !

!IAETeamWork methodsFor: 'rendering'!

renderSlideOn: html
	html h1 
		class: 'red';
		with:'Team Work'.
	html div 
		class: 'right'; 
		with: [html img: 'iae/images/team.JPG'].
! !

IAESlide subclass: #IAEAbstractCodeSnippetSlide
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAbstractCodeSnippetSlide methodsFor: 'accessing'!

title
	^ nil
! !

!IAEAbstractCodeSnippetSlide methodsFor: 'rendering'!

renderSlideOn: html
	self title ifNotNil: [html h1: self title].
	html div
		class: 'center';
		with: [ self renderJava: self snippet on: html ].
!

cssClass
	^'slide blue3d'
! !

IAESlide subclass: #IAEProject
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEProject methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(29, 51, 13)'
!

cssClass
	^'slide black'
! !

!IAEProject methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'section center';
		with: [	html 
                       			h1: 'Project';
                      			img: 'iae/images/project.jpg']
! !

IAEAbstractCodeSnippetSlide subclass: #IAEJFrame
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJFrame methodsFor: 'accessing'!

snippet
	^ 
'import javax.swing.*;

    public class MyFirstFrame extends JFrame {
      public MyFirstFrame(){
        setTitle("My first GUI application");
        setSize(200, 200);
      }
      
      
      public static void main(String[] args) {
        MyFirstFrame f = new MyFirstFrame();
        f.setVisible(true);
      }
    }'
!

title
	^ 'A simple window'
! !

IAESlide subclass: #IAELearn
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAELearn methodsFor: 'accessing'!

backgroundColor
	^ '#F55'
! !

!IAELearn methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: 'LEARN'.
! !

IAEAbstractCodeSnippetSlide subclass: #IAEJLabel
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJLabel methodsFor: 'not yet classified'!

snippet
	^
'public class MyFirstFrame extends JFrame {
      public MyFirstFrame(){
        setTitle("My first GUI application");
        setSize(200, 200);
        
        JLabel lblHello = new JLabel("Hello world !!");
        getContentPane().add(lblHello);
      }
    }'
!

title
	^ 'Add a label inside'
! !

IAESlide subclass: #IAEContinuousIntegration
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEContinuousIntegration methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(21, 42, 14)'
!

style
	^ '
	font-size: 2em;
	background: rgb(216,216,216) url(iae/images/ci.png) no-repeat center center;'
! !

!IAEContinuousIntegration methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'section';
		with: [
				html h1
                  			class: 'blue center';
                  			with: 'Continuous Integration'.
                		html ol with: [		html 
                                               				li: 'Get source';
                                              				li: 'Build';
                                              				li: 'Test'	] 					
                	]
! !

IAEAbstractCodeSnippetSlide subclass: #IAEJFramePack
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJFramePack methodsFor: 'not yet classified'!

snippet
	^
' public class MyFirstFrame extends JFrame {
      public MyFirstFrame(){
        setTitle("My first GUI application");
        
        JLabel lblHello = new JLabel("Hello world !!");
        getContentPane().add(lblHello);

        pack();
      }
    }'
!

title
	^ ' Resize container automatically with pack()'
! !

IAESlide subclass: #IAETracker
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETracker methodsFor: 'accessing'!

style
	^ 'background: rgb(235,239,249);'
! !

!IAETracker methodsFor: 'rendering'!

renderSlideOn: html
	html	 h1: 'Issue tracker'.

	html img: 'iae/images/issues.png'.
! !

IAEAbstractCodeSnippetSlide subclass: #IAEGridLayout
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEGridLayout methodsFor: 'not yet classified'!

snippet
	^
'public class MySecondFrame extends JFrame {
    public MySecondFrame(){
      initLayout();
      initWidgets();
      pack();
    }
    
    private void initLayout(){
      // 3 rows, 2 colums
      setLayout(new GridLayout(3,2)); 
    }
    
    private void initWidgets(){
      for (int i=0; i<5; i++) {
        JButton btn = new JButton("Button n" + 
                                Integer.toString(i));
        getContentPane().add(btn);
      }
    }
}'
!

title
	^ 'Arrange widgets'
! !

IAESlide subclass: #IAEContinuousDelivery
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEContinuousDelivery methodsFor: 'not yet classified'!

cssClass
	^ 'slide black'
!

renderSlideOn: html
	html div
		class: 'section center';
		with: [ html img: 'iae/images/continuousDelivery.jpg' ].
! !

IAEAbstractCodeSnippetSlide subclass: #IAEActionListener
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEActionListener methodsFor: 'not yet classified'!

snippet
	^ 
'import javax.swing.*;
import java.awt.event.*;

public class MyThirdFrame extends JFrame 
	                  implements ActionListener {
  JButton sayHelloButton;
      
  public MyThirdFrame(){
        sayHelloButton = new JButton("Hello!!");
        getContentPane().add(sayHelloButton);
        
        sayHelloButton.addActionListener(this);
        pack();
  }

  @Override
  public void actionPerformed(ActionEvent event) {
        System.out.println("Hello !!!!!!");
   }
}'
!

title
	^ 'Generic event handling'
! !

IAESlide subclass: #IAEScrum
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEScrum methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(197, 226, 236)'
! !

!IAEScrum methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'SCRUM'.
! !

IAEAbstractCodeSnippetSlide subclass: #IAEActionListenerGetSource
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEActionListenerGetSource methodsFor: 'not yet classified'!

snippet
	^
'public class MyThirdFrame extends JFrame 
                        implements ActionListener {
  public MyThirdFrame(){
    setLayout(new FlowLayout());
    addButton("Hello !!");
    addButton("Good Bye !!");
    pack();
  }
      
  public void addButton(String label) {
    JButton buttonToAdd = new JButton(label);
    getContentPane().add(buttonToAdd);
    buttonToAdd.addActionListener(this);
  }

  @Override
  public void actionPerformed(ActionEvent event) {
    JButton clickedButton = (JButton)event.getSource();
    System.out.println(clickedButton.getText());
  }
}'
!

title
	^ 'Get source of event'
! !

IAEPresentation subclass: #IAETDDIntroduction
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDIntroduction methodsFor: 'accessing'!

slideClasses
	^ {
	IAEIntroSlide.
	IAETDDCycle.
	IAECalculatorTest.
	IAECalculatorFirstImplementation.
	IAECalculatorSecondTest.
	IAECalculatorSecondImplementation.
	IAECalculatorRefactor.
	IAECalculatorTestJUnit4.
	IAESectionExercises.
	IAETDDLargestExercise.
	IAETDDLargestExerciseFirstTest.
	IAETDDLargestVideo.
	IAETDDStackExercise.
	IAETDDStackFixtures.
	IAETDDTestExceptionThrown.
	IAETDDTestExceptionNotThrown.
	IAETDDStackExerciseVideo.
	IAETDDBookAstels.
	IAETDDBookBeck.
	IAETDDBookThomas
	
}
!

description
	^ 'IAE - M1 MTI - 2011. Test Driven Development cycle, coding basis'
! !

!IAETDDIntroduction class methodsFor: 'accessing'!

title
	^'IAE - TDD Introduction'
! !

!IAETDDIntroduction class methodsFor: 'testing'!

isConcrete
	^true
! !

IAEAbstractCodeSnippetSlide subclass: #IAEMouseListener
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMouseListener methodsFor: 'not yet classified'!

snippet
	^ 
'public class AnotherFrame implements MouseListener {
      public AnotheFrame(){
        ...
        aComponent.addMouseListener(this);
        ...
      }

      public void mousePressed(MouseEvent e) {...}

      public void mouseReleased(MouseEvent e) {...}

      public void mouseEntered(MouseEvent e) {...}

      public void mouseExited(MouseEvent e) {...}

      public void mouseClicked(MouseEvent e) {...}
    }'
!

title
	^ 'Handling mouse events'
! !

IAESlide subclass: #IAECalculatorFirstImplementation
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECalculatorFirstImplementation methodsFor: 'accessing'!

cssClass
	^'slide green3d'
!

snippet
	^  
'public class Calculator  { 
  public int power(int firstNumber, int secondNumber) {
	return 4;
  }
}'
! !

!IAECalculatorFirstImplementation methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Make it pass'.
	html div
		class: 'center';
		with: [ self renderJava: self snippet on: html ].
! !

IAEAbstractCodeSnippetSlide subclass: #IAEJTextField
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJTextField methodsFor: 'not yet classified'!

snippet
	^
'public class FrameWithTextField extends JFrame 
                              implements KeyListener {
      JTextField nameInput; 

      public FrameWithTextField(){
        nameInput = new JTextField(20);
        nameInput.addKeyListener(this);
        getContentPane().add(nameInput);
        pack();
      }

      @Override
      public void keyPressed(KeyEvent event) {
        if (event.getKeyCode() == KeyEvent.VK_ENTER) {
          System.out.println(nameInput.getText());
        }
      }
    }'
!

title
	^ 'Keyboard events'
! !

IAESlide subclass: #IAECalculatorSecondImplementation
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECalculatorSecondImplementation methodsFor: 'accessing'!

cssClass
	^'slide green3d'
!

snippet
	^  
'public class Calculator  { 
  public int power(int firstNumber, int secondNumber) {
	return (int) Math.pow(	firstNumber, 
				secondNumber);
  }
}'
! !

!IAECalculatorSecondImplementation methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Make it pass'.          		
	html div
		class: 'center';
		with: [	self renderJava: self snippet on: html ].
! !

IAEAbstractCodeSnippetSlide subclass: #IAEJComboBox
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJComboBox methodsFor: 'not yet classified'!

snippet
	^
'public class FrameWithComboBox extends JFrame 
                           implements ActionListener {
  JComboBox movieSelect;       
  public FrameWithComboBox(){
    movieSelect = new JComboBox();
    movieSelect.addItem("Dr No");
    movieSelect.addItem("Goldfinger");
    movieSelect.addItem("Die another day");
    movieSelect.addActionListener(this);
        
    getContentPane().add(movieSelect);
    pack();
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    String selectedMovie = 
               (String)movieSelect.getSelectedItem();
    System.out.println(selectedMovie);
  }
}'
!

title
	^ 'JComboBox'
! !

IAESlide subclass: #IAECalculatorTestJUnit4
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECalculatorTestJUnit4 methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
!

snippet
	^ 
'public class TestCalculator {
  protected Calculator calc;
	
  @Before
  public void createCalculator (){
    this.calc = new Calculator();
  }
	
  @Test
  public void twoPowerTwoShouldReturnFour() {
    assertEquals(4, this.calc.power(2,2));
  }
	
  @Test
  public void threePowerFourShouldReturnEightyOne() {
    assertEquals(81, this.calc.power(3, 4));
  }
}'
! !

!IAECalculatorTestJUnit4 methodsFor: 'rendering'!

renderSlideOn: html
	html h2: 'JUnit 4 annotations'.
	html div
		class: 'center';
		with: [  self renderJava: self snippet on: html ].
! !

IAEAbstractCodeSnippetSlide subclass: #IAEJList
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJList methodsFor: 'not yet classified'!

snippet
	^
'public class Hero {
    String name;
    public Hero(String name) { this.name = name; }
}

public class FrameWithList extends JFrame {
  JList namesList;
  DefaultListModel heroes;
      
  public FrameWithList(){
    heroes = new DefaultListModel();
    heroes.addElement(new Hero("Spiderman"));
    heroes.addElement(new Hero("Batman"));
    
    namesList = new JList(heroes);
    getContentPane().add(namesList);
    pack();
  }
}'
!

title
	^ 'JList with Objects'
! !

IAESlide subclass: #IAESectionExercises
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAESectionExercises methodsFor: 'accessing'!

backgroundColor
	^ '#ffdddd'
! !

!IAESectionExercises methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center huge fancy';
		with: [	html h2 
                       			class: 'red'; 
                       			with: 'EXERCICES'	].
! !

IAEAbstractCodeSnippetSlide subclass: #IAEModelView
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEModelView methodsFor: 'not yet classified'!

snippet
	^
' public class Hero {
      String name;
      
      public Hero(String name){
        this.name = name;
      }
      
      public String toString(){
        return "I''m" + this.name;
      }
    }'
!

title
	^ 'Defining object string representation'
! !

IAESlide subclass: #IAETDDStackExercise
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDStackExercise methodsFor: 'accessing'!

snippet
	^
'import java.util.ArrayList;

public class Stack {
  ArrayList<String> items = new ArrayList<String >();

  public boolean isEmpty() { 
    return items.isEmpty();
  }

  public String pop() throws StackEmptyException {
    if (this.isEmpty()) {
      throw new StackEmptyException(); 
    }
    return items.remove(0); 
  }

  public void push( String item) { 
    items.add(item);
  }
    
  public String top () throws StackEmptyException {
    if (this.isEmpty()) {
      throw new StackEmptyException();
    }
    return items.get(0); 
  }
}'
!

cssClass
	^ 'slide red3d'
! !

!IAETDDStackExercise methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Stack exercise: fix it !!'.
	html div
		class: 'center';
		with: [	self renderJava: self snippet on: html  ].
! !

IAESlide subclass: #IAEAbstractImageSlide
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAbstractImageSlide methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section center';
		with: [	html img: 'iae/images/', self imageFile]
!

cssClass
	^'slide green3d'
! !

IAESlide subclass: #IAETDDLargestVideo
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDLargestVideo methodsFor: 'accessing'!

cssClass
	^'slide black'
! !

!IAETDDLargestVideo methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: 'Largest number in a list exercise'.
	html iframe 
		width:450;
		height:250;
		src:'http://player.vimeo.com/video/29681165?title=0&amp;byline=0&amp;portrait=0'
! !

IAEAbstractImageSlide subclass: #IAEJFrameSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJFrameSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/first_frame.png'
! !

IAESlide subclass: #IAETDDTestExceptionThrown
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDTestExceptionThrown methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
!

snippet
	^ 
'public class EmptyStackTest {

  @Test(expected=StackEmptyException.class)
  public void popShouldThrowStackEmptyException() 
			throws StackEmptyException {

    Stack stack = new Stack();
    stack.pop();

  }
}'
! !

!IAETDDTestExceptionThrown methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'center';
		with: [	html h1: 'Test exception is thrown'.
                       		self renderJava: self snippet on: html 	]
! !

IAEAbstractImageSlide subclass: #IAEJLabelSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJLabelSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/frame_label.png'
! !

IAESlide subclass: #IAETDDBookAstels
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDBookAstels methodsFor: 'accessing'!

cssClass
	^ 'slide black'
! !

!IAETDDBookAstels methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'TDD: A practical guide - Dave Astels'.
	html div
		class: 'center';
		with: [ html img: 'iae/images/astels_tdd_book.jpg' ]
! !

IAEAbstractImageSlide subclass: #IAEJFramePackSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJFramePackSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/frame_pack.png'
! !

IAESlide subclass: #IAEParcours
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEParcours methodsFor: 'accessing'!

backgroundColor
	^ '#dfd'
! !

!IAEParcours methodsFor: 'rendering'!

renderSlideOn: html
	html img src: 'iae/images/parcours.png'
! !

IAEAbstractImageSlide subclass: #IAEGridLayoutSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEGridLayoutSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/grid_layout_3_2.png'
! !

IAESlide subclass: #IAEProgramming
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEProgramming methodsFor: 'accessing'!

backgroundColor
	^ '#333'
! !

!IAEProgramming methodsFor: 'rendering'!

renderSlideOn: html
	html 
		h1 
			class: 'center big';
			with: 'Programming'.
	html img: 'iae/images/human_evolution.jpg'
! !

IAESlide subclass: #IAEFlowLayoutSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEFlowLayoutSnapshot methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section center';
		with: [	
				html h1: 'Flow layout'.
                  		html 
                       			p: [  html img: 'iae/images/swing/flow_layout1.png' ];
                       			p: [  html img: 'iae/images/swing/flow_layout2.png'] ]
! !

IAESlide subclass: #IAEGitHub
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEGitHub methodsFor: 'rendering'!

renderSlideOn: html
          html a 
          	href: 'http://www.github.com'; 
          	with: 'github' .
          
	 html img: 'iae/images/github_network.png'.
! !

IAEAbstractImageSlide subclass: #IAETextFieldSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETextFieldSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/text_field.png'
! !

IAESlide subclass: #IAEPractices
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEPractices methodsFor: 'rendering'!

renderSlideOn: html
	html h1 
		class: 'big';
		with: 'Practices'.
!

style
	^ 'background: rgb(170,170,180) url(iae/images/martialart.jpg) no-repeat center center; box-shadow: none'
!

backgroundColor
	^ 'rgb(170,170,180)'
! !

IAEAbstractImageSlide subclass: #IAEComboBoxSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEComboBoxSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/combo_box.png'
! !

IAESlide subclass: #IAEExtremeProgramming
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEExtremeProgramming methodsFor: 'accessing'!

cssClass
	^'slide black'
! !

!IAEExtremeProgramming methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: 'eXtreme Programming'.
	html iframe 
		width:560;
		height:315;
		src:'http://www.youtube.com/embed/Ytu1Hxzr_Bs'
! !

IAEAbstractImageSlide subclass: #IAEJListSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJListSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/jlist1.png'
! !

IAESlide subclass: #IAETDDCycle
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDCycle methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(3, 146, 187)'
! !

!IAETDDCycle methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center';
		with: [	html 
                       			img: 'iae/images/tdd_cycle.gif'
                    ]
! !

IAEAbstractImageSlide subclass: #IAEJListModelSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJListModelSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/jlist2.png'
! !

IAESlide subclass: #IAECalculatorTest
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECalculatorTest methodsFor: 'accessing'!

snippet
	^  
'import junit.framework.TestCase;

public class TestCalculator extends TestCase { 
  public void testTwoPowerTwoEqualsFour (){
    Calculator calc = new Calculator (); 
    assertEquals(4, calc.power(2, 2));
  }
}'
!

cssClass
	^'slide red3d'
! !

!IAECalculatorTest methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Write a test'.
	html div
		class: 'center';
		with: [	
                  		self renderJava: self snippet on: html ].
! !

IAEAbstractImageSlide subclass: #IAEFrameTPSnapshot
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEFrameTPSnapshot methodsFor: 'not yet classified'!

imageFile
	^ 'swing/tp_gui.png'
! !

IAESlide subclass: #IAECalculatorRefactor
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECalculatorRefactor methodsFor: 'accessing'!

cssClass
	^ 'slide blue3d'
!

snippet
	^  
'import junit.framework.TestCase;

public class TestCalculator extends TestCase { 
  protected Calculator calc;

  public void setUp() {
    this.calc = new Calculator (); 
  }

  public void testTwoPowerTwoEqualsFour (){
    assertEquals(4, this.calc.power(2, 2));
  }

  public void testThreePowerFourEqualsEightyOne() { 
    assertEquals(81, this.calc.power(3, 4));
  }
}'
! !

!IAECalculatorRefactor methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Refactor'.
       	html div
		class: 'center';
		with: [	self renderJava: self snippet on: html ].
! !

IAESlide subclass: #IAEJavaSwingResources
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEJavaSwingResources methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Resources'.
	html  ul: [
          html li: [html a
			href: 'http://download.oracle.com/javase/tutorial/uiswing/';
			with: 'Trail: Creating a GUI With JFC/Swing'].

	  html li: [html a
			href: 'http://www.uispec4j.org/';
			with: 'Testing GUI with UISpec4J'].
          
          html li: [	html a
			href: 'http://lolgzs.free.fr/iae-course/iae/tp2/ToDoList.zip';
			with: 'Download correction on Swing Exercise'].

	html li: [	html a
			href: 'http://lolgzs.free.fr/iae-course/iae/tp2/ToDoList_Correction.zip';
			with: 'Download correction on UISpec Exercise'].
         ]
! !

IAESlide subclass: #IAETDDLargestExerciseFirstTest
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDLargestExerciseFirstTest methodsFor: 'accessing'!

snippet
	^
'public class TestLargest  { 
  @Test
  public void testOrder () {
    assertEquals(9, 
                 Largest.largest(new int[] {8,9,7})); 
  }
￼￼￼￼￼￼}'
!

cssClass
	^ 'slide red3d'
! !

!IAETDDLargestExerciseFirstTest methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'First test'.
	html div
		class: 'center';
		with: [	self renderJava: self snippet on: html	].
! !

IAEAbstractCodeSnippetSlide subclass: #IAEUISpec
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEUISpec methodsFor: 'not yet classified'!

title
	^ 'Test with UISpec'
!

snippet
	^
'public class EmptyToDoEditor {
  protected ToDoEditor editor;
  protected Window editorSpec;

  @Before
  public void setUpEditor() {
    this.editor = new ToDoEditor();
    this.editorSpec = new Window(this.editor);
  }
	
  @Test
  public void listBoxShouldBeEmpty() {
    assertThat(this.editorSpec.getListBox().isEmpty());
  }
'
! !

IAESlide subclass: #IAETDDStackFixtures
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDStackFixtures methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'One class per context / fixture'.
	html div
		class: '';
		with: [	html ul: [
          				html 
          					li: 'EmptyStackTest';
          					li: 'StackWithStringMilesTest';
          					li: 'StackWithStringsMilesMarcusHerbieTest'	 ]
                       ]
! !

IAESlide subclass: #IAEUISpecVideo
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEUISpecVideo methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: 'TDD with UISpec'.
	html iframe 
		width:400;
		height:300;
		src:'http://player.vimeo.com/video/30958504?title=0&amp;byline=0&amp;portrait=0'
! !

IAEPresentation subclass: #IAESoftwareDevPresentation
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAESoftwareDevPresentation methodsFor: 'accessing'!

description
	^'IAE - M1 MTI - 2011. Software development tools and practices overview'
!

slideClasses
	^ {
	IAEIntroSlide. 
	IAEParcours.
	IAEPharocasts.
	IAEAmber.
	IAECara74.
	IAECourseContent.
	IAEAgileGrenoble.
	IAEWhatIsSoftwareDevelopment.
	IAEProject.
	IAEProgramming.
	IAETeamWork.
	IAETools.
	IAEToolMisused.
	IAEPractices.
	IAETracker.
	IAEVCS.
	IAEGitHub.
	IAETDDCycle.
	IAEContinuousIntegration.
	IAEContinuousDelivery.
	IAEExtremeProgramming.
	IAEScrum.
	IAESummary.
	IAELearn
}
! !

!IAESoftwareDevPresentation class methodsFor: 'accessing'!

title
	^'IAE - Software Development'
! !

!IAESoftwareDevPresentation class methodsFor: 'testing'!

isConcrete
	^true
! !

IAEPresentation subclass: #IAEMocks
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMocks methodsFor: 'not yet classified'!

description
	^ 'IAE - M1 MTI - 2011. How to isolate tested objects with Mocks'
!

slideClasses
	^ {
	IAEIntroSlide.
	IAETestDependencies.
	IAEMockMovieEditor.
	IAEEasyMockVideo.
	IAEMockResources.
	IAESectionExercises.
	IAEMovieApplication.
	IAEMovieApplicationMVC
}
! !

!IAEMocks class methodsFor: 'accessing'!

title
	^ 'IAE - Mocks'
! !

!IAEMocks class methodsFor: 'testing'!

isConcrete
	^ true
! !

IAESlide subclass: #IAEAgileGrenoble
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAgileGrenoble methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center';
		with: [	html a 
					href:  'http://agile-grenoble.org/'; 
					with: [html img: 'iae/images/ag2011.png'].
                      		
                                html div 
                                         class: 'right'; 
                                         with: 'jeudi 24 novembre']
! !

IAEAbstractImageSlide subclass: #IAETestDependencies
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETestDependencies methodsFor: 'accessing'!

title
	^ 'Isolate objects'
!

imageFile
	^ 'test_dependencies.png'
! !

IAESlide subclass: #IAEToolMisused
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEToolMisused methodsFor: 'not yet classified'!

renderSlideOn: html
	html div
		class: 'center section';
		with: [html img: 'iae/images/blame_tool.png']
! !

IAEAbstractImageSlide subclass: #IAEMockMovieEditor
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMockMovieEditor methodsFor: 'accessing'!

title
	^ 'Mock MovieEditor object'
!

imageFile
	^ 'mock_movies.png'
!

cssClass
	^'slide blue3d'
! !

IAESlide subclass: #IAESummary
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAESummary methodsFor: 'rendering'!

renderSlideOn: html
        html h1
		class: 'blue';
		with: 'Summary'.
	html div
		class: 'center big red';
		with: [
			html ul
				class: 'left-column nobullet';
				with: [	html 
        	        	      			li: 'Tracker';
	                      				li: 'VCS';
                	      				li: 'Manager';
                      					li: 'TDD'	].
			html ul
				class: 'right-column nobullet';
				with: [	html 
                                       			li: 'XP';
                      					li: 'CI';
                      					li: 'CD';
                      					li: 'Scrum'	] ].
! !

IAESlide subclass: #IAEEasyMockVideo
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEEasyMockVideo methodsFor: 'rendering'!

renderSlideOn: html
	html h3
		class: 'center';
		with: 'EasyMock'.
	html iframe 
		width:400;
		height:300;
		src:'http://player.vimeo.com/video/31692069?title=0&amp;byline=0&amp;portrait=0'
! !

IAESlide subclass: #IAETDDLargestExercise
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDLargestExercise methodsFor: 'accessing'!

snippet
	^
'public class Largest {
  public static int largest(int [] list ) {
    int index, max = Integer.MAX_VALUE;

    for (index = 0; index < list.length−1; index++) {
      if (list[index]>max) {
        max= list[index];
      }
      return max; 
    }
  } 
}'
!

cssClass
	^ 'slide blue3d'
! !

!IAETDDLargestExercise methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'center';
		with: [	html h1: 'Largest number in a list'.
                       		self renderJava: self snippet on: html.
                      		html h1
                       			class: 'red'; 
                       			with: 'fix it !!'].
! !

IAESlide subclass: #IAEMockResources
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMockResources methodsFor: 'not yet classified'!

renderSlideOn: html
	html h1: 'Resources'.
	html  ul: [
          html li: [html a
			href: 'http://www.easymock.org/';
			with: 'EasyMock'].

	  html li: [html a
			href: 'http://code.google.com/p/mockito/';
			with: 'Mockito'].
          
          html li: [	html a
			href: 'http://code.google.com/p/powermock/';
			with: 'PowerMock'].

	html li: [	html a
			href: 'http://lolgzs.free.fr/iae-course/iae/tp3/ToDoListEasyMock.zip';
			with: 'Download correction on MVC + EasyMock Exercise'].
         ]
!

cssClass
	^'slide blue3d'
! !

IAESlide subclass: #IAETDDTestExceptionNotThrown
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETDDTestExceptionNotThrown methodsFor: 'accessing'!

snippet
^
'public class StackWithStringMilesTest {
  protected Stack stack;

  @Before
  public void setupStack() {
    this.stack = new Stack();
    this.stack.push("Miles");
  }
	
  @Test
  public void popShouldNotThrowStackEmptyException() 
                       throws StackEmptyException {
    this.stack.pop();
  }
}'
! !

!IAETDDTestExceptionNotThrown methodsFor: 'rendering'!

renderSlideOn: html
	html h1: [  	html span: 'Test exception is'. 
    				html span class: 'red'; with: ' NOT '.
          			html span: 'thrown'.				].
	html div 
		class: 'center';
		with: [ self renderJava: self snippet on: html 	]
! !

IAESlide subclass: #IAETools
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAETools methodsFor: 'accessing'!

backgroundColor
	^ 'rgb(150, 60, 60)'
!

cssClass
	^'slide black'
! !

!IAETools methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center';
		with: [	html img: 'iae/images/tools.jpg'.
                      		html h1: 'TOOLS'				]
! !

IAEPresentation subclass: #IAEAgileIntro
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAgileIntro methodsFor: 'accessing'!

description
	^ 'Agile practices introduction'
!

slideClasses
	^ {IAEIntroSlide. IAEAgileResources}
! !

!IAEAgileIntro class methodsFor: 'not yet classified'!

isConcrete
	^ true
!

title
	^ 'IAE - Agile practices'
! !

IAEAbstractImageSlide subclass: #IAECustomImageSlide
	instanceVariableNames: 'imageFile title'
	category: 'Presentation-IAE'!

!IAECustomImageSlide methodsFor: 'not yet classified'!

imageFile: aString
	imageFile := aString
!

imageFile
	^ imageFile
!

title
	^ title
!

title: aString
	title := aString
!

id
	^ title
!

renderSlideOn: html
	html div 
		class: 'section center';
		with: [	html img
					style: 'height: 500px';
					src: 'iae/images/', self imageFile]
! !

IAEPresentation subclass: #IAEPomodoro
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEPomodoro methodsFor: 'not yet classified'!

description
	^'IAE - M1 MTI - 2011. Pomodoro technique'
!

initSlides
 slides := 
 #(   'title'
        'interruptions'
        '25mn'
        'break'
        '4_pomodoro_break'
        'unbreakable_pomodoro'
        'brain'
        'inventory'
        'daily_activities'
        'keep_small_tasks'
        'daily_activities_done'
        'inventory_done'
        'urgent'
        'manage_interruptions'
        'new_inventory'
        'symbols'
        'report'
        'retrospective') collect: [:name|
		(IAECustomImageSlide on: self) 
			title: name;
			imageFile: 'pomodoro/pt_', name, '.JPG'].

  slides addAll:  (#(  'pomodoro_technique'
  				   'pomodoro_illustrated'
     				   'pragmatic_thinking'
     				   'your-brain-at-work' )  collect: [:name| (IAECustomImageSlide on: self) 
														title: name;
														imageFile: 'pomodoro/', name,'.jpg'])
! !

!IAEPomodoro class methodsFor: 'not yet classified'!

isConcrete
	^true
!

title
	^ 'IAE - The Pomodoro Technique'
! !

IAESlide subclass: #IAEMovieApplicationMVC
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEMovieApplicationMVC methodsFor: 'not yet classified'!

renderSlideOn: html
	html h1: 'iMovies, MVC, TDD, Mocks'.

	html ol: [	html 
				li: [html a
					href: 'http://lolgzs.free.fr/iae-course/iae/tp1/iMovies.zip';
					with: 'Download iMovies (model)'] ;
				li: [ html 
						with: 'Develop "Add a Movie"';
					 	ul: [ html 
							  li: 'use TDD and mocking techniques';
							  li: 'first controller';
							  li: 'then view' ] ];
				li: 'Delete a Movie';
				li: 'Modify a Movie';
				li: 'A movie has a note' ].
!

cssClass
	^'slide green3d'
! !

IAESlide subclass: #IAEVCS
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEVCS methodsFor: 'accessing'!

cssClass
	^ 'slide black'
!

backgroundColor
	^ 'rgb(234, 242, 245)'
! !

!IAEVCS methodsFor: 'rendering'!

renderSlideOn: html
	html div
		class: 'section center';
		with: [
			html
				h1: 'Version Control System';
				img: 'iae/images/vcs.png'.
                 ]
! !

IAESlide subclass: #IAEAmber
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAmber methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'section center';
		with: [	html a
					href: 'http://www.amber-lang.net';
					with: [html img: 'iae/images/amber.png']]
! !

IAEPresentation subclass: #IAEAllSlides
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAEAllSlides methodsFor: 'accessing'!

description
	^ 'Used to browse all slides'
!

slideClasses
	^ (IAESlide allSubclasses select: [:aSlideClass| aSlideClass subclasses isEmpty]) sort: [:a :b | a name < b name].
! !

!IAEAllSlides class methodsFor: 'accessing'!

isConcrete
	^ true
! !

IAESlide subclass: #IAECalculatorSecondTest
	instanceVariableNames: ''
	category: 'Presentation-IAE'!

!IAECalculatorSecondTest methodsFor: 'accessing'!

cssClass
	^'slide red3d'
!

snippet
	^  
'import junit.framework.TestCase;

public class TestCalculator extends TestCase { 
  public void testTwoPowerTwoEqualsFour (){
    Calculator calc = new Calculator (); 
    assertEquals(4, calc.power(2, 2));
  }

  public void testThreePowerFourEqualsEightyOne() { 
    Calculator calc = new Calculator ();
    assertEquals(81, calc.power(3, 4));
  }
}'
! !

!IAECalculatorSecondTest methodsFor: 'rendering'!

renderSlideOn: html
	html h1: 'Write another test'.
	html div
		class: 'center';
		with: [  self renderJava: self snippet on: html ].
! !


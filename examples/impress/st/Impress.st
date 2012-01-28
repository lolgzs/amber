Smalltalk current createPackage: 'Impress' properties: #{}!
Widget subclass: #ImpressPresentation
	instanceVariableNames: 'canvas'
	category: 'Impress'!

!ImpressPresentation methodsFor: 'rendering'!

loadImpressOn: html
	html link 
		rel: 'stylesheet'; 
		href: 'lib/impress/css/impress-demo.css'.
	html script src: 'lib/impress/js/impress.js'.
!

renderOn: html
	html div 
		id: 'impress';
		with: [ self renderSlidesOn: html ].


	self loadImpressOn: html.
!

renderSlidesOn: html
	self 
		renderSlideOn: html effects: #{'x' -> 0. 'y' -> 1500 negated} with: [ html p: 'slide one' ];
		renderSlideOn: html effects: #{'x' -> 1000. 'y' -> 1500 negated} with: [ html p: 'slide two' ];
		renderSlideOn: html effects: #{'x' -> 0. 'y' -> 500 negated. 'z' -> 2000. 'scale' -> 1. 'rotate' -> 90} with: [ html p: 'slide three' ];
		renderSlideOn: html effects: #{'x' -> 500. 'y' -> 1500 negated. 'rotate-x' -> 0. 'rotate-y' -> 90.'scale' -> 3} with: [ html p: 'slide four' ];
		renderSlideOn: html effects: #{'x' -> 0. 'y' -> 0 negated. 'scale' -> 10} with: [ html p: 'slide five' ].
!

renderSlideOn: html effects: aHashedCollection with: aBlock
	|slide|
	slide := html div class: 'step'.
	aHashedCollection keysAndValuesDo: [:key :value|   slide at: 'data-', key put: value].
	slide with: aBlock.
! !

Widget subclass: #ImpressWorkspace
	instanceVariableNames: ''
	category: 'Impress'!

!ImpressWorkspace methodsFor: 'rendering'!

renderOn: html
	|button workspace|
	button := html button with: 'Load presentation'.
	workspace := html div id: 'impress-workspace'.

	button onClick: [workspace contents: [:aCanvas|  ImpressPresentation new  renderOn: aCanvas ]].
! !

!ImpressWorkspace class methodsFor: 'initialize'!

initialize
	self load
! !

!ImpressWorkspace class methodsFor: 'loading'!

load
	ImpressWorkspace new appendToJQuery: 'body' asJQuery
! !


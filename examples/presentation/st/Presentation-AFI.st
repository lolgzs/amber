Smalltalk current createPackage: 'Presentation-AFI' properties: #{}!
IAESlide subclass: #OCNoGetterSetter
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCNoGetterSetter methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span
				class: 'red';
				with: 'No '.
			html span
				class: 'blue';
				with: 'Getters / Setters / Properties']
!

cssClass
	^ 'slide blue3d'
!

title
	^ '9'
! !

IAESlide subclass: #OCFirstClassCollections
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCFirstClassCollections methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span: ' Use '.
			html span
				class: 'red';
				with: 'first-class'.
			html span
				class: 'blue';
				with: ' collections']
!

cssClass
	^ 'green3d slide'
!

title
	^ '8'
! !

IAESlide subclass: #OCNoMoreTwoInstVar
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCNoMoreTwoInstVar methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span
				class: 'blue';
				with: ' no more than '.
			html span
				class: 'red';
				with: '2'.
			html span: ' instance variables per class ']
!

cssClass
	^ 'slide wax3d'
!

title
	^ '7'
! !

IAESlide subclass: #OCKeepAllEntitiesSmall
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCKeepAllEntitiesSmall methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span: 'Keep all entities '.
			html span
				class: 'red';
				with: 'small']
!

cssClass
	^ 'slide blue3d'
!

title
 	^ '6'
! !

IAESlide subclass: #OCDontAbbreviate
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCDontAbbreviate methodsFor: 'not yet classified'!

renderSlideOn: html
	html div: '( Do not abbreviate )'.
	html div 
		class: 'section huge center blue';
		with: 'DNAbb'.
!

cssClass
	^ 'slide red3d'
!

title
	^ '5'
! !

IAESlide subclass: #OCOnlyOneDotPerLine
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCOnlyOneDotPerLine methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span: 'Only '.
			html span
				class: 'red';
				with: 'one'.
			html span
				class: 'blue';
				with: ' dot '.
			html span:' per line'.]
!

cssClass
	^ 'slide green3d'
!

title
	^ '4'
! !

IAESlide subclass: #OCWrapPrimitivesStrings
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCWrapPrimitivesStrings methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span
				class: 'red';
				with: 'Wrap '.
			html span:' all primitives and strings'.]
!

cssClass
	^ 'slide wax3d'
!

title
	^ '3'
! !

IAESlide subclass: #OCNoElse
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCNoElse methodsFor: 'not yet classified'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span
				class: 'red';
				with: 'No '.
			html span
				class: 'blue';
				with: 'else'.
			html span:' keyword'.]
!

title
	^ '2'
!

cssClass
	^ 'slide blue3d'
! !

IAESlide subclass: #OCOneLevelIndentation
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!OCOneLevelIndentation methodsFor: 'rendering'!

renderSlideOn: html
	html div 
		class: 'section huge center';
		with: [
			html span
				class: 'red';
				with: 'One'.
			html span: ' level of '.
			html span
				class: 'blue';
				with: 'indentation'.
			html span:' per method'.]
!

cssClass
	^ 'slide green3d'
!

title
	^ '1'
! !

IAEPresentation subclass: #AFIObjectCalisthenics
	instanceVariableNames: ''
	category: 'Presentation-AFI'!

!AFIObjectCalisthenics methodsFor: 'accessing'!

description
	^ 'Nine Steps to Better Software Design'
!

slideClasses
	^ {
IAEIntroSlide. 
IAEPractices.
OCOneLevelIndentation.
OCNoElse.
OCWrapPrimitivesStrings.
OCOnlyOneDotPerLine.
OCDontAbbreviate.
OCKeepAllEntitiesSmall.
OCNoMoreTwoInstVar.
OCFirstClassCollections.
OCNoGetterSetter
}
! !

!AFIObjectCalisthenics class methodsFor: 'testing'!

isConcrete
	^ true
!

title
	^ 'AFI - Object Calisthenics'
! !


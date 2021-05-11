# Basic JavaScript Ghostbuster Game

## Originally a school project for SAIT

Repo Author, Owner & Maintainer: <em>Kyle Welsh</em>

### [GitHub Repo](https://github.com/Kylewwelsh/cpnt262-a1)

### [GitHub Pages](https://kylewwelsh.github.io/cpnt262-a1/)

> ## Attributes:

- [Grepper](https://www.codegrepper.com/code-examples/delphi/how+to+remove+a+buttons+border+when+clicked+css) teaching me how to remove the borders on buttons. [Privacy](https://www.codegrepper.com/privacy-policy.php)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor), [Daniele from Tumult Forums](https://forums.tumult.com/t/change-mouse-cursor-to-image/8926) teaching me how to change the cursor to whatever I want. [MDN Policy](https://www.mozilla.org/en-US/privacy/websites/), [Tumult Policy](https://tumult.com/hype/privacy/)
- [Codrops](https://tympanus.net/codrops/css_reference/keyframes/0) giving me a refresher on keyframes. [Policy](https://tympanus.net/codrops/privacy-policy/)
- [Icons Icons](https://icon-icons.com/icon/ghost/110009) giving me the ghost icon. [Terms of Use](https://icon-icons.com/terms-of-use/)
- [Linkedin Learning](https://www.linkedin.com/learning/) Java Script Course, Tony Grimes: both taught me everything about Java Script. Cheers to you guys! [Linkedin Learning Polic](https://www.linkedin.com/legal/privacy-policy?lipi=urn%3Ali%3Apage%3Ad_learning_feed%3Brg1N4rE2Q4aXU%2FZo%2FEYHEQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_learning_feed-footer_privacy_policy)
- Ellie, was honestly a straight up freaking rockstar who saved my life on this and helped we work with the quereySelectors
- Figma app is where I created all the images (ghost, X, light, gun) Free Use on these created images, ghost of the gun is from the icons icons referenced above.
- I actually stayed away from W3SChools this time, YOU ARE WELCOME TONY! (To be honest I tried to use them but everything was brutally explained)
- Shoutout to CodePen, it is helpful to see live when learning a new language like this.
- Tony's toggle example from the in-class

---

> ## February 16th 2020:

- Repo created on git hub, file directory created on local
- css linked to html, java script linked at bottom of html
- Still not very confident using Java Script, going through some extra lessons on Lynda to get a better handle before I tackle this assignment
  > ## February 19th 2020:
- I swear to god I wasn't putting this off until the last minute. I spent the last few days doing the linked in to help solidify my understanding
- Now with a semi understanding I wanted to create a light switch, but I figured that would be boring so I thought I would build upon and idea of a game I had before I knew Java Script
- Starting this in codepen just to get a feel for everything before I move it to vs code
- Base idea will be "rooms" as boxes with black backgrounds and a light switch for each room that turns on
- Setting up the CSS and HTML is easy, but everything into a flex container, then each room into a flex container that contains the button that will turn it on
- Im awful at figma so I had to go super basic with the lights, they are made with an empty circle so when the background color is set to yellow (the color of light) on a button press it will look like the light is on
- going very basic with the other svgs in the rooms, the boxes with the red X will be made big enough that flex wrap automatically shoves them below the switch/light. the switch and the light are using the justify-content: space-between property to force them to either side of the room, the x boxes are just using margin: auto to center them, I will probably do the same thing for the ghost
- debated making a ghost svg but I do not posses the skillset to do so, instead icon icon had the snapchat ghost so we will roll with that, it has been positioned the same as the x boxes inside room 4
- working on the Java Script now, slow process but only issues come from me rushing through it and missing steps
- const(s) have been made for each room, event listeners have been added for each button, all the lights, x boxes and the ghost appear
- added a border to the light switch button when it is pressed to give it a pushed button look
- so far it seems lame the ghost is just there, am going to play around with animations for it
- I like the scale and rotation, it is kind of fun. tried to play with moving it around but didn't like the result, especially on small screens
- once the ghost does its transition I want to kill it, ghostbuster style
- set the animation-fill-mode to forwards so when it does its rotation and scale it stays and that size
- I remember seeing websites where the cursor was changed to an image, going to look into that
- I set the cursor to click when it is over the light switches on a hover, will do the same with the image cursor
- Created an svg of a "ghostbusters style gun"
- only problem I had was if they svg was too large it would not show up as a cursor, fixed the size now it shows up when hovering the ghost
- the ghost was originally just a ghost svg but now that I want to click it to go away I changed it to a button and set the svg to that buttons background image
- constants and event listener added to make the ghost go away on the click with the gun, the only issue now is I dont know how to reset it
- I am sure there are ways to reset it after but for now we are having a "winner" message appear when the ghost is clicked away, the winner message has a link saying click to play again and the link just reloads the page
- header and footer added, random color put as the background because why not?
- comments added to css and java script
- html and css validated, going to look for java script validator
- [Found a Java Script Validator](https://esprima.org/demo/validate.html)
- code validated
- will push to git hub, test on pages if it works I will submit
- Prayers up!

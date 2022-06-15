
var imageMapList = {
  'head': ['assets/head1.png', 'assets/head2.png', 'assets/head3.png', 'assets/head4.png'],
  'body': ['assets/body1.png', 'assets/body2.png', 'assets/body3.png', 'assets/body4.png'],
  'leg': ['assets/legs1.png', 'assets/legs2.png', 'assets/legs3.png', 'assets/legs4.png']
}

var maxNumber = 3;
var minNumber = 0;

var currentSelectedValueLayout = 3;

function showImage(buttonObject) {
  var getPartAttributeString = buttonObject.getAttribute('part');
  var imageObject = document.getElementById(getPartAttributeString);
  var imageNum = Number(imageObject.getAttribute('currentNumber'));
  var newImageString = imageMapList[getPartAttributeString];

  if (buttonObject.getAttribute('name') == 'prev') {
    if (imageNum == minNumber) {
      imageNum = 3;
    } else {
      imageNum--;
    }
  } else if (buttonObject.getAttribute('name') == 'next') {
    if (imageNum == maxNumber) {
      imageNum = 0;
    } else {
      imageNum++;
    }
  }

  imageObject.src = newImageString[imageNum];
  imageObject.setAttribute('currentNumber', imageNum.toString());
}

function showTools() {
  blankAll();
  document.getElementById('cardTools').innerHTML = /*html*/`
    <div class="innerCard">
    De to viktigste verktøyene vi skal bruke er disse:
        <ul>
            <li>
                Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                <br />Vi skal bruke noen <i>extensions</i>:
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            </li>
            <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
        </ul>
    </div>
`;
}

function showHtml() {
  blankAll();
  document.getElementById('cardHtml').innerHTML = /*html*/`
    <div class="innerCard">
        Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
        </ul>
    </div>
`;
}

function showCss() {
  blankAll();
  document.getElementById('cardCss').innerHTML = /*html*/`
    <div class="innerCard">
        Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
            </li>
        </ul>
    </div>
`;
}

function showJavaScript() {
  blankAll();
  document.getElementById('cardJavaScript').innerHTML = /*html*/`
    <div class="innerCard">
        Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
        ved
        å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
        <ul>
            <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                Moodle.</li>
            <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>
        
        </ul>
    </div>
    `;
}

function showBodyGame() {
  blankAll();
  document.getElementById('cardGame').innerHTML = /*html*/`    
  <div class="innerCard" id="centerImage">
    <div class="bodyPartRow">
      <button part="head" name="prev" onclick="showImage(this)">◀</button>
      <img src="assets/head1.png" id="head" currentNumber="0">
      <button part="head" name="next" onclick="showImage(this)">▶</button>
    </div>
    <div class="bodyPartRow">
      <button part="body" name="prev" onclick="showImage(this)">◀</button>
      <img src="assets/body1.png" id="body" currentNumber="0">
      <button part="body" name="next" onclick="showImage(this)">▶</button>
    </div>
    <div class="bodyPartRow">
      <button part="leg" name="prev" onclick="showImage(this)">◀</button>
      <img src="assets/legs1.png" id="leg" currentNumber="0">
      <button part="leg" name="next" onclick="showImage(this)">▶</button>
    </div>
  </div>
`;
}

function blankAll() {
  document.getElementById('cardTools').innerHTML = '';
  document.getElementById('cardCss').innerHTML = '';
  document.getElementById('cardHtml').innerHTML = '';
  document.getElementById('cardJavaScript').innerHTML = '';
  document.getElementById('cardGame').innerHTML = '';
}

function reArrangeLayout(buttonObject){
    var layoutString = buttonObject.getAttribute('name');
    if(layoutString == 'vertical' && currentSelectedValueLayout != 0){
        noLayout();
        document.getElementById('cards').classList.add('vertical');
        currentSelectedValueLayout = 0;
    }else if(layoutString == 'horizontal' && currentSelectedValueLayout != 1){
        noLayout();
        document.getElementById('cards').classList.add('horizontal');
        currentSelectedValueLayout = 1;
    }else if(layoutString == 'grid' && currentSelectedValueLayout != 2){
        noLayout();
        document.getElementById('cards').classList.add('grid');
        currentSelectedValueLayout = 2;
    }else if(layoutString == 'no' && currentSelectedValueLayout != 3){
        noLayout();
        currentSelectedValueLayout = 3;
    }
}

function noLayout(){
    document.getElementById('cards').classList.value = '';
}
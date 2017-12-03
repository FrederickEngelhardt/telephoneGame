let numOfPlayers = 0
let status = 'textbox'
let count = 1
let text = null
let textCount = 1
let previousDrawing = null

function reveal() {
  for (i = 1; i <= numOfPlayers; i++) {
    let modify = i
    $(`#${modify}`).css("display", "block")
  }
}

function getNumOfPlayers() {
  numOfPlayers = $(`#textBar`).val()
  return numOfPlayers
}

function grabText() {
  text = $(`#textBar${textCount}`).val()
  console.log('count',count);
  console.log('THIS IS TEXT', text);
  textCount++
  return text
}

function createDrawingBoard() {
  let getText = grabText()
  console.log(getText);
  $('.addon').append(
    `        <div id=${count} class="row">
              <div class="col s12 m12 l12">
                <div class="card">
                <div class="center-align">
                <span id="interpret-title${count}" class="card-title">Please draw out this text: ${getText}</span>
                </div>
                  <div class="card-image">
                  </div>
                  <div class="card-content">
                    <div id="drawingBoard${count}"></div>
                    <a id="button${count}" class="waves-effect waves-light btn"><i class="material-icons right sendTxt"></i>button</a>
                  </div>
                </div>
              </div>
            </div>
  `)
  // This is the drawing Framework Area
  LC.init(document.getElementById(`drawingBoard${count}`), {
   imageURLPrefix: 'images/lc-images',
   toolbarPosition: 'bottom',
   defaultStrokeWidth: 2,
   strokeWidths: [1, 2, 3, 5, 30]
  });
  status = 'drawing'
  console.log(status);
  return createListeners()
}

function getStatus (status){
  if (status === 'drawing') {return createTextbox()}
  else if (status === 'textbox') {return createDrawingBoard()}
}
const createTextbox = () => {
  $('.addon').append(
    `    <div id=${count} class="row">
          <div class="col s12 m12 l12">
            <div class="card">
              <div id="image${count}" class="card-image">
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                Input Your Intepretation: <input id="textBar${textCount}" type="text" name="fname">
                <a id="button${count}" class="waves-effect waves-light btn"><i class="material-icons right sendTxt"></i>button</a>
              </div>
            </div>
          </div>
        </div>`)
  status = 'textbox'
  console.log(status);
  return createListeners()
}
const createListeners = () => {
  if (count >= numOfPlayers) {
    return reveal()
  }
  if (count > 1) {
    let modify = count-1
    $(`#${modify}`).css("display", "none")
  }
  if (status === 'textbox' && count >= 2 ) {
    console.log('hello')
    let modify = count-1
    $(`#image${count}`).append($(`#drawingBoard${modify}`))
  }
  console.log(count,status);
  return $(`#button${count}`).click( () => {
    count++
    getStatus(status)
  })
}
$(document).ready( () => {
  $(".button-collapse").sideNav();
  $('.modal').modal()
  getNumOfPlayers()
  createListeners()
  createTextbox()
  });

let status = 'textbox'
let count = 1
let text = null
let textCount = 1
function grabText () {
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
              <div class="card-image">
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
  console.log(count,status);
  return $(`#button${count}`).click( () => {
    count++
    getStatus(status)
  })
}
$(document).ready( () => {
  $(".button-collapse").sideNav();
  createTextbox()
  $('.modal').modal()
  createListeners()
  });

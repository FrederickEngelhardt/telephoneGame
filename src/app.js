let status = 'textbox'
let count = 1
var drawboardHTML =
`<div class="row">
		<div class="example" data-example="1">
				<div class="board" id="default-board"></div>
		</div>
  </div>`;

function createDrawingBoard() {
  $('.addon').append(
    `<div id="drawingBoard${count}"></div>
    <a id="button${count}" class="waves-effect waves-light btn"><i class="material-icons right sendTxt"></i>button</a>
  `)
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
    `    <div class="row">
          <div class="col s12 m12 l12">
            <div class="card">
              <div class="card-image">
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                Input Your Intepretation: <input type="text" name="fname">
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
  // $(".addon").append(drawboardHTML);
  $('.modal').modal()
  createListeners()
  });

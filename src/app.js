// let status = 'textbox'
var defaultBoard = new DrawingBoard.Board('default-board');
var drawboardHTML = 		
`<div class="row">
		<div class="example" data-example="1">
				<div class="board" id="default-board">
				</div>
				</div>
	</div>`;


function createDrawingBoard() {
  var defaultBoard = new DrawingBoard.Board('default-board');
	var isMomHappy = true;
	var currentEnd = ".table" + count;
	
	console.log(currentEnd);

		$(currentEnd).append(
` <div class="example" data-example="default-board${count}">
				<div class="board" id="default-board${count}">
				</div>
				</div>
		</div>`);
}

let status = 'drawing'
let count = 1
function getStatus (status){
  if (status === 'drawing') {return createTextbox()}
  else if (status === 'textbox') {return createDrawingBoard()}
}
const createTextbox = () => {
  count++
  $('.addon').append(
    `    <div class="row">
          <div class="col s12 m12 l12">
            <div class="card">
              <div class="card-image">
                <img src="image1.jpg">
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                Input Your Intepretation: <input type="text" name="fname">
                <a id="button${count}" class="waves-effect waves-light btn"><i class="material-icons right sendTxt"></i>button</a>
              </div>
            </div>
          </div>
        </div>`)
  createListeners()
}
const createListeners = () => {
  return $(`#button${count}`).click( () => {
    getStatus(status)
		createDrawingBoard();
  })
}
$(document).ready( () => {
  $(".addon").append(drawboardHTML);
  $('.modal').modal()
  createListeners()
  });


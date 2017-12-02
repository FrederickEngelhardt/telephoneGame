// let status = 'textbox'
let status = 'drawing'
let count = 1
function getStatus (status){
  if (status === 'drawing') {return createTextbox()}
  else if (status === 'textbox') {return createDrawingBoard()}
}
const createTextbox = () => {
  count++
  $('.addon').append(
    `<div class='row'>
        <div class="table${count}">
          <input></input><a id="button${count}" class="waves-effect waves-light btn"><i class="materisal-icons right sendTxt"></i>button</a>
        </div>
      </div>`)
  createListeners()
}
const createListeners = () => {
  return $(`#button${count}`).click( () => {
    getStatus(status)
  })
}
$(document).ready( () => {
  createListeners()
})

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
        `<div class='card row'>
          <div class="insert col s12 m12 l12">
            <span class="card-title">Text</span>
            <div class="card-content">
              <input></input>
              <a id="button1" class="waves-effect waves-light btn"><i class="material-icons right sendTxt"></i>submit</a>

            </div>
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
  $('.modal').modal()
  createListeners()
})

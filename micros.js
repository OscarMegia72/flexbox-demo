require('./less/micros/micros.less')
function receiveMessage(event)
{
    console.log('$',event)
}
window.addEventListener("message", receiveMessage, false);


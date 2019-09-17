require('./less/micros/micro-dos.less')

function receiveMessage(event)
{
    console.log('$$$ % $$$',event)
}
parent.addEventListener("message", receiveMessage, false);
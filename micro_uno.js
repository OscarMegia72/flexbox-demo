require('./less/micros/micro-uno.less')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async  function alerta(){
    await sleep (1000)
    setInterval(()=>{
        parent.postMessage('hello', '*');
        console.log('envio')
    },1000)
};
alerta()



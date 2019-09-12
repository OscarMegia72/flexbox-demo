require('./less/scream4/scream4.less')
// window.addEventListener('scroll', function(e) {

// })
var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
}

var callback = function(entries, observer) { 
  console.log("#")
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log( "lista-clases",entry.target.classList.value)
      entry.target.classList.remove('inter-foto')
      //observer.unobserve(entry.target)
      console.log('un-observe',entry.target)
    }
  });
};
var observer = new IntersectionObserver(callback, options);
var targets = document.querySelectorAll('.inter-foto')
targets.forEach(target => {
  observer.observe(target)
}
  
);









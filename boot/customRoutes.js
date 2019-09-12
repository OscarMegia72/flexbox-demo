// https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js
// https://webapplog.com/url-parameters-and-routing-in-express-js/
let routes_custom =(()=>{
    let express = require('express');
    let router  = express.Router();
    let rutas = {get:{}, post:{}}
    // rutas
    rutas.get.helloGetOne ={
        params:[],
        controller: function(req, res, next){
            res.json({ctrl: 'helloGetOne-Get'})
        }
    }
    rutas.post.helloGetOne ={
        params:[],
        controller: function(req, res, next){
            res.json({ctrl: 'helloGetOne-Post'})
        }
    }
    rutas.get.helloGetTwo ={
        params:[],
        controller: function(req, res, next){
            res.json({ctrl: 'helloGetTwo-Get'})
        }
    }
    let enrutado = {
            set_rutas: ()=>{
                let methods = Object.keys(rutas)
                // console.log('metodos disponibles',methods)
                methods.forEach(method=> {
                    // console.log('verbos',rutas[method])
                    let tempRutaObject= Object.keys(rutas[method])
                    tempRutaObject.forEach(x=>{
                        console.log('==============')
                        console.log('metodo:',x, rutas[method][x])
                        console.log('verbo',rutas[method])
                        console.log('==============')
                        router['method']('/'+rutas[method][x],rutas[method][x].controller)
                        
                    })
                 })
                //  router.get('/h2',function(req, res, next){
                //     res.json({ctrl: 'helloGetOne-Post'})
                // })
                return router
            }
            
    }
    return enrutado

}
)();
module.exports = routes_custom
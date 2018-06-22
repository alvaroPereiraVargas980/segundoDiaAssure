            
      class tokenAlfa { 
          checkAlfa(l) {
                var controlador = true;
                var re = /^[A-Za-z+ ]+$/;
                if (re.test(l) === false) {
                    controlador = false;
                }else{}
               
            return controlador } 
}
class tokenVacio{
          checkVacio(g) {
                var controlador = true;
                if (g=='') {
                   
                controlador = false;
                }else{}

            return controlador } 
}
class tokenDigito{
            checkDigito(k) {
            var controlador = true;
                var re = /\d/;
                if (re.test(k) == false) {
                   controlador=false;
                }
                return controlador
            }
}
class tokenCero{
               checkCero(m) {
                var controlador = true;
                if (m < 0) {
                  controlador=false;
                }
                return controlador }
}
class tokenDes{
             checkDescription(t) {
                var controlador = true;
                if (t.length < 2000) {
               controlador=false;     

                }
               return controlador 
            }
}
               
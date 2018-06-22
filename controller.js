        
          
        function validadorDatos() {

            var n = document.getElementById("name").value;
            var a = document.getElementById("age").value;
            var d = document.getElementById("description").value

           let fun1=new val1;
            fun1.validarCampoName(n);
            let fun2 = new val2;
            fun2.validarCampoAge(a);
            let fun3=new val3;
            fun3.validarCampoDescripcion(d)
    } 
    class val1{

       validarCampoName(n){
       let to1=new tokenAlfa;
        let to2=new tokenVacio;
        if((to1.checkAlfa(n)==false)||(to2.checkVacio(n)==false)){
        alert("error name");
        }else{
        alert(" correcto name");
        }    
}
}
class val2{
      validarCampoAge(a){
        let to3=new tokenDigito;
        let to4=new tokenVacio;
        let to5=new tokenCero;
        if((to3.checkDigito(a)==false)||(to4.checkVacio(a)==false)||(to5.checkCero(a)==false)){
        alert("error age");
        }else{
        alert(" correcto age");
        }         
}
}
class val3{

      validarCampoDescripcion(d){
        let to6=new tokenDes;
        let to7=new tokenVacio;
        if((to6.checkDescription(d)==false)||(to7.checkVacio(d)==false)){
        alert("error descrip");
        }else{
        alert("correcto descrip");
        }       
        }
}
                   
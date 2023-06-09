import { postData,putData,opc } from "../../../apis/customer-api.js";
export class CustomerForm extends HTMLElement{

    constructor(){
        super();
        this.render();

    }
    render() {
        this.innerHTML = /* html */`
        <div class="card">
            <h5 class="card-header">Registro de clientes</h5>
            <div class="card-body">
                <div class="container">
                    <div class="row g-3">
                        <div class="col-12">
                            <form id = "frmData">
                                <div class="row g-3">
                                    <div class="col-3">
                                        <label for="cc" class="form-label">Documento del Cliente</label>
                                        <input type="text" class="form-control" id="cc" name="cc">
                                    </div>
                                    <div class="col-3">
                                        <label for="nombres" class="form-label">Nombres</label>
                                        <input type="text" class="form-control" id="nombres" name="nombres">                  
                                    </div>
                                    <div class="col-3">
                                        <label for="apellidos" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                    </div>
                                    <div class="col-4">
                                        <label for="telefono" class="form-label">Telefono</label>
                                        <input type="text" class="form-control" id="telefono" name="telefono">                  
                                    </div>
                                    <div class="col-4">
                                        <label for="fechanac" class="form-label">Fecha Nacimiento</label>
                                        <input type="date" class="form-control" id="fechanac" name="fechanac">                  
                                    </div>
                                    <div class="col-3">
                                        <label for="ciudadO" class="form-label">Ciudad Origen</label>
                                        <input type="text" class="form-control" id="ciudad" name="ciudad">                  
                                    </div>    
                                    <div class="row g-3">
                                        <div class="col-4">
                                            <label for="paisOri" class="form-label">Pais Origen</label>
                                            <input type="text" class="form-control" id="pais" name="pais">
                                        </div>
                                         <div class="col-4">
                                            <label for="email" class="form-label">Email cliente</label>
                                            <input type="email" class="form-control" id="email" name="email">
                                        </div>
                                    </div>    
                                    <div class="container mt-4 text-center" >
                                        <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar Clientes">
                                    </div>
                                </div>
                            </form>                         
                    </div>
                </div>
            </div>
            </div>
        </div>        
        `
        this.saveData();
    }
    saveData = () =>{
        let myForm = document.querySelector("#frmData");
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)    
        })
    }
}
customElements.define("customer-form",CustomerForm);

(function(){

    const enviar = document.querySelector('#frmData')
    enviar.addEventListener('submit' , agregarData)

    function agregarData() {
        const identificacion = document.querySelector('#cc').value;
        const nombres = document.querySelector('#nombres').value;
        const apellidos = document.querySelector('#apellidos').value;
        const telefono = document.querySelector('#telefono').value;
        const fechaNac = document.querySelector('#fechaNac').value;
        const ciudadOrig = document.querySelector('#ciudadOrig').value;
        const paisOrig = document.querySelector('#paisOrig').value;
        const email = document.querySelector('#email').value;
        
        const dato = {
            identificacion,
            nombres,
            apellidos,
            telefono,
            fechaNac,
            ciudadOrig,
            paisOrig,
            email
        }

        if (validar(dato)) {
            alert('Todos los campos son necesarios');
            return;
        }
        postData(dato)


        function validar(obj) {
            return !Object.values(obj).every(dato => dato !== "");
        }
    }

})()
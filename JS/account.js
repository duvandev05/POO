class Account{
    constructor(name, document){
        this.id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    }
    printDataAccount(){
        console.log("Nombre: " + this.name);
        console.log('Documento: ' + this.document);
        console.log('Email: ' + this.email);
        console.log('Password: ' + this.password);
    }

    
}
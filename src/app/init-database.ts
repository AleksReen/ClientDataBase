export class Init {
    public load (){
        if (localStorage.getItem('ClientDataBase') === null || localStorage.getItem('ClientDataBase') == undefined){
            console.log('ClientDataBase NO Creating NEW.....');

            let dataBase = [ {name: 'test', address: 'test', phone: '123', email: 'test@tut.by'} ];

            localStorage.setItem('ClientDataBase', JSON.stringify(dataBase));
            return;
        } else {
            console.log('ClientDataBase OK!');
        }
    }
}

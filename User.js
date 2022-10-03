class User{
    constructor(name,surname,age){
        this._name=name;
        this._surname=surname;
        this._age=age;
    }

    Welcome(){
        return `Welcome ${this._name} ${this._surname}, age ${this._age}`;
    }
}

export {User};
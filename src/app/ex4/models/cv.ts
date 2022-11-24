export class Cv {

  id: String = '';

  name: String = '';

  firstname: String = '';

  Age: number = 0;

  Cin: String = '';

  Job: String = '';

  path: String = '';

  constructor(id: String,name: String,firstname: String,Age: number,Cin: String,Job: String,path: String){
    this.id = id;
    this.name  = name ;
    this.firstname = firstname;
    this.Age = Age;
    this.Cin = Cin;
    this.Job = Job;
    this.path = path;
  }
}

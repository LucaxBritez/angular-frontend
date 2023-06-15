export class Employee {
    //1-En el video los atributos de esta clase no requerian estar catalogados como "indefinidos"(!)
    //pero bueno, la vida es dura mijin.(Funciona, pero hay algo mejor)
    /*2-Googlee el error:

    Property 'id' has no initializer and is not definitely assigned in the constructor.

    Que tenian inicialmente las variables y lo solucione cambiando la propiedad 
    "strict" de true a false*/

    id: number;
    firstName: string;
    lastName: string;
    emailId: string;
}

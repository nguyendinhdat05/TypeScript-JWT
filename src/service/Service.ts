export interface Service<T>{
    findAll();
    add(data);
    edit(id , data);
    findById(id);
    delete(id);
}
export interface Service<T> {
    findAll(): any;
    add(data: any): any;
    edit(id: any, data: any): any;
    findById(id: any): any;
    delete(id: any): any;
}

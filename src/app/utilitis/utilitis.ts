export const remove = (obj:Record<string,unknown>,field:string[] ):Record<string,unknown>=>{
    field.forEach(element => {
        
            delete obj[element]
        
    });
    return obj
}
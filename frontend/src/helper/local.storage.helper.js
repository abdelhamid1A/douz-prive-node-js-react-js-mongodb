export const saveDataToLocalStorage = (key, value) =>{
    localStorage.setItem(key, value);
}
export const getDataFromLocalStorage = (key) =>{
   return localStorage.getItem(key);
}
export const removeDataFromLocalStorage = (key) =>{
    localStorage.removeItem(key);
}
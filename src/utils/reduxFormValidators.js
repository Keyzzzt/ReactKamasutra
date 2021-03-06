


export const required = value => {
    if(value) return undefined;
    return "Field is required";
}

// Когда мы передаем функцию с замыканием в компоненту, она возвращает нам новую функцию
// поэтому начинаются проблемы, поэтому вызов maxLengthCreator нужно сделать за пределами компоненты
export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
export const updateObjectInArray = (items, itemId, objectPropName, newObjectProps) => {
    return items.map(u => {
        if(u[objectPropName] === itemId){
            return {...u, ...newObjectProps}
        }
        return u
})
}

// Функция выше заменяет следующее:

// case FOLLOW:
//    return {...state, users: state.users.map(user => {
//        if(user.id === action.payload){
//            return {...user, followed: true}
//        }
//        return user
//        })}


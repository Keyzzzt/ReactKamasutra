import React, {useEffect, useState} from "react";



 const ProfileStatusHooks = (props) => {
     const [status, setStatus] = useState(props.status)
     const [editMode, setEditMode] = useState(false)

     // useEffect принимает функцию, которую он выполнит после отрисовки компоненты.
     // Если в массиве зависимостей мы не укажем параметры от которых мы зависим, то useEffect запустится после каждой отрисовки.
     // Указав props.status в массиве зависимостей, мы вызываем useEffect всегда, когда придет новый props.status
     useEffect(() => {
         setStatus(props.status)
     }, [props.status])


     const activateEditMode = () => {
         setEditMode(true)
     }
     const deActivateEditMode = () => {
         setEditMode(false)
         props.updateStatusThunkCreator(status)
     }
     const onStatusChange = (e) => {
         setStatus(e.target.value)
     }

        return <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status.'}</span>
                </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} type="text" value={status} />
            </div>
            }
        </>

}

export default ProfileStatusHooks;
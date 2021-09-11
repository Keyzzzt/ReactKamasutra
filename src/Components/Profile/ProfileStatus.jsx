import React from "react";

// Классовые компоненты всегда должны наследоваться от React.Component
// Тут FLUX не проходит через глобальный state, так как status в глобальном state это тот статус который он получил с сервера.
// Пока пользователь что то меняет, но не отправляет это на сервер, то мы организоваваем FLUX в локальном state.
 class ProfileStatus extends React.Component{
     // Если часть state никому кроме отдельной компоненты не нужен, можно сделать его локальным, чтобы не засорять глобальный.
     state = {
         editMode: false,
         status: this.props.status
     }

     // Чтобы не потерять контекст и не байндить, пишем метод при помощи стрелочной функции:
     // Обязательно менять state через setState(), иначе React не обновится.
     // setState() - асинхронная функция, поэтому если мы выведем значение до и после изменения, оно будет равно значению до setState().
     activateEditMode = () => {
        this.setState({
            editMode: true
        })
     }
     deActivateEditMode = () => {
         this.setState({
             editMode: false
         })
         this.props.updateStatusThunkCreator(this.state.status)
     }
     onStatusChange = (e) => {
         this.setState({
             status: e.target.value
         })
     }

     componentDidUpdate(prevProps, prevState, snapshot) {
         // Поскольку мы делаем два разных запроса в Profile Container нам нужно синхронизироваться
         // Проще было сделать это через один запрос. Но тут наглядно видим как можно использовать componentDidUpdate
         if(prevProps.status !== this.props.status){
             this.setState({
                 status: this.props.status
             })
         }
     }


     render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status.'}</span>
                </div>
            }

            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.state.status} />
            </div>
            }
        </>

    }
}

export default ProfileStatus;
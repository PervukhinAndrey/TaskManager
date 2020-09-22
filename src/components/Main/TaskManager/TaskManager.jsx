import React, {Fragment, useState} from 'react';
import s from './TaskManager.module.css';
import {NavLink} from "react-router-dom";
import PopUp from "../../common/PopUp/PopUp";
import CommonButton from "../../common/CommonButton/CommonButton";

const TaskManager = ({tasks, addTask,delTask,updateTask, ...props}) => {
    const [displayPopUp, setDisplayPopUp] = useState(false)
    const [actionType, setActionType] = useState(1)//1 - addTask,2 - updateTask, 3 - delTask
    const [taskForUpdate, setTaskForUpdate] = useState({})
    const [buttonCustomization, setButtonCustomization] = useState({color: 'green', label: 'Создать'})

    const onAddNewTask = () => {
        setTaskForUpdate('')
        setButtonCustomization({color: 'green', label: 'Создать',size:'normal'})
        setActionType(addTask);
        setDisplayPopUp(true);

    }
    const selectAction=()=>{
        switch (actionType){
            case 1:{
                return addTask;
            }
            case 2:{
                return updateTask;
            }
            case 3:{
                return delTask;
            }
            default:{
                return addTask;
            }
        }
    }

    return (
        <div className={s.taskManager}>
            <div className={s.taskManagerHeader}>
                <h2 className={s.taskManagerLabel}>Список задач</h2>

                <CommonButton onClickCallback={onAddNewTask} buttonCustomization= {{color: 'green', label: 'Добавить',size:'normal'}}/>
            </div>


            <table className={s.table}>
                <tbody>
                {tasks.map((task) => <TaskStringForTable
                     {...task}
                    setActionType={setActionType} setDisplayPopUp={setDisplayPopUp}
                    setTaskForUpdate={setTaskForUpdate} setButtonCustomization={setButtonCustomization}
                    key={task.id}/>)}
                </tbody>
            </table>

            {displayPopUp &&
            <PopUp action={selectAction()} task={taskForUpdate}
                   setDisplayPopUp={setDisplayPopUp} buttonCustomization={buttonCustomization}/>}
        </div>
    )
}

const TaskStringForTable = ({
                                id, title, setButtonCustomization,
                                setActionType, setDisplayPopUp, setTaskForUpdate
                            }) => {

    const onClickDelete = () => {
        setActionType(3);
        setButtonCustomization({color: 'red', label: 'Удалить',size:'normal'})
        setTaskForUpdate({id, title})
        setDisplayPopUp(true);
    }
    const onClickUpdate = () => {
        setActionType(2);
        setButtonCustomization({color: 'green', label: 'Изменить',size:'normal'})
        setTaskForUpdate({id, title})
        setDisplayPopUp(true);
    }
    return (
        <Fragment>
            <tr className={s.row}>
                <td className={s.column_1+' '+s.tableBorder}>Задача №{id}</td>
                <td className={s.column_2+' '+s.tableBorder}><NavLink  to={{pathname: `/task/${id}`, taskProps: {id,title}}} ><div>{title}</div></NavLink>
                </td>
                <td className={s.column_3+' '+s.tableBorder}>
                    <div className={s.tableButtonBox}>
                        <span onClick={onClickUpdate} className={s.update}/>
                        <span onClick={onClickDelete} className={s.delete}/>
                    </div>

                </td>

            </tr>
        </Fragment>
    )
}

export default TaskManager;
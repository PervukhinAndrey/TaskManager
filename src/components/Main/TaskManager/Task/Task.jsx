import React from 'react';
import s from './Task.module.css';
import CommonButton from "../../../common/CommonButton/CommonButton";
import {NavLink} from "react-router-dom";

const Task = (props) => {

    const {id,title} = props.location.taskProps
    return (
        <div className={s.task}>
            <h2 className={s.taskHeader}>Задача №{id}</h2>
            <label htmlFor="shortDescription" className={s.taskLabel}>Краткое описание</label>
            <input id="shortDescription" type="text" className={s.taskInput} value={title}/>


            <NavLink to={`/`}><CommonButton onClickCallback={() => {
            }} buttonCustomization={{color: 'blue', label: 'Вернуться в список', size: 'big'}}/></NavLink>
        </div>

    )

}

export default Task;



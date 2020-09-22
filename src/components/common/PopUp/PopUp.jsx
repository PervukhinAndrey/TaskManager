import s from './PopUp.module.css'
import React, {useState, useEffect} from "react";
import CommonButton from "../CommonButton/CommonButton";

const PopUp = ({action, setDisplayPopUp, task,buttonCustomization}) => {


    const [inputValue, setInputValue] = useState(task.title)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!inputValue) {
            setError(true)
        } else{
            setError(false)
        }
    })
    const hideError = () => {
        if (!error) {
            return s.hidden
        } else {
            return ''
        }
    }
    const onClickExit = () => {
        setDisplayPopUp(false)
    }
    const onChangeInput = (e) => {
        setInputValue(e.currentTarget.value)
    }
    const onClickCallback = () => {
        if (!error) {
            action({id: task.id, title: inputValue});
            setDisplayPopUp(false)
        }
    }
    return (
        <div>
            <div className={s.block}/>
            <div className={s.popup}>
                <div className={s.popupHeader}>
                    <span className={s.popupName}>Краткое описание</span>
                    <span className={s.popupExit} onClick={onClickExit}/>
                </div>
                <input className={s.popupInput} type="text" onChange={onChangeInput} value={inputValue}/>
                <span className={s.error + ' ' + hideError()}>Заголовок не может быть пустым</span>
                <div className={s.buttonPosition}>
                    <CommonButton onClickCallback={onClickCallback} buttonCustomization={buttonCustomization}/>
                </div>
            </div>
        </div>
    )
}
export default PopUp
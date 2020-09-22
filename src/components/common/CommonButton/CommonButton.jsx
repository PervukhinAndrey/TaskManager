import s from "./CommonButton.module.css";
import React from "react";

const CommonButton = ({onClickCallback,buttonCustomization}) => {
    const {color,label,size}=buttonCustomization;
    const buttonStatus=()=>{
        switch (color){
            case `red`:{
                return s.redButton;
            }
            case `green`:{
                return s.greenButton;
            }
            case `blue`:{
                return s.blueButton;
            }
            default:{
                return s.greenButton;
            }
        }
    }
    const buttonSize=()=>{
        switch (size){
            case `normal`:{
                return s.normalButton;
            }
            case `big`:{
                return s.bigButton;
            }
            default:{
                return s.normalButton;
            }
        }
    }
    const onClickButton=()=>{
        onClickCallback();
    }
    return(
        <span className={s.commonButton+' '+buttonStatus()+' '+buttonSize()} onClick={onClickButton}>
            {label}
        </span>
    )
}
export default CommonButton;
import React from "react";

export default function Controller({ onClickButton }) {
    return (
        <div>
            <button
                onClick={() => {
                    onClickButton(-1);
                }}
            >
                -1
            </button>
            <button
                onClick={() => {
                    onClickButton(-10);
                }}
            >
                -10
            </button>
            <button
                onClick={() => {
                    onClickButton(-100);
                }}
            >
                -100
            </button>
            <br />
            <button
                onClick={() => {
                    onClickButton(+1);
                }}
            >
                +1
            </button>
            <button
                onClick={() => {
                    onClickButton(+10);
                }}
            >
                +10
            </button>
            <button
                onClick={() => {
                    onClickButton(+100);
                }}
            >
                +100
            </button>
        </div>
    );
}
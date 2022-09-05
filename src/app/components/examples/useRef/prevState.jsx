import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [other, setOther] = useState("false");

    const toogleOtherState = () => {
        setOther((prevState) => (prevState === "false" ? "true" : "false"));
    };
    useEffect(() => {
        prevState.current = other;
    }, [other]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />

            <p>prev State {prevState.current}</p>
            <p>current State {other}</p>
            <button className="btn btn-primary" onClick={toogleOtherState}>
                toogleOtherState
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [other, setOther] = useState(false);

    const toogleOtherState = () => {
        setOther(!other);
    };
    useEffect(() => renderCount.current++);

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />

            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toogleOtherState}>
                toogleOtherState
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;

import React, { useState } from "react";
import Card from "../../common/Card";

// закидываю в localStorage данные
if (!localStorage.getItem("auth")) {
    localStorage.setItem("auth", JSON.stringify("token"));
}

const withFunctions = (Component) => (props) => {
    // не знаю правельно ли сделал,
    // но реализовал так что на 2 попытку залогинится,
    // из handleOnLogin придёт false тк проверка не найдёт строку "token",
    // и isAuth не даст дальше никакого движения

    const [isAuth, setIsAuth] = useState(false);
    const isAuthMessage = isAuth ? "Выйти из системы" : "Войти";

    const handleOnLogin = () => {
        setIsAuth(localStorage.getItem("auth") === `"token"`);
    };

    const handleOnLogOut = () => {
        setIsAuth(false);
        localStorage.setItem("auth", JSON.stringify(""));
    };

    return (
        <Card>
            {isAuth ? (
                <Component
                    {...props}
                    onLogOut={handleOnLogOut}
                    isAuth={isAuthMessage}
                />
            ) : (
                <Component
                    {...props}
                    onLogin={handleOnLogin}
                    isAuth={isAuthMessage}
                />
            )}
        </Card>
    );
};

export default withFunctions;

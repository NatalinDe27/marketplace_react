import React, {useEffect} from 'react';

function ControlMovement() {

    const checkForInactivity = () => {
        const expireTime = localStorage.getItem("expireTime");

        if (expireTime < Date.now()) {
            alert('You are log out!');
        }
    }
    const updateExpireTime = () => {
        const expireTime = Date.now() + 30000;
        localStorage.setItem("expireTime", expireTime);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            checkForInactivity();
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        updateExpireTime();

        window.addEventListener("click", updateExpireTime)
        window.addEventListener("keypress", updateExpireTime)
        window.addEventListener("scroll", updateExpireTime)
        window.addEventListener("mousemove", updateExpireTime)

        return () => {
            window.removeEventListener("click", updateExpireTime)
            window.removeEventListener("keypress", updateExpireTime)
            window.removeEventListener("scroll", updateExpireTime)
            window.removeEventListener("mousemove", updateExpireTime)

        }
    }, [])

    return (
        <>
        </>
    );
}

export default ControlMovement;





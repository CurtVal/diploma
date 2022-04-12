import React, { useEffect, useState } from "react";


export default function Area(props) {

    const [machine, setMachine] = useState("")
    // const [value, setValue] = useState({})

    const getMachinetUrl = `http://localhost:8080/machine/${machine}`
    const request_options = {
        method: "GET"
    }

    var value = {
        temperature: 20.56,
        vibration: 0.6
    }

    // const onImage = (e) => {
    //     console.log(e)
    // }
    // useEffect (() => {
    //     onDraw()
    // })

    // const onDraw = () => {
    //     let canvas = document.getElementById("canvas");
    //     let context = canvas.getContext("2d");
    //     let area = new Image();
    //     area.onload = function () {    
    //     context.drawImage(area, 0, 0, canvas.width, canvas.height);
    //     context.fillStyle = "#000000";
    //     }
    //     area.src="area.jpg"
    // }

    const onClickHandler = (e) => {
        let current = e.target.id.replace("m", "")
        setMachine(current)
        // сделать запрос, чтобы получить информацию о конкретном, значения записать в value
        /*fetch(getMesurementUrl, request_options)
        .then(response => response.json())
        .then( json => {JSON.parse(json); 
            setValue(json)
        })*/
    }

    const inFocus = (e) => {
        let current = e.target
        current.classList.add("hover")
    }

    const outFocus = (e) => {
        let current = e.target
        current.classList.remove("hover")
    }


    return (
        <div className="container">
            <div className="titleSt">Цех</div>
            <div className="image">
                {/* <canvas id="canvas" width="700px" height="450px"></canvas> */}
                <div><img src="area.jpg" width="600px" useMap="#image-map"></img></div>
                <div className="doubleTableDiv">
                        <table id="machineTable" className="machineTable">
                            <thead>
                                <tr>
                                    <td>Cтанок</td>
                                    <td>Статус</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="m1" onClick={onClickHandler} onMouseEnter={inFocus} onMouseLeave={outFocus}>Станок 1</td>
                                    <td>В работе</td>
                                </tr>
                                <tr>
                                    <td id="m2" onClick={onClickHandler} onMouseEnter={inFocus} onMouseLeave={outFocus}>Станок 2</td>
                                    <td>В ожидании</td>
                                </tr>
                                <tr>
                                    <td id="m3" onClick={onClickHandler} onMouseEnter={inFocus} onMouseLeave={outFocus}>Станок 3</td>
                                    <td>Отключен</td>
                                </tr>
                            </tbody>
                        </table>
                    <br/>
                    {machine &&
                            <table id="sensorsTable" className="sensorsTable">
                                <thead>
                                    <tr><td colSpan="2">{`Станок ${machine}`}</td></tr>
                                    <tr>
                                        <td>Температура, 0С</td>
                                        <td>Вибрация, мм/с</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{value.temperature}</td>
                                        <td>{value.vibration}</td>
                                    </tr>
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    )

} 
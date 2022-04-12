import React, { useEffect, useState } from "react";


export default function Machines(props) {

    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()

    // const getMachinetUrl = `http://localhost:8080/machine/${machine}`
    // const request_options = {
    //     method: "GET"
    // }

    const machines = [1, 2, 3]

    /*useEffect(() => {
        machines.forEach(item => {
            let machine = item
            fetch(`http://localhost:8080/machine/${machine}`, request_options)
                .then(response => response.json())
                .then(json => {
                    JSON.parse(json);
                    setValue`${item}`(json)
                })
        });
    })*/

    const value = `{ 
        "measureTime": "2022-04-10T23:36:13.231092", 
        "temperature": 29.2269, 
        "vibration": 0.295486, 
        "identifier": "machine_1043287802", 
        "status": "WAITING" 
    }`
    const val = JSON.parse(value)
    console.log(val)

    return (
        <div className="container">
            <div className="titleSt">Станки</div>
            <div>
                <div className="tableDiv">
                    <div>
                        <table id="machineTable" className="machineTable">
                            <thead>
                                <tr>
                                    <td>Cтанок</td>
                                    <td>Статус</td>
                                    <td>Температура, 0С</td>
                                    <td>Вибрация, мм/с</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Станок 1</td>
                                    <td>Отключен</td>
                                    <td>{val.temperature}</td>
                                    <td>{val.vibration}</td>
                                </tr>
                                <tr>
                                    <td>Станок 2</td>
                                    <td>В ожидании</td>
                                    <td>{val.temperature}</td>
                                    <td>{val.vibration}</td>
                                </tr>
                                <tr className="background-color: green">
                                    <td>Станок 3</td>
                                    <td>В работе</td>
                                    <td>{val.temperature}</td>
                                    <td>{val.vibration}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

} 
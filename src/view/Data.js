import React, { useState, useEffect } from "react";
import {
    Chart,
    Series,
    ArgumentAxis,
    CommonSeriesSettings,
    Export,
    Legend,
    Margin,
    Title,
    Subtitle,
    Tooltip,
    Grid,
} from 'devextreme-react/chart';
import { Tabs } from "devextreme-react/tabs";

export default function Data(props) {

    let machineId = 1
    const [values, setValues] = useState({})
    const [index, setIndex] = useState(0)
    const [machine, setMachine] = useState("1")


    const getMesurementUrl = `http://localhost:8080/machine/${machine}/last?quantity=15`
    const request_options = {
        method: "GET"
    }


    /*useEffect(() => {
        fetch(getMesurementUrl, request_options)
        .then(response => response.json())
        .then( json => {JSON.parse(json); 
            setValues(json.measurements)
        })
        .then(() => 
            {let array = [];
            for (let i = 0; i < newData.length; i++) {
                newData[i].number = i+1
                array.push(newData[i])
            }  
        })
    }, [onClickHandler])*/

    const machines = [
        "Станок 1", "Станок 2", "Станок 3"
    ]

    const param1 = [
        { value: 'temperature', name: 'temperature' }
    ];

    const param2 = [
        { value: 'vibration', name: 'vibration' }
    ];

    const body = `{
        "measurements":[
            {
                "time":"2022-04-10T23:37:53.234305",
                "temperature":29.0177,
                "vibration":0.0760686
            },
            {
                "time":"2022-04-10T23:37:53.234305",
                "temperature":28.0177,
                "vibration":0.1760686
            },
            {
                "time":"2022-04-10T23:37:53.234305",
                "temperature":22.0177,
                "vibration":0.260686
            },
            {
                "time":"2022-04-10T23:37:53.234305",
                "temperature":23.0177,
                "vibration":0.0760686
            },
            {
                "time":"2022-04-10T23:37:53.234305",
                "temperature":21.0177,
                "vibration":0.760686
            },
            {
                "time":"2022-04-10T23:37:53.234305",
                "temperature":28.0177,
                "vibration":0.1260686
            }
        ]
    }`
    
    let newData = JSON.parse(body).measurements

    let array = []
    for(let i = 0; i < newData.length; i++) {
        newData[i].number = i+1
        array.push(newData[i])
    }


    const onClickHandler = (e) => {
        let current = e.target.id.replace("m", "")
        setMachine(current)
        // console.log(array)

        // сделать запрос, чтобы получить информацию о конкретном, значения записать в value
    }

    return (
        <div className="container">
            <div className="titleSt">Показания датчиков</div>
            <table className="sensors">
                <tbody>
                    <tr>
                    <td id="m1" onClick={onClickHandler}>Станок 1</td>
                    <td id="m2" onClick={onClickHandler}>Станок 2</td>
                    <td id="m3" onClick={onClickHandler}>Станок 3</td>
                    </tr>
                </tbody>
            </table>
            <div className="charts">
                <Chart dataSource={array}>
                    <CommonSeriesSettings
                        argumentField="number"
                        type="line"
                    />
                    {
                        param1.map((item) => <Series
                            key={item.value}
                            valueField={item.value}
                            name={item.name} 
                            color="#2E86C1"/>)
                    }
                    <Margin bottom={20} />
                    <ArgumentAxis
                        valueMarginsEnabled={false}
                        discreteAxisDivisionMode="crossLabels"
                    >
                        <Grid visible={true} />
                    </ArgumentAxis>
                    <Legend
                        verticalAlignment="bottom"
                        horizontalAlignment="center"
                        itemTextPosition="bottom"
                    />
                    <Export enabled={true} />
                    <Tooltip enabled={true} />
                </Chart>
                <Chart dataSource={array}>
                    <CommonSeriesSettings
                        argumentField="number"
                        type="line"
                    />
                    {
                        param2.map((item) => <Series
                            key={item.value}
                            valueField={item.value}
                            name={item.name} 
                            color="#DC7633"/>)
                    }
                    <Margin bottom={20} />
                    <ArgumentAxis
                        valueMarginsEnabled={false}
                        discreteAxisDivisionMode="crossLabels"
                    >
                        <Grid visible={true} />
                    </ArgumentAxis>
                    <Legend
                        verticalAlignment="bottom"
                        horizontalAlignment="center"
                        itemTextPosition="bottom"
                    />
                    <Export enabled={true} />
                    <Tooltip enabled={true} />
                </Chart>
            </div>
        </div>
    )

} 
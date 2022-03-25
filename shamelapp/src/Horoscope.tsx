import React, { useState } from 'react';
import TextBox from './TextBox';

// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Horoscope() {

    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const data = {
            sun : sun,
            moon : moon,
            rising : rising
        };

        // Post parameters
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        // post data to default port
        axios.post("http://localhost:4567/horoscope", data, config)
            .then(response => {
                console.log(response.data);
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>React App</h1>
            <TextBox label={'Sun Sign'} change={setSun}/>
            <TextBox label={'Moon Sign'} change={setMoon}/>
            <TextBox label={'Rising Sign'} change={setRising}/>
            <AwesomeButton type={'primary'} onPress={requestHoroscope}>Submit</AwesomeButton>
            <div>
                Horoscope: {horoscope.map(item => <li>{item}</li>)}
            </div>
        </div>
    );
}

export default Horoscope;
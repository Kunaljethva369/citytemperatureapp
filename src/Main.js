import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Main() {

    const [city, SetCity] = useState();
    const [search, setSearch] = useState();

    useEffect(() => {

        const FetchApi = async () => {
            let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=686ac46da1cce2b17a68baa1b17d7e48`);
            let response = await url.json();
            SetCity(response.main); 
        }
        FetchApi();
    }, [search]);

    return (
        <>
            <Mains>
                <Input>
                    <input type="text" placeholder="Enter Your City Name"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }} />
                </Input>
                {!city ?
                    (<p className="p">No Data found</p>)
                    :
                    (
                        <div>
                            <Data>
                                <i className="fas fa-street-view fa-4x"></i>
                                <span>{search}</span>
                                <br />
                            </Data>
                            <div className="cel"> <h2>{city.temp} <span className="c"> Cel</span> </h2></div>
                            <Maxmin>
                                <div><h4>Max {city.temp_max} <span> Cel</span></h4></div>
                                <br />
                                <div><h4>Min {city.temp_min} <span> Cel</span></h4></div>
                            </Maxmin>
                        </div>
                    )

                }
            </Mains>
        </>
    )
}

const Mains = styled.div`
    background-color: rgba(208, 126, 47, 1);
    height:400px;
    width:320px;
    border-radius:20px;
    box-shadow:5px 0px 20px #8888;
    @media (max-width:600px){
        width: max-content;
        padding:1rem;
    }
`

const Input = styled.div`
    display:flex;
    justify-content:center;
    padding-top:1rem;
    input{
        border-radius:20px;
        font-size: 1.1rem;
        padding:0.500rem;
    }
`

const Data = styled.div`
    height:30vh;
    display:flex;
    align-items:center;
    padding:0rem 2rem;
    svg{
        color:white;
        animation: updown infinite 1.5s alternate-reverse ease-in-out;
    }
    span{
        width:100%;
        display:flex;
        justify-content:center;
        font-size:2rem;  
    }
`

const Maxmin = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: row;
    padding: 1rem 0rem;
    div{
        margin-left:1rem;
    }
`


export default Main;
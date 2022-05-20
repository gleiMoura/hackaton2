import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Content() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const requestion = axios.get("https://hackaton-driven.herokuapp.com/home");
        requestion.then(answer => {
            setData(answer.data);
        })
        requestion.catch(err => {
            console.error(err.data)
        })
    }, []);

    return (
        <>
            <PageTwo>
                <header>
                    <h1>COMPARTILHE SUAS IDEIAS</h1>
                    <Link to="/putContent">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </Link>
                </header>
                <main>
                    {data.map(element => {
                        return (
                            <a href={element.article}>
                                <div className="post">
                                    <p>Compartilhado por: {element.name}</p>
                                    <p>{element.articleName}</p>
                                    <div className="description">
                                        <p>Descrição: {element.description}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}

                </main>
            </PageTwo>
        </>
    )
}

const PageTwo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: black;

header{
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
a{
    text-decoration: none;
    color: black;
    margin-top: 20px
}
.post{
    width: 300px;
    height: 250px;
    background-color: white;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
}
h1{
    color: white;
}
ion-icon{
    font-size: 35px;
    color: red
}
`
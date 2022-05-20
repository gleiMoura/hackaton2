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
                </header>
                <main>
                    <div className="post">
                        <h1>Compartilhado por: NOME</h1>
                        <p>NOME DO ARTIGO</p>
                        <div className="description">
                            <p>Descrição: blabablablabalbalabalab</p>
                        </div>
                        <a href="https://github.com/thiagosouf">Link da hora</a>
                    </div>
                </main>
                <footer>
                    <p>Adicione um trabalho!</p>
                    <Link to="/putContent">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </Link>
                </footer>
            </PageTwo>
        </>
    )
}

const PageTwo = styled.div`
height: 105vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(140, 17, 190);

header{
    margin: 50px;
}
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
a{
    text-decoration: none;
    color: black
}
`
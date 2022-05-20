import styled from 'styled-components';
import {Link} from "react-router-dom"

export default function FirstPage() {
    return (
        <>
            <PageOne>
              <Link to="/content">
                <button>Entrar</button>
              </Link>
            </PageOne>
        </>
    )
}

const PageOne = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
    button{
            width: 326px;
            height: 46px;
            background-color: #A328D6;
            border-radius: 5px;
            margin-bottom: 25px;
            cursor: pointer;
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 20px;
            color: white;
            border: none;
        }
    a{
        text-decoration: none;
    }
`

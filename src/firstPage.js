import styled from 'styled-components';


export default function FirstPage() {
    return (
        <>
            <PageOne>
              <Link to="/content">
                Entrar
              </Link>
            </PageOne>
        </>
    )
}

const PageOne = styled.div`
height: 105vh;
display: flex;
flex-direction: column;
align-items: center;
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

import styled from "styled-components";


export const NavStyles = styled.nav`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a{
        font-size: 2rem;
        font-family: 'Courgette', cursive;

    }
`

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3{
        font-size: 1.2rem;
    }
    svg{
        font-size: 1.75rem;
        cursor: pointer;
    }
    span{
        background: #ff2626;
        color: white;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.75rem;
        position: absolute;
        right: 0;
        top: -20%;
        pointer-events: none;
    }
`
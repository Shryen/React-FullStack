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
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
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
        padding: 0.25rem;
    }
    svg{
        font-size: 1.75rem;
    }
`
import styled from "styled-components";

export const ProductStyles = styled.div`
        background-color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        img{
                width: 100%;
                cursor: pointer;
        }
        h2{
                padding: 0.5rem 0rem;
        }
`;

export const ProductInfo = styled.div`
        width: 40%;
        button{
                font-size: 1rem;
                font-weight: medium;
                padding: .5rem 1rem;
                cursor: pointer;
        }
`

export const Quantity = styled.div`
        display: flex;
        align-items: center;
        margin: 1rem 0rem;

        button{
                background: transparent;
                border: none;
                display: flex;
                font-size: 1.5rem;
                padding: 0 .5rem;
        }
        p{
                width: 1rem;
                text-align: center;
        }
        span{
                color: var(--secondary);
        }
        svg{
                color: #494949;
        }
`

export const Buy = styled.button`
        width: 100%;
        background: var(--primary);
        color: white;
        font-weight: 500;
`
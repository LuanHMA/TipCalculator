import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    margin: 30px 0;
    padding: 40px 20px 20px 20px;
    border: none;
    border-radius: 20px;
    background: hsl(183, 100%, 15%);

    @media(min-width: 1048px){
        width: 50%;
    }

    div.section{
        display: flex;
        width: 100%;
        justify-content:space-between;
        margin: 5px 0;
        
        p{
            color: hsl(189, 41%, 97%);
            font-size: 16px;
            margin-bottom: -5px;

            @media(min-width: 1048px){
                font-size: 18px;
            }
        }
        span{
            color: hsl(184, 14%, 56%);
            font-size: 14px;

            @media(min-width: 1048px){
                font-size: 16px;
            }
        }
        span.result{
            font-size: 35px;
            color: hsl(172, 67%, 45%);
            font-weight: 700;

            @media(min-width: 1048px){
                font-size: 40px;
            }
        }

        @media(min-width: 1048px){
            margin: 20px 0;
        }
    }
    button{
        padding: 10px;
        width: 100%;
        font-size: 24px;
        background: hsl(172, 67%, 45%);
        color: hsl(183, 100%, 15%);
        border-radius: 5px;
        font-weight: 700;
        cursor:pointer;
        transition: all 0.3s ease;
        margin-top: 10px;
        border:1px solid hsl(172, 67%, 45%);

        &:hover{
            background: hsl(183, 100%, 15%);
            color: hsl(172, 67%, 45%);;
            border: 1px solid hsl(172, 67%, 45%);
        }

        @media(min-width: 1048px){
            margin-top: 100px;
        }
    }
`
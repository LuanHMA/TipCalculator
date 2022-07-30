import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items:center;
    height: 100vh;
    margin: 40px auto auto auto;

    @media(min-width: 1048px){
        margin: auto;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;

    @media(min-width: 1048px){
        max-width: none;
       
    }
    
    div.box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        font-size: 20px;
        padding: 1.8rem;
        margin-top: 40px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: #fff;


        @media(min-width: 1048px){
            width: 968px;
            flex-direction: row;
            justify-content: space-between;
            align-items: start;
            gap: 40px;
            padding: 10px 40px 0 40px;
            border-radius: 20px;
        }
    }
`
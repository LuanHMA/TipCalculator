import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1048px){
        width: 50%;
        padding-top: 20px;
    }

    .title{
        font-size: 16px;
        color: hsl(183, 100%, 15%);
        margin-bottom: 10px;

         @media(min-width: 1048px){
            font-size: 18px;
        }
    }

    div.field{
        display: flex;
        flex-direction: column;
        
        
        div{
            display: flex;
            align-items:center;
            background: hsl(189, 41%, 97%);
            padding: 5px 15px;
            border-radius: 5px;

            input{
                font-size: 24px;
                text-align: right;
                height: 40px;
                width: 100%;
                background: none;
                color: hsl(183, 100%, 15%);
                font-weight: bold;
            }
        }

    }

    div.tips{
        margin: 30px 0;

        div.tipsContent{
            display: flex;
            justify-content: start;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 10px;

            span, input{
                width: 47%;
                text-align:center;
                color: #fff;
                font-weight: 700;
                font-size: 24px;
                border-radius: 5px;
                padding: 8px 5px;

                @media(min-width: 1048px){
                    width: 30%;
                }
            }
            span{
                background: hsl(183, 100%, 15%);
                transition: all .3s ease;
                cursor: pointer;

                &:hover{
                    background: hsl(172, 67%, 45%);

                }
            }
            input{
                text-align: right;
                background: hsl(189, 41%, 97%);
                padding-right: 20px;
                color: hsl(183, 100%, 15%);
                

                @media(min-width: 1048px){
                    padding-right: 0;
                }
            }
        }

    }
`
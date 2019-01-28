import styled from 'styled-components';
import {Table} from 'reactstrap';


export const DivFather = styled.div`
    width: 100%;
    padding: 30px;

    div{
        max-width: 500px;
        width: 100%;
        margin-bottom: 60px;
    }

    input{
        width:100%;
        border: solid 1px #d9d9d9;
        margin-left: 0px;
    }

    input::-webkit-input-placeholder {
        color: #d9d9d9;
     }
     
    input:-moz-placeholder { /* Firefox 18- */
        color: #d9d9d9;  
     }
     
    input::-moz-placeholder {  /* Firefox 19+ */
        color: #d9d9d9;  
     }
     
    input:-ms-input-placeholder {  
        color: #d9d9d9;  
    }

    @media only screen and (max-width: 768px) {
        padding: 0px;
    }
`;

export const StyledTable = styled(Table)`
    padding-top: 60px;
    margin-top: 60px;   
    margin: auto;
    background-color: blue;
    height: 320px;

    thead tr th{
        text-align: left;
    }

    tbody tr td{
        text-align: left;
        text-overflow: ellipsis;
    }

    @media only screen and (max-width: 768px) {
        font-size: 10px;
        
        td{
            padding:0.75rem .4rem;
        }
        .noMobile{
            display: none;
        }
        .noMobileB{
            display: none;
        }
    }
`;

export const TdActive = styled.td `
    color: ${(props) => props.statusColor === "Ativo" ? "green" : "red" };
    cursor: pointer;
`;

export const TdExcluir = styled.td `
    cursor: pointer;
    color: red;
`;
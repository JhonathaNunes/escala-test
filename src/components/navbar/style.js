import styled from 'styled-components';
import { Navbar, Nav } from 'reactstrap';

export const NavObject = styled(Nav)`
    margin:0px;
`;

export const Logo = styled.img`
    width: 80px;
`;

export const Logout = styled.img`
    width: 20px;
`;
export const InternalNavbar = styled(Navbar)`
    background-color: #0265ba;

    a{
        color:white;
    }

    div{
        margin:auto;
        width:350px;
    }

    div input{
        width:100%;
        height: 30px;
        background-color:#025caa;
        border: none;
        padding-left: 10px;
        font-size: 16px;
    }

    div input::-webkit-input-placeholder {
        color: white;
     }
     
    div input:-moz-placeholder { /* Firefox 18- */
        color: white;  
     }
     
    div input::-moz-placeholder {  /* Firefox 19+ */
        color: white;  
     }
     
    div input:-ms-input-placeholder {  
        color: white;  
    }

`;
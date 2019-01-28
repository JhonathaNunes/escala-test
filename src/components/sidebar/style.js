import styled from 'styled-components';

export const SidebarWraper = styled.div`
    width: 250px;
    height: 100%;
    background-color: #333a4a;

    ul{
        padding: 0px;
        list-style:none;
    }

    ul li{
        height:46px;
        color: #ffffff;
        padding-top:15px;
        padding-bottom:15px;
        font-size: 16px;
    }

    .choosenOne{
        border-left: solid 5px #0265ba;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
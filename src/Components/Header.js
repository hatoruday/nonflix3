import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    background-color:rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`

const Item = styled.li`
    width:50px;
    height: 50px;
    text-align:center;//무쓸모
    border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom 0.5s ease-in-out;
`;

const List = styled.ul`
    display:flex;
`;

const SLink = styled(Link)`
    display:flex;
    height:50px;
    align-items:center;
    justify-content: center;
`;

const eheader = ({location: {pathname}}) => {
    return (
        <Header>
            <List>
                <Item current = {pathname === "/"}>
                    <SLink to = "/" >Home</SLink>
                </Item>
                <Item current = {pathname === "/tv"}>
                    <SLink to = "/tv" >TV</SLink>
                </Item>
                <Item current = {pathname === "/search"}>
                    <SLink to = "/search" >Search</SLink>
                </Item>
            </List>
        </Header>
    )

}

export default withRouter(eheader);
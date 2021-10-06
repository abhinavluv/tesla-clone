import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' />
            </a>
            <Menu>
                <a href='#'>Model S</a>

                <a href='#'>Model Y</a>

                <a href='#'>Model 3</a>

                <a href='#'>Model X</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu />
            </RightMenu>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

import React, { useContext } from 'react'

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const {totalProductosCarrito} = useContext(CartContext)


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <Link to={"/cart"}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={totalProductosCarrito()} color="secondary">
                    <ShoppingBagIcon sx={{ color: "white" }} />
                </StyledBadge>
            </IconButton>
        </Link>
    )
}

export default CartWidget
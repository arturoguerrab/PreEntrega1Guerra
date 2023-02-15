import React from 'react'

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { styled } from '@mui/material/styles';


const CartWidget = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingBagIcon sx={{ color: "white" }} />
            </StyledBadge>
        </IconButton>
    )
}

export default CartWidget
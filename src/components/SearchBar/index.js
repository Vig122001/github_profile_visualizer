import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';


export default function SearchBar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        padding: 0,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha("#1D2537", 0.65),
        '&:hover': {
            backgroundColor: alpha("#1D2537", 1),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '35%',
        height: '60px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }));

    const SearchIconWrapper = styled('button')(({ theme }) => ({
        padding: 0,
        background: 'none',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',    
        backgroundColor: "#4F4E4C",
        color: '#fff',
        height: '100%',
        width: '10%',
        pointerEvents: 'none'
    }));


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            fontSize: '1.5rem',
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    return (
        <Search>
            <StyledInputBase
                placeholder="Enter github username"
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Search>
    );
}
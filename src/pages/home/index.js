const react = require('react')
const { useState, useEffect } = require('react')
import SearchBar from '../../components/SearchBar';
import { Box, Typography } from '@mui/material';
import githubVisualizerImage from '../../assets/images/github_visualizer.png';


export default function HomePage() {
    const [loading, setLoading] = useState(true);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 64px)'
            }}>

            <SearchBar />
            <Typography
                variant="h4"
                sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    margin: '4rem 0',
                    textAlign: 'center',
                    fontSize: {
                        xs: '1rem',
                        sm: '1.4rem',
                        md: '2rem',
                    },
                }}
            >
                Github Profile Visualizer
            </Typography>
            <Box
                component="img"
                src={githubVisualizerImage}
                alt="Github Visualizer"
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                }}
            />
        </div>
    )
}

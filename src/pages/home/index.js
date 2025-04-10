const react = require('react')
const { useState, useEffect } = require('react')
import SearchBar from '../../components/SearchBar';
import { Typography } from '@mui/material';
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
            <Typography variant="h4" style={{ color: '#fff', margin: '20px 0', fontWeight: 'bold' }}>
                Github Profile Visualizer
            </Typography>
            <img 
                src={githubVisualizerImage}
                alt="Github Visualizer" 
            />
        </div>
    )
}

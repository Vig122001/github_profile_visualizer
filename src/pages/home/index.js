const react = require('react')
const { useState, useEffect } = require('react')
import SearchBar from '../../components/SearchBar';

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <SearchBar />
        </div>
    )
}

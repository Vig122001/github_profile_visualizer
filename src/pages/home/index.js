const react = require('react')
const { useState, useEffect } = require('react')

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
}

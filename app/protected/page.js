import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) return null; // สามารถทำ loading state แทนได้

    return (
        <div>
            <h1>This is a protected page</h1>
        </div>
    );
}

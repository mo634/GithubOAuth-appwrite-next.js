"use client"
import React, { useEffect, useState } from 'react'
import { Client, Account } from "appwrite";
import { useRouter } from 'next/navigation';
import { connectToAppwrite } from '../utils';
const Welcome = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const fetchInfo = async () => {

        const account = connectToAppwrite()

        try {
            const session = await account.get();
            setUser(session);
            console.log(session)
        }

        catch (error) {
            console.error('Failed to fetch user info:', error);
        }
    };

    const logOut = () => {
        const account = connectToAppwrite()

        account.deleteSession('current')
            .then(() => {
                setUser(null);
                router.push('/');
            })
            .catch(console.error);
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    return (
        <div>
            <button
                onClick={logOut}
            >logout</button>

            {user ? (
                <div>
                    <p>
                        User: <span className="text-xl font-bold capitalize">{user.name}</span>
                    </p>
                    <p>
                        Email: <span className="text-xl font-normal">{user.email}</span>
                    </p>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Welcome
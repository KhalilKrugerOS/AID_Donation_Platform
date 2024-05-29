import Head from 'next/head';
import Profile from '@/components/Profile/Profile';

const page = () => {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Profile</title>
            </Head>
            <Profile />
        </div>
    );
};

export default page;
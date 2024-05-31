import Head from 'next/head';
import SettingsComponent from '@/components/Settings/Settings';

const Settings = () => {
    return (
        <div className="mx-auto max-w-270">
            <Head>
                <title>Settings</title>
            </Head>
            <SettingsComponent />
        </div>
    );
};

export default Settings
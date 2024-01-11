import { User } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function MyProfile() {
    const handleMyProfile = () => {
        // TODO: Add navigate to my profile
        console.log('My Profile');
    };
    return (
        <Button variant="outline" size="icon" onClick={handleMyProfile}>
            <User />
        </Button>
    );
}

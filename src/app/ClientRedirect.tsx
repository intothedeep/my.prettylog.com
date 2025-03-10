'use client';

import { useIsMounted } from '@/hooks/useIsMounted.hook';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export const ClientRedirect = () => {
    const router = useRouter();

    const { isMounted } = useIsMounted();

    useEffect(() => {
        if (isMounted) {
            console.log('push to /about');
            router.push('/about');
        }
    }, [isMounted]);

    return <></>;
};

export default ClientRedirect;

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context';

export const useRequireAuth = (redirectUrl = '/auth/login') => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectUrl);
    }
  }, [isAuthenticated, router, redirectUrl]);

  return isAuthenticated;
};
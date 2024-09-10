import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@common/hooks/useAppSelector'
import { useLocation, useNavigate } from 'react-router-dom';

export const PermissionProvider = () => {
  const token = useAppSelector((state) => state.auth.token);
  const path = useLocation();
  const [isAuth, setIsAuth] = useState<null | boolean>(null);
  const navigate = useNavigate();

  useEffect(() => {
		console.log(!token);
		if (token && path.pathname === '/login') {
			setIsAuth(true);
			navigate('/');
		} else if (!token) {
			setIsAuth(false);
			navigate('/login');
		}
	}, [isAuth, navigate]); 

  return null;
}

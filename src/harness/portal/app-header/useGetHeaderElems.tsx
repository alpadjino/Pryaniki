import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '@store/slices/auth';

type Dictionary = {
	name: string;
	onClick: () => void;
};

interface GetHeaderElemsProps {
    elemsDictionary?: Dictionary[];
};

export const useGetHeaderElems = ({ elemsDictionary }: GetHeaderElemsProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const headerElems = (): Dictionary[] => [
		{ 
            name: 'Главная', 
            onClick: () => navigate('/') 
        },
		{
			name: 'Выход',
			onClick: () => {
				dispatch(clearToken());
				navigate('/login');
			},
		},
	];

	return elemsDictionary ?? headerElems();
};

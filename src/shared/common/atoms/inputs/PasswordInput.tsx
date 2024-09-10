import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TextInput from './TextInput';
import { TextFieldProps } from '@mui/material';

interface PasswordInputProps extends Omit<TextFieldProps, 'label' | 'disabled'> {
	label?: string;
	disabled?: boolean;
}

const PasswordInput = ({ label, value, helperText, error, onChange, ...props }: PasswordInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<TextInput
			value={value}
			onChange={onChange}
			error={error}
			helperText={helperText}
			label={label}
			type={showPassword ? 'text' : 'password'}
			{...props}
			InputProps={{
				endAdornment: (
					<InputAdornment position="start">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

export default PasswordInput;

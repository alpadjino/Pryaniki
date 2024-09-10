import React from 'react';
import {
	Box as MuiBox,
	InputLabel as MuiInputLabel,
	styled,
} from '@mui/material';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers';

const Box = styled(MuiBox)({
	maxHeight: 40,
	marginBottom: 20,
});

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
	paddingBottom: 2.5,
	fontSize: 16,
}));

interface DateInputProps extends Omit<DesktopDatePickerProps<Date>, 'value' | 'error'> {
	value?: Date | null;
	error?: string;
}

const DateInput = ({ value, label, readOnly, error, onChange, sx, ...rest }: DateInputProps) => {

	return (
		<Box>
			<InputLabel>{label}</InputLabel>
			<DesktopDatePicker
				{...rest}
				value={value}
				sx={{ ...sx }}
				showDaysOutsideCurrentMonth
				onChange={onChange}
				slotProps={{
					openPickerButton: { color: 'secondary' },
					textField: {
						error: !!error,
						helperText: error,
						color: 'secondary',
						sx: {
							width: '100%',
							'& .MuiFormHelperText-root': {
								fontSize: '1rem',
								margin: 0,
								paddingTop: '10px'
							},
						},
					},
				}}
			/>
		</Box>
	);
};

export default DateInput;

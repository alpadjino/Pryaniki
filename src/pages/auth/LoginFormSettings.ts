import * as yup from 'yup';
import { LoginRequestModel as LoginRequestDto } from '@models/auth';

interface LoginRequestModel extends Omit<LoginRequestDto, 'username' | 'password'> {
	username: string | null;
	password: string | null;
}

const getDefaultValues = (): LoginRequestModel => ({
	username: "",
	password: "",
});

const useLoginSchema = () => {
	const schema = yup.object({
		username: yup.string().required('Это обязательное поле'),
		password: yup.string().required('Это обязательное поле'),
	});

	const defaultValues: LoginRequestModel = getDefaultValues();

	return { schema, defaultValues };
};

export { useLoginSchema, getDefaultValues };
export type { LoginRequestModel };

import { ClientAddModel } from '@models/clients';
import * as yup from 'yup';

interface AddClientRequestModel extends Omit<ClientAddModel, 'employeeSigDate' | 'companySigDate'> {
	companySigDate: Date | null;
	companySignatureName: string;
	documentName: string;
	documentStatus: string;
	documentType: string;
	employeeNumber: string;
	employeeSigDate: Date | null;
	employeeSignatureName: string;
}

const getDefaultValues = (): AddClientRequestModel => ({
	companySigDate: null,
	companySignatureName: '',
	documentName: '',
	documentStatus: '',
	documentType: '',
	employeeNumber: '',
	employeeSigDate: null,
	employeeSignatureName: '',
});

const useAddClientFormSchema = () => {
	const schema = yup.object({
		companySigDate: yup.date().required('Это обязательное поле'),
		companySignatureName: yup.string().required('Это обязательное поле'),
		documentName: yup.string().required('Это обязательное поле'),
		documentStatus: yup.string().required('Это обязательное поле'),
		documentType: yup.string().required('Это обязательное поле'),
		employeeNumber: yup.string().required('Это обязательное поле'),
		employeeSigDate: yup.date().required('Это обязательное поле'),
		employeeSignatureName: yup.string().required('Это обязательное поле'),
	});

	const defaultValues: AddClientRequestModel = getDefaultValues();

	return { schema, defaultValues };
};

export { useAddClientFormSchema, getDefaultValues };
export type { AddClientRequestModel };

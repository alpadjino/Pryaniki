import { ClientsQueryModel } from '@models/clients';
import * as yup from 'yup';

interface EditClientRequestModel extends Omit<ClientsQueryModel, 'employeeSigDate' | 'companySigDate'> {
	companySigDate: Date | null;
	employeeSigDate: Date | null;
}

const getDefaultValues = (): EditClientRequestModel => ({
    id: '',
	companySigDate: null,
	companySignatureName: '',
	documentName: '',
	documentStatus: '',
	documentType: '',
	employeeNumber: '',
	employeeSigDate: null,
	employeeSignatureName: '',
});

const useEditClientFormSchema = () => {
	const schema = yup.object({
		id: yup.string(),
		companySigDate: yup.date().required('Это обязательное поле'),
		companySignatureName: yup.string().required('Это обязательное поле'),
		documentName: yup.string().required('Это обязательное поле'),
		documentStatus: yup.string().required('Это обязательное поле'),
		documentType: yup.string().required('Это обязательное поле'),
		employeeNumber: yup.string().required('Это обязательное поле'),
		employeeSigDate: yup.date().required('Это обязательное поле'),
		employeeSignatureName: yup.string().required('Это обязательное поле'),
	});
	const defaultValues: EditClientRequestModel = getDefaultValues();

	return { schema, defaultValues };
};

export { useEditClientFormSchema, getDefaultValues };
export type { EditClientRequestModel };

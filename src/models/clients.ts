type ClientsQueryModel = {
    id: string;
	companySigDate: string;
	companySignatureName: string;
	documentName: string;
	documentStatus: string;
	documentType: string;
	employeeNumber: string;
	employeeSigDate: string;
	employeeSignatureName: string;
};

type ClientAddModel = Omit<ClientsQueryModel, 'id'>;

type ClientEditModel = {
	id: string,
	body: ClientAddModel,
};

export { ClientsQueryModel, ClientAddModel, ClientEditModel };
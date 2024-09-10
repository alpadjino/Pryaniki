import { ClientsQueryModel } from "./clients";

interface ApiResponse {
	data: ClientsQueryModel[];
	error_code: number;
	error_message: string;
	profiling: string;
	timings: any;
}

export { ApiResponse }
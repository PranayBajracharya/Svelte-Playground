export type SupabaseResponse<T> = {
	error: null; // change later
	data: T;
	count: null; // change later
	status: number;
	statusText: string;
};

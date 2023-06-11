import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.supabase.auth.signOut();

	if (err) {
		throw error(500, 'Something went wrong while logging out!!');
	}

	throw redirect(303, '/');
};

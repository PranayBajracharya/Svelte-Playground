import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/db/supabaseClient';

export const POST = (async ({ request }) => {
	const body = await request.json();

	const { error: supabaseError } = await supabase.from('memory_score').insert(body);

	if (supabaseError) {
		throw error(500, `Insert failed! ${supabaseError.message}`);
	}
	return json('Insert successfully! 🙂');
}) satisfies RequestHandler;

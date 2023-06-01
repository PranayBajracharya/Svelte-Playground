import { supabase } from '$lib/db/supabaseClient';

export async function load() {
	const data = await supabase.from('memory_score').select();

	return data;
}

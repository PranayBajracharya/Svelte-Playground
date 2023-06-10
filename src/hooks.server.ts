import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET, SUPABASE_URL, ANON_KEY } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
// import { SupabaseAdapter } from '@next-auth/supabase-adapter';

const handleAuth = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as any]
}) satisfies Handle;

export const handle = sequence(handleAuth);
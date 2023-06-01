import { createClient } from '@supabase/supabase-js';
import { ANON_KEY, SUPABASE_URL } from '$env/static/private';

export const supabase = createClient(SUPABASE_URL, ANON_KEY);

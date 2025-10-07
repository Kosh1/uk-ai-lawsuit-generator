import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

let supabase: ReturnType<typeof createClient<Database>> | null = null

export const getSupabase = () => {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables')
    }

    supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
  }
  
  return supabase
}

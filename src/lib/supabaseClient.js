import { createClient } from '@supabase/supabase-js'

import config from '../config'

const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseKey
export const supabase = createClient(supabaseUrl, supabaseKey)
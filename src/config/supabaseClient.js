
// 1 - Importing the createClient function from the supaBase library. 

import { createClient } from '@supabase/supabase-js'

// 2 - Our environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 3 - Pass our variables into the createClient parameters as arguments. The response is stored in the supabase constant. This is what we'll be using in the future to communicate with the DB. 

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
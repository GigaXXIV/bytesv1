import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import React from "react";

const supabaseAuthUI = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="max-w-sm border">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
};

export default supabaseAuthUI;

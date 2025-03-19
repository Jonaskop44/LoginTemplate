"use client";

import Loader from "@/components/Common/Loader";
import { userStore } from "@/data/userStore";
import React, { useEffect, useState } from "react";

interface SessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const { fetchUser, refreshToken } = userStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doAction = async () => {
      refreshToken();
      fetchUser();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    doAction();
  }, [fetchUser, refreshToken]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default SessionProvider;

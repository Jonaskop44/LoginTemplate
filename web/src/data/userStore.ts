import { User } from "@/types/user";
import { create } from "zustand";
import Cookies from "js-cookie";
import ApiClient from "@/api";

interface UserState {
  user: User;
  setUser: (user: User) => void;
  fetchUser: () => void;
  refreshToken: () => void;
}

const apiClient = new ApiClient();

export const userStore = create<UserState>((set) => ({
  user: {} as User,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    const token = Cookies.get("accessToken");

    if (!token) return;

    return apiClient.session.helper
      .fetchUser(token)
      .then((response) => {
        if (response.status) {
          set({ user: response.data });
        } else {
          set({ user: {} });
        }
      })
      .catch(() => {
        set({ user: {} });
      });
  },
  refreshToken: async () => {
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken) return;

    return apiClient.session.helper
      .refreshToken(refreshToken)
      .then((response) => {
        if (response.status) {
          Cookies.set("accessToken", response.data.accessToken);
        }
      })
      .catch(() => {
        return { data: null, status: false };
      });
  },
}));

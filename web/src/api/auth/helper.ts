import { User } from "@/types/user";
import axios from "axios";

export class Helper {
  constructor() {}

  async login(user: User) {
    return axios
      .post("/auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.status !== 201) return { data: null, status: false };

        const data = response.data;
        return { data: data, status: true };
      })
      .catch(() => {
        return { data: null, status: false };
      });
  }

  async register(user: User) {
    return axios
      .post("/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.status !== 201) return { data: null, status: false };

        const data = response.data;
        return { data: data, status: true };
      })
      .catch(() => {
        return { data: null, status: false };
      });
  }

  async verifyToken(token: string) {
    return axios
      .post("/auth/verify", {
        token: token,
      })
      .then((response) => {
        if (response.status !== 201) return { data: null, status: false };

        const data = response.data;
        return { data: data, status: true };
      })
      .catch(() => {
        return { data: null, status: false };
      });
  }
}

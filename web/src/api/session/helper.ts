import axios from "axios";

export class Helper {
  constructor() {}

  async fetchUser(token: string) {
    return axios
      .get(`/user/token/data/${token}`)
      .then((response) => {
        if (response.status !== 200) return { data: null, status: false };

        const data = response.data;
        return { data: data, status: true };
      })
      .catch(() => {
        return { data: null, status: false };
      });
  }

  async refreshToken(refreshToken: string) {
    return axios
      .post(
        "/auth/refreshToken",
        {
          data: "[form]",
        },
        {
          headers: {
            Authorization: `Refresh ${refreshToken}`,
          },
        }
      )
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

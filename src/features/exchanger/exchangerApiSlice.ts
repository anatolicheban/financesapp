import { rootApi } from "../../app/api/rootApi";
import { ExchangerQuery, ExchangerResponse } from "../../models/queryModels";

const exchangerApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getRates: builder.query<ExchangerResponse, ExchangerQuery>({
      query: ({ from, to }) => ({
        url: "/conversion",
        params: {
          from,
          to,
        },
      }),
    }),
  }),
});

export const { useGetRatesQuery } = exchangerApiSlice;

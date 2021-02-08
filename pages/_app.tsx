import '../styles/index.css';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default MyApp;

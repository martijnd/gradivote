import '../styles/index.css';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { getUserUuid } from '../lib/userUuid';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') getUserUuid();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;

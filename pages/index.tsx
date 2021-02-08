import Nav from '../components/nav';
import { useQueryClient } from 'react-query';
import { useGradients } from '../lib/gradient';

function IndexPage() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useGradients();

  return (
    <div>
      <Nav />
      <div>
        <h1>Gradients</h1>
        <div>
          {status === 'loading' ? (
            'Loading...'
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <div>
                {data.map((gradient) => (
                  <p key={gradient.uuid}>
                    <a
                      href="#"
                      style={
                        // We can find the existing query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(['gradient', gradient.uuid])
                          ? {
                              fontWeight: 'bold',
                              color: 'green',
                            }
                          : {}
                      }
                    >
                      {gradient.data}
                    </a>
                  </p>
                ))}
              </div>
              <div>{isFetching ? 'Background Updating...' : ' '}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndexPage;

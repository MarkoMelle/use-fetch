import React from 'react';
import { useJsonFetch } from '../hooks/useJsonFetch';
const BaseUrl = 'http://localhost:7070/';

const App = () => {
  const { data: data1, loading: loading1, error: error1 } = useJsonFetch(BaseUrl + 'data');
  const { data: data2, loading: loading2, error: error2 } = useJsonFetch(BaseUrl + 'error');
  const { data: data3, loading: loading3, error: error3 } = useJsonFetch(BaseUrl + 'loading');

  return (
    <>
      <div>
        {loading1 ? 'Loading...' : error1 ? `Error: ${error1.message}` : JSON.stringify(data1)}
      </div>
      <div>
        {loading2 ? 'Loading...' : error2 ? `Error: ${error2.message}` : JSON.stringify(data2)}
      </div>
      <div>
        {loading3 ? 'Loading...' : error3 ? `Error: ${error3.message}` : JSON.stringify(data3)}
      </div>
    </>
  );
};

export default App;

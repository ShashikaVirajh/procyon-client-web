import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from 'components/layouts';

import RootRouter from 'routers/root.router';

const App = (): JSX.Element => (
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  </Suspense>
);

export default App;

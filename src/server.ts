import 'dotenv/config';
import 'reflect-metadata';

import application from './app/application';
import { PORT } from './shared/constants/app.constants';

((): void => {
  application.listen(PORT, (): boolean =>
    process.stdout.write(`Server running at port http://localhost:${PORT}\n`)
  );
})();

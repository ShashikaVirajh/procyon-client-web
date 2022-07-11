import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { commonReducer } from 'store/common/common.reducer';
import { jobReducer } from 'store/job/job.reducer';
import { userReducer } from 'store/user/user.reducer';
import { statsReducer } from 'store/stats/stats.reducer';

const userPersistConfig = {
  storage,
  key: 'user',
};

export const rootReducer = {
  common: commonReducer,
  job: jobReducer,
  stats: statsReducer,
  user: persistReducer(userPersistConfig, userReducer),
};

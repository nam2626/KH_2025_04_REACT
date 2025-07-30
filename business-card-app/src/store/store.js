import storage from 'redux-persist/lib/storage';
import businessCardsReducer from './businessCardsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'card',
  storage,
};

const persistCardsBusinessReducer = persistReducer(persistConfig, businessCardsReducer);

export const store = configureStore({
  reducer: {
    businessCards: persistCardsBusinessReducer,
  },
});

export const pesistor = persistStore(store);

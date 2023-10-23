import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice, friendSlice } from './slices'
import chatSlice from './slices/chat.slice'

const commonConfig = {
	key: 'current-user',
	storage,
}

const persistConfig = {
	...commonConfig,
	whitelist: ['isLogin', 'user', 'token'],
}

const userPersist = persistReducer(persistConfig, authSlice)

export const store = configureStore({
	reducer: {
		authReducer: userPersist,
		friendReducer: friendSlice,
		chatReducer: chatSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export const persistor = persistStore(store)

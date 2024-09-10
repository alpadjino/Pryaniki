declare module 'redux-persist/lib/storage' {
	import { Storage } from 'redux-persist/es/types';
	const storage: Storage;
	export default storage;
}

declare module 'redux-persist/es/persistReducer' {
  import { Reducer } from 'redux';
  import { PersistConfig } from 'redux-persist/es/types';

  function persistReducer<S, A>(
    config: PersistConfig<S, any>,
    reducer: Reducer<S, A>
  ): Reducer<S, A>;

  export default persistReducer;
}

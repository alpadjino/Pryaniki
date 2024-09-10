import React from 'react';
import Router from '@harness/navigation/Router';
import { BrowserRouter } from 'react-router-dom';
import { Harness } from '@harness/Harness';
import { Provider } from 'react-redux';
import store, { persistor } from '@store/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ru } from 'date-fns/locale/ru';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import { PermissionProvider } from '@harness/PermissionProvider';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
					<SnackbarProvider />
					<BrowserRouter>
						<Harness>
							<PermissionProvider />
							<Router />
						</Harness>
					</BrowserRouter>
				</LocalizationProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;

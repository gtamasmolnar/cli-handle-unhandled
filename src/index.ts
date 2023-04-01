import handleError from '@gtamasmolnar/cli-handle-error';

const unhandledError = (): void => {
	process.on('unhandledRejection', (err: Error) => {
		handleError(`UNHANDLED ERROR`, err);
	});
};

export default unhandledError;

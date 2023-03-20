import handleError from '@gtamo/cli-handle-error';

const unhandledError = (): void => {
	process.on('unhandledRejection', (err: Error) => {
		handleError(`UNHANDLED ERROR`, err);
	});
};

export default unhandledError;

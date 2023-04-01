import handleError from '@gtamasmolnar/cli-handle-error';
const unhandledError = () => {
    process.on('unhandledRejection', (err) => {
        handleError(`UNHANDLED ERROR`, err);
    });
};
export default unhandledError;
//# sourceMappingURL=index.js.map
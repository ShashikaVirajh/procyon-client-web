import logger from 'loglevel';

logger.setLevel(2);

const log = (key: string, message: any, ...rest: any): void => {
  logger.info(key, message, ...rest);
};

const error = (key: string, message: any): void => {
  logger.error(key, message);
};

const warn = (key: string, message: any): void => {
  logger.warn(key, message);
};

export default { log, error, warn };

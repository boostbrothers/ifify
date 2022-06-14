import {ClassType} from '../../type';

export default <T>(typeOfClass: ClassType, err: Error) =>
  (instance: T): T => {
    if (instance instanceof typeOfClass) {
      throw err;
    }

    return instance;
  };

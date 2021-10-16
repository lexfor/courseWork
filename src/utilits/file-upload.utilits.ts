export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name: string = file.originalname.split('.')[0];
  const fileExtName: string = file.originalname.split('.')[1];
  const timeStamp: string = new Date().getTime().toString();
  callback(null, `${name}-${timeStamp}.${fileExtName}`);
};

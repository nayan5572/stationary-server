// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);
//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (err) {
//     console.log('Server Error Problem', err);
//   }
// }
// main();

import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

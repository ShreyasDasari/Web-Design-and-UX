var mongoose = require('mongoose');
// define our sample model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Userdb', {
    username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
});
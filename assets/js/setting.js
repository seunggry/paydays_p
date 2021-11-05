
let fs = require('_scss');
fs.readdir('/util', function(err, filelist){
   console.log(filelist);
});

//export
exports.fs = fs;


// function getFiles (dir, files_){
//     files_ = files_ || [];
//     var files = fs.readdir(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name, files_);
//         } else {
//             files_.push(name);
//         }
//     }
//     return files_;
// }
//
// console.log(getFiles('path/to/dir'))
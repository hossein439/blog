const multer = require('multer')
const express = require('express');
const router = new express.Router();
const sharp = require('sharp');


const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');
const PostController = require('./controllers/PostController');
const auth = require('./middleware/auth');


const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return cb(new Error('Please Upload png or jpg or jpeg'));
        }
        cb(undefined, true)
    },
})



// User Routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/signout/:id', UserController.signOut);
router.get('/users', auth, UserController.index);
router.post('/users', auth, upload.single('avatar'), UserController.create);
router.post('/user-profile', auth, UserController.readProfile)
router.get('/users/:id', auth, UserController.read)
router.put('/users/:id', auth, upload.single('avatar'), UserController.update);
router.delete('/users/:id', auth, UserController.delete);
router.post('/add-reading-list/:id', auth, UserController.addReadingList);
router.post('/remove-reading-list/:id', auth, UserController.removeReadingList);
router.post('/reading-list/:id', auth, UserController.readingList);



// Category
router.get('/category', auth, CategoryController.index);
router.post('/category', auth, CategoryController.create);
router.get('/category/:id', auth, CategoryController.read);
router.put('/category/:id', auth, CategoryController.update);
router.delete('/category/:id', auth, CategoryController.delete);

router.get('/post', PostController.index);
router.post('/post', auth, upload.single('coverImage'), PostController.create);
router.post('/read-user-posts', auth, PostController.readUserPosts);
router.get('/post/:id', PostController.read);
router.put('/post/:id', upload.single('coverImage'), PostController.update);
router.post('/add-like/:id', auth, PostController.addLike);
router.post('/remove-like/:id', auth, PostController.removeLike);

module.exports = router;
var gulp = require('gulp');
var shell = require('gulp-shell');
var ssh = require('gulp-ssh');
var deployConfig = require("./deploy-config");
var gulpSequence = require('gulp-sequence');
var zip = require('gulp-zip');
var through = require('through2');
var async = require('async');
var scpClient = require('scp2');
var gulpUtil = require('gulp-util');
var deploySSH = require('./deploy-ssh');

const PLUGIN_NAME = 'gulp-deploy ::'

gulp.task('default', shell.task([
    'DEBUG=express-demo:* npm start'
]));

gulp.task('production', function (){
    shell.task(['rm -rf dist']);
    gulpSequence('copyFile', 'zipFile', 'deploy',  function() {
        gulpUtil.log(PLUGIN_NAME, "***** Deploy Finished！！！！");
        process.exit(0);
    });
});

gulp.task('copyFile', function() {
    return gulp.src(
        [
            '*.json',
            '*.js',
            'routes/**',
            'views/**',
            'public/**',
            '!config.js'
        ], { base: './'})
        .pipe(gulp.dest('./dist'));
});

gulp.task('zipFile', function() {
    return gulp.src(['dist/**'], { base: './' })
        .pipe(zip('publish.zip'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function() {
    var config = deployConfig.production;
    config.deployPath = '/home/admin/publish/web/express-demo/';
    return gulp.src("dist/publish.zip", { base: './' })
        .pipe(deploySSH({
            servers: config.servers,
            dest: config.deployPath + 'publish.zip',
            logPath: 'deploy',
            shell:[ 'cd ' + config.deployPath,
                'shopt -s extglob',
                'rm -rf !(logs|node_modules|config.js|publish.zip)',
                'unzip -o publish.zip',
                'cp -rf dist/** .',
                'rm -rf dist',
                "rm publish.zip",
                'npm install --production',
                'pm2 startOrRestart pm2-start.json'],
        }));
});
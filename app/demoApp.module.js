import angular from 'angular';

import homeController from './components/home/home.controller';

angular.module('demoApp', [])
  .controller('HomeController', homeController);
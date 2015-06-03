angular.module('app.user', ['ui.router']).config(config);

function config($stateProvider) {
  $stateProvider.state('admin.user', {
    url: '/user',
    label: '订单管理',
    templateUrl: 'views/user.html'
  });
}

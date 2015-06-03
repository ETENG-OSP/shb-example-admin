angular.module('app.order', ['ui.router']).config(config);

function config($stateProvider) {
  $stateProvider.state('admin.order', {
    url: '/order',
    label: '用户管理',
    templateUrl: 'views/order.html'
  });
}

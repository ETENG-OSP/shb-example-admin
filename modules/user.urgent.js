angular.module('app.user', ['ui.router']).config(config);

function config($stateProvider) {
  $stateProvider.state('root.order', {
    url: '/order',
    label: '订单管理',
    templateUrl: 'views/order.html'
  });
}

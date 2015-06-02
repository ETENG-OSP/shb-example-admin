$('body').addClass('skin-green sidebar-mini');
$('body > ui-view').addClass('wrapper');

angular.module('app', [
  'app.user',
  'app.order',
  'ui.router'
]).config(config).run(run)
  .directive('adminHeader', AdminHeader)
  .directive('adminSidebar', AdminSidebar)
  .directive('adminContent', AdminContent)
  .directive('adminFooter', AdminFooter)
  .directive('adminControl', AdminControl)
  .controller('AppController', AppController);

/**
 * @ngInject
 */
function run($rootScope) {
  $rootScope.$on('$viewContentLoaded', handleViewContentLoaded);
  $rootScope.$on('aaaa', handleAaaa);
  return;

  function handleViewContentLoaded() {
    $.AdminLTE.layout.activate();
  }

  function handleAaaa() {
    $.AdminLTE.pushMenu.expand();
  }
}

/**
 * @ngInject
 */
function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/root/user');
  $stateProvider.state('root', {
    abstract: true,
    url: '/root',
    templateUrl: 'partials/root.html',
    controller: 'AppController',
    controllerAs: 'app'
  });
}

/**
 * @ngInject
 */
function AppController($state) {

  var vm = this;

  vm.modules = [
    {
      label: '人员管理'
    },
    {
      label: '订单管理',
      items: [
        {
          label: '未发货'
        },
        {
          label: '已完成'
        }
      ]
    }
  ];

  return;
}

function AdminHeader() {
  return {
    templateUrl: 'partials/header.html',
    link: link
  };

  function link(scope, element) {
    $.AdminLTE.pushMenu.activate('[data-toggle="offcanvas"]', element);
  }
}

function AdminSidebar() {
  return {
    templateUrl: 'partials/sidebar.html',
    link: link,
    scope: {
      modules: '='
    }
  };

  function link(scope, element) {
    var sidebar = $('.sidebar', element);
    scope.$watch('modules', function (modules) {
      setTimeout(function () {
        $.AdminLTE.tree(sidebar);
      });
    });
  }
}

function AdminContent() {
  return {
    templateUrl: 'partials/content.html',
    link: link
  };

  function link(scope, element) {
  }
}

function AdminFooter() {
  return {
    templateUrl: 'partials/footer.html',
    link: link
  };

  function link(scope, element) {
    $.AdminLTE.layout.activate();
  }
}

function AdminControl() {
  return {
    templateUrl: 'partials/control.html',
    link: link
  };

  function link() {
    $.AdminLTE.controlSidebar.activate();
  }
}

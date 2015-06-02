$('body').addClass('skin-green sidebar-mini');
$('body > ui-view').addClass('wrapper');

angular.module('app', [
  'app.user',
  'app.order',
  'ui.router'
]).config(config).run(run)
  .directive('adminHeader', AdminHeaderDirective)
  .directive('adminSidebar', AdminSidebarDirective)
  .directive('adminContent', AdminContentDirective)
  .directive('adminFooter', AdminFooterDirective)
  .directive('adminControl', AdminControlDirective)
  .directive('sidebarSearchForm', SidebarSearchFormDirective)
  .directive('sidebarMenu', SidebarMenuDirective)
  .directive('sidebarUserPanel', SidebarUserPanelDirective)
  .controller('AppController', AppController);

/**
 * @ngInject
 */
function run($rootScope) {
  $rootScope.$on('$viewContentLoaded', handleViewContentLoaded);
  return;

  function handleViewContentLoaded() {
    $.AdminLTE.layout.activate();
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

function SidebarUserPanelDirective() {
  return {
    templateUrl: 'partials/sidebar/user-panel.html'
  };
}

function SidebarSearchFormDirective() {
  return {
    templateUrl: 'partials/sidebar/search-form.html'
  };
}

function SidebarMenuDirective() {
  return {
    templateUrl: 'partials/sidebar/menu.html',
    controller: 'AppController',
    controllerAs: 'app',
    link: link,
    scope: {
      modules: '='
    }
  };

  function link(scope, element) {
    scope.$watch('modules', function (modules) {
      setTimeout(function () {
        $.AdminLTE.tree(element);
      });
    });
  }
}

function AdminHeaderDirective() {
  return {
    templateUrl: 'partials/header.html',
    link: link
  };

  function link(scope, element) {
    $.AdminLTE.pushMenu.activate('[data-toggle="offcanvas"]', element);
  }
}

function AdminSidebarDirective() {
  return {
    templateUrl: 'partials/sidebar.html'
  };
}

function AdminContentDirective() {
  return {
    templateUrl: 'partials/content.html',
    link: link
  };

  function link(scope, element) {
  }
}

function AdminFooterDirective() {
  return {
    templateUrl: 'partials/footer.html',
    link: link
  };

  function link(scope, element) {
    $.AdminLTE.layout.activate();
  }
}

function AdminControlDirective() {
  return {
    templateUrl: 'partials/control.html',
    link: link
  };

  function link() {
    $.AdminLTE.controlSidebar.activate();
  }
}

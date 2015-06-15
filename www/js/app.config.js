app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            templateUrl: "views/menu.html",
            controller: 'MainCtrl'
        })
        .state('app.scan', {
            url: "/scan",
            templateUrl: "views/scan.html",
            controller: 'ScanCtrl'
        })
        .state('app.result', {
            url: "/result",
            templateUrl: "views/result.html",
            controller: 'ResultCtrl'
        })
        .state('app.about', {
            url: "/about",
            templateUrl: "views/about.html"
        })
        .state('app.login', {
            url: "/login",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        });
    $urlRouterProvider.otherwise("/app");
});
var a = angular.module("app", ['ui.router']);
a.controller("main", function ($scope, $http, $log) {
    $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=hWniY6KkTvJlAlilhmYBDmzLRh3IlrIF4bCCLxWfKIkmvhrwW0z14u-TmTnVdDox9Qj6sr2Y9hngElmtM79uKYYnwh22LAEEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzvRnfmUfyMPU-HPOSGawFG3ZtOWgIytzkTCj8stTH_sS7Q89E3fqtjE4IWeXEzk6-e8mhkuQHjIME09Of-T229iFBN26_9YV7moEBJ3qF9sE&lib=MlT_kWPS6QJpDr_0xo5H_C7a459lJ8SfB")
        .then(function (response) {
            $scope.emp = response.data.data
            $log.info(response.data.data[0].Name);
            
        });
});
a.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('first', {
            url: '/index.html',
            templateUrl: 'index.html',
            controller: 'main'
        })
        .state('hackathon', {
            url: '/hackathons.html',
            templateUrl: 'hackathons.html',
            controller: 'hackathon'
        })
        .state('internships', {
            url: '/internships.html',
            templateUrl: 'internships.html',
            controller: 'internship'

        })
        .state('blogs', {
            url: '/blogs.html',
            templateUrl: 'blogs.html',
            controller: 'blogs'

        })


}]);

a.controller("hackathon", function ($scope, $http, $log) {
    $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=hWniY6KkTvJlAlilhmYBDmzLRh3IlrIF4bCCLxWfKIkmvhrwW0z14u-TmTnVdDox9Qj6sr2Y9hngElmtM79uKYYnwh22LAEEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzvRnfmUfyMPU-HPOSGawFG3ZtOWgIytzkTCj8stTH_sS7Q89E3fqtjE4IWeXEzk6-e8mhkuQHjIME09Of-T229iFBN26_9YV7moEBJ3qF9sE&lib=MlT_kWPS6QJpDr_0xo5H_C7a459lJ8SfB")
        .then(function (response) {
            $scope.em = response.data.data
            $log.info(response.data.data[0].Name);
        })
});
a.controller("internships", function ($scope, $http, $log) {
    $http.get("https://script.google.com/macros/s/AKfycbznZrnYSjsR1u8OSQAsxy7vhPjFr9ypaf5K5rKGnykBaON5sdEsMmAv-eXl8AiPTG_uWA/exec")
        .then(function (response) {
            $scope.intern = response.data.data
            $log.info(response.data.data[0].Name);
        })
});
a.controller("blogs", function ($scope, $http, $log) {
    $http.get("https://script.google.com/macros/s/AKfycbxUWSrtl8dwVR4VG7TdlpguoEJnwZjwwoqVszwujPUAc0gVhrwCSuaXajkw1Ai9Kl-YpQ/exec")
        .then(function (response) {
            $scope.blogs = response.data.data
            $log.info(response.data.data[0].Name);
        })
});




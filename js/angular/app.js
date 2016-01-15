var restaurantApp = angular
.module('Restaurant', ['ui.router', 'ncy-angular-breadcrumb', 'firebase'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$stateProvider
	.state('home', {
		url:'/',
		templateUrl: '../templates/home.html'
	})

	.state('register', {
		url:'/register',
		templateUrl: '../templates/register.html',
		controller: 'register',
		ncyBreadcrumb: {
    	label: 'registration',
    	parent: 'home'
  		}
  	})

  	.state('search', {
		url:'/search',
		templateUrl: '../templates/search.html',
		controller: 'search',
		ncyBreadcrumb: {
    	label: 'search',
    	parent: 'home'
  		}
  	})

	.state('login', {
		url:'/login',
		templateUrl: '../templates/login.html',
		controller: 'login',
		ncyBreadcrumb: {
    	label: 'login',
    	parent: 'home'
  		}
  	})

	.state('menu', {
		url:'/menu',
		templateUrl: '../templates/menuAll.html',
		ncyBreadcrumb: {
    	label: 'menu',
    	parent: 'home'
  		}
  	})

  	.state('menuReg', {
		url:'/menu/regular',
		templateUrl: '../templates/menuReg.html',
		controller: 'restaurantCtrlMenu',
		ncyBreadcrumb: {
    	label: 'regular',
    	parent: 'menu'
  		}	
	})

  	.state('menuBan', {
		url:'/menu/banquet',
		templateUrl: '../templates/menuBan.html',
		controller: 'restaurantCtrlMenu',
		ncyBreadcrumb: {
    	label: 'banquet',
    	parent: 'menu'
  		}	
	})

  	.state('menuWine', {
		url:'/menu/wine',
		templateUrl: '../templates/menuWine.html',
		controller: 'restaurantCtrlMenu',
		ncyBreadcrumb: {
    	label: 'wine list',
    	parent: 'menu'
  		}	
	})

  	.state('contacts', {
		url:'/contacts',
		templateUrl: '../templates/contacts.html',
		controller: 'gallery',
		ncyBreadcrumb: {
    	label: 'contacts',
    	parent: 'home'
  		}	
	})

  	.state('about', {
		url:'/about',
		templateUrl: '../templates/about.html',
		controller: 'gallery',
		ncyBreadcrumb: {
    	label: 'about',
    	parent: 'home'
  		}	
	})

	.state('reservation', {
		url:'/reservation',
		templateUrl: '../templates/reserve.html',
		controller: 'reserve',
		ncyBreadcrumb: {
    	label: 'reservation',
    	parent: 'home'
  		}	
	})

	.state('events', {
		url:'/events',
		templateUrl: '../templates/events.html',
		controller: 'gallery',
		ncyBreadcrumb: {
    	label: 'events',
    	parent: 'home'
  		}	
	})

	.state('gallery', {
		url:'/gallery',
		templateUrl: '../templates/gallery.html',
		controller: 'gallery',
		ncyBreadcrumb: {
    	label: 'gallery',
    	parent: 'home'
  		}	
	});

	$urlRouterProvider.otherwise('/')
}])

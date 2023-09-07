// Bootstrap Tourist steps
$(document).ready(function() {
    $().ready(function() {
        var tour = new Tour({
        framework: 'bootstrap4',
        steps: [
        {
            element: "#login",
            title: "Login here",
            content: "The product comes with a role-based authentication system. Log in as an Admin, Creator or Member to see how it works.",
            showProgressBar : true,
            next: -1,
        },
        {
            element: "#dashboard",
            title: "Dashboard",
            content: "This is a dashboard example. Browse the widgets to get a sense of the UI look & feel.",
            placement: 'top',
            showProgressBar : true,
            onNext: function(){
            document.location.href = '/profile';
            return (new jQuery.Deferred()).promise();
            },
            onPrev: function(){
            document.location.href = '/login';
            }
        },
        {
            element: "#profile",
            title: "Profile",
            content: "Your users can easily change their profile picture, name and email or reset their password.",
            showProgressBar : true,
            onNext: function(){
            document.location.href = '/role';
            return (new jQuery.Deferred()).promise();
            },
            onPrev: function(){
            document.location.href = '/dashboard';
            return (new jQuery.Deferred()).promise();
            }
        },
        {
            element: "#roles-table",
            title: "Roles Management",
            content: "Manage what user types can do with the app. Create new roles, edit or delete existing ones.",
            placement: 'bottom',
            showProgressBar : true,
            onNext: function(){
            document.location.href = '/user';
            return (new jQuery.Deferred()).promise();
            },
            onPrev: function(){
            document.location.href = '/profile';
            }
        },
        {
            element: "#users-table",
            title: "Users Management",
            content: "Control who has access to your app. Add or remove users and easily edit their info.",
            placement: 'top',
            showProgressBar : true,
            onNext: function(){
            document.location.href = '/category';
            return (new jQuery.Deferred()).promise();
            },
            onPrev: function(){
            document.location.href = '/role';
            }
        },
        {
            element: "#categories-table",
            title: "Categories Management",
            content: "Create, edit or delete categories for your items. You can use categories to organize any type of content, from ecommerce products to blog articles.",
            placement: 'bottom',
            showProgressBar : true,
            onNext: function(){
            document.location.href = '/tag';
            return (new jQuery.Deferred()).promise();
            },
            onPrev: function(){
            document.location.href = '/user';
            }
        },
        {
            element: "#tags-table",
            title: "Tags Management",
            content: "Create, edit or delete tags. You can also color code tags to easily identify various types of content.",
            placement: 'bottom',
            showProgressBar : true,
            onNext: function(){
            document.location.href = '/item';
            return (new jQuery.Deferred()).promise();
            },
            onPrev: function(){
            document.location.href = '/category';;
            }
        },
        {
            element: "#items-table",
            title: "Items Management",
            content: "Create, edit or delete items, group them into categories or add tags to each item. In short, everything a lightweight CMS needs.",
            placement: 'top',
            showProgressBar : true,
            onPrev: function(){
            document.location.href = '/tag';
            }
        },
        {
            element: "#logout",
            title: "Logut",
            content: "Log out of this account and try out another role. You can log in as an Admin, Creator or Member.",
            placement: 'bottom',
            showProgressBar : true,
        },
        {
            element: "#docs",
            title: "Documentation",
            content: "Check out the documentation for details on components, Laravel setup, license and file structure.",
            placement: 'bottom',
            showProgressBar : true,
        }
        ]});

        // Start tour
        tour.start();

        // if the user logs out without pressing end tour, the tour ends
        $("#logout-btn").on('click', function() {
            tour.end();
        });
  });
});

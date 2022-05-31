# Portfolio-2022


About this website:
My interest with web development lies mostly with the backend, which is why decided to use a CSS framework and template as a crutch to allow me to focus on the part that I renjoy workin on more

Since the purpose of this website is to demonstrate my web developmemnt skills, I decided to design this website to be more complicated than it needs to be. Theoretically, I could have hard coded every webpage to be static, but I instead decided to store all my data (such as portfolio, contact information, etc...) inside a combination of JSON files and a mongo database and have the backend dynamically generate the webpage. 

This website is still a work in progress, I decided to get the basic functionality completed before deployment and will add additional functionality as time permits. For now I plan to add the following in some capacity:
    1. Add an administration feature that will allow me to make changes to the website and it's data from within the site itself.
    2. Have all portfolio project data move into a mongo database for easier management
    3. Add a blog  



Homepage template provided by Bulma for free:
    https://bulmatemplates.github.io/bulma-templates/
    https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/personal.html


Homepage details:

    Navbar:
    - Sections:
        about
        services
        resume
        portfolio
        all projects
        contact


    Portfolio:
    - 9 entries on the page. If more, create a view more button to view all projects

    
Routes:
    - Every page is dynamic
    - Profile data is stored in a json file for simplicity
    - Posts are stored in a database to showoff my backend skills


    Routes Homepage:
    Get     "/"             View my profile 
    Get     /allProjects    View all projects 

    Routes Administration:
    Get     "/login         Get form to log into the backend to get permissions to edit posts
    Post    "/login         Send form data to backend 
    Get     "/createPost"   Get form to create new post
    Post    "/createPost"   Send form data to backend
    Get     "/:id/editPost" Get form to edit post
    Patch   "/:id/editPost" Send form to edit post
    Get     "/editProfile"  Get form to edit profile
    Patch   "/editProfile"  Send form to edit profile


    Post_DB:
        Title:
        Description:
        Body:
        Images:
        Github_link:


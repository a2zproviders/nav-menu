
# Nav-menu: Top dropdown menu examples with code

- Html5 
- CSS3
- JavaScript (ES6)

> ###### This is sponsored by [shot blasting machine](https://www.shotblastingmachines.in/)
![shot blasting machine](https://www.shotblastingmachines.in/images/setting/logo/logo.png)
## First step 

Create an html file inside root directory by index.html name

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-main">
                <div class="logo">
                    <a href="#">Logo</a>
                </div>
                <div class="open-nav-menu">
                    <span></span>
                </div>
                <div class="menu-overlay"></div>
                <!-- navigation menu start -->
                <nav class="nav-menu">
                    <div class="close-nav-menu">
                        <img src="/image/OIP.png" alt="close">
                    </div>
                    <ul class="menu">
                        <li class="menu-item menu-item-has-children">
                            <a href="#" data-toggle="sub-menu">Home<i class="plus"></i></a>
                            <ul class="sub-menu">
                                <li class="menu-item">
                                    <a href="#">Home 1</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Home 1</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Home 1</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Home 1</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a href="#">About</a>
                        </li>
                        <li class="menu-item">
                            <a href="#">Services</a>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a href="#" data-toggle="sub-menu">Pages <i class="plus"></i></a>
                            <ul class="sub-menu">
                                <li class="menu-item">
                                    <a href="#">Page 1</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Page 1</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Page 1</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">Page 1</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a href="#">News</a>
                        </li>
                        <li class="menu-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                
                <!-- navigation menu end -->
            </div>
        </div>
    </header>
    <section class="home-section">
       
    </section>
    <script src="js/javascript.js"></script>
</body>
</html>
```
## Second step

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
}
body.hidden-scrolling{
    overflow-y: hidden;
}
:root{
    --primary-color: #e91e63;
    --secondary-color: #34a4ef;
    --black-color: #000000;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
.container{
    max-width: 1170px;   
    margin: auto;
}
.header-main{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    border-radius: 4px;
}
.header .logo{    
    padding: 0 15px;
}
.header .logo a{
    font-size: 30px;
    text-transform: uppercase;
    color: var(--primary-color);
    font-weight: 600;
}
.header .nav-menu{
    
    padding: 0 15px;
}
.header .menu > .menu-item{
    display: inline-block; 
    margin-left: 30px;
    position: relative;
}
.header .menu > .menu-item > a{
    display: block;
    padding: 12px 0;
    font-size: 16px;
    color: var( --black-color);
    text-transform: capitalize;
    font-weight: 600;
    transition: all 0.3s ease;
}
.header .menu > .menu-item > a .plus{
    display: inline-block;
    height: 12px;
    width: 12px;    
    position: relative;
    margin-left: 5px;
    pointer-events: none;
}
.header .menu > .menu-item > a .plus::before,
.header .menu > .menu-item > a .plus::after{
    content:  '';
    position: absolute;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    background-color: var(--black-color);
    height: 2px;
    width: 100%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}
.header .menu > .menu-item-has-children.active > a .plus::after{
    transform: translate(-50%, -50%) rotate(0deg);
}
.header .menu > .menu-item:hover > a .plus::before,
.header .menu > .menu-item:hover > a .plus::after{
    background-color: var(--primary-color);
}

.header .menu > .menu-item > a .plus::after{
    transform: translate(-50%, -50%) rotate(-90deg) 
}
.header .menu > .menu-item > .sub-menu >.menu-item > a:hover,
.header .menu > .menu-item:hover > a{
    color: var(--primary-color);
}
.header .menu > .menu-item > .sub-menu{
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    width: 220px;
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #fff;
    padding: 10px 0;
    border-top: 2px solid var(--primary-color);
    transform: translateY(10px);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
}
@media(min-width: 992px)
{
    .header .menu > .menu-item-has-children:hover > .sub-menu{
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    .header .menu > .menu-item-has-children:hover > a .plus::after{
        transform: translate(-50%, -50%) rotate(0deg); 
    }
}

.header .menu > .menu-item > .sub-menu >.menu-item{
    display: block;
}
.header .menu > .menu-item > .sub-menu >.menu-item > a{
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    color: var(--black-color);
    transition: all 0.3s ease;
    text-transform: capitalize;
}
.header{
    position: absolute;
    padding: 15px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
   
}
.header .open-nav-menu{
    height: 34px;
    width: 40px;
    
    margin-right: 15px;
    
    align-items: center;
    display: none;
    justify-content: center;
    cursor: pointer;
}
.header .open-nav-menu span{
    display: block;
    height: 3px;
    background-color: var(--black-color);
    width: 24px;
    position: relative;
}
.header .open-nav-menu span::before,
.header .open-nav-menu span::after{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    background-color: var(--black-color);
}
.header .open-nav-menu span::before{
    top: -7px;
}
.header .open-nav-menu span::after{
    top: 7px;
}
.header .close-nav-menu{
    height: 40px;
    width: 40px;
    background-color: #fff;
    margin: 0 0 15px 15px;
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}
.header .close-nav-menu img{
   width: 16px;
}
.header .menu-overlay{
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
}
.header .menu-overlay.active{
    visibility: visible;
    opacity: 1;
}
/* Home Section */
.home-section{
    width: 100%;
    min-height: 100vh;
    display: block;
    background: url(./image/bggirl.png);
    background-position: center top;
    background-size: cover;
}

/* responsive */
@media (max-width: 991px)
{
    
    .header .nav-menu{
        position: fixed;
        right: -280px;
        visibility: hidden;
        top: 0;
        width: 280px;
        height: 100%;
        overflow-y: auto;
        background-color: #222222;
        z-index: 1000;
        padding: 15px 0;
        transition: all 0.5s ease;
    }
    .header .nav-menu.open{
        visibility: visible;
        /* opacity: 1; */
        right: 0px !important;
        /* display: block; */
    }
    .header .menu > .menu-item{
        display: block;
        margin: 0;
    }
    .header .menu > .menu-item-has-children > a{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header .menu > .menu-item > a{
        color: #fff;
        padding: 12px 15px;
        border-bottom: 1px solid #333333;
    }
    .header .menu > .menu-item:first-child > a{
        border-top: 1px solid #333333;
    }
    .header .menu > .menu-item > a .plus::before,
    .header .menu > .menu-item > a .plus::after{
        background-color: #fff;
    }
    .header .menu > .menu-item > .sub-menu{
        width: 100%;
        position: relative;
        opacity: 1;
        visibility: visible;
        border: none;
        background-color: transparent;
        box-shadow: none;
        transform: translateY(0px);
        padding: 0px;
        left: auto;
        top: auto;
        max-height: 0;
        overflow: hidden;
    }
    .header .menu > .menu-item > .sub-menu > .menu-item > a{
        padding: 12px 45px;
        color: #fff;
        border-bottom: 1px solid #333333;
    }
    .header .close-nav-menu,
    .header .open-nav-menu{
        display: flex;
    }
}
```
## Third step
Create a file inside the folder (project folder) js/javascript.js

```javascript
(() => 
{
  
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu");
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navbar by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click",(event) =>{
        if(event.target.hasAttribute("data-toggle") && 
          window.innerWidth <= mediaSize){
              //prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expaded, collapse it
            if(menuItemHasChildren.classList.contains("active")){
                collapseSubMenu();
            }
            else{
                
                // collapse existing expanded manuItemHasChildren
                if(navMenu.querySelector(".menu-item-has-children.active"))
                {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
        
    });

    function  collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }

    function resizefix(){
        // if navmenu is open , close it 
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
        }
    }
    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizefix();
        }
    });


})();
```

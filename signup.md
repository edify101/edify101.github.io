---
layout: default
title: login
permalink: /signup/
---
<html>
<head>
<script src="//code.jquery.com/jquery-latest.min.js?v3" type="text/javascript"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js?v3"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js?v3"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular-route.min.js?v3"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular-sanitize.js?v3"></script>
<!-- <script src="public/js/uprospie-bootstrap.js?v3"></script>
<script src="public/js/directives.js?v3"></script>
<script src="public/js/externalng.js?v3"></script> -->
<script data-main="public/js/uprospie-external.js?v3" src="public/js/require.js?v3"></script>
<meta name="viewport" content="initial-scale=1">

<style>

nav {
    width:95% !important;
    padding-left: 2.5% !important;
    padding-right: 2.5% !important;
    height: 55px;
    z-index:999999999;
    position:static;
    background:#23262B;
    padding-top:15px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.13);

/*    transition: all 0.3s;*/
}

    nav.navbar.static{
        background:transparent !important;
        border:none;
        box-shadow: none;

    }
        nav.navbar.static #login{
            border:transparent 1px solid;
            color:white;
            background:none;
            box-shadow: none;

        }
        nav.navbar.static #signup{
            border:white 1px solid;
            background:none;
        }

            nav.navbar.static #signup:hover {
                border: #52AEFB 1px solid;
                color: #52AEFB;
            }

nav.navbar{
    position:fixed;
    top:0;
    background:#fff;
}

nav > .nav-items{
    display:table;
    width:100%;
}

nav > .nav-items > div {
    display:table-cell;
    vertical-align: bottom;
}

nav > .nav-items > div > ul{
    font-size:1.1em;
}

nav logo {
    border-bottom:thick transparent solid;
}

nav > .nav-items > div > ul > li{
    padding: 0 5px;
    display:inline-flex;
    vertical-align: bottom;
    border-bottom:thick solid black;
}
nav.noaccent > .nav-items > div > ul > li, nav.noaccent{
    border-bottom:thick transparent solid;
}

nav > .nav-items > div > ul > li.selected {
    border-bottom:thick solid white;
}

.nav-items .profilepicture{
    width:20px; height:20px;
    border-radius:3px;
    border:white thin solid;
}

@media screen and (max-width: 600px){
  .left{
    margin-top: -8px;
  }
}
</style>



<nav class="navbar static" >
    <div class="nav-items">
        <div class="middle">&nbsp;</div>
        <div class="right" style="text-align:right;" >
            <a href="#/signin" id="signin" class="submit-button secondary">Sign In</a>
            <a href="#/signup" id="signup" class="submit-button" style="margin-left:10px;">Sign Up</a>
        </div>
    </div>
</nav>
<div ng-view></div><style>
.w70move .offcolor{
  opacity: .5;
  color: #fff;
}

.w70move .item,.offcolor{
  font-size: 11px;
}

.w70move .end{
  font-family: Lato, sans-serif;
  font-size: 10px;
  position: absolute;
  width: 100%;
  bottom: 5px;
  color: #fff;
  opacity: .5;

}

.w70move{
  width: 70%;
}

@media screen and (max-width: 600px){
  .w70move{
    width: 100%;
  }


}

</style>
</head>

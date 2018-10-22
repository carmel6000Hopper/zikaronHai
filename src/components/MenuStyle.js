const mainStyle =  {
    transitionMarginLeft : '.5s',
    padding: 20
}
export const mainStyleOpen =  {
    composes: mainStyle,
    marginLeft : 250,
    backgroundColor : 'red'
}
export const mainStyleClose =  {
    composes: mainStyle,
    marginLeft : 0,
}
export const sidebarStyle ={
    height: '100%',
    width: 0,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: 60,
}
export const sidebarCloseStyle =  {
    composes : sidebarStyle,
    width : 0 , 
  
}
export const sidebarOpenStyle =  {
    composes : sidebarStyle,
    width : 250,

}
export const sidebarAStyle = {
    composes: sidebarStyle,
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: 15,
    color: '#818181',
    display: 'block',
    transition: '0.3s'
}
export const sidebarHoverStyle =  {
    compose: sidebarAStyle,
    color: '#f1f1f1',
}
export const sidebarClosebtnStyle =  {
    position: 'absolute',
    top: 0,
    right: 25 ,
    fontSize: 36 ,
    marginLeft: 50
}

export  const openbtnStyle =  {
    composes: mainStyle,
    fontSize: 20,
    cursor: 'pointer',
    backgroundColor: '#111',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
}

export const openbtnHoverStyle =  {
    backgroundColor: '#444'
}



// .sidebar a:hover {
//     color: #f1f1f1;
// }

// .sidebar .closebtn {
//     position: absolute;
//     top: 0;
//     right: 25px;
//     font-size: 36px;
//     margin-left: 50px;
// }

// .openbtn {
//     font-size: 20px;
//     cursor: pointer;
//     background-color: #111;
//     color: white;
//     padding: 10px 15px;
//     border: none;
// }

// .openbtn:hover {
//     background-color: #444;
// }

// #main {
//     transition: margin-left .5s;
//     padding: 16px;
// }

// /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
// @media screen and (max-height: 450px) {
//     .sidebar {padding-top: 15px;}
//     .sidebar a {font-size: 18px;}
// }
// // </style>
// // </head>
// // <body>

// // <div id="mySidebar" class="sidebar">
// //   <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
// //   <a href="#">About</a>
// //   <a href="#">Services</a>
// //   <a href="#">Clients</a>
// //   <a href="#">Contact</a>
// // </div>

// // <div id="main">
// //   <button class="openbtn" onclick="openNav()">☰ Toggle Sidebar</button>  
// //   <h2>Collapsed Sidebar</h2>
// //   <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
// // </div>

// // <script>
// // function openNav() {
// //     document.getElementById("mySidebar").style.width = "250px";
// //     document.getElementById("main").style.marginLeft = "250px";
// // }

// // function closeNav() {
// //     document.getElementById("mySidebar").style.width = "0";
// //     document.getElementById("main").style.marginLeft= "0";
// // }
// // </script>
     
// // </body>
// // </html> 

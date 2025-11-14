# Responsive Design

## If you are using Codespaces <a name="codespaces"></a>

- Open your existing codespace (The one we used in the first four weeks of the module) [https://github.com/codespaces](https://github.com/codespaces).
- In the terminal enter

```
git clone https://github.com/CHT2520-web-prog/responsive-web-design
```

This will copy the contents of this repository into your codespace.

## If you are using XAMPP <a name="xampp"></a>

- Download this repository and unzip it. Move the folder into your _htdocs_ directory on XAMPP.

## Completing the practical work <a name="practical"></a>

- Open _index.html_ in a browser.
  - It doesn't have any styling, but make sure you can view the page.
  - In VS Code, take a moment to look through the HTML.
  - Notice that SVG has been used to create the 'hamburger' icon.

We will take a mobile first strategy and implement a responsive design for this web page.

- In a browser open the developer tools (right-click on the page and select inspect).
- Resize the web page to about 500px, mimicking how the page would look on a mobile device.

### Adding Some Basic Styles

- A CSS file has already been linked to the page. Find _css/style.css_ and add the following CSS rules:

```css
/*Basic properties*/

html {
  margin: 0;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(8, 47, 73);
  font-size: 1.1em;
  line-height: 1.5;
}
div,
ul,
header,
nav {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
```

- This simply sets up some basic styles for elements in the page.
- Refresh the page in the browser, make sure you can see the changes.

### Styling the Navigation Bar

- Next, add some rules to style the navigation bar

```css
/* CSS rules for the header*/
.header {
  background-color: rgb(8, 47, 73);
  color: white;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0.75em;
}
.nav-list {
  margin: 0;
}
.nav-opt {
  border-top: 1px solid white;
}
.nav-link {
  color: white;
  display: block;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
.menu-icon {
  cursor: pointer;
}
```

- Check these work.
- Most of this is fairly basic CSS. There are a couple of interesting bits:
  - By making `header-wrapper` a flexbox, its child elements (the logo and navigation icons) wrap onto the same line `justify-content:space-between` distributes these elements evenly.
  - The `cursor:pointer` is needed to make the navigation icons act like buttons. When the user moves their mouse over them a pointer icon is displayed.

### Styling the Main Content of the Page

Next, add some rules to style the main content of the page

```css
/* CSS rules for the page contents*/
.main-content {
  padding: 0.25em;
}
.content-list {
  padding: 0;
}
.content-opt {
  border-bottom: 1px solid rgb(8, 47, 73);
}
.content-link {
  display: block;
}
.poster {
  display: block;
  margin: auto;
}
```

- Check this works.
- Again, there isn't anything too complex here.
  - We want the image of the film poster to always sit in the centre of the page. This is achieved by making it a block level element and setting `margin:auto`.
  - Try re-sizing the browser window, the poster should always sit in the centre of the page.

### Hiding and Showing the Navigation

- Add the following `hide` class to the CSS.

```css
.hide {
  display: none;
}
```

- Add this class to the hamburger (the open) icon i.e.

```html
<div id="openIcon" class="hide menu-icon">
  <svg width="30px" viewBox="0 0 10 10" fill="none">
    <path d="M1 1h8M1 4h 8M1 7h8" stroke="#666" stroke-width="1" />
  </svg>
</div>
```

- Refresh the page, the hamburger icon should be hidden.

- At the bottom of the HTML page there is a link to a JavaScript file.
- Have a look at the JavaScript file.

  - Even if you've never used JavaScript before you should be able to make sense of this code.
  - The first three lines grab hold of HTML elements. See if you can find these elements in the HTML page.
  - The `toggleNav()` function will 'toggle' the `hide` class for these elements. So if an element is hidden it will be made visible and vice versa.

- The final thing we need to do to is run this function when the user clicks the close icon or the hamburger icon.
- Modify the HTML of the close icon to add an `onclick` handler that will call the `toggleNav()` function i.e.

```html
<div id="closeIcon" onclick="toggleNav()" class="menu-icon ">X</div>
```

- Test this works.

  - When the user clicks the 'X', the menu and close icon will be hidden and the hamburger icon will be made visible.

- Finally, add a click event handler to the hamburger icon so the user can make them visible again.

```html
<div onclick="toggleNav()" id="openIcon" class="hide menu-icon">
  <svg width="30px" viewBox="0 0 10 10" fill="none">
    <path d="M1 1h8M1 4h 8M1 7h8" stroke="#666" stroke-width="1" />
  </svg>
</div>
```

- Again test this works. The menu should fully work allowing the user to hide/show the navigation options.

### Making This Responsive

This design works fine for mobile users. For users with larger displays they don't need to hide/show the navigation and we can use a multi-column layout.

- Add the following media query to the CSS file.

```css
@media screen and (min-width: 640px) {
  .menu-icon {
    display: none;
  }
  .nav-list {
    display: block;
  }
  .nav-opt {
    display: inline-block;
    border-top: 0;
  }
}
```

- This simply hides the menu icons (we don't need them), makes sure the navigation options are visible, and wraps the navigation options onto the same line.
- Test this works.

We don't want the navigation options to appear below the logo, we want them to be horizontally aligned with the logo.

- Add a new div `desktop-header-wrapper`, make sure you add the `div` in the correct place i.e.

```html
<header class="header">
  <!--this is the new opening div-->
  <div class="desktop-header-wrapper">
    <div class="header-wrapper">
      <div class="logo">Amazing Film App</div>
      <div onclick="toggleNav()" id="openIcon" class="menu-icon">
        <svg width="30px" viewBox="0 0 10 10" fill="none">
          <path d="M1 1h8M1 4h 8M1 7h8" stroke="#666" stroke-width="1" />
        </svg>
      </div>
      <div id="closeIcon" onclick="toggleNav()" class="menu-icon hide">X</div>
    </div>
    <nav>
      <ul id="navList" class="nav-list">
        <li class="nav-opt"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-opt"><a class="nav-link" href="#">Add New film</a></li>
        <li class="nav-opt"><a class="nav-link" href="#">About</a></li>
      </ul>
    </nav>
    <!--the new div closes here-->
  </div>
</header>
```

- Add a new css rule for this `div` element, making sure it is inside the media query declaration.

```css
.desktop-header-wrapper {
  display: flex;
  justify-content: space-between;
}
```

- Save the changes and test in a browser.
  - The navigation options should be aligned to the right-hand side, inside the header.

### Adding a Two Columned Layout

- Add the following CSS rules. Again, make sure this is within the media query declaration.

```css
.main-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content-list-holder {
  width: 50%;
}
.content-list {
  margin: 0.25em;
}
.poster {
  float: right;
}
```

- This creates two columns in the main content area of the page.
  - The 'Recommended' text should be next to the film poster. We used the `float` property to achieve this.
  - The two lists of films should be side by side. We set their width to 50% and made their parent a flexbox.

### Limiting the Final Page Size

You should find that this works fine. However, when viewed on a wider display e.g. over 1000px everything gets a bit too spread out.

- Add another media query, this time for displaying at 1024 and larger.

```css
@media screen and (min-width: 1024px) {
  .desktop-header-wrapper,
  .main-content {
    width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
}
```

- Refresh the page, note how it fixes size at 1024 pixels.
  - The two 'container' divs are limited in size. The `auto` margin makes them always sit in the centre of the page.

### Testing Your Understanding

- Completing the above gets a basic design to work. There are many ways in which it can be improved.
- The navigation items would benefit from being given a bit more 'white space' and they need aligning properly with the logo text in both the mobile view and at wider screen sizes.
- The links in the main content of the page would benefit from styling e.g. changing the colour to fit with the rest of the design and adding a `hover` to give feedback to the user.
- The hamburger menu is grey. Can you change this to white.
- Instead of using an 'X' for the close, can you use an SVG close icon.

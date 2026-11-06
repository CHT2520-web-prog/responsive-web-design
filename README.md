# Responsive Design

- Open your existing codespace (The one we used in the first four weeks of the module) [https://github.com/codespaces](https://github.com/codespaces).
- In the terminal enter

```
git clone https://github.com/CHT2520-web-prog/responsive-web-design
```

This will copy the contents of this repository into your codespace.

- In terminal, navigate to the _responsive-web-design_ folder

```
cd responsive-web-design

```
- Start the web server
```
php -S 0.0.0.0:8000
```

- View the page in a browser.
- It doesn't have any styling, but make sure you can view the page.
- In VS Code, take a moment to look through the HTML.
- Notice that SVG has been used to create the 'hamburger' icon.

We will take a mobile first strategy and implement a responsive design for this web page.

- In the browser open the developer tools (right-click on the page and select inspect).
- Resize the web page to about 500px, mimicking how the page would look on a mobile device.


### Adding Some Basic Styles

- A CSS file has already been linked to the page. Find _css/style.css_ and add the following CSS rules:

```css
/*Basic properties*/


*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    margin: 0;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(8, 47, 73);
    font-size: 1.1rem;
    line-height: 1.5;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

button {
    font: inherit;
}
```

- This simply sets up some basic styles for elements in the page.
- Refresh the page in the browser, make sure you can see the changes.

### Styling the Navigation Bar

- Next, add some rules to style the navigation bar

```css

/* ---------- Header and mobile navigation ---------- */

.header {
    background-color: rgb(8, 47, 73);
    color: white;
}

/* On mobile, the logo and menu controls share a row. */
.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
}

.logo {
    font-weight: bold;
}

.menu-icon {
    align-items: center;
    justify-content: center;
    min-width: 2.75rem;
    min-height: 2.75rem;
    padding: 0.4rem;
    border: 0;
    background: transparent;
    color: white;
    cursor: pointer;
}

.nav-list {
    margin: 0;
    padding: 0;
}

.nav-opt {
    border-top: 1px solid rgba(255, 255, 255, 0.35);
}

.nav-link {
    display: block;
    padding: 0.75rem 1rem;
    color: white;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.15);
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
    padding: 1rem;
}

.content-list {
    margin: 0.25rem 0;
    padding: 0;
}

.content-opt {
    border-bottom: 1px solid rgb(8, 47, 73);
}

.content-link {
    display: block;
    padding: 0.65rem 0.25rem;
    color: rgb(8, 47, 73);
}

.content-link:hover {
    background-color: rgba(8, 47, 73, 0.08);
    text-decoration: underline;
}

.content-link:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
}

/* Keep the film poster within the available screen width. */
.poster {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1rem auto;
}

```

- Check this works.
- Again, there isn't anything too complex here.
  - We want the image of the film poster to always sit in the centre of the page. This is achieved by making it a block level element and setting `margin:auto`.
  - Try re-sizing the browser window, the poster should always sit in the centre of the page.

### Hiding and Showing the Navigation

- Add the following `hide` class to the CSS (after the basic properties block)

```css
/* Utility classes */
.hide {
  display: none;
}
```

- Add this class to the hamburger (the open) icon i.e.

```html
<button id="openIcon" class="hide menu-icon">
    <svg width="30px" viewBox="0 0 10 10" fill="none">
        <path d='M1 1h8M1 4h 8M1 7h8' stroke='#666' stroke-width='1' />
    </svg>
</button>
```

- Refresh the page, the hamburger icon should be hidden.

- At the bottom of the HTML page there is a link to a JavaScript file.
- Have a look at the JavaScript file.
  - Even if you've never used JavaScript before you should be able to make sense of this code.
  - The first three lines grab hold of HTML elements. See if you can find these elements in the HTML page.
  - We then specify event listeners for the `openIcon` and `closeIcon` elements. When these page elements are clicked, the `toggleNav()` function will be run. 
  - The `toggleNav()` function will 'toggle' the `hide` class for these elements. So if an element is hidden it will be made visible and vice versa.

- Test this works.

  - When the user clicks the 'X', the menu and close icon will be hidden and the hamburger icon will be made visible. When the user clicks the hamburger, the menu will be made visible. 

### Making This Responsive

This design works fine for mobile users. For users with larger displays they don't need to hide/show the navigation and we can use a multi-column layout.

- Add the following media query to the CSS file.

```css

/* ---------- Tablet and desktop layout ---------- */

@media screen and (min-width: 640px) {



    .header-wrapper {
        padding: 0.75rem 1rem;
    }

    /* The mobile menu controls are not needed at this width. */
    .menu-icon {
        display: none;
    }

    /*
   * Display navigation links in a horizontal row.
   * The desktop rule also overrides .hide if JavaScript has
   * left that class on the navigation list.
   */
    .nav-list {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 0 1rem;
    }

    .nav-opt {
        border: 0;
    }

    .nav-link {
        display: inline-block;
        padding: 0.5rem 0;
    }

    .nav-link:hover {
        background-color: transparent;
        text-decoration: underline;
    }


}
```

- This simply hides the menu icons (we don't need them), makes sure the navigation options are visible, and wraps the navigation options onto the same line.
- Test this works.

We don't want the navigation options to appear below the logo, we want them to be horizontally aligned with the logo.

- Add a new div `desktop-header-wrapper`, make sure you add the `div` in the correct place i.e.

```html<header class="header">
        <!-- This is the new <div> elements -->
        <div class="desktop-header-wrapper">
            <div class="header-wrapper">
                <div class="logo">
                    Amazing Film App
                </div>
                <button id="openIcon" class="hide menu-icon">
                    <svg width="30px" viewBox="0 0 10 10" fill="none">
                        <path d='M1 1h8M1 4h 8M1 7h8' stroke='#666' stroke-width='1' />
                    </svg>
                </button>
                <button id="closeIcon" class="menu-icon ">
                    X
                </button>
            </div>
            <nav>
                <ul id="navList" class="nav-list">
                    <li class="nav-opt"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-opt"><a class="nav-link" href="#">Add New film</a></li>
                    <li class="nav-opt"><a class="nav-link" href="#">About</a></li>
                </ul>
            </nav>
        <!-- The new <div> element closes here -->
        </div>
    </header>
```

- Add a new css rule for this `div` element, making sure it is inside the media query declaration.

```css
/* The outer wrapper aligns the logo area and navigation horizontally. */
.desktop-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

- Save the changes and test in a browser.
  - The navigation options should be aligned to the right-hand side, inside the header.

### Styling the Recommended Film Section

- Add the following CSS rules. Again, make sure this is within the media query declaration.
```css

/* Styling the recommended film section
.recommended-film {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.recommended-film p {
    flex: 2;
    margin-top: 0;
}

.poster {
    flex: 1;
    max-width: 200px;
    height: auto;
    margin-top: 0;
}
```
- This creates a two-columned layout, placing the poster next to the film description. 

### Styling the Films Lists

- Add the following CSS rules. Again, make sure this is within the media query declaration.

```css

/* Two-column layout for the film lists. */
.main-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1rem;
}

.content-list-holder {
    flex: 1 1 calc(50% - 1rem);
    min-width: 0;
}

.content-list {
    margin: 0.25rem;
}
```

- This also creates two columns.
  - Again, we use the flexbox, but we want the two columns to always be the same size, we calculate their width as 50% of their containing element, minus 1rem. 

### Limiting the Final Page Size

You should find that this works fine. However, when viewed on a wider display e.g. over 1000px everything gets a bit too spread out.

- Add another media query, this time for displaying at 1024 and larger.

```css
@media screen and (min-width: 1024px) {
    .desktop-header-wrapper,
    .main-content {
        width: 100%;
        max-width: 1024px;
        margin-right: auto;
        margin-left: auto;
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

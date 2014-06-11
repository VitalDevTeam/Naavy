# Vital Nav

A simple responsive nav solution. Detects touch support allowing you to serve up hover-based actions to mouse users and touch-based actions for finger users.

**[Demo &rarr;](http://vitaldevteam.github.io/vital-nav/)**

## Usage

The plugin assumes a standard HTML structure for a menu:

```html
<nav id="main-menu">
    <ul>
        <li><a href="#">Top Level</a>
            <ul>
                <li><a href="#">Secondary 1</a></li>
                <li><a href="#">Secondary 2</a>
                    <ul>
                        <li><a href="#">Tertiary 1</a></li>
                        <li><a href="#">Tertiary 2</a>
                            <ul>
                                <li><a href="#">Quaternary 1</a></li>
                                <li><a href="#">Quaternary 2</a></li>
                                <li><a href="#">Quaternary 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Tertiary 3</a>
                    </ul>
                </li>
                <li><a href="#">Secondary 3</a></li>
            </ul>
        </li>
    </ul>
</nav>
```

Simply initialize the plugin on the menu's parent:

```javascript
$('#main-menu').vitalNav();
```

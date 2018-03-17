# Bootstrap-Cookie-Alert
A simple, good looking cookie alert build for Bootstrap 4. No depedency.

[Demo](https://wruczek.github.io/Bootstrap-Cookie-Alert/demo)

I unfortunately dont remeber the source of the cubes pattern :(
If someone know, please email me or create an issue. I would love to credit the author.


## How to use
#### 1. In the `head` of your document, include `cookiealert.css` **after Bootstrap**.
```html
<link rel="stylesheet" href="cookiealert.css">
```

#### 2. Add the html markup:
```html
<!-- COOKIES -->
<div class="alert alert-dismissible text-center cookiealert" role="alert">
    <div class="cookiealert-container">
        <b>Do you like cookies?</b> &#x1F36A; We use cookies to ensure you get the best experience on our website. <a href="http://cookiesandyou.com/" target="_blank">Learn more</a>

        <button type="button" class="btn btn-primary btn-sm acceptcookies" aria-label="Close">
            I agree
        </button>
    </div>
</div>
<!-- /COOKIES -->
```

#### 3. Include the JavaScript after the html markup
```html
<script src="cookiealert-standalone.js"></script>
```

### Take a look at [`demo.html`](https://github.com/Wruczek/Bootstrap-Cookie-Alert/blob/gh-pages/demo.html) for a working example

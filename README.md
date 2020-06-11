# Bootstrap-Cookie-Alert
A simple, good looking cookie alert for Bootstrap. No dependencies required.<br>
**We recommend using Bootstrap 4**, but Boostrap 3 should work fine as well.

[**Demo**](https://wruczek.github.io/Bootstrap-Cookie-Alert/demo) (with Bootstrap 4)

I unfortunately dont remeber the source of the cubes pattern :(
If someone know, please email me or create an issue. I would love to credit the author.

## npm package
`npm i bootstrap-cookie-alert`<br>
I try to keep it up-to-date. Let me know if I forget to release an update.

## How to use
#### 1. In the `head` of your document, include `cookiealert.css` **after Bootstrap**.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.css">
```

#### 2. Add the html markup:
```html
<!-- START Bootstrap-Cookie-Alert -->
<div class="alert text-center cookiealert" role="alert">
    <b>Do you like cookies?</b> &#x1F36A; We use cookies to ensure you get the best experience on our website. <a href="https://cookiesandyou.com/" target="_blank">Learn more</a>

    <button type="button" class="btn btn-primary btn-sm acceptcookies">
        I agree
    </button>
</div>
<!-- END Bootstrap-Cookie-Alert -->
```

#### 3. Include the JavaScript after the html markup
```html
<script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>
```

### Take a look at [`demo.html`](https://github.com/Wruczek/Bootstrap-Cookie-Alert/blob/gh-pages/demo.html) for a working example


### Accept event
If you need to, you can listen for the `cookieAlertAccept` event to get notified when the user accepts the cookies.

```js
window.addEventListener("cookieAlertAccept", function() {
    alert("cookies accepted")
})
```

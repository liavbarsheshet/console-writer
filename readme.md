# > Console Writer\_

Create console text typing animation from any element.

## Installation

1. Download JS library.
   ```
   > Download js file from git.
   > Add <script src="/[YOUR_PATH]/console-writer" />.
   > # OR #
   >
   ```
2. Add keyframe to your stylesheet
   ```css
   @keyframes console-writer-blink-animation {
     0% {
       opacity: 0;
     }
     49% {
       opacity: 0;
     }
     50% {
       opacity: 1;
     }
   }
   ```

## Usage

#### Create Element

```html
<div id="demo-element">Hello World!</div>
```

#### ConsoleWriter(element,[options],[callback]){...}

_Creates console writer animation_.

**element** _{Element|string}_ - Selector or an element.
**[options]** _{object}_ - Animation options.
**[options.speed]** _{number}_ - Typing speed in milliseconds.
**[options.delay]** _{number}_ - Animation delay in milliseconds.

#### Start Animation([callback]){...}

_Starts a console writer animation_

**[callback]** _{function}_ - Callback when animation ends.

```js
const element = document.querySelector(`#demo-element`);
const animation = ConsoleWriter(element, { speed: 500, delay: 0 });
animation.start();

// OR

const animation = ConsoleWriter(`#demo-element`, { speed: 500, delay: 0 });
animation.start();

// OR

ConsoleWriter(`#demo-element`, { speed: 500, delay: 0 }).start();
```

#### Finish Animation

_Removes the blinking "\_" from text.
**==Can be used to make multi rows animation==**._

```js
const element = document.querySelector(`#demo-element`);
const animation = ConsoleWriter(element, { speed: 500, delay: 0 });
animation.start(() => {
  // Animation was completed
  animation.finish();
  // Start another line animation
});
```

#### Start Async

_Promises animation chain._

```js
const element = document.querySelector(`#demo-element`);
const animation = ConsoleWriter(element, { speed: 500, delay: 0 });
await animation.start()
.then(() => {
  animation.finish();
})
.then()...
```

## Author

[Liav Barsheshet, LBDevelopments](https://github.com/liavbarsheshet)

## License

[MIT](LICENSE)

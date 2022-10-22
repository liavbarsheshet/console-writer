/*!
 * console-writer - Creates console writing animation.
 *
 * [console-writer.js]
 *
 * Author: Liav Barsheshet, LBDevelopments <liavbarsheshet@gmail.com, liavb@campus.technion.ac.il>
 * Website: https://www.liavbarsheshet.com
 * Copyright(c) 2020-2022 Liav Barsheshet <LBDevelopments>
 * MIT Licensed
 */

/**
 * Create console writer animation.
 * @param {Element|string} element Selector or an element.
 * @param {object} options Animation options.
 * @param {number} [options.speed] Typing speed in milliseconds.
 * @param {number} [options.delay] Animation delay in milliseconds.
 */
function consoleWriter(element, options = {}) {
  if (typeof element !== "string" && !(element instanceof Element)) return;
  if (typeof element === "string") element = document.querySelector(element);
  if (!element) return;

  if (!options || typeof options !== "object") options = {};

  options.speed = options.speed > 0 ? options.speed : 500;
  options.delay = options.delay >= 0 ? options.delay : 0;

  const text = element.innerText;
  element.innerHTML = "";

  const under_score = document.createElement("span");
  under_score.style.animation = "console-writer-blink-animation 0.8s infinite";
  under_score.innerHTML = "_";

  const command_start = document.createElement("span");
  command_start.innerHTML = "> ";

  element.appendChild(command_start);
  element.appendChild(under_score);

  let started = false;

  /**
   * Starts the animation.
   * @param {Function} [callback] Callback when animation ends.
   */
  const start = (callback = () => {}) => {
    if (started) return;
    started = true;

    setTimeout(() => {
      for (let i = 0; i < text.length; ++i) {
        const char = text[i];
        const tmp = document.createElement("span");

        tmp.innerHTML = char;

        setTimeout(() => {
          element.insertBefore(tmp, under_score);
          if (i === text.length - 1) callback();
        }, options.speed * i);
      }
    }, options.delay);
  };

  const startAsync = () => {
    return new Promise((resolve, reject) => {
      if (started) return reject(new Error("Animation already started."));
      start(() => {
        resolve();
      });
    });
  };

  /**
   * Finishing the animation by removing the blinking underscore.
   */
  const finish = () => {
    if (!started) return;
    element.removeChild(under_score);
  };

  return {
    start: start,
    finish: finish,
    startAsync: startAsync,
  };
}

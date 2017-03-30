;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-username" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M634.784 540.544c94.976-45.888 160.864-142.912 160.864-255.328 0-156.384-127.264-283.616-283.648-283.616s-283.648 127.232-283.648 283.616c0 112.416 65.856 209.44 160.864 255.296-195.84 55.36-340.32 239.072-340.32 457.248l0 24.608 46.304 0 0-24.608c0-236.192 186.976-428.384 416.8-428.384 229.792 0 416.8 192.16 416.8 428.384l0 24.608 46.304 0 0-24.608c0-218.144-144.48-401.888-340.32-457.216zM274.656 285.248c0-130.848 106.464-237.312 237.344-237.312s237.344 106.464 237.344 237.312c0 130.88-106.464 237.344-237.344 237.344s-237.344-106.464-237.344-237.344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanzhengma" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M911.50488 305.897945 708.86774 510.574534c-29.967522 30.207999-72.249511 39.764656-110.411669 29.540803l272.520767-275.162944c22.434965-22.555715 22.434965-59.183937 0-81.841983l-40.504506-40.894386c-22.435988-22.655999-58.740846-22.655999-81.153298 0L476.847385 417.277662c-10.124592-38.530548-0.633427-81.174787 29.311583-111.379717L708.86774 101.273545c44.727691-45.26595 117.331265-45.26595 162.109098 0l40.527019 40.941458C956.305225 187.426717 956.305225 260.689301 911.50488 305.897945L911.50488 305.897945zM597.36318 418.918022c11.141758 11.30344 11.141758 29.595039 0 40.949644L455.481775 603.098811c-11.224646 11.302417-29.382191 11.302417-40.581254 0-11.197016-11.302417-11.197016-29.643134 0-40.944528l141.882428-143.236262C568.001455 407.615605 586.194816 407.615605 597.36318 418.918022L597.36318 418.918022zM141.311423 837.983399l40.529065 40.946574c22.441105 22.603811 58.716286 22.603811 81.104179 0l272.495184-275.16192c10.072403 38.530548 0.585331 81.223906-29.310559 111.428835L303.44508 919.822312c-44.748157 45.263903-117.380384 45.263903-162.158217 0l-40.551578-40.892339c-44.775786-45.209668-44.775786-118.525464 0-163.783227l202.685235-204.572212c29.919427-30.262234 72.202439-39.766702 110.385063-29.643134L141.311423 756.094344C118.924553 778.750343 118.924553 815.379589 141.311423 837.983399L141.311423 837.983399zM141.311423 837.983399"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-password-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M916.928 420.437333H835.413333v-104.362666h-0.384C831.061333 141.589333 687.424 0 512 0 336.597333 0 192.917333 141.589333 188.949333 316.074667H188.586667v104.341333H107.093333a95.893333 95.893333 0 0 0-95.786666 95.786667V928.213333A95.872 95.872 0 0 0 107.093333 1024h809.856a95.872 95.872 0 0 0 95.765334-95.765333V516.202667a95.893333 95.893333 0 0 0-95.786667-95.765334M273.92 333.461333l0.341333-15.445333C277.184 189.717333 383.829333 85.333333 512 85.333333s234.816 104.384 237.738667 232.682667l0.362666 12.906667v89.493333H273.92v-86.954667z m662.144 594.773334a19.136 19.136 0 0 1-19.114667 19.136H107.093333a19.178667 19.178667 0 0 1-19.157333-19.136V516.202667c0-10.581333 8.597333-19.157333 19.157333-19.157334h809.834667c10.56 0 19.114667 8.576 19.114667 19.157334v412.032z" fill="#8a8a8a" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
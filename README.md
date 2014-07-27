
<!-- TITLE/ -->

# Arrange Keys

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/arrangekeys.png?branch=master)](http://travis-ci.org/bevry/arrangekeys "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/arrangekeys.png)](https://npmjs.org/package/arrangekeys "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/arrangekeys.png?theme=shields.io)](https://david-dm.org/bevry/arrangekeys)
[![Development Dependency Status](https://david-dm.org/bevry/arrangekeys/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/arrangekeys#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Returns a copy of a JavaScript object with the keys arranged in a specified order. Useful for formatting JSON files.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('arrangekeys')`
- Install: `npm install --save arrangekeys`

<!-- /INSTALL -->


## Usage

``` javascript
var data = {
	a: 1,
	b: 2,
	c: 3,
	z: 4
}
console.log(
	require('arrangekeys')(data, 'b c a')
) /* {
	b: 2,
	c: 3,
	a: 1,
	z: 4
} */
```


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/arrangekeys/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/arrangekeys/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

No contributors yet! Will you be the first?
[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/arrangekeys/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2014+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->



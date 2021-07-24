/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView5 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Data Subject Request</h1>
        <iframe src="https://privacyportal.cookiepro.com/webform/efcf4546-43e3-47c4-aba6-d0b6363a2989/948bf666-fd0d-42ad-b895-668fcef5312c" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="no" seamless="seamless" height="auto" width="100%"></iframe>
      </div>

    `;
  }
}

window.customElements.define('my-view5', MyView5);

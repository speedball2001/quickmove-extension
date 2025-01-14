/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch */

async function load() {
  document.getElementById("legacy-shortcuts-form").addEventListener("change", (event) => {
    browser.runtime.sendMessage({ action: "setupShortcuts", enable: (event.target.value == "legacy") });
  });

  document.getElementById("openOptions").addEventListener("click", (event) => {
    browser.runtime.openOptionsPage();
    event.preventDefault();
  });
}

window.addEventListener("DOMContentLoaded", load, { once: true });

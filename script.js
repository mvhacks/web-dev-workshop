import insertBookmarks from "./bookmarkInsert.js";
import navbar from "./navbar.js";
import changeTheme from "./changeTheme.js";

window.onload = function () {
    insertBookmarks();
    navbar();
    changeTheme();
};
import * as md5 from "blueimp-md5";
import {hideMessage, showMessage} from "../dialog/message";
import {Constants} from "../constants";
import {fetchPost} from "../util/fetch";
import {repos} from "./repos";
import {confirmDialog} from "../dialog/confirmDialog";
import {needSubscribe} from "../util/needSubscribe";
import {syncGuide} from "../sync/syncGuide";
import {hasClosestByClassName} from "../protyle/util/hasClosest";
import {getEventName} from "../protyle/util/compatibility";
import {processSync} from "../dialog/processSystem";

export const account = {
    element: undefined as Element,
    genHTML: () => {
        let sponsor = "https://ld246.com/sponsor";
        if ("zh_CN" !== window.siyuan.config.lang) {
            sponsor = "https://opencollective.com/b3log";
        }
        const payHTML = "<a href=\"" + sponsor + `" target="_blank" class="b3-chip b3-chip--secondary">
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='#ffe43c' d='M6.4 0h19.2c4.268 0 6.4 2.132 6.4 6.4v19.2c0 4.268-2.132 6.4-6.4 6.4h-19.2c-4.268 0-6.4-2.132-6.4-6.4v-19.2c0-4.268 2.135-6.4 6.4-6.4z'></path> <path fill='#00f5d4' d='M25.6 0h-8.903c-7.762 1.894-14.043 7.579-16.697 15.113v10.487c0 3.533 2.867 6.4 6.4 6.4h19.2c3.533 0 6.4-2.867 6.4-6.4v-19.2c0-3.537-2.863-6.4-6.4-6.4z'></path> <path fill='#01beff' d='M25.6 0h-0.119c-12.739 2.754-20.833 15.316-18.079 28.054 0.293 1.35 0.702 2.667 1.224 3.946h16.974c3.533 0 6.4-2.867 6.4-6.4v-19.2c0-3.537-2.863-6.4-6.4-6.4z'></path> <path fill='#9a5ce5' d='M31.005 2.966c-0.457-0.722-1.060-1.353-1.784-1.849-8.342 3.865-13.683 12.223-13.679 21.416-0.003 3.256 0.67 6.481 1.978 9.463h8.081c0.602 0 1.185-0.084 1.736-0.238-2.1-3.189-3.401-7.624-3.401-12.526 0-7.337 2.921-13.628 7.070-16.266z'></path> <path fill='#f15bb5' d='M32 25.6v-19.2c0-1.234-0.354-2.419-0.998-3.43-4.149 2.638-7.067 8.928-7.067 16.266 0 4.902 1.301 9.334 3.401 12.526 2.693-0.757 4.664-3.231 4.664-6.162z'></path> <path fill='#fff' opacity='0.2' d='M26.972 22.415c-2.889 0.815-4.297 2.21-6.281 3.182 1.552 0.348 3.105 0.461 4.902 0.461 2.644 0 5.363-1.449 6.406-2.519v-1.085c-1.598-0.399-2.664-0.705-5.028-0.039zM4.773 21.612c-0.003 0-0.006-0.003-0.006-0.003-1.726-0.863-3.382-1.205-4.767-1.301v2.487c0.779-0.341 2.396-0.921 4.773-1.182zM17.158 26.599c1.472-0.158 2.57-0.531 3.533-1.002-1.063-0.238-2.126-0.583-3.269-1.079-2.767-1.205-5.63-3.092-10.491-3.034-0.779 0.010-1.495 0.058-2.158 0.132 4.503 2.248 7.882 5.463 12.384 4.983z'></path> <path fill='#fff' opacity='0.2' d='M20.691 25.594c-0.963 0.47-2.061 0.844-3.533 1.002-4.503 0.483-7.882-2.731-12.381-4.983-2.38 0.261-3.994 0.841-4.773 1.179v2.809c0 4.268 2.132 6.4 6.4 6.4h19.197c4.268 0 6.4-2.132 6.4-6.4v-2.065c-1.044 1.069-3.762 2.519-6.406 2.519-1.797 0-3.35-0.113-4.902-0.461z'></path> <path fill='#fff' opacity='0.5' d='M3.479 19.123c0 0.334 0.271 0.606 0.606 0.606s0.606-0.271 0.606-0.606v0c0-0.334-0.271-0.606-0.606-0.606s-0.606 0.271-0.606 0.606v0z'></path> <path fill='#fff' opacity='0.5' d='M29.027 14.266c0 0.334 0.271 0.606 0.606 0.606s0.606-0.271 0.606-0.606v0c0-0.334-0.271-0.606-0.606-0.606s-0.606 0.271-0.606 0.606v0z'></path> <path fill='#fff' d='M9.904 1.688c0 0.167 0.136 0.303 0.303 0.303s0.303-0.136 0.303-0.303v0c0-0.167-0.136-0.303-0.303-0.303s-0.303 0.136-0.303 0.303v0z'></path> <path fill='#fff' d='M2.673 10.468c0 0.167 0.136 0.303 0.303 0.303s0.303-0.136 0.303-0.303v0c0-0.167-0.136-0.303-0.303-0.303s-0.303 0.136-0.303 0.303v0z'></path> <path fill='#fff' opacity='0.6' d='M30.702 9.376c0 0.167 0.136 0.303 0.303 0.303s0.303-0.136 0.303-0.303v0c0-0.167-0.136-0.303-0.303-0.303s-0.303 0.136-0.303 0.303v0z'></path> <path fill='#fff' opacity='0.8' d='M29.236 20.881c0 0.276 0.224 0.499 0.499 0.499s0.499-0.224 0.499-0.499v0c0-0.276-0.224-0.499-0.499-0.499s-0.499 0.224-0.499 0.499v0z'></path> <path fill='#fff' opacity='0.8' d='M15.38 1.591c0.047 0.016 0.101 0.026 0.158 0.026 0.276 0 0.499-0.224 0.499-0.499 0-0.219-0.141-0.406-0.338-0.473l-0.004-0.001c-0.047-0.016-0.101-0.026-0.158-0.026-0.276 0-0.499 0.224-0.499 0.499 0 0.219 0.141 0.406 0.338 0.473l0.004 0.001z'></path> <path fill='#ffdeeb' d='M25.732 8.268c-2.393-2.371-6.249-2.371-8.642 0l-1.089 1.085-1.079-1.089c-2.38-2.39-6.249-2.393-8.639-0.013s-2.393 6.249-0.013 8.639l2.158 2.158 6.474 6.464c0.596 0.593 1.562 0.593 2.158 0l6.474-6.464 2.193-2.158c2.384-2.383 2.384-6.242 0.003-8.622z'></path> <path fill='#fff' d='M17.081 8.268l-1.079 1.085-1.079-1.089c-2.38-2.39-6.249-2.393-8.639-0.013s-2.393 6.249-0.013 8.639l2.158 2.158 2.548 2.487c4.097-1.044 7.627-3.646 9.837-7.254 1.424-2.271 2.284-4.848 2.503-7.518-2.193-0.715-4.606-0.132-6.236 1.504z'></path> </svg>
    ${window.siyuan.languages.sponsor}
</a>
<div class="fn__hr--b"></div>
<a class="b3-button b3-button--outline" style="min-width: 214px" href="https://ld246.com/subscribe/siyuan" target="_blank">
    <span>
        <div class="fn__hr"></div>
        <span class="ft__smaller">${window.siyuan.languages.account4}</span>
        <div class="fn__hr--small"></div>
        <span class="ft__smaller ft__on-surface">${window.siyuan.languages.account1}</span>
        <div class="fn__hr"></div>
    </span>
</a>
<div class="fn__hr--b"></div>
${window.siyuan.languages.account8}
<div class="fn__hr"></div>
${window.siyuan.languages.account2}
<div><a href="https://b3log.org/siyuan/pricing.html" target="_blank">${window.siyuan.languages.account7}</a></div>
<div class="fn__hr--b"></div>
<div class="fn__hr--b"></div>`;
        if (window.siyuan.user) {
            let userTitlesHTML = "";
            if (window.siyuan.user.userTitles.length > 0) {
                userTitlesHTML = '<div class="b3-chips" style="position: absolute">';
                window.siyuan.user.userTitles.forEach((item) => {
                    userTitlesHTML += `<div class="b3-chip b3-chip--middle">${item.icon} ${item.name}</div>`;
                });
                userTitlesHTML += "</div>";
            }
            let subscriptionHTML = payHTML;
            let activeSubscriptionHTML = `<div class="fn__hr"></div>
<div class="b3-form__icon fn__block">
   <svg class="ft__secondary b3-form__icon-icon"><use xlink:href="#iconVIP"></use></svg>
   <input class="b3-text-field fn__block b3-form__icon-input" style="padding-right: 44px;" placeholder="${window.siyuan.languages.activationCodePlaceholder}">
   <button id="activationCode" class="b3-button b3-button--text" style="position: absolute;right: 0;top: 0;">${window.siyuan.languages.confirm}</button>
</div>`;
            if (window.siyuan.user.userSiYuanProExpireTime === -1) {
                activeSubscriptionHTML = "";
                subscriptionHTML = `<div class="b3-chip b3-chip--secondary">${Constants.SIYUAN_IMAGE_VIP}${window.siyuan.languages.account12}</div>`;
            } else if (window.siyuan.user.userSiYuanProExpireTime > 0) {
                if (window.siyuan.user.userSiYuanSubscriptionPlan === 2) {
                    subscriptionHTML = `<div class="b3-chip b3-chip--primary"><svg><use xlink:href="#iconVIP"></use></svg>${window.siyuan.languages.account3}</div>
<div class="fn__hr"></div>
<div class="ft__on-surface ft__smaller">${window.siyuan.languages.account6} ${Math.max(0, Math.floor((window.siyuan.user.userSiYuanProExpireTime - new Date().getTime()) / 1000 / 60 / 60 / 24))} ${window.siyuan.languages.day} ${window.siyuan.languages.clickMeToRenew}</div>
<div class="fn__hr"></div>
${window.siyuan.languages.account8}`;
                } else {
                    subscriptionHTML = `<div class="b3-chip b3-chip--primary"><svg class="ft__secondary"><use xlink:href="#iconVIP"></use></svg>${window.siyuan.languages.account10}</div><div class="fn__hr"></div>
<div class="ft__on-surface ft__smaller">${window.siyuan.languages.account6} ${Math.max(0, Math.floor((window.siyuan.user.userSiYuanProExpireTime - new Date().getTime()) / 1000 / 60 / 60 / 24))} ${window.siyuan.languages.day} ${window.siyuan.languages.clickMeToRenew}</div>`;
                }
            }
            return `<div class="fn__flex config-account">
<div class="config-account__center">
    <div class="config-account__bg">
        <div class="config-account__cover" style="background-image: url(${window.siyuan.user.userHomeBImgURL})"></div>
        <a href="https://ld246.com/settings/avatar" class="config-account__avatar" style="background-image: url(${window.siyuan.user.userAvatarURL})" target="_blank"></a>
        <h1 class="config-account__name">
            <a target="_blank" class="fn__a" href="https://ld246.com/member/${window.siyuan.user.userName}">${window.siyuan.user.userName}</a>
        </h1>
        ${userTitlesHTML}
    </div>
    <div class="config-account__info">
        <div class="fn__flex">
            <a class="b3-button b3-button--text" href="https://ld246.com/settings" target="_blank">${window.siyuan.languages.accountManage}</a>
            <span class="fn__space"></span>
            <button class="b3-button b3-button--cancel" id="logout">
                ${window.siyuan.languages.logout}
            </button>
            <span class="fn__space"></span>
            <button class="b3-button b3-button--cancel${window.siyuan.config.system.container === "ios" ? "" : " fn__none"}" id="deactivateUser">
                ${window.siyuan.languages.deactivateUser}
            </button>
            <span class="fn__flex-1"></span>
            <button class="b3-button b3-button--cancel b3-tooltips b3-tooltips__n" id="refresh" aria-label="${window.siyuan.languages.refresh}">
                <svg><use xlink:href="#iconRefresh"></use></svg>
            </button>
        </div>
        <div class="fn__hr--b"></div>
        <div class="fn__flex">
            <label>
                ${window.siyuan.languages.accountDisplayTitle}
                <input class="b3-switch fn__flex-center" id="displayTitle" type="checkbox"${window.siyuan.config.account.displayTitle ? " checked" : ""}/>
            </label>
            <div class="fn__flex-1"></div>
            <label>
                ${window.siyuan.languages.accountDisplayVIP}
                <input class="b3-switch fn__flex-center" id="displayVIP" type="checkbox"${window.siyuan.config.account.displayVIP ? " checked" : ""}/>
            </label>
        </div>
    </div>
</div>
<div class="config-account__center config-account__center--text${window.siyuan.config.system.container === "ios" ? " fn__none" : ""}">
    <div class="fn__flex-1 fn__hr"></div>
    <div class="ft__center">${subscriptionHTML}</div>
    <div class="fn__flex-1 fn__hr"></div>
    ${activeSubscriptionHTML}
</div></div>`;
        }
        return `<div class="fn__flex config-account">
<div class="config-account__center config-account__center--text${window.siyuan.config.system.container === "ios" ? " fn__none" : ""}">
    <div class="ft__center">
        ${payHTML}
        <div class="fn__hr--b"></div><div class="fn__hr--b"></div>
    </div>
</div>`;
    },
    bindEvent: (element: Element) => {
        const agreeLoginElement = element.querySelector("#agreeLogin") as HTMLInputElement;
        const userNameElement = element.querySelector("#userName") as HTMLInputElement;

        const userPasswordElement = element.querySelector("#userPassword") as HTMLInputElement;
        const captchaImgElement = element.querySelector("#captchaImg") as HTMLInputElement;
        const captchaElement = element.querySelector("#captcha") as HTMLInputElement;
        const twofactorAuthCodeElement = element.querySelector("#twofactorAuthCode") as HTMLInputElement;
        const loginBtnElement = element.querySelector("#login") as HTMLButtonElement;
        const login2BtnElement = element.querySelector("#login2") as HTMLButtonElement;
    },
    _afterLogin(userResponse: IWebSocketData, element: Element) {
        window.siyuan.user = userResponse.data;
        processSync();
        if (element.classList.contains("account") && !needSubscribe("")) {
            const dialogElement = hasClosestByClassName(element, "b3-dialog--open");
            if (dialogElement) {
                window.siyuan.dialogs.find((item) => {
                    if (item.element.isSameNode(dialogElement)) {
                        item.destroy();
                        return true;
                    }
                });
                syncGuide();
                return;
            }
        }
        element.innerHTML = account.genHTML();
        account.bindEvent(element);
        account.onSetaccount();
    },
    onSetaccount() {
        if (repos.element) {
            repos.element.innerHTML = "";
        }
        if (window.siyuan.config.system.container === "ios") {
            return;
        }
        let html = "";
        if (window.siyuan.config.account.displayVIP && window.siyuan.user) {
            if (window.siyuan.user.userSiYuanProExpireTime === -1) {
                html = `<div class="toolbar__item b3-tooltips b3-tooltips__sw" aria-label="${window.siyuan.languages.account12}">${Constants.SIYUAN_IMAGE_VIP}</div>`;
            } else if (window.siyuan.user.userSiYuanProExpireTime > 0) {
                if (window.siyuan.user.userSiYuanSubscriptionPlan === 2) {
                    html = `<div class="toolbar__item b3-tooltips b3-tooltips__sw" aria-label="${window.siyuan.languages.account3}"><svg><use xlink:href="#iconVIP"></use></svg></div>`;
                } else {
                    html = `<div class="toolbar__item b3-tooltips b3-tooltips__sw" aria-label="${window.siyuan.languages.account10}"><svg class="ft__secondary"><use xlink:href="#iconVIP"></use></svg></div>`;
                }
            }
        }
        if (!window.siyuan.user || (window.siyuan.user && window.siyuan.user.userSiYuanSubscriptionStatus === -1)) {
            html = `<div class="toolbar__item b3-tooltips b3-tooltips__sw" aria-label="${window.siyuan.languages.freeSub}"><svg class="ft__error"><use xlink:href="#iconVIP"></use></svg></div>`;
        }
        if (window.siyuan.config.account.displayTitle && window.siyuan.user) {
            window.siyuan.user.userTitles.forEach(item => {
                html += `<div class="toolbar__item fn__a b3-tooltips b3-tooltips__sw" aria-label="${item.name}：${item.desc}">${item.icon}</div>`;
            });
        }
        document.getElementById("toolbarVIP").innerHTML = html;
    }
};

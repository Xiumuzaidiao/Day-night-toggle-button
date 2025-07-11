这是由[Xiumuzaidiao/Day-night-toggle-button](https://github.com/Xiumuzaidiao/Day-night-toggle-button)重打包制作的npm module。

# 安装

在撰写本README时原作者尚未将其上传到[npmjs.org](https://npmjs.org)，~~或者说根本不知道在打包这玩意~~，所以目前只能通过本地安装。

```
git clone <URL of the responsitory>
npm install "Day-night-toggle-button/白天黑夜切换按钮npm包"
```

# 使用方法

`index.html`:

```html
<toggle-button></toggle-button>
<script type="module" src="index.js"></script>
```

`index.js`:

```javascript
import DayNightToggleButton from "day-night-toggle-button"

customElements.define("toggle-button",DayNightToggleButton)

```
# 可用性说明
有感而发，不保证可用性，另外size参数怎么调整，目前原作者也不知道怎么调

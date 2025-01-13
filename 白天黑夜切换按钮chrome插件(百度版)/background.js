// background.js

// 定义颜色
let color = 'rgba(0,125,255,1)';

// 首次安装插件、插件更新、chrome浏览器更新时触发
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('插件主色调为: %c rgba(0,125,255,1)', `color: ${color}`);
});
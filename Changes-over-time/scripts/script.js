 // 检测当前时间设置初始主题
      const hours = new Date().getHours();
      const isDayTime = hours >= 6 && hours < 18; // 6am-6pm为白天
      
      // 设置初始主题
      if (isDayTime) {
        document.body.style.backgroundColor = "aliceblue";
        btn.value = "light";
      } else {
        document.body.style.backgroundColor = "#424242";
        btn.value = "dark";
      }

      // 监听主题切换
      btn.addEventListener("change", e => {
        if (e.detail === 'dark') {
          document.body.style.backgroundColor = "#424242";
        }
        else {
          document.body.style.backgroundColor = "aliceblue";
        }
      });

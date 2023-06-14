var mainButton = document.querySelector(".main-button");
			var daytimeBackgrond = document.getElementsByClassName("daytime-backgrond");
			var cloud = document.querySelector(".cloud");
			var cloudLight = document.querySelector(".cloud-light");
			var components = document.querySelector(".components");
			var moon = document.getElementsByClassName("moon");
			var stars = document.querySelector(".stars");
			var body = document.querySelector("body");
			var isMoved = false;
			
			mainButton.addEventListener("click", function() {
			  if (isMoved) {
			    mainButton.style.transform = "translateX(0)";
				mainButton.style.backgroundColor = "rgba(255, 195, 35,1)";
				mainButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 230, 80,1)";
				daytimeBackgrond[0].style.transform = "translateX(0)";
				daytimeBackgrond[1].style.transform = "translateX(0)";
				daytimeBackgrond[2].style.transform = "translateX(0)";
				cloud.style.transform = "translateY(10px)";
				cloudLight.style.transform = "translateY(10px)";
				components.style.backgroundColor = "rgba(70, 133, 192,1)"
				moon[0].style.opacity = "0";
				moon[1].style.opacity = "0";
				moon[2].style.opacity = "0";
				stars.style.transform = "translateY(-125px)";
				stars.style.opacity = "0";
				body.style.backgroundColor = "aliceblue";
			  } else {
			    mainButton.style.transform = "translateX(110px)";
				mainButton.style.backgroundColor = "rgba(195, 200,210,1)";
				mainButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 255, 210,1)";
				daytimeBackgrond[0].style.transform = "translateX(110px)";
				daytimeBackgrond[1].style.transform = "translateX(80px)";
				daytimeBackgrond[2].style.transform = "translateX(50px)";
				cloud.style.transform = "translateY(80px)";
				cloudLight.style.transform = "translateY(80px)";
				components.style.backgroundColor = "rgba(25,30,50,1)"
				moon[0].style.opacity = "1";
				moon[1].style.opacity = "1";
				moon[2].style.opacity = "1";
				stars.style.transform = "translateY(-62.5px)";
				stars.style.opacity = "1";
				body.style.backgroundColor = "#424242";
			  }
			
			  isMoved = !isMoved;
			});
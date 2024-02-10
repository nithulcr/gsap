document.addEventListener("DOMContentLoaded", function() {
    // scroll on top in loading

    // SplitText Animation
    var split = new SplitType(".main-head", { type: "chars" });
    var tl = gsap.timeline();
    tl.from(split.chars, { opacity: 0, y: 50, duration: 0.6, ease: "back", stagger: 0.05 })
        .from(".sub-head", { opacity: 0, y: 40, ease: "back" }, "-=1")
        .from(".logo", { opacity: 0, x: -40, ease: "back" }, "-=1")
        .from(".nav-right", { opacity: 0, x: 40, ease: "back" }, "-=1")
        .from(".hero-bottom", { opacity: 0, y: 30, ease: "back", delay: 0.4 }, "-=1") // Adjust the delay value as needed
    

    function createScrollAnimation(element, startScale) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
            scale: startScale,
            duration: 0.8,
        });
    }

    createScrollAnimation(".main-head", 0.5);
    createScrollAnimation(".sub-head", 0.7);
    createScrollAnimation(".out-btn", 0.5);



    // Additional Scroll Animation with class toggling
    function createToggleClassScrollAnimation(element, startScale) {
        if (window.innerWidth > 990) {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                scale: startScale,
                duration: 0.8,
                borderRadius: "20px",
                transformOrigin: "top"
            });
        } else {
            // If the screen size is smaller than or equal to 990 pixels,
            // set the scale to 1 to prevent scaling effect.
            gsap.set(element, { scale: 1 });
        }
    }
    
    createToggleClassScrollAnimation(".hero-video video", 16);
    
    


    // video zoom end

    // text type start
    const revealTypes = document.querySelectorAll('.reveal-type')
	
		revealTypes.forEach((element, i) => {
	
			const bg = element.dataset.bgColor;
			const fg = element.dataset.fgColor;

            let xValue = 100;
            if (window.innerWidth < 768) {
                xValue = 20;
            }
            
			gsap.fromTo(element,
				{
					color: bg,
					x: i % 2 === 0 ? -xValue : xValue,
					opacity: 0,
				},
				{
					color: fg,
					duration: 0.9,
					x: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: element,
						start: 'top 90%',
						end: 'top 10%',
						scrub: true,
						markers: false,
						toggleActions: 'play play reverse reverse'
					}
				})
		});
        const revealTypes2 = document.querySelectorAll('.reveal-type2')
	
		revealTypes2.forEach((element, i) => {
	
			const bg = element.dataset.bgColor
			const fg = element.dataset.fgColor
	
			gsap.fromTo(element,
				{
					color: bg,
					x: i % 2 === 0 ? -100 : 100,
					opacity: 0,
				},
				{
					color: fg,
					duration: 0.9,
					x: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: element,
						start: 'top 10%',
						end: 'top 10%',
						scrub: true,
						markers: false,
						toggleActions: 'play play reverse reverse'
					}
				})
		});
        
        gsap.registerPlugin(ScrollTrigger)

        const splitTypes3 = document.querySelectorAll('.reveal-type3')

        splitTypes3.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 1,
                    stagger: 0.8,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 50%',
                        end: 'top 0%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })

        const top_action = document.querySelectorAll('.top-action')

        top_action.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const top_action2 = document.querySelectorAll('.top-action2')

        top_action2.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const top_action3 = document.querySelectorAll('.top-action3')

        top_action3.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const top_action4 = document.querySelectorAll('.top-action4')

        top_action4.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
       
        
        


        // text type end

        const right_rotate = document.querySelectorAll('.right-left-rotate');

        right_rotate.forEach((element, i) => {
            const screenWidth = window.innerWidth;

            gsap.fromTo(
                element,
                {
                    rotation: 15, // Initial rotation
                    translateX: screenWidth <= 1024 ? 0 : 50, // Adjust translateX based on screen width
                    translateY: 25,
                    scale: screenWidth > 1024 ? 1.1 : 1 // Initial scale based on screen width
                },
                {
                    duration: 0.3,
                    y: 0,
                    rotation: 0, // Final rotation
                    translateX: 0, // Set translateX to 0 as the final value
                    translateY: 0,
                    scale: 1, // Final scale
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                }
            );
        });

        
        const left_rotate = document.querySelectorAll('.left-right-rotate');

        left_rotate.forEach((element, i) => {
            const screenWidth = window.innerWidth;
        
            gsap.fromTo(
                element,
                {
                    rotation: -15, // Initial rotation
                    translateX: screenWidth > 1024 ? -50 : 0, // Set translateX based on screen width
                    translateY: 25,
                    scale: screenWidth > 1024 ? 1.1 : 1 // Initial scale based on screen width
                },
                {
                    duration: 0.3,
                    y: 0,
                    rotation: 0, // Final rotation
                    translateX: 0, // Set translateX to 0 as the final value
                    translateY: 0,
                    scale: 1, // Final scale
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                }
            );
        });
        
        
        

        // marquee start

        let marquees = document.querySelectorAll('.marquee');

        window.addEventListener("load", function () {
            marquees.forEach((marquee, index) => {
                let direction = index % 2 === 0 ? 1 : -1; // Alternate direction
                let rate = 100; // Adjust as needed
                let distance = marquee.clientWidth;
                let style = window.getComputedStyle(marquee);
                let marginRight = parseInt(style.marginRight) || 0;
                let totalDistance = distance + marginRight;
                let time = totalDistance / rate;

                gsap.to(marquee, {
                    x: direction * -totalDistance,
                    duration: time,
                    ease: "linear",
                    repeat: -1
                });
            });
        });

        

        // marquee end


        // cursor start
        if (window.innerWidth > 768) {
            let cursor = document.querySelector('.cursor');
            let cursorScale = document.querySelectorAll('.cursor-scale'); 
            let mouseX = 0;
            let mouseY = 0;
          
            gsap.to({}, 0.016, {
              repeat: -1,
              onRepeat: function(){
                gsap.set(cursor, {
                  css: {
                    left: mouseX,
                    top: mouseY,
                  }
                })
              }
            });
          
            window.addEventListener('mousemove', (e)=> {
              mouseX = e.clientX;
              mouseY = e.clientY;
            })
          
            cursorScale.forEach(link => {
              link.addEventListener('mousemove', ()=> {
                cursor.classList.add('grow'); 
                if (link.classList.contains('small')){
                  cursor.classList.remove('grow');
                  cursor.classList.add('grow-small');
                }
              });
              
              link.addEventListener('mouseleave', ()=> {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');
              });
            })
          }
          
        // cursor end

        
          
    });
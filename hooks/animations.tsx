import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const textAnimation = (dom: string) => {
    const wrapper = document.querySelector(dom) as HTMLElement;

    wrapper.querySelectorAll(".scale").forEach((element) => {
        gsap.fromTo(
            element,
            { scale: 0.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: element,
                    end: "+=100%",
                    toggleActions: "play none none reset",
                },
            }
        );
    });

    wrapper
        .querySelectorAll(".translate")
        .forEach((element: any, index: any) => {
            gsap.set(element, { y: 100, opacity: 0 });
            gsap.to(element, {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: element,
                    end: "+=100%",
                    toggleActions: "play none none reset",
                    invalidateOnRefresh: true,
                },
            });
        });

    wrapper
        .querySelectorAll(".-translate")
        .forEach((element: any, index: any) => {
            gsap.set(element, { y: -100, opacity: 0 });
            gsap.to(element, {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: element,
                    end: "+=100%",
                    toggleActions: "play none none reset",
                },
            });
        });

    wrapper
        .querySelectorAll(".translateX")
        .forEach((element: any, index: any) => {
            gsap.set(element, { x: 100, opacity: 0 });
            gsap.to(element, {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    end: "+=100%",
                    trigger: element,
                    toggleActions: "play none none reset",
                },
            });
        });

    wrapper
        .querySelectorAll(".-translateX")
        .forEach((element: any, index: any) => {
            gsap.set(element, { x: -100, opacity: 0 });
            gsap.to(element, {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "play none none reset",
                },
            });
        });
};

const horizontalScroll = (dom: string) => {
    const box = document.querySelector(dom) as HTMLElement;

    const wrap = box.querySelector(".wrap") as HTMLElement;
    const images = wrap.querySelectorAll("img");

    Promise.all(
        Array.from(images)
            .filter((img) => !img.complete)
            .map(
                (img) =>
                    new Promise((resolve) => {
                        img.onload = img.onerror = resolve;
                    })
            )
    ).then(() => {
        const wrapWidth = wrap.offsetWidth;

        gsap.to(wrap, {
            duration: 2,
            xPercent: -100,
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                start: "top top",
                trigger: wrap,
                pin: true,
                scrub: 1,
                end: () => "+=" + wrapWidth,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
    });
};

const fixedScroll = (dom: string) => {
    const wrapper = document.querySelector(dom) as any;
    const pinWrapper = wrapper.querySelector(".pin-wrap") as HTMLElement;
    ScrollTrigger.create({
        trigger: wrapper,
        pin: pinWrapper,
        end: `bottom-=${pinWrapper.offsetHeight}px`,
        scrub: true,
    });
    const imageTriggerBox = wrapper.querySelectorAll(
        ".image-box"
    ) as HTMLElement[];

    imageTriggerBox.forEach((box, index) => {
        const image = wrapper.querySelectorAll(".image") as HTMLElement[];
        const timeLabel = wrapper.querySelectorAll(
            ".time-label"
        ) as HTMLElement[];
        const activeLabelCss = {
            background: "#333",
            color: "white",
            opacity: 1,
        };
        const disableLabelCss = {
            background: "#D9D9D9",
            color: "black",
            opacity: 0,
        };

        const tl = gsap.timeline({
            duration: 0,
            scrollTrigger: {
                trigger: box,
                scrub: true,
                start: "top-=194.5 bottom",
                end: "bottom+=194.5 top",
            },
        });

        if (index === image.length - 1) {
            tl.to(image[index], { opacity: 1 }, "start").to(
                timeLabel[index],
                {
                    css: activeLabelCss,
                },
                "start"
            );
        } else {
            tl.to(image[index], { opacity: 1 }, "start")
                .to(timeLabel[index], { css: activeLabelCss }, "start")
                .to(
                    image[index],
                    {
                        opacity: 0,
                    },
                    "end"
                )
                .to(timeLabel[index], { css: disableLabelCss }, "end");
        }
    });
};

export { horizontalScroll, textAnimation, fixedScroll };

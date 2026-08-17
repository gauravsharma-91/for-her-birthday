// =========================================
// SCROLL REVEAL
// =========================================

const sections =
    document.querySelectorAll(".section-reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    revealObserver.observe(section);

});



// =========================================
// WISH BUTTON
// =========================================

const wishButton =
    document.getElementById("wishButton");


if (wishButton) {

    wishButton.addEventListener(
        "click",
        function () {

            wishButton.textContent =
                "your wish is somewhere in the stars ✦";

            createStars();


            setTimeout(function () {

                wishButton.textContent =
                    "make a wish ✦";

            }, 5000);

        }
    );

}



// =========================================
// STAR PARTICLES
// =========================================

function createStars() {

    for (let i = 0; i < 40; i++) {

        const star =
            document.createElement("div");


        star.className = "wish-star";


        star.style.left =
            window.innerWidth / 2 + "px";


        star.style.top =
            window.innerHeight / 2 + "px";


        document.body.appendChild(star);


        const x =
            (Math.random() - 0.5)
            * window.innerWidth;


        const y =
            (Math.random() - 0.5)
            * window.innerHeight;


        star.animate(

            [

                {
                    transform:
                        "translate(0,0) scale(.2)",

                    opacity: 0

                },

                {
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1500 +
                    Math.random() * 1000,

                easing:
                    "cubic-bezier(.2,.7,.2,1)"

            }

        );


        setTimeout(function () {

            star.remove();

        }, 2800);

    }

}



// =========================================
// LOVE LETTER
// =========================================

const letter =
    document.getElementById("letterText");


const message = `Happy Birthday, my love. ♡

I didn't want to make you
just another birthday wish.

I wanted to leave you
with something you could come back to.

A few memories.
A little piece of this day.
And a reminder that you are special.

I hope this year is kind to you.

I hope you laugh more,
dream bigger,
and find beautiful reasons
to smile.

And whenever you look at the moon,
I hope you remember this little place.

Because somewhere under
that same sky,
someone is thinking about you.

Happy Birthday My delulu. ❤️

♡`;




let letterStarted = false;



// =========================================
// TYPEWRITER START
// =========================================

if (letter) {

    const letterObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting &&
                        !letterStarted
                    ) {

                        letterStarted = true;

                        typeLetter();

                        letterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    letterObserver.observe(letter);

}



// =========================================
// TYPEWRITER
// =========================================

function typeLetter() {

    let index = 0;


    function writeCharacter() {

        if (index >= message.length) {

            return;

        }


        letter.textContent +=
            message[index];


        index++;


        let speed = 25;


        if (
            message[index - 1] === "\n"
        ) {

            speed = 130;

        }


        setTimeout(
            writeCharacter,
            speed
        );

    }


    writeCharacter();

}
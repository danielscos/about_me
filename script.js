document.addEventListener('DOMContentLoaded', function() {
    const asciiArt = `+=================================================================================+
|▓█████▄  ▄▄▄      ███▄    █  ██▓▓█████  ██▓      ██████ ▄████▄  ▒█████    ██████ |
|▒██▀ ██▌▒████▄    ██ ▀█   █ ▓██▒▓█   ▀ ▓██▒    ▒██    ▒▒██▀ ▀█ ▒██▒  ██▒▒██    ▒ |
|░██   █▌▒██  ▀█▄ ▓██  ▀█ ██▒▒██▒▒███   ▒██░    ░ ▓██▄  ▒▓█    ▄▒██░  ██▒░ ▓██▄   |
|░▓█▄   ▌░██▄▄▄▄██▓██▒  ▐▌██▒░██░▒▓█  ▄ ▒██░      ▒   ██▒▓▓▄ ▄██▒██   ██░  ▒   ██▒|
|░▒████▓  ▓█   ▓██▒██░   ▓██░░██░░▒████▒░██████▒▒██████▒▒ ▓███▀ ░ ████▓▒░▒██████▒▒|
| ▒▒▓  ▒  ▒▒   ▓▒█░ ▒░   ▒ ▒ ░▓  ░░ ▒░ ░░ ▒░▓  ░▒ ▒▓▒ ▒ ░ ░▒ ▒  ░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░|
| ░ ▒  ▒   ▒   ▒▒ ░ ░░   ░ ▒░ ▒ ░ ░ ░  ░░ ░ ▒  ░░ ░▒  ░ ░ ░  ▒    ░ ▒ ▒░ ░ ░▒  ░ ░|
| ░ ░  ░   ░   ▒     ░   ░ ░  ▒ ░   ░     ░ ░   ░  ░  ░ ░       ░ ░ ░ ▒  ░  ░  ░  |
|   ░          ░  ░        ░  ░     ░  ░    ░  ░      ░ ░ ░         ░ ░        ░  |
| ░                                                     ░                         |
+=================================================================================+`;

    const asciiArtLines = asciiArt.trim().split('\n');
    const container = document.getElementById('ascii-container');
    let currentLine = 0;

    function printNextLine() {
        if (currentLine < asciiArtLines.length) {
            container.innerHTML += asciiArtLines[currentLine] + '\n';
            currentLine++;
            setTimeout(printNextLine, 150);
        }
    }

    setTimeout(printNextLine, 3000);

    const socialLinks = document.getElementById('social-links');
    setTimeout(() => {
        socialLinks.classList.add('fade-in');
    }, 4000);
});

(function() {
    function isPhone() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    var _onload = function() {
        var socialLinks = document.getElementById('social-links');
        var pretag = document.getElementById('d');
        var donutContainer = document.getElementById('donut-container');
        var fadeOutButton = document.getElementById('fade-out-button');
        var asciiContainer = document.getElementById('ascii-container');
        var customTextContainer = document.getElementById('custom-text');

        var A = 1, B = 1;

        var asciiframe = function() {
            var b = [];
            var z = [];
            A += 0.01;
            B += 0.005;
            var cA = Math.cos(A), sA = Math.sin(A),
                cB = Math.cos(B), sB = Math.sin(B);
            for (var k = 0; k < 1760; k++) {
                b[k] = k % 80 === 79 ? "\n" : " ";
                z[k] = 0;
            }
            for (var j = 0; j < 6.28; j += 0.07) {
                var ct = Math.cos(j), st = Math.sin(j);
                for (var i = 0; i < 6.28; i += 0.02) {
                    var sp = Math.sin(i), cp = Math.cos(i),
                        h = ct + 2,
                        D = 1 / (sp * h * sA + st * cA + 5),
                        t = sp * h * cA - st * sA;

                    var x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
                        y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
                        o = x + 80 * y,
                        N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
                    if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
                        z[o] = D;
                        b[o] = ".,-~:;=!*#$@"[Math.max(0, Math.min(11, N))];
                    }
                }
            }
            pretag.innerHTML = b.join("");
        };

        var animate = function() {
            asciiframe();
            requestAnimationFrame(animate);
        };

        var printTextEffect = function(text, container, delay) {
            let index = 0;
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            container.appendChild(cursor);

            function print() {
                if (index < text.length) {
                    container.insertBefore(document.createTextNode(text.charAt(index)), cursor);
                    index++;
                    setTimeout(print, delay);
                }
            }
            print();
        };

        setTimeout(function() {
            donutContainer.style.opacity = 1;
            fadeOutButton.style.display = 'block';
            requestAnimationFrame(function() {
                fadeOutButton.classList.add('fade-in');
            });
            animate();
        }, 4500);

        fadeOutButton.addEventListener('click', function() {
            fadeOutButton.classList.remove('fade-in');
            fadeOutButton.classList.add('fade-out');
            donutContainer.style.opacity = 0;
            asciiContainer.style.opacity = 0;

            socialLinks.classList.remove('fade-in');
            socialLinks.classList.add('fade-out'); 

            setTimeout(function() {
                customTextContainer.style.opacity = 1;
                if (!isPhone()) {
                    customTextContainer.style.left = '200px';
                    customTextContainer.style.top = '200px';
                } else {
                    customTextContainer.style.left = '10px';
                }


                printTextEffect("Hi :3\n" +
                    "\n" +
                    "I'm Italian guy\n" +
                    "\n" +
                    "I'm Italian/Belarusian, residing in Israel\n" +
                    "\n" +
                    "Femboy, furry, and itsy bitsy bi :3c\n" +
                    "\n" +
                    "political views: dm me to know :3\n" +
                    "\n" +
                    "interests: coding, cybersec, photography, drawing, reading\n" +
                    "\n" +
                    "that's all -w-" +
                    "\n" +
                    "" +
                    "\n" +
                    "cya ^^ " , customTextContainer, 45);

                    const asciiArtContainer = document.createElement('div');
                    asciiArtContainer.classList.add('ascii-art-container');
                    asciiArtContainer.style.top = '10%'; 
                    asciiArtContainer.style.right = '5%'; 
                    asciiArtContainer.style.position = 'absolute';
                    asciiArtContainer.style.opacity = '0'; 
                    asciiArtContainer.style.transition = 'opacity 2s';
                


                const newTextElement = document.createElement('p');
                newTextElement.textContent = 
                " ⠀⢸⠀⠀⠀⠘⣧⠀⠀⣟⠛⠲⢤⡀⠀⠀⣰⠏⠀⠀⠀⠀⠀ ⢹\n" +
                " ⠀⡿⠀⠀⠀⠀⠀⠈⢷⡀⢻⡀⠀⠀⠙⢦⣰⠏⠀⠀⠀⠀⠀⠀⢸⠀\n" +
                " ⠀⡇⠀⠀⠀⠀⠀⠀⢀⣻⠞⠛⠀⠀⠀⠀⠻⠀⠀⠀⠀⠀⠀⠀⢸⠀\n" +
                " ⠀⡇⠀⠀⠀⠀⠀⠀⠛⠓⠒⠓⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀\n" +
                " ⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀\n" +
                " ⠀⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⢀⡟⠀⡇\n" +
                " ⠀⠘⣇⠀⠘⣿⠋⢹⣿⣿⡇⠀⠀⠀⠀⣿⣿⡇⠀⢳⠉⠀⣠⡾⠁\n" +
                " ⣦⣤⣽⣆⢀⡇⠀⢸⣿⣿⡇⠀⠀⠀⠀⣿⣿⡷⠀⢸⡇⠐⠛⠛⣿⠀\n" +
                " ⠹⣦⠀⠀⠸⡇⠀⠸⣿⡿⠁⢀⡀⠀⠀⠿⠿⠃⠀⢸⠇⠀⢀⡾⠁⠀\n" +
                " ⠀⠈⡿⢠⢶⣡⡄⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⣴⣧⠆⠀⢻⡄⠀⠀\n" +
                " ⠀⢸⠃⠀⠘⠉⠀⠀⠀⠠⣄⡴⠲⠶⠴⠃⠀⠀⠀⠉⡀⠀⠀⢻⡄⠀\n" +
                " ⠀⠘⠒⠒⠻⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠞⠛⠒⠛⠋⠁⠀\n" +
                " ⠀⠀⠀⠀⠀⠀⠸⣟⠓⠒⠂⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀\n" +
                " ⠀⠀⠀⠀⠀⠀⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⠀⠀⠀⠀\n" +
                " ⠀⠀⠀⠀⠀⠀⠀⣼⣃⡀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀\n" +
                " ⠀⠀⠀⠀⠀⠀⠀⠉⣹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⠀\n" +
                " ⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀\n"
                newTextElement.style.fontSize = '18px';
                newTextElement.style.whiteSpace = 'pre';
                newTextElement.style.fontFamily = 'monospace';
                asciiArtContainer.appendChild(newTextElement);
                document.body.appendChild(asciiArtContainer);

                setTimeout(() => {
                    asciiArtContainer.style.opacity = '1';
                }, 500); 
                
                
            }, 4000);
        });

        fadeOutButton.addEventListener('mousemove', function(event) {
            const rect = fadeOutButton.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            const rotateX = -(y / rect.height) * 40;
            const rotateY = (x / rect.width) * 40;

            fadeOutButton.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        fadeOutButton.addEventListener('mouseleave', function() {
            fadeOutButton.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        });
    }

    window.addEventListener("load", _onload, false);
})();   
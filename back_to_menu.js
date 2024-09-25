function getBackToMenu(url, text, text_size=22) {
    return `
        <div class='back-to-menu-container'>
            <ol>
                <a class='animated-arrow' href='${url}'
                    style="background: transparent; border-bottom: 0px solid;font-size:${text_size}pt;">
                    <span class='the-arrow -left'>
                        <span class='shaft'></span>
                    </span>
                    <span class='main'>
                        <span class='the-arrow -right'>
                            <span class='shaft'></span>
                        </span>
                        <span class='text'>
                            ${text}
                        </span>
                    </span>
                </a>
            </ol>
        </div>
    `;
}

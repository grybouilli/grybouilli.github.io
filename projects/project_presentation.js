function insertProjectPresentation(img, projectUrl, projectSubtitle, projectDescription)
{
    return `
    <div class="box-container">
        <div class="inner-box-container">
            <div class="zoom-gif">
                <img src="${img}" width="600px" />
                <div class="over-gif-text">
                    <a href="${projectUrl}" target="_blank"
                        rel="noopener noreferrer" style="color: var(--light-violet); background: transparent;">
                        Go to github
                </div>
            </div>
            </a>
        </div>
        <div class="inner-box-container" style="font-size: 2rem; justify-content: left;
        align-items: left;">
            <h2 style="text-align: left; margin: 0%;"><span class="highlight-pink"><span class="highlight">${projectSubtitle} </span></span></h2>
            <p>
                ${projectDescription}
            <div class="container-block">
                <span class="highlight-pink"><span class="highlight">Click on the image to have a look at the code
                        !</span></span>
            </div>
            </p>
        </div>
    </div>
    `;
}
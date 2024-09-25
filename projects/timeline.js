function newEvent(name, date, url, description, typeNb)
{
    let color = "";
    if(typeNb=="1")
    {
        color="var(--blue-trans)";
    } else if (typeNb=="2")
    {
        color = "var(--pink-trans)";
    } else
    {
        color="#ffffff";
    }
    return `
    <div class="timeline__event animated fadeInUp delay-2s timeline__event--type${typeNb}">
            <div class="timeline__event__icon">
                <!-- <i class="lni-sport"></i>-->

            </div>
            <div class="timeline__event__date">
                ${date}
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    <a href="${url}"
                        style="color:${color}">${name}</a>
                </div>
                <div class="timeline__event__description">
                    <p>${description}
                    </p>
                </div>
            </div>
        </div>
    `;
}
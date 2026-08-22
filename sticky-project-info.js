// Sticky project info logic: prevents overlap with footer
// Applies to .project-section and .footer

document.addEventListener('DOMContentLoaded', function () {
    const projectSection = document.querySelector('.project-section');
    const footer = document.querySelector('.footer');
    if (!projectSection || !footer) return;

    const offset = 24; // matches top sticky offset (spacing-unit * 2)

    function onScroll() {
        const sectionRect = projectSection.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        // If section would overlap footer, reduce its top position
        if (sectionRect.bottom > footerRect.top) {
            const overlap = sectionRect.bottom - footerRect.top;
            projectSection.style.top = (offset - overlap) + 'px';
        } else {
            // No overlap, restore normal position
            projectSection.style.top = offset + 'px';
        }
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll();
});

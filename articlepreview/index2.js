const shareIcon = document.getElementById('shareicon');
const shareContainer = document.getElementById('share-container');
const shareArticle = document.getElementById('share-article');
const shareArticleText = document.getElementById('share-container__text');
const articlePreview = document.getElementById('article-preview');
const articleInfo = document.getElementById('article-info');
const articleAuthor = document.getElementById('article-author');
const mobileShareText = document.getElementById('share-article__text');
const iconContainer = document.getElementById('icon-container');
const avatar = document.getElementById('authorimg');
const authorDetails = document.getElementById('author-details');
const arrow = document.getElementById('arrow');

shareIcon.addEventListener('click', () => {
    if (window.innerWidth > 730) {
        toggleDesktopShare();
    } else {
        toggleMobileShare();
    }
});

function toggleDesktopShare() {
    const isFlex = shareContainer.style.display === 'flex';
    shareContainer.style.display = isFlex ? 'none' : 'flex';
    shareArticle.style.display = isFlex ? 'none' : 'flex';
    shareArticleText.style.display = isFlex ? 'none' : 'flex';
}

function toggleMobileShare() {
    const isShareContainerVisible = shareContainer.style.display === 'flex';
    if (isShareContainerVisible) {
        shareContainer.style.display = 'none';
    }

    if (articleAuthor.parentNode === articlePreview) {
        toggleOffMobileShare();
    } else {
        toggleOnMobileShare();
    }
}

function toggleOffMobileShare() {
    setMobileShareVisibility('flex', 'none');
    articlePreview.removeChild(articleAuthor);
    articleInfo.appendChild(articleAuthor);
    articleInfo.style.borderRadius = '0 0 0.625rem 0.625rem';
    arrow.setAttribute('fill', '#6E8098');
    shareIcon.style.backgroundColor = 'var(--colour-lightblue)';
}

function toggleOnMobileShare() {
    setMobileShareVisibility('none', 'flex');
    articleInfo.removeChild(articleAuthor);
    articlePreview.appendChild(articleAuthor);
    articleInfo.style.borderRadius = '0.625rem 0.625rem 0 0';
    arrow.setAttribute('fill', 'white');
    shareIcon.style.backgroundColor = 'var(--colour-darkblue)';
}

function setMobileShareVisibility(avatarDisplay, shareTextDisplay) {
    avatar.style.display = avatarDisplay;
    authorDetails.style.display = avatarDisplay;
    authorDetails.style.flexDirection = 'column';
    mobileShareText.style.display = shareTextDisplay;
    iconContainer.style.display = shareTextDisplay;
    articleAuthor.style.backgroundColor = shareTextDisplay === 'flex' ? 'var(--colour-darkgray)' : 'var(--colour-white)';
    articleAuthor.style.padding = shareTextDisplay === 'flex' ? '1.375rem 2rem' : '0';
    articleAuthor.style.marginTop = shareTextDisplay === 'flex' ? '0' : '2rem';
    articleAuthor.style.borderRadius = shareTextDisplay === 'flex' ? '0 0 0.625rem 0.625rem' : '0';
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 730 && shareContainer.style.display === 'flex') {
        shareContainer.style.display = 'none';
        shareArticle.style.display = 'none';
        shareArticleText.style.display = 'none';
    } else if (window.innerWidth > 730) {
        toggleOffMobileShare();
    }
});

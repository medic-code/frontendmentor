let shareIcon = document.getElementById('shareicon2');
let shareIconMobile = document.getElementById('shareicon');
let articleInfo = document.getElementById('article-info');
let avatar = document.getElementById('authorimg');
let authorDetails = document.getElementById('author-details');
let authorName = document.getElementById('author-name');
let authorDate = document.getElementById('date');
let articleAuthor = document.getElementById('article-author');
let articlePreview = document.getElementById('article-preview');

function createAndAppendShare() {
    const shareArticle = document.getElementById('share-article');
    const shareContainerExists = document.getElementById('share-container');

    if (window.innerWidth > 730) {
        if (!shareContainerExists) {
            shareArticle.style.display = 'flex';
            const shareContainer = document.createElement('div');
            shareContainer.className = 'share-container';
            shareContainer.id = 'share-container';
            const triangle = document.createElement('div');
            triangle.className = 'triangle';
            shareIcon.style.display = 'none';
            shareContainer.appendChild(shareArticle);
            shareContainer.appendChild(triangle);
            articlePreview.appendChild(shareContainer); 
            articlePreview.style.position = 'relative';
        } else {
            shareContainerExists.style.display = 'flex';
        }
    } else {
        const arrow = document.getElementById('arrow');
    
        avatar.style.display = 'none';
        authorName.style.display = 'none';
        authorDate.style.display = 'none';
        shareIconMobile.style.display = 'none';
        
        articleInfo.style.paddingBottom = '0';
        articleAuthor.style.marginTop = '1.25rem';
        shareArticle.style.display = 'flex';
        arrow.setAttribute('fill', 'white');
        shareIcon.style.backgroundColor = 'var(--colour-darkblue)';

        articlePreview.appendChild(shareArticle);
    }
}

function toggleMobileShare() {
    const shareArticle = document.getElementById('share-article');
    const isShareVisible = shareArticle.style.display === 'flex';
    
    if (isShareVisible) {
        shareArticle.style.display = 'none';
        avatar.style.display = 'block';
        authorName.style.display = 'block';
        authorDate.style.display = 'block';
        articleInfo.style.paddingBottom = '1.25rem';
        articleAuthor.appendChild(shareIconMobile);
        shareIconMobile.style.display = 'block'; // Ensure share icon is displayed again
        shareIcon.style.backgroundColor = 'var(--colour-darkgray)';
    } else {
        createAndAppendShare();
    }
}

shareIconMobile.addEventListener('click', (e) => { 
    const share = document.getElementById('share-container');

    if (window.innerWidth > 730) {
        if (share) {
            share.style.display = share.style.display === 'none' ? 'flex' : 'none';
        } else {
            createAndAppendShare();
        }
    } else {
        toggleMobileShare();
    }
});

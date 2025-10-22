function ProductCartAnimatedGhost({ trigger, setTrigger, duration = 0 }) {
    if (!trigger) {
        return;
    }

    // Product image
    const imageNode = trigger.closest('.js-product-card-image') || document.querySelector('#product_detail_image');
    if (!imageNode) {
        setTrigger(null);
        return;
    }
    const imageUrl = imageNode.classList.contains('js-product-card-image')
        ? getComputedStyle(imageNode).getPropertyValue('background-image').slice(5, -2) // remove 'url("<…>")'
        : imageNode.src;

    // Coordinates to start from
    const imageCoordInfo = imageNode.getBoundingClientRect();
    const size = (Math.round(imageCoordInfo.width < imageCoordInfo.height ? imageCoordInfo.width : imageCoordInfo.height) + 90);
    const top = Math.round(imageCoordInfo.top);
    const left = Math.round(imageCoordInfo.left + imageCoordInfo.width - size);

    // End target coordinates
    const miniCart = document.querySelector('#mini_cart');
    const miniCartCoords = miniCart.getBoundingClientRect();
    const targetX = Math.round(miniCartCoords.x + (miniCartCoords.width / 2));
    const targetY = Math.round(miniCartCoords.y);

    // Ghost element
    const ghost = document.createElement('div');
    const style = {
        backgroundImage: `url("${imageUrl}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, .5)',
        display: 'block',
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 5,
        opacity: 1,
    }
    Object.assign(ghost.style, style);
    document.body.appendChild(ghost);

    // Handle ghost movement
    const start = document.timeline.currentTime;
    let requestAnimFrameId;
    function step(timestamp) {
        const progress = timestamp - start;
        ghost.style.width = `${size - ((size - 10) / duration * progress)}px`;
        ghost.style.height = `${size - ((size - 10) / duration * progress)}px`;
        ghost.style.left = `${left + ((targetX - left) / duration * progress)}px`;
        ghost.style.top = `${top - ((top - targetY) / duration * progress)}px`;
        ghost.style.opacity = 1 - (0.8 / duration * progress);
        if (progress < duration) {
            requestAnimFrameId = requestAnimationFrame(step);
        }
    }
    requestAnimFrameId = requestAnimationFrame(step);

    // Final call and cleaning of the remains
    setTimeout(() => {
        cancelAnimationFrame(requestAnimFrameId);
        document.body.removeChild(ghost);
        setTrigger(null);
    }, duration);
}

export default ProductCartAnimatedGhost;
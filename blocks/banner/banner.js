export default function decorate(block) {
  const [imgDiv, titleDiv, descDiv, ctaTextDiv, ctaLinkDiv, bgColorDiv] = block.querySelectorAll(':scope > div > div');

  // Extract image and remove <picture>
  const picture = imgDiv.querySelector('picture');
  const imgSrc = picture?.querySelector('img')?.src;
  picture?.remove();

  // Create banner container
  const wrapper = document.createElement('div');
  wrapper.className = 'banner-content';

  // Add background image
  if (imgSrc) {
    block.style.backgroundImage = `url('${imgSrc}')`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
  }

  // Background color (optional)
  const bgColor = bgColorDiv?.textContent?.trim();
  if (bgColor) {
    block.style.backgroundColor = bgColor;
  }

  // Add title
  const title = document.createElement('h2');
  title.textContent = titleDiv?.textContent?.trim();

  // Add description
  const desc = document.createElement('p');
  desc.textContent = descDiv?.textContent?.trim();

  // Add CTA
  const link = ctaLinkDiv?.querySelector('a');
  if (link) {
    link.classList.add('banner-button');
  }

  wrapper.append(title, desc, link);
  block.textContent = ''; // Clear original
  block.append(wrapper);
}

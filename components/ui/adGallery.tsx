// components/AdGallery.js

import Image from 'next/image';

export default function AdGallery() {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        
        {/* Image 1 */}
        <div className="try-adgen-tabs-content-inner">
          <Image
            src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652ea2aa028ceb9c8b2efac6__ad-fb.png"
            alt="Facebook Ad Example"
            width={290.5}
            height={400}
            className="try-adgen-tabs-pic rounded-lg object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="try-adgen-tabs-content-inner">
          <Image
            src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652ea2d1386897205e2b5062_facebook-post.png"
            alt="Facebook Post Example"
            width={272.5}
            height={400}
            className="try-adgen-tabs-pic rounded-lg object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="try-adgen-tabs-content-inner">
          <Image
            src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652ea2de295cf0f25ea09c50_instagram-stories.png"
            alt="Instagram Story Example"
            width={290.5}
            height={400}
            className="try-adgen-tabs-pic rounded-lg object-cover"
          />
        </div>

        {/* Column with Two Images */}
        <div className="try-adgen-tabs-pic-col flex flex-col gap-4">
          <Image
            src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652ea2ecc53a61a02d8aad06_google.png"
            alt="Google Ad Example"
            width={292}
            height={200}
            className="try-adgen-tabs-pic rounded-lg object-cover"
          />
          <Image
            src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652ea2feb1b80741ea1fc187_Frame%201010104921.png"
            alt="Frame Example"
            width={292}
            height={200}
            className="try-adgen-tabs-pic rounded-lg object-cover"
          />
        </div>

        {/* Image 6 */}
        <div className="try-adgen-tabs-content-inner">
          <Image
            src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652ea30fbd66539f9788b7b3_240x400.png"
            alt="240x400 Example"
            width={292.5}
            height={400}
            className="try-adgen-tabs-pic rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}

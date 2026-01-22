# Hero Headshot Implementation - Next Steps

## Summary
The hero section markup has been successfully updated to use a modern `<picture>` element with responsive image support. The images directory structure has been created and documented.

## What's Been Completed ✅

1. **Images Directory Structure**
   - Created `images/` directory
   - Added README.md with detailed requirements
   - Added .gitkeep to ensure directory is tracked

2. **HTML Updates**
   - Replaced simple `<img>` with modern `<picture>` element
   - Added WebP source with JPEG fallback
   - Implemented responsive srcset for 1x and 2x displays
   - Included width/height attributes to prevent layout shift
   - Updated Open Graph meta tag

3. **Modern Best Practices Applied**
   - Progressive enhancement (WebP → JPEG)
   - Responsive images for different pixel densities
   - Performance optimization with explicit dimensions
   - Accessibility maintained with proper alt text

## What's Needed Next 📋

### Required: Add Image Files

The following image files need to be added to the `images/` directory:

**Required:**
- `joe-garcia-portrait-new.jpg` - The new headshot image (JPEG format)
  - Recommended dimensions: 450px width × 600px height (3:4 aspect ratio)
  - Optimized for web (80-85% JPEG quality)

**Optional but Recommended:**
- `joe-garcia-portrait-new.webp` - WebP version for better compression
  - Same dimensions as JPEG
  - Better performance on modern browsers

**Optional for Retina Displays:**
- `joe-garcia-portrait-new@2x.jpg` - High-resolution JPEG
  - Dimensions: 900px width × 1200px height (2x the standard size)
- `joe-garcia-portrait-new@2x.webp` - High-resolution WebP
  - Same dimensions as @2x JPEG

### How to Add Images

1. Obtain or create the headshot images with the specifications above
2. Place them in the `images/` directory
3. Ensure filenames match exactly as specified
4. Test in a browser to verify all formats load correctly

## Technical Details

### Picture Element Structure

```html
<picture>
    <!-- WebP sources for modern browsers -->
    <source 
        type="image/webp"
        srcset="images/joe-garcia-portrait-new.webp 1x, 
                images/joe-garcia-portrait-new@2x.webp 2x">
    
    <!-- JPEG sources as fallback -->
    <source 
        type="image/jpeg"
        srcset="images/joe-garcia-portrait-new.jpg 1x, 
                images/joe-garcia-portrait-new@2x.jpg 2x">
    
    <!-- Fallback img for older browsers -->
    <img 
        src="images/joe-garcia-portrait-new.jpg" 
        alt="Joe Garcia - Professional Real Estate Agent and Loan Officer" 
        class="hero-portrait"
        width="450"
        height="600">
</picture>
```

### Browser Compatibility

- Modern browsers will use WebP format when available (better compression)
- The `1x` images are used on standard displays
- The `2x` images are automatically used on high-DPI/retina displays
- Fallback to JPEG for browsers that don't support WebP
- The `<img>` tag ensures compatibility with all browsers

## Testing Checklist

Once images are added, verify:
- [ ] Images load correctly on desktop browsers
- [ ] Images load correctly on mobile devices
- [ ] WebP format is served to supporting browsers
- [ ] JPEG format is served as fallback
- [ ] Retina displays receive higher resolution images
- [ ] Layout doesn't shift when images load (width/height attributes prevent CLS)
- [ ] Images load immediately (no lazy loading for above-the-fold hero)
- [ ] Open Graph image appears correctly when sharing on social media

## Preserved Original Reference

The original implementation referenced `images/joe-garcia-portrait.jpg`. This file was not present in the repository and has not been modified or removed. The new implementation uses separate filenames (`joe-garcia-portrait-new.jpg`) to avoid any conflicts.

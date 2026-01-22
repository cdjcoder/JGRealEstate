# Images Directory

## Required Images

This directory should contain the following hero portrait images:

### Current Image (preserved, not in use)
- `joe-garcia-portrait.jpg` - Original portrait image filename (was previously referenced, now replaced with new filename)

### New Headshot Images (to be added)
- `joe-garcia-portrait-new.jpg` - New headshot image (primary format)
- `joe-garcia-portrait-new.webp` - WebP version for better performance (optional)
- `joe-garcia-portrait-new@2x.jpg` - High-resolution version for retina displays (optional)
- `joe-garcia-portrait-new@2x.webp` - High-resolution WebP version for retina displays (optional)

## Image Requirements

### Dimensions
- Standard: 450px width (maintains 3:4 aspect ratio as per CSS)
- @2x variant: 900px width for retina displays

### Format
- JPEG: For broad compatibility
- WebP: For modern browsers with better compression

### Optimization
- Ensure images are optimized for web (compressed without significant quality loss)
- Use appropriate JPEG quality (80-85% recommended)

## Notes

The HTML has been updated to use a modern `<picture>` element with:
- WebP format with JPEG fallback
- Responsive srcset for different screen densities
- Proper alt text for accessibility

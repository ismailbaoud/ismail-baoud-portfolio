# Resume/CV Folder

Place your resume PDF file here with the name: **`resume.pdf`**

## Setup Instructions

1. **Prepare Your Resume**
   - Export your resume as a PDF file
   - Name it exactly: `resume.pdf`

2. **Add to This Folder**
   - Place the `resume.pdf` file in this folder (`public/cv/`)
   - The file path should be: `/portfolio/public/cv/resume.pdf`

3. **Test the Download**
   - Click the "Download Resume" button on your portfolio
   - The file will download as `Ismail_Baoud_Resume.pdf`

## Customization

To change the downloaded filename, edit the `download` attribute in `HeroSection.tsx`:

```tsx
download="Your_Name_Resume.pdf"
```

## File Format

- **Recommended**: PDF format (`.pdf`)
- **Max Size**: Keep under 5MB for fast downloads
- **Name**: Must be exactly `resume.pdf` (or update the href in HeroSection.tsx)

## Alternative Formats

If you want to use a different format or name:
1. Update the `href` attribute in `HeroSection.tsx`
2. Example: `href="/cv/your-custom-name.pdf"`

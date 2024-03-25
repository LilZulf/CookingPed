const colors = {
  primary: '#FAC540',
  // secondary: '#6c757d',
  // ... definisi warna lainnya
  black: '#292526',
  grayText: '#878787'
};

const xmlIconButton: string = `
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="45" rx="22.5" fill="#FEFEFE"/>
<g clip-path="url(#clip0_16_2002)">
<path d="M15.1667 23H26.8334" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8333 28L26.8333 23" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8333 18L26.8333 23" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_16_2002">
<rect width="20" height="20" fill="white" transform="translate(11 13)"/>
</clipPath>
</defs>
</svg>

`;

const searchIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
<circle cx="8.80553" cy="8.80547" r="7.49047" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0153 14.4042L16.9519 17.3333" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const filterIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
<path d="M7.33014 12.5637H1.02942" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1405 3.47237H16.4412" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.72629 3.4216C5.72629 2.20631 4.66813 1.22089 3.36314 1.22089C2.05816 1.22089 1 2.20631 1 3.4216C1 4.63688 2.05816 5.62231 3.36314 5.62231C4.66813 5.62231 5.72629 4.63688 5.72629 3.4216Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 12.5269C17 11.3117 15.9426 10.3262 14.6376 10.3262C13.3318 10.3262 12.2737 11.3117 12.2737 12.5269C12.2737 13.7422 13.3318 14.7277 14.6376 14.7277C15.9426 14.7277 17 13.7422 17 12.5269Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const bookmarkWhite: string = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_23_2504)">
  <path d="M7.57572 3.18182H12.5757C13.0178 3.18182 13.4417 3.35742 13.7542 3.66998C14.0668 3.98254 14.2424 4.40646 14.2424 4.84849V16.5152L10.0757 14.0152L5.90906 16.5152V4.84849C5.90906 4.40646 6.08465 3.98254 6.39721 3.66998C6.70977 3.35742 7.1337 3.18182 7.57572 3.18182Z" fill="#FEFEFE" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_23_2504">
    <rect width="20" height="20" fill="white"/>
  </clipPath>
</defs>
</svg>`

const homeIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<g clip-path="url(#clip0_48_396)">
<path d="M24.25 10.8875L17.5837 5.7025C16.9987 5.24739 16.2787 5.00029 15.5375 5.00029C14.7963 5.00029 14.0762 5.24739 13.4912 5.7025L6.82373 10.8875C6.42303 11.1991 6.09884 11.5982 5.87592 12.0542C5.653 12.5102 5.53724 13.0112 5.53748 13.5188V22.5188C5.53748 23.1818 5.80087 23.8177 6.26971 24.2865C6.73855 24.7554 7.37443 25.0188 8.03748 25.0188H23.0375C23.7005 25.0188 24.3364 24.7554 24.8052 24.2865C25.2741 23.8177 25.5375 23.1818 25.5375 22.5188V13.5188C25.5375 12.49 25.0625 11.5188 24.25 10.8875Z" stroke="#BABABB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 18.75C17.7375 20.4163 13.26 20.4163 10.5 18.75" stroke="#BABABB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_48_396">
<rect width="30" height="30" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>`

const bookmarkIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<g clip-path="url(#clip0_28_2993)">
  <path d="M11.25 6.25H8.75C8.08696 6.25 7.45107 6.51339 6.98223 6.98223C6.51339 7.45107 6.25 8.08696 6.25 8.75V23.75C6.25 24.413 6.51339 25.0489 6.98223 25.5178C7.45107 25.9866 8.08696 26.25 8.75 26.25H21.25C21.913 26.25 22.5489 25.9866 23.0178 25.5178C23.4866 25.0489 23.75 24.413 23.75 23.75V8.75C23.75 8.08696 23.4866 7.45107 23.0178 6.98223C22.5489 6.51339 21.913 6.25 21.25 6.25H18.75" stroke="#BABABB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 6.25C11.25 5.58696 11.5134 4.95107 11.9822 4.48223C12.4511 4.01339 13.087 3.75 13.75 3.75H16.25C16.913 3.75 17.5489 4.01339 18.0178 4.48223C18.4866 4.95107 18.75 5.58696 18.75 6.25C18.75 6.91304 18.4866 7.54893 18.0178 8.01777C17.5489 8.48661 16.913 8.75 16.25 8.75H13.75C13.087 8.75 12.4511 8.48661 11.9822 8.01777C11.5134 7.54893 11.25 6.91304 11.25 6.25Z" stroke="#BABABB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 15H18.75" stroke="#BABABB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 20H18.75" stroke="#BABABB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_28_2993">
    <rect width="30" height="30" fill="white"/>
  </clipPath>
</defs>
</svg>`

const homeIconFocused: string = `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<g clip-path="url(#clip0_28_2980)">
  <path d="M24.25 10.8875L17.5837 5.7025C16.9987 5.24739 16.2787 5.00029 15.5375 5.00029C14.7963 5.00029 14.0762 5.24739 13.4912 5.7025L6.82373 10.8875C6.42303 11.1991 6.09884 11.5982 5.87592 12.0542C5.653 12.5102 5.53724 13.0112 5.53748 13.5188V22.5188C5.53748 23.1818 5.80087 23.8177 6.26971 24.2865C6.73855 24.7554 7.37443 25.0188 8.03748 25.0188H23.0375C23.7005 25.0188 24.3364 24.7554 24.8052 24.2865C25.2741 23.8177 25.5375 23.1818 25.5375 22.5188V13.5188C25.5375 12.49 25.0625 11.5188 24.25 10.8875Z" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.5 18.75C17.7375 20.4163 13.26 20.4163 10.5 18.75" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_28_2980">
    <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
  </clipPath>
</defs>
</svg>`

const bookmarkIconFocused: string = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<g clip-path="url(#clip0_48_409)">
  <path d="M11.25 6.25H8.75C8.08696 6.25 7.45107 6.51339 6.98223 6.98223C6.51339 7.45107 6.25 8.08696 6.25 8.75V23.75C6.25 24.413 6.51339 25.0489 6.98223 25.5178C7.45107 25.9866 8.08696 26.25 8.75 26.25H21.25C21.913 26.25 22.5489 25.9866 23.0178 25.5178C23.4866 25.0489 23.75 24.413 23.75 23.75V8.75C23.75 8.08696 23.4866 7.45107 23.0178 6.98223C22.5489 6.51339 21.913 6.25 21.25 6.25H18.75" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 6.25C11.25 5.58696 11.5134 4.95107 11.9822 4.48223C12.4511 4.01339 13.087 3.75 13.75 3.75H16.25C16.913 3.75 17.5489 4.01339 18.0178 4.48223C18.4866 4.95107 18.75 5.58696 18.75 6.25C18.75 6.91304 18.4866 7.54893 18.0178 8.01777C17.5489 8.48661 16.913 8.75 16.25 8.75H13.75C13.087 8.75 12.4511 8.48661 11.9822 8.01777C11.5134 7.54893 11.25 6.91304 11.25 6.25Z" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 15H18.75" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 20H18.75" stroke="#FAC540" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_48_409">
    <rect width="30" height="30" fill="white"/>
  </clipPath>
</defs>
</svg>`

const arrowBack = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.05 19.92L8.53005 13.4C7.76005 12.63 7.76005 11.37 8.53005 10.6L15.05 4.08002" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


export default {
  colors,
  xmlIconButton,
  searchIcon,
  filterIcon,
  bookmarkWhite,
  bookmarkIcon,
  homeIcon,
  homeIconFocused,
  bookmarkIconFocused,
  arrowBack
};
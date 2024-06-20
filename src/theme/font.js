import { fontBold, fontMedium, fontRegular, fontThin } from "@/assets/font";

// setting for performance by Otf type : url(${fontThinOtf}) format('opentype');
export const Poppins = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url(${fontThin}) format('woff'),

}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url(${fontRegular}) format('woff'),
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url(${fontMedium}) format('woff'),
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url(${fontBold}) format('woff'),
}
`;
